import { initHamburgerMenu } from './assets/js/hamburger.js';
import { initStickyNav } from './assets/js/sticky-nav.js';
import './assets/styles/main.scss';

initHamburgerMenu();
initStickyNav();

Array.from(document.querySelectorAll('.js-toggle')).map((toggle) => {
  toggle.addEventListener('click', (e) => {
    e.target.parentNode.classList.toggle('js-toggle-open');
  });
});
