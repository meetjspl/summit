export function initGallery() {
  const galleryImages = Array.from(document.querySelectorAll('.gallery__image'));
  let activeImage = galleryImages.find(image => image.classList.contains('gallery__image--active'));

  galleryImages.forEach(image => {
    image.addEventListener('mouseover', ({target: nextImage}) => {
      toggleGalleryImage(activeImage, nextImage)
      activeImage = nextImage;
    });
  });
}

function toggleGalleryImage(previous, next) {
  deactivateGalleryImage(previous);
  activateGalleryImage(next);
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
