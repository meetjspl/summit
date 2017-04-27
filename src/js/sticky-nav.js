export function initStickyNav() {
  const nav = document.querySelector('.main-header');

  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if (scroll >= 30) {
      nav.classList.add('main-header--sticky');
    } else {
      nav.classList.remove('main-header--sticky');
    }
  });
}
