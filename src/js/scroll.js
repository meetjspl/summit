// underscore
const _ = require('underscore');

export default (function () {
  // Initialize Smooth Scroll
  // https://github.com/cferdinandi/smooth-scroll
  const nav = document.querySelector('.main-header__nav');
  const menu = document.querySelector('.button-menu__menu-icon');
  const close = document.querySelector('.button-menu__close-icon');
  const header = document.querySelector('.main-header');
  let scrollOffset = 0;
  if (window.innerWidth < 678) {
    scrollOffset = 40;
  }
  const close_nav = function () {
    if (nav.classList.contains('main-header__nav--nav-open')) {
      nav.classList.toggle('main-header__nav--nav-open');
      menu.classList.toggle('button-menu__menu-icon--nav-open');
      close.classList.toggle('button-menu__close-icon--nav-open');
      header.classList.toggle('main-header--nav-open');
    }
  };
  if (!document.querySelector('#vote')) {
    _.debounce(smoothScroll.init({
      offset: scrollOffset,
      callback: function () {
        close_nav();
      }
    }));
  }

});
