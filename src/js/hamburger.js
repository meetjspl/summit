export default (function () {

  const menuButton = document.querySelector('.button-menu');
  const mobileNav = document.querySelector('.main-header__nav');
  const menuIcon = document.querySelector('.button-menu__menu-icon');
  const closeIcon = document.querySelector('.button-menu__close-icon');
  const mainHeader = document.querySelector('.main-header');

  menuButton.addEventListener('click', function () {
    mobileNav.classList.toggle('main-header__nav--nav-open');
    menuIcon.classList.toggle('button-menu__menu-icon--nav-open');
    closeIcon.classList.toggle('button-menu__close-icon--nav-open');
    mainHeader.classList.toggle('main-header--nav-open');

    if (menuButton.hasAttribute('aria-expanded')) {
      if (mobileNav.classList.contains('main-header__nav--nav-open')) {
        menuButton.setAttribute('aria-expanded', 'true');
      } else {
        menuButton.setAttribute('aria-expanded', 'false');
      }
    }
  }, false);

});
