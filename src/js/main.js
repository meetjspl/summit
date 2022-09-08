import { initHamburgerMenu } from './hamburger.js';
import { initStickyNav } from './sticky-nav.js';

initHamburgerMenu();
initStickyNav();

import '../scss/main.scss';

if (VERSION) {
  window.VERSION = VERSION;
}

Array.from(document.querySelectorAll('.js-toggle')).map(toggle => {
  toggle.addEventListener('click', e => {
    e.target.parentNode.classList.toggle('js-toggle-open');
  });
});
