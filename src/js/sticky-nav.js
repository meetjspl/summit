export default (function () {
  if (window.innerWidth < 992 || !document.querySelector('#vote')) {
    const nav = document.querySelector('.main-header');
    window.addEventListener('scroll', function () {
      const scroll = window.scrollY;
      if (scroll >= 30) {
        nav.classList.add('main-header--sticky');
      } else {
        nav.classList.remove('main-header--sticky');
      }
    });
  }

});
