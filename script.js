/* AIDI runtime.
   Pages ship with Dutch already in the markup, so the site is complete with
   JavaScript disabled and fully indexable. This script switches language,
   drives navigation, and adds the filtering, sorting and search that turn a
   product list into something a fancier can actually use. */

(function () {
  'use strict';

  var STORE_KEY = 'aidi.lang';
  var BASE = 'nl';
  var LOCALES = { nl: 'nl-BE', fr: 'fr-BE', en: 'en-GB', de: 'de-DE', zh: 'zh-Hans-CN' };
  var html = document.documentElement;
  var page = document.body.getAttribute('data-page') || 'home';
  var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  /* The entrance animations play for everyone, including Windows machines
     with "animation effects" switched off, which report reduced motion and
     would otherwise never see them. Open any page with ?motion=off to preview
     the reduced treatment (?motion=on to undo). */
  var forceMotion = true;
  var mq = /[?&]motion=(on|off)/.exec(location.search);
  if (mq) forceMotion = mq[1] === 'on';
  try {
    if (mq) sessionStorage.setItem('aidi.motion', mq[1]);
    else forceMotion = sessionStorage.getItem('aidi.motion') !== 'off';
  } catch (e) {}
  if (forceMotion) html.setAttribute('data-motion', 'on');
  var reduced = {
    get matches() { return motionQuery.matches && !forceMotion; },
    addEventListener: function (t, fn) { motionQuery.addEventListener(t, fn); }
  };

  /* ------------------------------------------------------------ helpers -- */

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function lookup(dict, path) {
    var parts = path.split('.');
    var node = dict;
    for (var i = 0; i < parts.length; i++) {
      if (node == null) return undefined;
      node = node[parts[i]];
    }
    return node;
  }

  var current = BASE;

  function t(path) {
    var v = lookup(I18N[current], path);
    if (v === undefined) v = lookup(I18N[BASE], path);
    return v === undefined ? '' : v;
  }

  function storedLang() {
    var saved;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) { saved = null; }
    if (saved && I18N[saved]) return saved;
    var nav = (navigator.languages || [navigator.language || ''])[0] || '';
    nav = nav.toLowerCase();
    for (var i = 0; i < LANGS.length; i++) {
      if (nav.indexOf(LANGS[i].code) === 0) return LANGS[i].code;
    }
    if (nav.indexOf('zh') === 0) return 'zh';
    return BASE;
  }

  function debounce(fn, wait) {
    var id;
    return function () {
      var args = arguments, self = this;
      clearTimeout(id);
      id = setTimeout(function () { fn.apply(self, args); }, wait);
    };
  }

  function fmt(value, dec) {
    try {
      return new Intl.NumberFormat(LOCALES[current] || current, {
        minimumFractionDigits: dec, maximumFractionDigits: dec
      }).format(value);
    } catch (e) {
      return String(value);
    }
  }

  /* ------------------------------------------------------- translation -- */

  function applyLang(code, persist) {
    /* A language whose data did not load must not silently render as Dutch:
       that looks like a broken switcher rather than a missing file. Say so,
       and leave the page on the language it is already showing. */
    if (!I18N[code]) {
      if (window.console && console.error) {
        console.error('AIDI: translations for "' + code + '" are not loaded. ' +
          'i18n.js may be cached or incomplete. Reload bypassing the cache.');
      }
      return;
    }
    current = code;
    var meta = null;
    for (var i = 0; i < LANGS.length; i++) if (LANGS[i].code === code) meta = LANGS[i];
    html.setAttribute('lang', meta ? meta.html : code);

    var title = t(page + '.title');
    if (title) document.title = title;
    var desc = document.querySelector('meta[name="description"]');
    var descText = t(page + '.meta');
    if (desc && descText) desc.setAttribute('content', descText);

    $$('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (typeof v === 'string') el.textContent = v;
    });

    $$('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split('|').forEach(function (pair) {
        var bits = pair.split(':');
        var v = t(bits[1]);
        if (typeof v === 'string') el.setAttribute(bits[0], v);
      });
    });

    /* Repeated blocks: paragraphs and usage bullets differ in count between
       languages, so they are rebuilt rather than mapped one-to-one. */
    $$('[data-i18n-paras]').forEach(function (el) {
      var list = t(el.getAttribute('data-i18n-paras'));
      if (!Array.isArray(list)) return;
      el.textContent = '';
      list.forEach(function (text) {
        var p = document.createElement('p');
        p.textContent = text;
        el.appendChild(p);
      });
    });

    $$('[data-i18n-items]').forEach(function (el) {
      var list = t(el.getAttribute('data-i18n-items'));
      if (!Array.isArray(list)) return;
      var block = el.closest('[data-usage-block]');
      if (block) block.hidden = list.length === 0;
      el.textContent = '';
      list.forEach(function (text) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(text));
        el.appendChild(li);
      });
    });

    /* Figures are written into the markup with a Dutch decimal comma; each
       carries its raw value so it can be re-formatted for the active locale. */
    var locale = LOCALES[code] || code;
    $$('[data-num]').forEach(function (el) {
      var value = parseFloat(el.getAttribute('data-num'));
      var dec = parseInt(el.getAttribute('data-dec') || '1', 10);
      if (isNaN(value)) return;
      try {
        el.textContent = new Intl.NumberFormat(locale, {
          minimumFractionDigits: dec, maximumFractionDigits: dec
        }).format(value);
      } catch (e) { /* keep the value already in the markup */ }
    });

    $$('.lang__option').forEach(function (b) {
      b.setAttribute('aria-current', String(b.getAttribute('data-lang') === code));
    });
    var badge = $('.lang__current');
    if (badge) badge.textContent = code.toUpperCase();

    if (persist) { try { localStorage.setItem(STORE_KEY, code); } catch (e) {} }

    $$('[data-count]').forEach(function (el) {
      var v = parseFloat(el.getAttribute('data-count'));
      var d = parseInt(el.getAttribute('data-dec') || '0', 10);
      if (!isNaN(v)) el.textContent = fmt(v, d);
    });

    document.dispatchEvent(new CustomEvent('aidi:lang', { detail: { lang: code } }));
  }

  /* ------------------------------------------------------------- header -- */

  function initHeader() {
    var head = $('.masthead');
    if (!head) return;

    /* Set directly rather than inside requestAnimationFrame: rAF does not run
       in a hidden tab, which would leave the header stuck in its last state. */
    var stuck = null;
    function onScroll() {
      var now = window.scrollY > 12;
      if (now === stuck) return;
      stuck = now;
      head.setAttribute('data-stuck', String(now));
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', onScroll);
    onScroll();

    var burger = $('.burger');
    var drawer = $('.drawer');
    if (burger && drawer) {
      var setDrawer = function (open) {
        burger.setAttribute('aria-expanded', String(open));
        drawer.hidden = !open;
        document.body.style.overflow = open ? 'hidden' : '';
        burger.setAttribute('aria-label', open ? t('ui.close') : t('ui.menu'));
      };
      burger.addEventListener('click', function () {
        setDrawer(burger.getAttribute('aria-expanded') !== 'true');
      });
      $$('.drawer__link', drawer).forEach(function (a) {
        a.addEventListener('click', function () { setDrawer(false); });
      });
      window.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
          setDrawer(false);
          burger.focus();
        }
      });
      /* The signature menu is full-screen at every width, so it no longer
         closes itself when the window grows past the old desktop nav. */
    }
  }

  /* ---------------------------------------------------- language switch -- */

  function initLangMenu() {
    /* Never offer a language whose data is absent, a button that appears to
       do nothing is worse than one that is not there. */
    $$('.lang__option').forEach(function (b) {
      if (!I18N[b.getAttribute('data-lang')]) b.remove();
    });

    $$('.lang').forEach(function (root) {
      var toggle = $('.lang__toggle', root);
      var menu = $('.lang__menu', root);
      if (!toggle || !menu) return;

      var open = function (state) {
        toggle.setAttribute('aria-expanded', String(state));
        menu.hidden = !state;
        if (state) {
          var sel = $('.lang__option[aria-current="true"]', menu) || $('.lang__option', menu);
          if (sel) sel.focus();
        }
      };

      toggle.addEventListener('click', function () {
        open(toggle.getAttribute('aria-expanded') !== 'true');
      });

      menu.addEventListener('click', function (e) {
        var btn = e.target.closest('.lang__option');
        if (!btn) return;
        applyLang(btn.getAttribute('data-lang'), true);
        open(false);
        toggle.focus();
      });

      menu.addEventListener('keydown', function (e) {
        var items = $$('.lang__option', menu);
        var i = items.indexOf(document.activeElement);
        if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length].focus(); }
        if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
          open(false);
          toggle.focus();
        }
      });

      document.addEventListener('click', function (e) {
        if (!root.contains(e.target) && toggle.getAttribute('aria-expanded') === 'true') open(false);
      });
    });
  }

  /* ------------------------------------------------------ hero arrival -- */
  /* Arm and release in the same frame budget: the hero is only held back
     once script.js is running, and a timer plus beforeprint guarantee the
     held state comes off even if something later throws. */

  function initHero() {
    var hero = $('.hero');
    if (!hero) return;

    hero.classList.add('is-armed');
    var release = function () {
      if (hero.classList.contains('anim-in')) return;
      hero.classList.add('anim-in');
      hero.classList.remove('is-armed');
      setTimeout(function () { countFacts(hero); }, 380);
      var track = $('.hero-grain__macro .macro__track', hero);
      if (track && !reduced.matches && track.animate) {
        var draw = track.animate([
          { clipPath: 'inset(0 100% 0 0 round 99px)' },
          { clipPath: 'inset(0 0 0 0 round 99px)' }
        ], { duration: 1100, delay: 520, easing: 'cubic-bezier(0.16,1,0.3,1)', fill: 'backwards' });
        window.addEventListener('beforeprint', function () { draw.cancel(); });
        reduced.addEventListener('change', function (event) { if (event.matches) draw.cancel(); });
      }
    };
    requestAnimationFrame(function () { requestAnimationFrame(release); });
    /* If rAF never runs (hidden tab, headless render) nothing stays hidden. */
    setTimeout(release, 1200);
    window.addEventListener('beforeprint', release);
  }

  function countFacts(scope) {
    $$('[data-count]', scope).forEach(function (el) {
      var target = parseFloat(el.getAttribute('data-count'));
      var dec = parseInt(el.getAttribute('data-dec') || '0', 10);
      if (isNaN(target)) return;
      if (reduced.matches) { el.textContent = fmt(target, dec); return; }

      var begun = null, dur = 1100;
      function step(now) {
        if (reduced.matches || document.hidden) { el.textContent = fmt(target, dec); return; }
        if (begun === null) begun = now;
        var p = Math.min((now - begun) / dur, 1);
        el.textContent = fmt(target * (1 - Math.pow(1 - p, 5)), dec);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = fmt(target, dec);
      }
      requestAnimationFrame(step);
    });
  }

  /* ---------------------------------------------------------- analyser -- */
  /* The hero readout. It advances on its own so a visitor sees the range
     without having to discover a control, and the tab strip doubles as a
     progress bar so the rotation is legible rather than mysterious. Clicking
     a tab hands control to the visitor and stops the rotation for good, which
     is also the pause mechanism WCAG 2.2.2 asks for. */

  var ROTATE_MS = 2900;
  var ROTATE_MS_CALM = 3600;

  function rotateMs() { return reduced.matches ? ROTATE_MS_CALM : ROTATE_MS; }

  function initAnalyser() {
    var root = $('.analyser');
    if (!root || typeof FEEDS === 'undefined') return;

    var order = FEEDS.slice();
    var START = Math.max(0, order.findIndex(function (f) { return f.slug === 'aidi-mix-3'; }));

    var img = $('.analyser__figure img:not(.analyser__next)', root);
    var nextImg = $('.analyser__next', root);
    var name = $('.analyser__product', root);
    var tagline = $('.analyser__phases', root);
    var track = $('.macro__track', root);
    var key = $('.macro__key', root);
    var figures = $('.analyser__figures', root);
    var tabs = $$('.analyser__tab', root);
    var index = START;
    var timer = null;
    var manual = false;

    function segments(m) {
      return [
        { cls: 'fat', v: m.fat, label: t('spec.fat') },
        { cls: 'pro', v: m.protein, label: t('spec.protein') },
        { cls: 'carb', v: m.carbs, label: t('spec.carbs') }
      ];
    }

    /* Swap the photograph through a second stacked image so the change is a
       crossfade rather than a flash of empty frame while the file loads. */
    function swapImage(src, alt) {
      if (!nextImg) { img.src = src; img.alt = alt; return; }
      if (reduced.matches) { img.src = src; img.alt = alt; return; }
      var pre = new Image();
      pre.onload = function () {
        nextImg.src = src;
        nextImg.classList.add('is-in');
        setTimeout(function () {
          img.src = src;
          img.alt = alt;
          nextImg.classList.remove('is-in');
        }, 340);
      };
      pre.onerror = function () { img.src = src; img.alt = alt; };
      pre.src = src;
    }

    function paint(i, animate) {
      var f = order[i];
      index = i;

      var src = 'assets/products/' + f.img + '.jpg';
      var label = t('p.' + f.slug + '.name');
      if (animate) swapImage(src, label);
      else { img.src = src; img.alt = label; }

      name.textContent = label;
      tagline.textContent = f.phases.map(function (p) { return t('phase.' + p); }).join(' · ');

      var m = f.macro;
      var sum = m.fat + m.protein + m.carbs;
      track.innerHTML = '';
      key.innerHTML = '';
      segments(m).forEach(function (s) {
        var d = document.createElement('span');
        d.className = 'macro__seg macro__seg--' + s.cls;
        d.style.width = (s.v / sum * 100).toFixed(2) + '%';
        track.appendChild(d);

        var item = document.createElement('span');
        item.className = 'macro__item';
        item.innerHTML = '<span class="macro__swatch" style="background:var(--m-' + s.cls + ')"></span>' +
          s.label + ' <span class="macro__val">' + fmt(s.v, 1) + '%</span>';
        key.appendChild(item);
      });

      figures.innerHTML =
        '<div><span class="field-label">' + t('spec.energy') + '</span><b>' + fmt(m.kcal, 0) + '</b><span class="field-label">' + t('spec.kcalUnit') + '</span></div>' +
        '<div><span class="field-label">' + t('spec.absorbable') + '</span><b>' + fmt(m.absorbable, 1) + '%</b></div>' +
        '<div><span class="field-label">' + t('spec.omega') + '</span><b>' + fmt(m.omega, 1) + ' : 1</b></div>';

      tabs.forEach(function (tab, ti) {
        tab.setAttribute('aria-selected', String(ti === i));
        var fill = $('.analyser__fill', tab);
        if (!fill) return;
        /* Restart the fill only on the tab that is now running. */
        fill.style.transition = 'none';
        fill.style.transform = 'scaleX(0)';
        if (ti === i && !manual && !reduced.matches) {
          void fill.offsetWidth;
          fill.style.transition = 'transform ' + rotateMs() + 'ms linear';
          fill.style.transform = 'scaleX(1)';
        } else if (ti === i) {
          fill.style.transform = 'scaleX(1)';
        }
      });

      if (animate && !reduced.matches) {
        track.animate(
          [{ clipPath: 'inset(0 100% 0 0 round 99px)' }, { clipPath: 'inset(0 0 0 0 round 99px)' }],
          { duration: 760, easing: 'cubic-bezier(0.16,1,0.3,1)' }
        );
      }
    }

    function start() {
      if (manual) return;
      stop();
      timer = setInterval(function () { paint((index + 1) % order.length, true); }, rotateMs());
      /* Re-arm the progress fill on the tab that is currently showing. */
      var fill = $('.analyser__fill', tabs[index]);
      if (fill && !reduced.matches) {
        fill.style.transition = 'none';
        fill.style.transform = 'scaleX(0)';
        void fill.offsetWidth;
        fill.style.transition = 'transform ' + rotateMs() + 'ms linear';
        fill.style.transform = 'scaleX(1)';
      }
    }

    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
      var fill = $('.analyser__fill', tabs[index]);
      if (fill) {
        var w = fill.getBoundingClientRect().width;
        var full = fill.parentNode.getBoundingClientRect().width || 1;
        fill.style.transition = 'none';
        fill.style.transform = 'scaleX(' + (w / full).toFixed(3) + ')';
      }
    }

    /* Taking hold of a tab is a deliberate choice: stop rotating and leave
       the visitor in charge. */
    function takeOver(i) {
      manual = true;
      stop();
      root.setAttribute('data-manual', 'true');
      paint(i, true);
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { takeOver(i); });
    });

    /* Hovering or focusing the control strip pauses, so a visitor can aim at
       a tab without it moving underneath them. Hovering the photograph does
       not pause: that is where the eye rests, and freezing there is what made
       the rotation look like it was not happening at all. */
    var strip = $('.analyser__tabs', root);
    if (strip) {
      strip.addEventListener('mouseenter', stop);
      strip.addEventListener('mouseleave', start);
      strip.addEventListener('focusin', stop);
      strip.addEventListener('focusout', start);
    }

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else start();
    });
    document.addEventListener('aidi:lang', function () { paint(index, false); });

    paint(START, false);
    start();
  }

  /* ----------------------------------------------------------- filters -- */

  function initFilters() {
    var bar = $('[data-filters]');
    if (!bar) return;
    var listRoot = $('#' + bar.getAttribute('data-filters'));
    if (!listRoot) return;

    var rows = $$('.row', listRoot);
    var empty = $('[data-empty]');
    var counter = $('[data-count]');
    var state = {};

    function apply() {
      if (bar.getAttribute('data-filters') === 'feed-list') {
        var bandButton = $('[data-facet="band"]', bar);
        var showBands = !state.phase || state.phase === 'vlucht';
        if (!showBands) state.band = '';
        if (bandButton) bandButton.closest('.filters__group').hidden = !showBands;
      }
      $$('.chip', bar).forEach(function (chip) {
        chip.setAttribute('aria-pressed', String((state[chip.getAttribute('data-facet')] || '') === chip.getAttribute('data-value')));
      });
      var resetButton = $('[data-filter-reset]', bar);
      if (resetButton) resetButton.hidden = !Object.keys(state).some(function (key) { return !!state[key]; });
      var shown = 0;
      rows.forEach(function (row) {
        var ok = Object.keys(state).every(function (facet) {
          var want = state[facet];
          if (!want) return true;
          var have = (row.getAttribute('data-' + facet) || '').split(' ');
          return have.indexOf(want) !== -1;
        });
        row.hidden = !ok;
        if (ok) shown++; else row.open = false;
      });
      if (empty) empty.hidden = shown !== 0;
      if (counter) {
        counter.textContent = shown + ' ' + (shown === 1 ? t('ui.resultsOne') : t('ui.results'));
      }
    }

    bar.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (!chip) return;
      var facet = chip.getAttribute('data-facet');
      var value = chip.getAttribute('data-value') || '';
      state[facet] = value;
      $$('.chip[data-facet="' + facet + '"]', bar).forEach(function (c) {
        c.setAttribute('aria-pressed', String(c === chip));
      });
      apply();
      if (bar.getAttribute('data-filters') === 'feed-list') {
        history.replaceState(null, '', location.pathname + location.search + (state.phase ? '#' + state.phase : ''));
      }
    });

    $$('[data-reset], [data-filter-reset]').forEach(function (reset) {
      reset.addEventListener('click', function () {
        state = {};
        $$('.chip', bar).forEach(function (c) {
          c.setAttribute('aria-pressed', String(c.getAttribute('data-value') === ''));
        });
        apply();
        history.replaceState(null, '', location.pathname + location.search);
      });
    });

    function filterFromHash() {
      if (bar.getAttribute('data-filters') !== 'feed-list') return;
      var phase = location.hash.slice(1);
      state = PHASES.indexOf(phase) !== -1 ? { phase: phase } : {};
      apply();
    }
    window.addEventListener('hashchange', filterFromHash);
    filterFromHash();

    document.addEventListener('aidi:lang', apply);
    apply();
  }

  /* ------------------------------------------------------ compare table -- */

  function initCompare() {
    var table = $('table.compare');
    if (!table) return;
    var body = $('tbody', table);

    $$('th[data-sort]', table).forEach(function (th) {
      var btn = $('.sortable', th);
      if (!btn) return;
      btn.addEventListener('click', function () {
        var kind = th.getAttribute('data-sort');
        var asc = th.getAttribute('aria-sort') === 'descending';
        $$('th', table).forEach(function (o) { o.removeAttribute('aria-sort'); });
        th.setAttribute('aria-sort', asc ? 'ascending' : 'descending');

        var idx = Array.prototype.indexOf.call(th.parentNode.children, th);
        var rows = $$('tr', body);
        rows.sort(function (a, b) {
          var av = a.children[idx].getAttribute('data-v');
          var bv = b.children[idx].getAttribute('data-v');
          if (kind === 'text') return asc ? av.localeCompare(bv) : bv.localeCompare(av);
          return asc ? av - bv : bv - av;
        });
        rows.forEach(function (r) { body.appendChild(r); });
      });
    });
  }

  /* ------------------------------------------------------ dealer search -- */

  function initDealerSearch() {
    var input = $('[data-dealer-search]');
    if (!input) return;
    var groups = $$('.country-group');
    var cards = $$('.dealer');
    var empty = $('[data-empty]');
    var counter = $('[data-count]');
    var clear = $('.search__clear');
    var fallback = $('[data-search-nearby]');
    var fallbackStatus = fallback && $('[data-search-status]', fallback);
    var fallbackList = fallback && $('[data-search-results]', fallback);
    var lookupTimer = null, lookupSeq = 0, lookingFor = '', place = null;

    /* No stockist matches the text: treat it as a town or postcode and show
       the three closest stockists instead of an empty list. */
    function showFallback() {
      fallbackStatus.textContent = place
        ? t('verkooppunten.searchNearest').replace('{place}', place.name)
        : t('verkooppunten.searchLooking').replace('{place}', lookingFor);
      if (place) renderNearest(fallbackList, nearestDealers(place.lat, place.lon));
      else fallbackList.replaceChildren();
      fallback.hidden = false;
      if (empty) empty.hidden = true;
    }

    function updateFallback(q, shown) {
      if (!fallback) return;
      clearTimeout(lookupTimer);
      if (shown !== 0 || q.length < 3) {
        lookupSeq++;
        lookingFor = '';
        place = null;
        fallback.hidden = true;
        return;
      }
      if (q === lookingFor) {
        /* Same text again (a language switch re-runs the filter). */
        if (place === false) { fallback.hidden = true; return; }
        showFallback();
        return;
      }
      var seq = ++lookupSeq;
      lookingFor = q;
      place = null;
      showFallback();
      lookupTimer = setTimeout(function () {
        findPlace(q).then(function (hit) {
          if (seq !== lookupSeq) return;
          if (!hit) {
            place = false;
            fallback.hidden = true;
            if (empty) empty.hidden = false;
            return;
          }
          place = hit;
          showFallback();
        });
      }, 450);
    }

    function run() {
      var q = input.value.trim().toLowerCase();
      var shown = 0;
      cards.forEach(function (card) {
        var ok = !q || card.getAttribute('data-find').indexOf(q) !== -1;
        card.hidden = !ok;
        if (ok) shown++;
      });
      groups.forEach(function (g) {
        var any = $$('.dealer', g).some(function (c) { return !c.hidden; });
        g.hidden = !any;
        var n = $$('.dealer', g).filter(function (c) { return !c.hidden; }).length;
        var badge = $('.country-head span', g);
        if (badge) badge.textContent = n + ' ' + t(n === 1 ? 'ui.dealersOne' : 'ui.dealers');
      });
      if (empty) empty.hidden = shown !== 0;
      if (counter) counter.textContent = shown + ' ' + t(shown === 1 ? 'ui.dealersOne' : 'ui.dealers');
      if (clear) clear.hidden = q === '';
      updateFallback(input.value.trim(), shown);
    }

    input.addEventListener('input', debounce(run, 120));
    [clear, $('[data-reset]')].filter(Boolean).forEach(function (reset) {
      reset.addEventListener('click', function () {
        input.value = '';
        run();
        input.focus();
      });
    });
    document.addEventListener('aidi:lang', run);
    run();
  }

  /* The three dealers closest to a point, using the shipped coordinates. */
  function nearestDealers(lat, lon) {
    var rad = Math.PI / 180;
    return $$('.country-group .dealer[data-lat][data-lon]').map(function (card) {
      var targetLat = Number(card.dataset.lat);
      var targetLon = Number(card.dataset.lon);
      var a = Math.pow(Math.sin((targetLat - lat) * rad / 2), 2) +
        Math.cos(lat * rad) * Math.cos(targetLat * rad) * Math.pow(Math.sin((targetLon - lon) * rad / 2), 2);
      return { card: card, distance: 6371 * 2 * Math.asin(Math.sqrt(Math.min(1, a))) };
    }).sort(function (a, b) { return a.distance - b.distance; }).slice(0, 3);
  }

  function renderNearest(output, ranked) {
    output.replaceChildren();
    ranked.forEach(function (result, index) {
      var card = result.card.cloneNode(true);
      card.hidden = false;
      card.removeAttribute('data-find');
      var distance = document.createElement('p');
      distance.className = 'dealer__distance';
      distance.textContent = (index === 0 ? t('verkooppunten.nearest') + ' · ' : '') +
        fmt(result.distance, 1) + ' km ' + t('verkooppunten.straightLine');
      card.prepend(distance);
      var route = document.createElement('a');
      route.className = 'arrow-link';
      route.textContent = t('verkooppunten.route');
      route.href = 'https://www.google.com/maps/dir/?api=1&destination=' +
        encodeURIComponent(result.card.dataset.lat + ',' + result.card.dataset.lon);
      route.target = '_blank';
      route.rel = 'noopener noreferrer';
      card.appendChild(route);
      output.appendChild(card);
    });
  }

  /* A town or postcode typed into the search, looked up on OpenStreetMap
     (the same source as geocode.mjs). Only called when the list itself has
     no match, after typing pauses, and each answer is cached for the page. */
  var placeCache = {};
  var DEALER_COUNTRIES = 'be,nl,de,fr,gb,it,hu,hr,us,cz,pl';

  function findPlace(q) {
    var key = q.toLowerCase();
    if (placeCache[key]) return placeCache[key];
    var base = 'https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&addressdetails=1&accept-language=' + current;
    function ask(params) {
      return fetch(base + '&' + params).then(function (res) { return res.ok ? res.json() : []; });
    }
    var lookup;
    if (/^\d{4}$/.test(q)) {
      /* A bare four-digit postcode is Belgian first, then Dutch. */
      lookup = ask('countrycodes=be&postalcode=' + q).then(function (hits) {
        return hits.length ? hits : ask('countrycodes=nl&postalcode=' + q);
      });
    } else {
      /* Biased towards Belgium and the Netherlands, where most stockists are. */
      lookup = ask('countrycodes=' + DEALER_COUNTRIES + '&viewbox=2.3,53.7,7.4,49.4&q=' + encodeURIComponent(q));
    }
    placeCache[key] = lookup.then(function (hits) {
      if (!hits.length) return null;
      var hit = hits[0], a = hit.address || {};
      return {
        lat: Number(hit.lat), lon: Number(hit.lon),
        name: a.village || a.town || a.city || a.municipality || hit.name || q
      };
    }).catch(function () { delete placeCache[key]; return null; });
    return placeCache[key];
  }

  /* Nearby recommendations use the shipped dealer coordinates. Location is
     requested only on click and kept in memory for this page. */
  function initNearbyDealers() {
    var button = $('[data-locate]');
    if (!button) return;
    var output = $('[data-nearby]');
    var status = $('[data-location-status]');
    var ranked = [];
    var statusKey = '';

    function render() {
      status.textContent = statusKey ? t('verkooppunten.' + statusKey) : '';
      renderNearest(output, ranked);
      output.hidden = !ranked.length;
    }

    button.addEventListener('click', function () {
      ranked = [];
      if (!navigator.geolocation || !window.isSecureContext) {
        statusKey = 'locationUnavailable'; render(); return;
      }
      button.disabled = true;
      statusKey = 'locating';
      render();
      navigator.geolocation.getCurrentPosition(function (position) {
        ranked = nearestDealers(position.coords.latitude, position.coords.longitude);
        statusKey = ranked.length ? 'locationFound' : 'locationUnavailable';
        button.disabled = false;
        render();
      }, function (error) {
        statusKey = error.code === 1 ? 'locationDenied' : 'locationUnavailable';
        button.disabled = false;
        render();
      }, { enableHighAccuracy: false, timeout: 12000, maximumAge: 300000 });
    });
    document.addEventListener('aidi:lang', render);
  }

  /* ------------------------------------------------------------ reveals -- */
  /* Nothing is hidden by the stylesheet. This function hides only what is
     genuinely below the fold at load, then reveals it on scroll, so a browser
     without IntersectionObserver, a hidden tab, a headless renderer or a
     print job all show the full page instead of blank sections. A timer
     backstops the observer regardless. */

  /* Text arrives in two registers, so the page does not repeat one identical
     entrance: the page title wipes up out of a mask, while a section's
     heading and its lede rise softly a beat apart. */
  function tagTextReveals() {
    $$('.rv-mask').forEach(function (el) {
      if (el.closest('.hero')) return;
      el.setAttribute('data-rise-mask', '');
    });

    $$('.head__text').forEach(function (head) {
      var i = 0;
      $$(':scope > h2, :scope > .lede, :scope > p', head).forEach(function (el) {
        if (el.hasAttribute('data-rise')) return;
        el.setAttribute('data-rise', '');
        el.style.setProperty('--delay', (i * 90) + 'ms');
        i++;
      });
    });
  }

  function initReveal() {
    tagTextReveals();
    // Profile rows stay visible while their bars draw, just like Hero C.
    var targets = $$('[data-rise]').filter(function (el) { return !$('.macro__track', el); });
    var masks = $$('[data-rise-mask]');
    var bars = []; // Nutrient segments animate independently, like demo Hero C.
    if (!('IntersectionObserver' in window)) return;

    var fold = window.innerHeight * 0.92;
    var below = function (el) { return el.getBoundingClientRect().top > fold; };
    var above = function (el) { return !below(el); };

    /* A page title sits above the fold by definition, so it can never be
       revealed by scrolling. Those play once on load instead, the same way
       the hero does. */
    var onLoad = masks.filter(above).concat(targets.filter(function (el) {
      return above(el) && el.closest('.pagehead, .head__text');
    }));
    if (onLoad.length) {
      onLoad.forEach(function (el) {
        el.classList.add(el.hasAttribute('data-rise-mask') ? 'wipe' : 'rise');
      });
      var playIn = function () { onLoad.forEach(function (el) { el.classList.add('is-in'); }); };
      requestAnimationFrame(function () { requestAnimationFrame(playIn); });
      setTimeout(playIn, 1200);
      window.addEventListener('beforeprint', playIn);
    }

    var risers = targets.filter(below);
    var wipes = masks.filter(below);
    var clips = bars.filter(below);
    if (!risers.length && !clips.length && !wipes.length) return;

    risers.forEach(function (el) { el.classList.add('rise'); });
    wipes.forEach(function (el) { el.classList.add('wipe'); });
    clips.forEach(function (el) { el.classList.add('clip'); });

    /* Stagger inside a single group, so one list enters together rather than
       every section sharing one identical entrance. */
    $$('[data-stagger]').forEach(function (group) {
      $$('.rise', group).forEach(function (el, i) {
        el.style.setProperty('--delay', Math.min(i * 55, 440) + 'ms');
      });
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });

    risers.concat(wipes, clips).forEach(function (el) { io.observe(el); });

    var release = function () {
      risers.concat(wipes, clips).forEach(function (el) { el.classList.add('is-in'); });
    };
    window.addEventListener('beforeprint', release);

    /* Failsafe, but a precise one. A blanket timer would reveal everything a
       few seconds after load and quietly defeat the scroll reveal for anyone
       reading slowly. Instead, watch a sentinel that is unquestionably in the
       viewport: if the observer never reports even that, it is not running in
       this environment (a headless renderer, a never-painted tab) and only
       then is everything released. */
    var sentinel = document.createElement('div');
    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.style.cssText = 'position:fixed;top:50%;left:0;width:1px;height:1px;opacity:0;pointer-events:none';
    document.body.appendChild(sentinel);

    var observerWorks = false;
    var probe = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) observerWorks = true;
    });
    probe.observe(sentinel);

    setTimeout(function () {
      probe.disconnect();
      sentinel.remove();
      if (!observerWorks) release();
    }, 1500);
  }

  /* Hero C's segment growth, reused for every nutritional bar. The default
     is fully drawn; WAAPI supplies the temporary entrance only when visible. */
  function initProfileMotion() {
    if (reduced.matches || !('IntersectionObserver' in window) || !Element.prototype.animate) return;
    var animations = new Set();
    var prepared = new Map();
    var observerReported = false;
    function animate(el, frames, options) {
      var animation = el.animate(frames, options);
      animations.add(animation);
      animation.onfinish = animation.oncancel = function () { animations.delete(animation); };
      return animation;
    }
    var observer = new IntersectionObserver(function (entries) {
      observerReported = true;
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var target = entry.target;
        observer.unobserve(target);
        if (target.hasAttribute('data-season-timeline')) {
          var axis = window.matchMedia('(min-width: 820px)').matches ? 'X' : 'Y';
          animate($('.season-timeline__rail span', target), [
            { transform: 'scale' + axis + '(0)' }, { transform: 'scale' + axis + '(1)' }
          ], { duration: 1400, delay: 200, easing: 'cubic-bezier(0.16,1,0.3,1)', fill: 'backwards' });
          $$('.season-timeline__node', target).forEach(function (node, i) {
            animate(node, [{ borderColor: 'var(--line)' }, { borderColor: 'var(--signal-ink)' }],
              { duration: 400, delay: 400 + i * 320, easing: 'cubic-bezier(0.16,1,0.3,1)', fill: 'backwards' });
            animate($('i', node), [{ backgroundColor: 'var(--line)' }, { backgroundColor: 'var(--signal-ink)' }],
              { duration: 400, delay: 400 + i * 320, easing: 'cubic-bezier(0.16,1,0.3,1)', fill: 'backwards' });
          });
        } else {
          (prepared.get(target) || []).forEach(function (animation) { animation.play(); });
          prepared.delete(target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });
    $$('[data-profile-group], #feed-list').forEach(function (group) {
      $$('.macro__track', group).forEach(function (track, index) { track.dataset.profileIndex = index; });
    });
    $$('.macro__track, [data-season-timeline]').forEach(function (target) {
      if (target.closest('.hero')) return;
      if (target.classList.contains('macro__track')) {
        // Hold the empty start frame before scrolling, exactly like the demo.
        // This avoids flashing the completed bar before it draws.
        var delay = 260 + Number(target.dataset.profileIndex || 0) * 60;
        prepared.set(target, $$('.macro__seg', target).map(function (segment) {
          var animation = animate(segment, [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }],
            { duration: 800, delay: delay, easing: 'cubic-bezier(0.16,1,0.3,1)', fill: 'backwards' });
          animation.pause();
          animation.currentTime = 0;
          return animation;
        }));
      }
      observer.observe(target);
    });
    function finish() {
      observer.disconnect();
      animations.forEach(function (animation) { animation.cancel(); });
      animations.clear();
      prepared.clear();
    }
    window.addEventListener('beforeprint', finish);
    reduced.addEventListener('change', function (event) { if (event.matches) finish(); });
    setTimeout(function () { if (!observerReported) finish(); }, 1800);
  }

  /* ------------------------------------------------- deep-linked details -- */

  function initDeepLink() {
    function openFromHash() {
      if (!location.hash) return;
      var target = document.getElementById(location.hash.slice(1));
      if (target && target.classList.contains('row')) {
        target.hidden = false;
        target.open = true;
        target.scrollIntoView({ behavior: reduced.matches ? 'auto' : 'smooth', block: 'center' });
      }
    }
    window.addEventListener('hashchange', openFromHash);
    openFromHash();

    /* Keep the address bar in step so a fancier can share one product. */
    $$('.row').forEach(function (row) {
      row.addEventListener('toggle', function () {
        if (row.open && row.id && history.replaceState) {
          history.replaceState(null, '', '#' + row.id);
        }
      });
    });
  }

  /* --------------------------------------------------------------- boot -- */

  function applyLangSafe() { applyLang(storedLang(), false); }

  function boot() {
    /* Each feature is isolated: if one throws on a page that does not carry it,
       navigation, language switching and the rest still come up. */
    [applyLangSafe, initHeader, initLangMenu, initHero, initAnalyser, initFilters,
     initCompare, initDealerSearch, initNearbyDealers, initReveal, initProfileMotion, initDeepLink].forEach(function (fn) {
      try { fn(); } catch (e) {
        if (window.console && console.warn) console.warn('AIDI: ' + fn.name + ' failed', e);
      }
    });

    var year = $('[data-year]');
    if (year) year.textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
