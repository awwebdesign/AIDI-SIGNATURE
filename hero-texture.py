"""Image quilting (Efros & Freeman 2001): grow a large seamless grain texture
from the 700x525 product photo at its native sharpness, so the hero never
has to upscale it. Development tool, like geocode.mjs.

Run:  python hero-texture.py assets/products/aidi-mix-3.jpg out.jpg 2560 1440
Needs Pillow and numpy."""
import sys
import numpy as np
from PIL import Image, ImageFilter

SRC, OUT = sys.argv[1], sys.argv[2]
W, H = int(sys.argv[3]), int(sys.argv[4])
SEED = int(sys.argv[5]) if len(sys.argv) > 5 else 7
P, O = 160, 44          # patch size, overlap (full res)
S = P - O
D = 4                   # downsample factor for candidate matching
STRIDE = 6              # candidate stride (full res)
rng = np.random.default_rng(SEED)

src = np.asarray(Image.open(SRC).convert('RGB'), dtype=np.float32)
pool = [src, src[:, ::-1], src[::-1, :], src[::-1, ::-1]]

def down(a):
    h, w = a.shape[0] // D * D, a.shape[1] // D * D
    return a[:h, :w].reshape(h // D, D, w // D, D, 3).mean(axis=(1, 3))

# Candidate patches: full-res origin + low-res copy for fast matching.
cands, lows = [], []
for k, img in enumerate(pool):
    lo = down(img)
    for y in range(0, img.shape[0] - P + 1, STRIDE):
        for x in range(0, img.shape[1] - P + 1, STRIDE):
            yl, xl = y // D, x // D
            pl = lo[yl:yl + P // D, xl:xl + P // D]
            if pl.shape[:2] != (P // D, P // D):
                continue
            cands.append((k, y, x))
            lows.append(pl)
lows = np.stack(lows)                      # N, p, p, 3
pd, od = P // D, O // D
print('candidates', len(cands))

nx = int(np.ceil((W - O) / S)); ny = int(np.ceil((H - O) / S))
OW, OH = nx * S + O, ny * S + O
out = np.zeros((OH, OW, 3), np.float32)

def min_cut(err):
    """err: (rows, O). Returns mask (rows, O) True where the NEW patch wins."""
    r, c = err.shape
    E = err.copy()
    for i in range(1, r):
        prev = E[i - 1]
        left = np.r_[np.inf, prev[:-1]]
        right = np.r_[prev[1:], np.inf]
        E[i] += np.minimum(np.minimum(left, prev), right)
    mask = np.zeros_like(err, bool)
    j = int(np.argmin(E[-1]))
    for i in range(r - 1, -1, -1):
        mask[i, j:] = True
        if i:
            lo, hi = max(j - 1, 0), min(j + 2, c)
            j = lo + int(np.argmin(E[i - 1, lo:hi]))
    return mask

for gy in range(ny):
    for gx in range(nx):
        y, x = gy * S, gx * S
        cost = np.zeros(len(cands), np.float32)
        if gx or gy:
            region = down(out[y:y + P, x:x + P])
            if gx:
                cost += ((lows[:, :, :od] - region[None, :, :od]) ** 2).sum(axis=(1, 2, 3))
            if gy:
                cost += ((lows[:, :od, :] - region[None, :od, :]) ** 2).sum(axis=(1, 2, 3))
            ok = np.flatnonzero(cost <= cost.min() * 1.12 + 1e-6)
            pick = rng.choice(ok)
        else:
            pick = rng.integers(len(cands))
        k, sy, sx = cands[pick]
        patch = pool[k][sy:sy + P, sx:sx + P]
        keep = np.ones((P, P), bool)
        cur = out[y:y + P, x:x + P]
        if gx:
            err = ((cur[:, :O] - patch[:, :O]) ** 2).sum(-1)
            keep[:, :O] &= min_cut(err)
        if gy:
            err = ((cur[:O, :] - patch[:O, :]) ** 2).sum(-1).T
            keep[:O, :] &= min_cut(err).T
        # Feather the seam by a couple of pixels so it never reads as a hard edge.
        m = Image.fromarray((keep * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.6))
        a = np.asarray(m, np.float32)[..., None] / 255.0
        if not (gx or gy):
            a[:] = 1.0
        out[y:y + P, x:x + P] = a * patch + (1 - a) * cur
    print('row', gy + 1, '/', ny, flush=True)

res = Image.fromarray(np.clip(out[:H, :W], 0, 255).astype(np.uint8))
res.save(OUT, quality=95)
print('saved', OUT, res.size)
