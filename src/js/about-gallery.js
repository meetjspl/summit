export function initGallery() {
  const galleryImages = Array.from(document.querySelectorAll('.gallery__image'));

  galleryImages.forEach(image => {
    image.addEventListener('mouseover', e => {
      activateGalleryImage(e.target);

      galleryImages
        .filter(image => image !== e.target)
        .forEach(image => deactivateGalleryImage(image));
    });
  });
}

function activateGalleryImage(image) {
  const infoElement = image.parentElement.querySelector('.gallery__info');

  image.classList.add('gallery__image--active');
  infoElement.classList.add('gallery__info--active');
  image.setAttribute('aria-expanded', 'true');
}

function deactivateGalleryImage(image) {
  const infoElement = image.parentElement.querySelector('.gallery__info');

  if (!infoElement.classList.contains('gallery__info--active')) {
    return;
  }

  infoElement.classList.remove('gallery__info--active');
  image.classList.remove('gallery__image--active');
  image.setAttribute('aria-expanded', 'false');
}
