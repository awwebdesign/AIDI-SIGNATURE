/* AIDI, map proposals.

   One shared data layer (dealers + geocoded points + country outlines) drives
   all three variants. A and B draw their own SVG from the outlines, so they
   pull nothing from a third party; C hands the same points to Leaflet. */

(function () {
  'use strict';

  var COUNTRY_NAME = {
    be: 'België', nl: 'Nederland', de: 'Duitsland', fr: 'Frankrijk',
    gb: 'Groot-Brittannië', it: 'Italië', hu: 'Hongarije', hr: 'Kroatië',
    us: 'VS & Noord-Amerika', cz: 'Tsjechië & Slowakije', pl: 'Polen'
  };
  var ORDER = typeof COUNTRY_ORDER !== 'undefined'
    ? COUNTRY_ORDER : ['be', 'nl', 'de', 'fr', 'gb', 'it', 'hu', 'hr', 'us', 'cz', 'pl'];

  var geo = {}, outlines = {}, ready = false;

  function initMotionToggle() {
    var box = document.getElementById('forceMotion');
    if (!box) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      box.parentNode.title = 'Windows staat animaties uit; vink dit aan om ze toch te zien.';
    }
    box.addEventListener('change', function () {
      document.documentElement.setAttribute('data-motion', box.checked ? 'on' : 'off');
      document.querySelectorAll('.mk__svg').forEach(function (svg) {
        svg.classList.remove('is-in');
        void svg.offsetWidth;
        svg.classList.add('is-in');
      });
    });
    document.documentElement.setAttribute('data-motion', 'off');
  }

  /* -------------------------------------------------------- projection -- */
  /* Equirectangular with a cosine correction at the country's mid-latitude:
     accurate enough at this scale and needs no projection library. */

  function projector(rings, w, pad, maxRatio) {
    var minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
    rings.forEach(function (r) {
      r.forEach(function (p) {
        if (p[0] < minX) minX = p[0];
        if (p[0] > maxX) maxX = p[0];
        if (p[1] < minY) minY = p[1];
        if (p[1] > maxY) maxY = p[1];
      });
    });
    var k = Math.cos((minY + maxY) / 2 * Math.PI / 180);
    var sx = (maxX - minX) * k, sy = maxY - minY;
    /* The viewBox takes the country's own proportions, so a wide country such
       as Belgium is not framed in a tall box full of empty space. */
    var scale = (w - pad * 2) / sx;
    var h = sy * scale + pad * 2;
    if (maxRatio && h / w > maxRatio) {
      h = w * maxRatio;
      scale = (h - pad * 2) / sy;
    }
    var ox = (w - sx * scale) / 2, oy = (h - sy * scale) / 2;
    var fn = function (lon, lat) {
      return [ox + (lon - minX) * k * scale, oy + (maxY - lat) * scale];
    };
    fn.height = h;
    return fn;
  }

  function pathFor(rings, project) {
    return rings.map(function (r) {
      return 'M' + r.map(function (p) {
        var q = project(p[0], p[1]);
        return q[0].toFixed(1) + ' ' + q[1].toFixed(1);
      }).join('L') + 'Z';
    }).join('');
  }

  /* ------------------------------------------------------------- data -- */

  function dealersIn(code) {
    return DEALERS.filter(function (d) { return d.c === code && geo[d.name]; });
  }
  function unlocated(code) {
    return DEALERS.filter(function (d) { return d.c === code && !geo[d.name]; });
  }
  function countries() {
    return ORDER.filter(function (c) {
      return DEALERS.some(function (d) { return d.c === c; });
    });
  }

  function addressLine(d) {
    return [d.street, [d.zip, d.city].filter(Boolean).join(' ')].filter(Boolean).join(', ');
  }
  function linksFor(d) {
    var out = '';
    if (d.tel) out += '<a href="tel:' + d.tel.replace(/[^+\d]/g, '') + '">' + d.tel + '</a>';
    if (d.email) out += '<a href="mailto:' + d.email + '">' + d.email + '</a>';
    if (d.web) out += '<a href="' + d.web + '" target="_blank" rel="noopener noreferrer">Website</a>';
    return out;
  }

  /* ------------------------------------------------------------- tabs -- */

  function buildTabs(host, onPick) {
    var codes = countries();
    host.innerHTML = '';
    codes.forEach(function (c, i) {
      var n = DEALERS.filter(function (d) { return d.c === c; }).length;
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip mk__tab';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-selected', String(i === 0));
      b.dataset.c = c;
      b.innerHTML = COUNTRY_NAME[c] + ' <span class="mk__count">' + n + '</span>';
      b.addEventListener('click', function () {
        host.querySelectorAll('.mk__tab').forEach(function (t) {
          t.setAttribute('aria-selected', String(t === b));
        });
        onPick(c);
      });
      host.appendChild(b);
    });
    return codes[0];
  }

  /* ------------------------------------------------ shared SVG drawing -- */

  function drawMap(svg, tip, code, opts) {
    opts = opts || {};
    var rings = outlines[code];
    var list = dealersIn(code);
    svg.innerHTML = '';
    if (!rings) {
      svg.insertAdjacentHTML('beforeend',
        '<text x="50" y="50" text-anchor="middle" class="mk__none">Geen kaart beschikbaar</text>');
      return [];
    }

    var W = 100;
    var project = projector(rings, W, 4, opts.maxRatio || 0.9);
    var H = project.height;
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H.toFixed(1));

    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    var land = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    land.setAttribute('d', pathFor(rings, project));
    land.setAttribute('class', 'mk__land');
    g.appendChild(land);
    svg.appendChild(g);

    var dots = [];
    list.forEach(function (d, i) {
      var p = geo[d.name];
      var q = project(p.lon, p.lat);
      var a = document.createElementNS('http://www.w3.org/2000/svg', 'a');
      a.setAttribute('href', '#');
      a.setAttribute('class', 'mk__pin');
      a.dataset.name = d.name;
      a.style.setProperty('--i', i);

      var halo = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      halo.setAttribute('cx', q[0].toFixed(2));
      halo.setAttribute('cy', q[1].toFixed(2));
      halo.setAttribute('r', '2.4');
      halo.setAttribute('class', 'mk__halo');

      var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      c.setAttribute('cx', q[0].toFixed(2));
      c.setAttribute('cy', q[1].toFixed(2));
      c.setAttribute('r', '1.15');
      c.setAttribute('class', 'mk__dot');

      var t = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      t.textContent = d.name + ', ' + (d.city || '');

      a.appendChild(halo); a.appendChild(c); a.appendChild(t);
      a.addEventListener('click', function (e) { e.preventDefault(); });
      svg.appendChild(a);
      dots.push({ el: a, dealer: d, x: q[0], y: q[1], W: W, H: H });
    });

    /* Reveal the pins in a short cascade once the map is drawn. */
    requestAnimationFrame(function () { svg.classList.add('is-in'); });
    return dots;
  }

  function showTip(tip, dot) {
    if (!dot) { tip.hidden = true; return; }
    var d = dot.dealer;
    tip.hidden = false;
    tip.style.left = (dot.x / dot.W * 100) + '%';
    tip.style.top = (dot.y / dot.H * 100) + '%';
    tip.innerHTML = '<b>' + d.name + '</b><span>' + addressLine(d) + '</span>' +
      '<span class="mk__tiplinks">' + linksFor(d) + '</span>';
  }

  /* ============================================================ MAP A == */

  function initA() {
    var root = document.getElementById('mapA');
    if (!root) return;
    var svg = root.querySelector('.mk__svg');
    var tip = root.querySelector('.mk__tip');
    var listEl = root.querySelector('.mk__list');
    var dots = [];

    function render(code) {
      dots = drawMap(svg, tip, code, { maxRatio: 0.85 });
      tip.hidden = true;

      var located = dealersIn(code), rest = unlocated(code);
      var html = '<div class="mk__cards">';
      located.concat(rest).forEach(function (d) {
        html += '<article class="dealer mk__card" data-name="' + d.name.replace(/"/g, '&quot;') + '">' +
          '<h3>' + d.name + '</h3>' +
          (addressLine(d) ? '<address>' + addressLine(d) + '</address>' : '') +
          '<div class="dealer__links">' + linksFor(d) + '</div>' +
          (d.distributor ? '<span class="dealer__note">Invoerder</span>' : '') +
          '</article>';
      });
      html += '</div>';
      if (rest.length && !located.length) {
        html = '<p class="mk__note">Deze invoerder werkt zonder winkeladres, dus zonder stip op de kaart.</p>' + html;
      }
      listEl.innerHTML = html;

      dots.forEach(function (dot) {
        dot.el.addEventListener('mouseenter', function () { highlight(dot); });
        dot.el.addEventListener('focus', function () { highlight(dot); });
        dot.el.addEventListener('click', function () { highlight(dot); });
      });
      svg.addEventListener('mouseleave', function () { clearHi(); });
    }

    function highlight(dot) {
      dots.forEach(function (o) { o.el.classList.toggle('is-on', o === dot); });
      showTip(tip, dot);
      var card = listEl.querySelector('[data-name="' + dot.dealer.name.replace(/"/g, '&quot;') + '"]');
      listEl.querySelectorAll('.mk__card').forEach(function (c) { c.classList.remove('is-on'); });
      if (card) card.classList.add('is-on');
    }
    function clearHi() {
      dots.forEach(function (o) { o.el.classList.remove('is-on'); });
      listEl.querySelectorAll('.mk__card').forEach(function (c) { c.classList.remove('is-on'); });
      tip.hidden = true;
    }

    var first = buildTabs(root.querySelector('.mk__tabs'), render);
    render(first);
  }

  /* ============================================================ MAP B == */

  function initB() {
    var root = document.getElementById('mapB');
    if (!root) return;
    var svg = root.querySelector('.mk__svg');
    var tip = root.querySelector('.mk__tip');
    var scroll = root.querySelector('.mk__scroll');
    var input = root.querySelector('#mkq');
    var dots = [], code = 'be';

    function rows() {
      var located = dealersIn(code), rest = unlocated(code);
      scroll.innerHTML = located.concat(rest).map(function (d) {
        return '<button type="button" class="mk__row" data-name="' + d.name.replace(/"/g, '&quot;') + '">' +
          '<b>' + d.name + '</b>' +
          '<span>' + (addressLine(d) || 'Invoerder, geen winkeladres') + '</span>' +
          '</button>';
      }).join('') + '<p class="mk__empty" hidden>Niets gevonden in dit land.</p>';

      scroll.querySelectorAll('.mk__row').forEach(function (r) {
        r.addEventListener('mouseenter', function () { pick(r.dataset.name, false); });
        r.addEventListener('focus', function () { pick(r.dataset.name, false); });
        r.addEventListener('click', function () { pick(r.dataset.name, true); });
      });
    }

    function pick(name, lock) {
      var dot = null;
      dots.forEach(function (o) {
        var on = o.dealer.name === name;
        o.el.classList.toggle('is-on', on);
        if (on) dot = o;
      });
      scroll.querySelectorAll('.mk__row').forEach(function (r) {
        r.classList.toggle('is-on', r.dataset.name === name);
      });
      showTip(tip, dot);
      if (lock && dot) {
        var r = scroll.querySelector('.mk__row[data-name="' + name.replace(/"/g, '&quot;') + '"]');
        if (r) r.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }

    function render(c) {
      code = c;
      dots = drawMap(svg, tip, c, { maxRatio: 1.05 });
      tip.hidden = true;
      rows();
      filter();
      dots.forEach(function (dot) {
        dot.el.addEventListener('mouseenter', function () { pick(dot.dealer.name, true); });
        dot.el.addEventListener('focus', function () { pick(dot.dealer.name, true); });
        dot.el.addEventListener('click', function () { pick(dot.dealer.name, true); });
      });
    }

    function filter() {
      var q = (input.value || '').trim().toLowerCase();
      var shown = 0;
      scroll.querySelectorAll('.mk__row').forEach(function (r) {
        var ok = !q || r.textContent.toLowerCase().indexOf(q) !== -1;
        r.hidden = !ok;
        if (ok) shown++;
        var dot = dots.filter(function (o) { return o.dealer.name === r.dataset.name; })[0];
        if (dot) dot.el.classList.toggle('is-dim', !ok);
      });
      var empty = scroll.querySelector('.mk__empty');
      if (empty) empty.hidden = shown !== 0;
    }

    input.addEventListener('input', filter);
    var first = buildTabs(root.querySelector('.mk__tabs'), render);
    render(first);
  }

  /* ============================================================ MAP C == */

  function initC() {
    var root = document.getElementById('mapC');
    if (!root || typeof L === 'undefined') return;
    var host = document.getElementById('leafletMap');

    var map = L.map(host, { scrollWheelZoom: false });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var layer = L.layerGroup().addTo(map);

    function render(code) {
      layer.clearLayers();
      var list = dealersIn(code);
      if (!list.length) {
        map.setView([50.6, 4.5], 5);
        return;
      }
      var bounds = [];
      list.forEach(function (d) {
        var p = geo[d.name];
        var m = L.circleMarker([p.lat, p.lon], {
          radius: 7, weight: 2,
          color: '#ffffff',
          fillColor: '#2f6fe0',
          fillOpacity: 1
        }).addTo(layer);
        m.bindPopup(
          '<strong>' + d.name + '</strong><br>' + addressLine(d) +
          '<br><div class="mk__poplinks">' + linksFor(d) + '</div>'
        );
        bounds.push([p.lat, p.lon]);
      });
      map.fitBounds(bounds, { padding: [36, 36], maxZoom: 11 });
    }

    var first = buildTabs(root.querySelector('.mk__tabs'), render);
    render(first);
    setTimeout(function () { map.invalidateSize(); }, 200);
  }

  /* ------------------------------------------------------------- boot -- */

  Promise.all([
    fetch('assets/geo.json').then(function (r) { return r.json(); }),
    fetch('assets/maps.json').then(function (r) { return r.json(); })
  ]).then(function (res) {
    geo = res[0];
    outlines = res[1];
    ready = true;
    initMotionToggle();
    [initA, initB, initC].forEach(function (fn) {
      try { fn(); } catch (e) { console.warn('AIDI kaart: ' + fn.name, e); }
    });
  }).catch(function (e) {
    console.error('AIDI kaart: kon geo.json of maps.json niet laden', e);
  });
})();
