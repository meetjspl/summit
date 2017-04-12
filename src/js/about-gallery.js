export default (function () {

  const galleryImages =
  Array.from(document.querySelectorAll('.gallery__image'));

  galleryImages.forEach(function (image) {
    image.addEventListener('mouseover', function (e) {
      e.target.classList.add('gallery__image--active');
      e.target.nextSibling.nextSibling
      .classList.add('gallery__info--active');
      e.target.setAttribute('aria-expanded', 'true');
      galleryImages.forEach(function (item) {
        if (item !== e.target && item.nextSibling.nextSibling
        .classList.contains('gallery__info--active')) {
          item.nextSibling.nextSibling
          .classList.remove('gallery__info--active');
          item.classList.remove('gallery__image--active');
          item.setAttribute('aria-expanded', 'false');
        }
      });
    });
  });

});
