import { galleryItems } from './gallery-items.js';
// Change code below this line

const createGalleryMarkup = ({ preview, original, description }) => {
    return `
    <li>
      <a class="gallery__item" href="${original}">
      <img 
      style="display:block"
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      />
    </a>
    </li>
    `;
  };
  
  const renderGalleryMarkup = galleryItems.map(createGalleryMarkup).join('');
  
  document.querySelector('.gallery').insertAdjacentHTML('beforeend', renderGalleryMarkup);
  
  let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 500,
    enableKeyboard: true,
  });
