function stickToTop() {
  const nav = document.querySelector('.main-header');
  const scroll = window.scrollY;
  const isScrolled = scroll >= 30 ? true : false;

  nav.classList.toggle('main-header--sticky', isScrolled);
}

export function initStickyNav() {
  stickToTop();

  window.addEventListener('scroll', stickToTop);
}
