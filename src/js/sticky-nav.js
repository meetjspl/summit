function stickToTop() {
  const nav = document.querySelector('.main-header');
  const isScrolled = window.scrollY >= 30;

  nav.classList.toggle('main-header--sticky', isScrolled);
}

export function initStickyNav() {
  stickToTop();

  window.addEventListener('scroll', stickToTop);
}
