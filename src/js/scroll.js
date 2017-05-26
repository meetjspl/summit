import {debounce} from 'underscore';
import * as smoothScroll from 'smooth-scroll';

export function initScroll() {
  // Initialize Smooth Scroll
  // https://github.com/cferdinandi/smooth-scroll
  const nav = document.querySelector('.main-header__nav');
  const menu = document.querySelector('.button-menu__menu-icon');
  const close = document.querySelector('.button-menu__close-icon');
  const header = document.querySelector('.main-header');
  const menuCheckbox = document.getElementById('menu-check');

  let scrollOffset = 0;
  if (window.innerWidth < 678) {
    scrollOffset = 40;
  }

  debounce(smoothScroll.init({
    offset: scrollOffset,
    before: closeNav
  }));

  function closeNav() {
    if (!nav.classList.contains('main-header__nav--nav-open')) {
      return;
    }
    menuCheckbox.checked = false;
    nav.classList.toggle('main-header__nav--nav-open');
    menu.classList.toggle('button-menu__menu-icon--nav-open');
    close.classList.toggle('button-menu__close-icon--nav-open');
    header.classList.toggle('main-header--nav-open');
  }
}
