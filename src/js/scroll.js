import * as smoothScroll from 'smooth-scroll';

export function initScroll() {
  // Initialize Smooth Scroll
  // https://github.com/cferdinandi/smooth-scroll
  const header = document.querySelector('.main-header');

  const scrollOffset = header.scrollHeight;

  smoothScroll.init({
    offset: scrollOffset
  });
}
