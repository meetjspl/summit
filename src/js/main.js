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

if (window.location.hash === '#loop') {
  console.log('looping sponsors');
  let num = 0;
  document.querySelector(`.js-sp-${num}`).classList.add('fullscreen');
  setInterval(() => {
    num = (num + 1) % 5;
    document.querySelector('.fullscreen').classList.remove('fullscreen');
    document.querySelector(`.js-sp-${num}`).classList.add('fullscreen');
  }, 10000);
}
