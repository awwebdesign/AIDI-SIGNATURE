/* AIDI, demo page behaviour.
   Renders the Hero C chart from the real product data, then plays each
   section's animation when it scrolls into view.

   Same safety rule as the live site: nothing is hidden by the stylesheet
   alone. A section only gets its "not yet animated" state if it is genuinely
   below the fold, and a timer releases everything regardless, so a failed
   observer can never leave the page blank. */

(function () {
  'use strict';

  var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  /* On the demo pages a checkbox can override the OS preference so the
     animations can be reviewed; see initMotionToggle. */
  var reduced = { get matches() { return motionQuery.matches && !window.__forceMotion; } };
  var fmt = function (v, d) {
    try {
      return new Intl.NumberFormat('nl-BE', { minimumFractionDigits: d, maximumFractionDigits: d }).format(v);
    } catch (e) { return String(v); }
  };

  /* ------------------------------------- Hero C: the whole range as bars -- */

  function buildRangeChart() {
    var host = document.querySelector('.dh-c__chart');
    if (!host || typeof FEEDS === 'undefined') return;

    var names = {
      'aidi-speedy-sprint': 'AIDI Speedy Sprint',
      'aidi-mix-1': 'AIDI Mix 1',
      'aidi-mix-2': 'AIDI Mix 2',
      'aidi-mix-3': 'AIDI Mix 3',
      'aidi-girl-power': 'AIDI Girl Power',
      'aidi-long-distance-mix': 'AIDI Long Distance',
      'aidi-super-kweek': 'AIDI Super Kweek',
      'aidi-super-rui': 'AIDI Super Rui',
      'aidi-winter-rust': 'AIDI Winter/Rust',
      'aidi-extra-power-snoepmix': 'AIDI Snoepmix'
    };

    /* Sorted by carbohydrate share so the profile visibly rotates from
       sprint fuel at the top to long-distance fat at the bottom. */
    FEEDS.slice()
      .sort(function (a, b) { return b.macro.carbs - a.macro.carbs; })
      .forEach(function (f, i) {
        var m = f.macro;
        var sum = m.fat + m.protein + m.carbs;
        var a = document.createElement('a');
        a.className = 'dh-c__r';
        a.href = 'voeders.html#' + f.slug;
        a.setAttribute('role', 'listitem');
        a.style.setProperty('--i', i);
        a.innerHTML =
          '<b>' + (names[f.slug] || f.slug) + '</b>' +
          '<span class="dh-c__bar">' +
            '<i class="f" style="width:' + (m.fat / sum * 100).toFixed(2) + '%"></i>' +
            '<i class="p" style="width:' + (m.protein / sum * 100).toFixed(2) + '%"></i>' +
            '<i class="c" style="width:' + (m.carbs / sum * 100).toFixed(2) + '%"></i>' +
          '</span>' +
          '<span class="dh-c__k">' + fmt(m.kcal, 0) + '</span>';
        a.title = 'Vet ' + fmt(m.fat, 1) + '%, eiwit ' + fmt(m.protein, 1) +
                  '%, koolhydraten ' + fmt(m.carbs, 1) + '%';
        host.appendChild(a);
      });

    var legend = document.createElement('div');
    legend.className = 'dh-c__legend macro__key';
    legend.innerHTML =
      '<span class="macro__item"><span class="macro__swatch" style="background:oklch(0.435 0.135 268)"></span>Ruw vet</span>' +
      '<span class="macro__item"><span class="macro__swatch" style="background:oklch(0.650 0.155 248)"></span>Ruw eiwit</span>' +
      '<span class="macro__item"><span class="macro__swatch" style="background:oklch(0.905 0.060 234)"></span>Koolhydraten</span>' +
      '<span class="macro__item" style="margin-inline-start:auto">kcal per kg</span>';
    host.appendChild(legend);
  }


  /* -------------------------------------------------- motion override -- */
  /* Demo pages only. Windows with "animation effects" switched off reports
     prefers-reduced-motion, which correctly disables the animations, and then
     there is nothing to review. This toggle forces them on for the preview.
     The live site has no such override; it always honours the preference. */

  function initMotionToggle(replay) {
    var box = document.getElementById('forceMotion');
    if (!box) return;
    var os = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    box.checked = false;
    var hint = box.parentNode;
    if (os) hint.title = 'Windows staat animaties uit; vink dit aan om ze toch te zien.';
    box.addEventListener('change', function () {
      document.documentElement.setAttribute('data-motion', box.checked ? 'on' : 'off');
      window.__forceMotion = box.checked;
      if (replay) replay();
    });
    document.documentElement.setAttribute('data-motion', 'off');
  }

  /* ------------------------------------------------------- number count -- */

  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var dec = parseInt(el.getAttribute('data-dec') || '0', 10);
    if (isNaN(target)) return;
    if (reduced.matches) { el.textContent = fmt(target, dec); return; }

    var start = null;
    var dur = 1100;
    function step(now) {
      if (start === null) start = now;
      var p = Math.min((now - start) / dur, 1);
      /* ease-out quint, matching the CSS curve */
      var eased = 1 - Math.pow(1 - p, 5);
      el.textContent = fmt(target * eased, dec);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = fmt(target, dec);
    }
    requestAnimationFrame(step);
  }

  /* ------------------------------------------------------ section timing -- */

  function initSections() {
    var sections = Array.prototype.slice.call(document.querySelectorAll('[data-anim]'));
    if (!sections.length) return;

    function play(section) {
      if (section.classList.contains('is-live')) return;
      section.classList.add('is-live');
      var counters = section.querySelectorAll('[data-count]');
      /* Let the headline land first, then run the figures. */
      setTimeout(function () {
        Array.prototype.forEach.call(counters, countUp);
      }, 380);
    }

    if (reduced.matches || !('IntersectionObserver' in window)) {
      sections.forEach(play);
      return;
    }

    /* Only sections starting below the fold are held back. */
    var fold = window.innerHeight * 0.85;
    sections.forEach(function (s) {
      if (s.getBoundingClientRect().top <= fold) play(s);
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        play(e.target);
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });

    sections.forEach(function (s) { if (!s.classList.contains('is-live')) io.observe(s); });

    /* Failsafe: nothing stays in its pre-animation state. */
    setTimeout(function () { sections.forEach(play); }, 6000);
    window.addEventListener('beforeprint', function () { sections.forEach(play); });
  }

  /* --------------------------------------------------------------- boot -- */

  function replayAll() {
    document.querySelectorAll('[data-anim]').forEach(function (s) { s.classList.remove('is-live'); });
    void document.body.offsetHeight;
    initSections();
  }

  function boot() {
    buildRangeChart();
    initSections();
    initMotionToggle(replayAll);

    var replay = document.getElementById('replay');
    if (replay) {
      replay.addEventListener('click', function () {
        document.querySelectorAll('[data-anim]').forEach(function (s) {
          s.classList.remove('is-live');
        });
        /* force a reflow so the transitions restart cleanly */
        void document.body.offsetHeight;
        window.scrollTo({ top: 0, behavior: reduced.matches ? 'auto' : 'smooth' });
        setTimeout(initSections, 120);
      });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
