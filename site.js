'use strict';
(() => {
  const strings = window.LENSIVO_TRANSLATIONS;
  if (!strings) return;
  const select = document.getElementById('language-select');
  let language = 'en';
  const requested = new URLSearchParams(location.search).get('lang');
  try {
    const saved = localStorage.getItem('lensivo-language');
    const browserLanguage = navigator.language.split('-')[0];
    language = strings[requested] ? requested : strings[saved] ? saved : strings[browserLanguage] ? browserLanguage : 'en';
  } catch { if (strings[requested]) language = requested; }
  function applyLanguage() {
    document.documentElement.lang = language;
    if (select) select.value = language;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const value = strings[language][element.dataset.i18n];
      if (value === undefined) return;
      // Only authored headings contain markup; policy paragraphs remain plain text.
      if (value.includes('<br>')) {
        const lines = value.split('<br>');
        element.replaceChildren();
        lines.forEach((line,index) => { if(index) element.append(document.createElement('br')); element.append(document.createTextNode(line)); });
      } else element.textContent = value;
    });
    if (select) select.setAttribute('aria-label',strings[language].languageLabel);
    const policy = document.querySelector('.policy');
    document.title = policy ? `${strings[language].navPrivacy} — Lensivo` : 'Lensivo — '+strings[language].intro;
  }
  select?.addEventListener('change', () => {
    if (!strings[select.value]) return;
    language = select.value;
    try { localStorage.setItem('lensivo-language',language); } catch {}
    // Keep language-specific preview URLs consistent with the current selection.
    const url = new URL(location.href);
    url.searchParams.delete('lang');
    history.replaceState(null,'',url);
    applyLanguage();
  });
  document.querySelector('[data-print-policy]')?.addEventListener('click', () => window.print());
  const timer = document.getElementById('product-timer');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const origin = performance.now();
  let demoInterval;
  function updateDemoTimer() {
    if (!timer) return;
    const elapsed = (performance.now() - origin) % 26000;
    const seconds = !reducedMotion.matches && elapsed >= 14500 && elapsed < 22000
      ? Math.floor((elapsed - 14500) / 1000) : 0;
    timer.textContent = '00:' + String(seconds).padStart(2, '0');
  }
  if (timer) demoInterval = setInterval(updateDemoTimer, 200);
  window.addEventListener('pagehide', () => clearInterval(demoInterval));
  window.addEventListener('pageshow', event => {
    if (event.persisted && timer) { clearInterval(demoInterval); demoInterval = setInterval(updateDemoTimer, 200); }
  });
  applyLanguage();
})();
