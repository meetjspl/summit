import { initHamburgerMenu } from './hamburger.js';
import { initStickyNav } from './sticky-nav.js';

initHamburgerMenu();
initStickyNav();

import '../scss/main.scss';

if (VERSION) {
  window.VERSION = VERSION;
}
