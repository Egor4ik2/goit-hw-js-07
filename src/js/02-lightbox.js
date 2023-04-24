



import { galleryItems } from './gallery-items.js';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');

  function createGalleryItem(item) {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = item.original;
    galleryLink.setAttribute('data-slb-group', 'gallery-items');

    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.src = item.preview;
    galleryImage.alt = item.description;

    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);

    return galleryItem;
  }

  function renderGalleryItems(items) {
    const galleryItemsElements = items.map(createGalleryItem);
    gallery.append(...galleryItemsElements);
  }

  renderGalleryItems(galleryItems);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
});
