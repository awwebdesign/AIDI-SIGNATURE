/* AIDI, signature layer.
   Runs after script.js (which owns language, filters, search and the menu
   toggle). This file adds what makes the redesign: the grain sorter on the
   homepage, the season dial, the race map, smooth scrolling, the header that
   follows the tone of the section beneath it, and the text reveals.

   Motion plays for everyone, the same decision as script.js: ?motion=off
   previews the reduced treatment. */

(function () {
  'use strict';

  var html = document.documentElement;
  var page = document.body.getAttribute('data-page') || 'home';
  var CALM = html.getAttribute('data-motion') !== 'on' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var LOCALES = { nl: 'nl-BE', fr: 'fr-BE', en: 'en-GB', de: 'de-DE', 'zh-Hans': 'zh-Hans-CN' };

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function smooth(a, b, v) { var t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); }
  function easeInOut(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
  function locale() { return LOCALES[html.lang] || html.lang || 'nl-BE'; }
  function langKey() { return (html.lang || 'nl').slice(0, 2); }
  function t(path) {
    var dict = window.I18N && (I18N[langKey()] || I18N.nl);
    var v = path.split('.').reduce(function (o, k) { return o == null ? o : o[k]; }, dict);
    return typeof v === 'string' ? v : '';
  }
  /* rAF stops in a hidden tab; a timer keeps one-shot work from stalling. */
  function frame(fn) { var done = false; var run = function () { if (!done) { done = true; fn(); } };
    requestAnimationFrame(run); setTimeout(run, 120); }

  /* ------------------------------------------------------- smooth scroll -- */

  var lenis = null;
  function initLenis() {
    if (CALM || typeof window.Lenis !== 'function') return;
    lenis = new window.Lenis({ lerp: 0.1, smoothWheel: true });
    window.aidiLenis = lenis;
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    $$('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (id.length < 2) return;
        var target = document.getElementById(id.slice(1));
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: -80 });
      });
    });
  }

  /* ----------------------------------------------------- header + menu -- */

  function initHeaderTone() {
    var head = $('.masthead');
    if (!head) return;
    var zones = $$('main [data-tone], footer[data-tone]');
    var drawer = $('#drawer');

    function update() {
      if (drawer && !drawer.hidden) { head.setAttribute('data-tone', 'dark'); return; }
      var tone = 'light', bare = false;
      for (var i = 0; i < zones.length; i++) {
        var r = zones[i].getBoundingClientRect();
        if (r.top <= 36 && r.bottom > 36) {
          tone = zones[i].getAttribute('data-tone');
          bare = zones[i].hasAttribute('data-stage');
          break;
        }
      }
      head.setAttribute('data-tone', tone);
      head.setAttribute('data-bare', String(bare));
    }
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();

    if (drawer && 'MutationObserver' in window) {
      new MutationObserver(function () {
        var open = !drawer.hidden;
        document.body.classList.toggle('menu-open', open);
        if (lenis) { if (open) lenis.stop(); else lenis.start(); }
        update();
      }).observe(drawer, { attributes: true, attributeFilter: ['hidden'] });
    }
  }

  /* -------------------------------------------------------- text reveal -- */

  function splitWords(el) {
    var text = el.textContent;
    el.setAttribute('aria-label', text);
    el.textContent = '';
    text.split(/(\s+)/).forEach(function (part) {
      if (!part) return;
      if (/^\s+$/.test(part)) { el.appendChild(document.createTextNode(' ')); return; }
      var w = document.createElement('span');
      w.className = 'w';
      w.setAttribute('aria-hidden', 'true');
      var i = document.createElement('span');
      i.textContent = part;
      w.appendChild(i);
      el.appendChild(w);
    });
    $$('.w', el).forEach(function (w, n) { w.style.setProperty('--n', n); });
  }

  function initReveals() {
    /* Chinese has no spaces to split on: it rises as one line instead. */
    function split() {
      $$('[data-split]').forEach(function (el) {
        if (langKey() === 'zh') { el.removeAttribute('aria-label'); return; }
        splitWords(el);
      });
    }
    split();
    document.addEventListener('aidi:lang', function () {
      split();
      $$('[data-split]').forEach(function (el) { if (el.closest('.rv.in')) el.classList.add('in'); });
    });

    var sel = [
      '[data-split]', '.sec-lede', '.proof__title > span', '.rangerow', '.uitslag__row', '.ace',
      '.phase__name', '.team-band__photo', '.team-band__text > *', '.callcard', '.locator',
      '.stock__map', '.dial', '.foot__sign'
    ].join(',');
    var items = $$(sel).filter(function (el) { return !el.closest('.stage__hero'); });
    items.forEach(function (el) { el.classList.add('rv'); });

    /* Siblings in one list enter a beat apart. */
    $$('.uitslag__list, .aces__list, .range__list, .proof__title, .team-band__text, .team-band__calls').forEach(function (g) {
      $$('.rv', g).forEach(function (el, i) { el.style.setProperty('--d', Math.min(i * 60, 600) + 'ms'); });
    });

    if (!('IntersectionObserver' in window)) { items.forEach(function (el) { el.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    items.forEach(function (el) { io.observe(el); });

    /* If the observer never fires (headless render, hidden pane), release. */
    var probe = document.createElement('div');
    probe.style.cssText = 'position:fixed;top:40%;left:0;width:1px;height:1px;pointer-events:none';
    document.body.appendChild(probe);
    var works = false;
    var pio = new IntersectionObserver(function (es) { if (es.some(function (e) { return e.isIntersecting; })) works = true; });
    pio.observe(probe);
    setTimeout(function () { pio.disconnect(); probe.remove(); if (!works) items.forEach(function (el) { el.classList.add('in'); }); }, 1500);
    window.addEventListener('beforeprint', function () { items.forEach(function (el) { el.classList.add('in'); }); });
  }

  /* ------------------------------------------------------ grain sorter -- */
  /* One kilo of feed as 1,000 grains. Each grain is one gram. On arrival the
     grains are poured into a heap; scrolling sorts them into a 40 × 25 grid,
     column by column: fat, absorbable protein, the rest of the crude protein,
     carbohydrates, and the remainder (fibre, moisture, ash). */

  var CATS = ['fat', 'abs', 'pro', 'carb', 'rest'];
  var TONE = {
    fat:  ['#f6c45a', '#e2a12c', '#a8690f'],   // maize
    abs:  ['#dcef9f', '#b6d377', '#6f8f3c'],   // light pea
    pro:  ['#8fae66', '#617f3f', '#34481f'],   // dark pea
    carb: ['#f0dfbc', '#d6bc8d', '#9b7d4f'],   // wheat
    rest: ['#c98b6c', '#91563e', '#552c1e']    // dari
  };
  var SPR = 64;

  function makeSprite(cat) {
    var c = document.createElement('canvas');
    c.width = c.height = SPR;
    var g = c.getContext('2d');
    var k = TONE[cat];
    g.translate(SPR / 2, SPR / 2);
    var grad = g.createRadialGradient(-7, -9, 2, 0, 0, 30);
    grad.addColorStop(0, k[0]); grad.addColorStop(0.55, k[1]); grad.addColorStop(1, k[2]);
    g.fillStyle = grad;
    g.beginPath();
    if (cat === 'fat') {
      /* Maize kernel: broad crown, tapering to the tip. */
      g.moveTo(-17, -15);
      g.bezierCurveTo(-12, -24, 12, -24, 17, -15);
      g.bezierCurveTo(20, -4, 10, 14, 3, 22);
      g.bezierCurveTo(1, 25, -1, 25, -3, 22);
      g.bezierCurveTo(-10, 14, -20, -4, -17, -15);
    } else if (cat === 'carb') {
      g.ellipse(0, 0, 11, 23, 0, 0, Math.PI * 2);
    } else if (cat === 'rest') {
      g.arc(0, 0, 14, 0, Math.PI * 2);
    } else {
      g.arc(0, 0, 18, 0, Math.PI * 2);
    }
    g.fill();
    if (cat === 'carb') {
      g.strokeStyle = 'rgba(90,64,30,.45)'; g.lineWidth = 2;
      g.beginPath(); g.moveTo(0, -17); g.quadraticCurveTo(2.5, 0, 0, 17); g.stroke();
    }
    if (cat === 'fat') {
      g.fillStyle = 'rgba(255,240,200,.55)';
      g.beginPath(); g.ellipse(0, 6, 5, 9, 0, 0, Math.PI * 2); g.fill();
    }
    /* Specular dot. */
    g.fillStyle = 'rgba(255,255,255,.35)';
    g.beginPath(); g.ellipse(-6, -8, 4, 2.6, -0.6, 0, Math.PI * 2); g.fill();
    return c;
  }

  /* Deterministic random so the heap is the same on every visit. */
  function rng(seed) { return function () { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }; }

  function initGrain() {
    var stage = $('[data-stage]');
    if (!stage) return;
    var canvas = $('.stage__canvas', stage);
    var ctx = canvas.getContext('2d');
    var sticky = $('.stage__sticky', stage);
    var hero = $('[data-hero]', stage);
    var sort = $('[data-sort]', stage);
    var slot = $('[data-slot]', stage);
    var mixes = JSON.parse($('#mix-data').textContent);
    var bySlug = {}; mixes.forEach(function (m) { bySlug[m.slug] = m; });
    var sprites = {}; CATS.forEach(function (c) { sprites[c] = makeSprite(c); });
    html.classList.add('grain-on');

    var N = 1000, COLS = 40, ROWS = 25;
    var rand = rng(20220704);
    var grains = [];
    for (var i = 0; i < N; i++) {
      grains.push({
        cat: 'carb', from: 'carb', mixT: 1,
        cell: i, prevCell: i,
        u: rand(), v: rand(), w: rand(), rot: rand() * Math.PI * 2, jit: (rand() - 0.5) * 0.5,
        size: 0.8 + rand() * 0.4, lift: 0.4 + rand() * 0.6,
        drop: rand(), ox: 0, oy: 0, hop: 0
      });
    }

    var W = 0, H = 0, dpr = 1, cell = 10, gx = 0, gy = 0, heapSize = 14;
    var progress = 0, introStart = 0, mixStart = -1, highlight = null, hl = 0;
    var pointer = { x: -9999, y: -9999, on: false };
    var current = 'aidi-mix-3';

    function assign(slug, animate) {
      var g = bySlug[slug].g;
      var want = CATS.map(function (c) { return g[c]; });
      /* Keep grains in their category where possible, so a change of mix
         moves only what has to move. */
      var buckets = {}; CATS.forEach(function (c) { buckets[c] = []; });
      grains.slice().sort(function (a, b) { return a.cell - b.cell; })
        .forEach(function (gr) { buckets[gr.cat].push(gr); });
      var free = [];
      CATS.forEach(function (c, ci) {
        var b = buckets[c];
        while (b.length > want[ci]) free.push(b.pop());
      });
      CATS.forEach(function (c, ci) {
        var b = buckets[c];
        while (b.length < want[ci]) b.push(free.shift());
      });
      var idx = 0;
      CATS.forEach(function (c) {
        buckets[c].sort(function (a, b) { return a.cell - b.cell; }).forEach(function (gr) {
          gr.from = animate ? gr.cat : c;
          gr.cat = c;
          gr.prevCell = animate ? gr.cell : idx;
          gr.cell = idx++;
        });
      });
      if (animate) mixStart = performance.now();
    }
    assign(current, false);

    function cellPos(n) {
      var col = Math.floor(n / ROWS), row = n % ROWS;
      return [gx + (col + 0.5) * cell, gy + (row + 0.5) * cell];
    }

    function heapPos(gr) {
      /* A poured dune, deepest a little right of centre. */
      var x = gr.u * W;
      var bump = Math.exp(-Math.pow((gr.u - 0.3) / 0.3, 2));
      var depth = H * (W < 700 ? 0.22 + 0.12 * bump : 0.13 + 0.24 * bump);
      var y = H - depth * Math.pow(gr.v, 1.5) - heapSize * 0.3;
      return [x, y];
    }

    function measure() {
      var r = sticky.getBoundingClientRect();
      W = r.width; H = r.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
      heapSize = clamp(W / 78, 9, 19);
      var s = slot.getBoundingClientRect();
      cell = Math.min(s.width / COLS, s.height / ROWS);
      gx = s.left - r.left + (s.width - cell * COLS) / 2;
      gy = s.top - r.top + (s.height - cell * ROWS) / 2;
      dirty = true;
    }

    function readProgress() {
      var r = stage.getBoundingClientRect();
      var span = stage.offsetHeight - window.innerHeight;
      progress = span > 0 ? clamp(-r.top / span, 0, 1) : 1;
    }

    var dirty = true, running = false, lastP = -1;

    function draw(now) {
      var intro = CALM ? 1 : clamp((now - introStart) / 2200, 0, 1);
      var m = smooth(0.12, 0.6, progress);
      var mixT = mixStart < 0 ? 1 : clamp((now - mixStart) / 1100, 0, 1);
      if (mixT >= 1) mixStart = -1;
      hl = lerp(hl, highlight ? 1 : 0, 0.18);

      /* Text layers follow the same clock as the grains. */
      var heroOut = smooth(0.04, 0.2, progress);
      hero.style.opacity = String(1 - heroOut);
      hero.style.transform = 'translate3d(0,' + (-heroOut * 40).toFixed(1) + 'px,0)';
      var sortIn = smooth(0.42, 0.62, progress);
      sort.style.opacity = String(sortIn);
      sort.style.transform = 'translate3d(0,' + ((1 - sortIn) * 24).toFixed(1) + 'px,0)';
      sort.classList.toggle('is-live', sortIn > 0.6);

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      var push = pointer.on && m < 0.05;
      for (var i = 0; i < N; i++) {
        var gr = grains[i];
        var hp = heapPos(gr);
        var hx = hp[0], hy = hp[1];

        /* Pour: each grain drops in from above on its own beat. */
        if (intro < 1) {
          var start = gr.drop * 0.55;
          var k = easeOut(clamp((intro - start) / 0.45, 0, 1));
          hy = lerp(-H * (0.1 + gr.w * 0.6), hy, k);
          hx = lerp(hx + (gr.w - 0.5) * 80, hx, k);
        }

        /* A hand through the grain: the heap parts around the pointer. */
        var tx = 0, ty = 0;
        if (push) {
          var dx = hx - pointer.x, dy = hy - pointer.y, d2 = dx * dx + dy * dy, R = 110;
          if (d2 < R * R) { var d = Math.sqrt(d2) || 1; var f = (1 - d / R) * 34; tx = dx / d * f; ty = dy / d * f; }
        }
        gr.ox = lerp(gr.ox, tx, 0.14); gr.oy = lerp(gr.oy, ty, 0.14);

        /* Sorting sweep: left columns land first. */
        var col = Math.floor(gr.cell / ROWS);
        var delay = (col / COLS) * 0.45 + gr.w * 0.15;
        var lt = easeInOut(clamp((m - delay) / 0.4, 0, 1));

        var cp = cellPos(gr.cell);
        var cx = cp[0], cy = cp[1], lift = 0;
        if (mixT < 1) {
          var pc = cellPos(gr.prevCell);
          var mdelay = (Math.floor(gr.cell / ROWS) / COLS) * 0.35;
          var mt = easeInOut(clamp((mixT - mdelay) / 0.65, 0, 1));
          cx = lerp(pc[0], cp[0], mt); cy = lerp(pc[1], cp[1], mt);
          if (!CALM) lift = Math.sin(mt * Math.PI) * cell * (gr.from !== gr.cat ? 3.2 : 0.9) * gr.lift;
          gr.mixT = mt;
        } else gr.mixT = 1;

        var x = lerp(hx + gr.ox, cx, lt);
        var y = lerp(hy + gr.oy, cy, lt) - lift - (CALM ? 0 : Math.sin(lt * Math.PI) * H * 0.08 * gr.lift);
        var rot = lerp(gr.rot, gr.jit, lt);
        var size = lerp(heapSize * gr.size, cell * 0.92, lt);
        var sc = size / 34;

        var alpha = 1;
        if (hl > 0.01 && lt > 0.9) alpha = gr.cat === highlight ? 1 : 1 - 0.75 * hl;

        var cos = Math.cos(rot) * sc * dpr, sin = Math.sin(rot) * sc * dpr;
        ctx.setTransform(cos, sin, -sin, cos, x * dpr, y * dpr);
        if (gr.mixT < 1 && gr.from !== gr.cat) {
          ctx.globalAlpha = alpha * (1 - gr.mixT);
          ctx.drawImage(sprites[gr.from], -SPR / 2, -SPR / 2);
          ctx.globalAlpha = alpha * gr.mixT;
        } else ctx.globalAlpha = alpha;
        ctx.drawImage(sprites[gr.cat], -SPR / 2, -SPR / 2);
      }
      ctx.globalAlpha = 1;

      var busy = intro < 1 || mixStart >= 0 || Math.abs(hl - (highlight ? 1 : 0)) > 0.01 || push ||
        grains.some(function (g) { return Math.abs(g.ox) > 0.3 || Math.abs(g.oy) > 0.3; });
      return busy;
    }

    function loop(now) {
      readProgress();
      var busy = draw(now);
      if (busy || dirty || progress !== lastP) {
        lastP = progress; dirty = false;
        requestAnimationFrame(loop);
      } else running = false;
    }
    function kick() { if (!running) { running = true; requestAnimationFrame(loop); } }

    window.addEventListener('scroll', function () { readProgress(); kick(); }, { passive: true });
    window.addEventListener('resize', function () { measure(); kick(); });
    sticky.addEventListener('pointermove', function (e) {
      if (e.pointerType !== 'mouse') return;
      var r = sticky.getBoundingClientRect();
      pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top; pointer.on = true; kick();
    });
    sticky.addEventListener('pointerleave', function () { pointer.on = false; kick(); });

    /* Legend: hover or focus a nutrient to pick its grains out. */
    $$('.legend__row', sort).forEach(function (row) {
      row.tabIndex = 0;
      var on = function () { highlight = row.getAttribute('data-cat'); kick(); };
      var off = function () { highlight = null; kick(); };
      row.addEventListener('mouseenter', on); row.addEventListener('mouseleave', off);
      row.addEventListener('focus', on); row.addEventListener('blur', off);
    });

    /* Mixture tabs, with arrow-key movement per the tabs pattern. */
    var tabs = $$('.mixtab', sort);
    var link = $('[data-mix-link]', sort);
    var kcal = $('[data-kcal]', sort);
    function select(tab, focus) {
      var slug = tab.getAttribute('data-mix');
      tabs.forEach(function (b) {
        var on = b === tab;
        b.setAttribute('aria-selected', String(on));
        b.tabIndex = on ? 0 : -1;
      });
      if (focus) tab.focus();
      if (slug === current) return;
      current = slug;
      var mx = bySlug[slug];
      assign(slug, true);
      CATS.forEach(function (c) {
        var el = $('[data-leg="' + c + '"]', sort);
        if (el) countTo(el, mx.g[c], 0);
      });
      if (kcal) { kcal.setAttribute('data-num', mx.kcal); countTo(kcal, mx.kcal, 0); }
      if (link) link.href = 'voeders.html#' + slug;
      kick();
    }
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(tab, false); });
      tab.addEventListener('keydown', function (e) {
        var j = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
        if (e.key === 'Home') j = 0;
        if (e.key === 'End') j = tabs.length - 1;
        if (j === null) return;
        e.preventDefault();
        select(tabs[(j + tabs.length) % tabs.length], true);
      });
    });

    function start() {
      measure(); readProgress();
      introStart = performance.now();
      kick();
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { measure(); kick(); });
    start();
    /* A stage that is never painted (hidden pane, print) still gets a frame. */
    setTimeout(function () { if (!running) { readProgress(); draw(performance.now() + 5000); } }, 400);
    window.addEventListener('beforeprint', function () { draw(performance.now() + 5000); });
  }

  function countTo(el, to, dec) {
    var from = parseFloat(el.getAttribute('data-from') || el.getAttribute('data-num') || el.textContent) || 0;
    el.setAttribute('data-from', to);
    var fmt = new Intl.NumberFormat(locale(), { minimumFractionDigits: dec, maximumFractionDigits: dec });
    if (CALM) { el.textContent = fmt.format(to); return; }
    var t0 = performance.now();
    (function step(now) {
      var k = easeOut(clamp((now - t0) / 700, 0, 1));
      el.textContent = fmt.format(lerp(from, to, k));
      if (k < 1) requestAnimationFrame(step);
    })(t0);
    setTimeout(function () { el.textContent = fmt.format(to); }, 900);
  }

  /* -------------------------------------------------------- season dial -- */

  var SPAN = { kweek: [0, 90], vlucht: [90, 227], rui: [227, 304], winter: [304, 365] };

  function initDial() {
    var dial = $('[data-dial]');
    if (!dial) return;
    var needle = $('[data-needle]', dial);
    var now = new Date();
    var doy = Math.floor((now - new Date(now.getFullYear(), 0, 1)) / 864e5);
    var today = 'winter';
    Object.keys(SPAN).forEach(function (k) { if (doy >= SPAN[k][0] && doy < SPAN[k][1]) today = k; });
    var selected = today;
    var angle = doy / 365 * 360;

    function label() {
      var d = $('[data-today]', dial);
      try { d.textContent = new Intl.DateTimeFormat(locale(), { day: 'numeric', month: 'long' }).format(now); }
      catch (e) { d.textContent = now.toLocaleDateString(); }
      $$('[data-month]', dial).forEach(function (m) {
        try {
          var s = new Intl.DateTimeFormat(locale(), { month: 'narrow' }).format(new Date(2026, +m.getAttribute('data-month'), 15));
          m.textContent = s.length > 2 ? s.slice(0, 1) : s;
        } catch (e) {}
      });
      var btn = $('.phasetab[data-phase="' + selected + '"]', dial);
      $('[data-dial-phase]', dial).textContent = btn ? btn.textContent : '';
    }

    function show(ph) {
      selected = ph;
      $$('.phasetab', dial).forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.getAttribute('data-phase') === ph));
        b.classList.toggle('is-today', b.getAttribute('data-phase') === today);
      });
      $$('.dial__arc', dial).forEach(function (a) { a.classList.toggle('is-on', a.getAttribute('data-phase') === ph); });
      $$('[data-phase-panel]').forEach(function (p) { p.hidden = p.getAttribute('data-phase-panel') !== ph; });
      label();
    }

    $$('.phasetab', dial).forEach(function (b) { b.addEventListener('click', function () { show(b.getAttribute('data-phase')); }); });
    $$('.dial__arc', dial).forEach(function (a) { a.addEventListener('click', function () { show(a.getAttribute('data-phase')); }); });
    document.addEventListener('aidi:lang', label);
    show(today);

    /* The needle sweeps from 1 January to today when the dial arrives. */
    function setNeedle(a) { needle.setAttribute('transform', 'rotate(' + a.toFixed(2) + ' 200 200)'); }
    if (CALM || !('IntersectionObserver' in window)) { setNeedle(angle); return; }
    setNeedle(0);
    var swept = false;
    function sweep() {
      if (swept) return; swept = true;
      var t0 = performance.now();
      (function step(n) {
        var k = easeInOut(clamp((n - t0) / 1600, 0, 1));
        setNeedle(angle * k);
        if (k < 1) requestAnimationFrame(step);
      })(t0);
      setTimeout(function () { setNeedle(angle); }, 1900);
    }
    var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { sweep(); io.disconnect(); } }, { threshold: 0.35 });
    io.observe(dial);
    setTimeout(function () { if (!swept && dial.getBoundingClientRect().top < window.innerHeight) sweep(); }, 1600);
  }

  /* ----------------------------------------------------------- race map -- */

  function initRaceMap() {
    var fig = $('[data-race-map]');
    if (!fig) return;
    var svg = $('svg', fig);
    function activate(id) { svg.setAttribute('data-active', id || ''); }
    $$('.uitslag__row').forEach(function (row) {
      row.tabIndex = 0;
      var id = row.getAttribute('data-route');
      row.addEventListener('mouseenter', function () { activate(id); });
      row.addEventListener('focus', function () { activate(id); });
      row.addEventListener('mouseleave', function () { activate(''); });
      row.addEventListener('blur', function () { activate(''); });
    });
    $$('.route', svg).forEach(function (g) {
      g.addEventListener('mouseenter', function () { activate(g.getAttribute('data-route')); });
      g.addEventListener('mouseleave', function () { activate(''); });
    });
    drawOnView(fig, 'is-drawn');
    var dm = $('[data-dealer-map]');
    if (dm) drawOnView(dm, 'is-drawn');
  }

  function drawOnView(el, cls) {
    if (CALM || !('IntersectionObserver' in window)) { el.classList.add(cls); return; }
    el.classList.add('will-draw');
    var io = new IntersectionObserver(function (es) {
      if (es[0].isIntersecting) { el.classList.add(cls); io.disconnect(); }
    }, { threshold: 0.25 });
    io.observe(el);
    setTimeout(function () { if (el.getBoundingClientRect().top < window.innerHeight * 0.9) el.classList.add(cls); }, 1600);
  }

  /* -------------------------------------------------------- range hover -- */

  function initRangeFloat() {
    var float = $('.range__float');
    if (!float || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    var img = $('img', float);
    var x = 0, y = 0, cx = 0, cy = 0, active = false, raf = 0;
    function tick() {
      cx = lerp(cx, x, 0.16); cy = lerp(cy, y, 0.16);
      float.style.transform = 'translate3d(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px,0) translate(-50%,-50%)';
      if (active || Math.abs(cx - x) > 0.5) raf = requestAnimationFrame(tick); else raf = 0;
    }
    $$('.rangerow').forEach(function (row) {
      row.addEventListener('mouseenter', function (e) {
        img.src = row.getAttribute('data-img');
        if (!active) { cx = x = e.clientX; cy = y = e.clientY; }
        active = true; float.classList.add('is-on');
        if (!raf) raf = requestAnimationFrame(tick);
      });
      row.addEventListener('mousemove', function (e) { x = e.clientX; y = e.clientY; });
      row.addEventListener('mouseleave', function () { active = false; float.classList.remove('is-on'); });
    });
  }

  /* --------------------------------------------- stockist query from home -- */

  function initDealerQuery() {
    if (page !== 'verkooppunten') return;
    var q = new URLSearchParams(location.search).get('q');
    var input = $('[data-dealer-search]');
    if (!q || !input) return;
    input.value = q;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    frame(function () { input.scrollIntoView({ block: 'center' }); });
  }

  /* --------------------------------------------------------------- boot -- */

  function boot() {
    [initLenis, initHeaderTone, initReveals, initGrain, initDial, initRaceMap, initRangeFloat, initDealerQuery]
      .forEach(function (fn) {
        try { fn(); } catch (e) { if (window.console) console.warn('AIDI signature: ' + fn.name + ' failed', e); }
      });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
