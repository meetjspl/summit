import { initHamburgerMenu } from './hamburger.js';
import { initStickyNav } from './sticky-nav.js';
import { initAgenda } from './agenda.js';

initHamburgerMenu();
initStickyNav();
initAgenda();

import '../scss/main.scss';

if (VERSION) {
  window.VERSION = VERSION;
}
