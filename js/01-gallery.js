import { galleryItems } from './gallery-items.js';
// Change code below this line

const createGalleryMarkup = ({ preview, original, description }) => {
  return `
 <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
    style="display:block"
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
  </a>
</div>
    `;
};

const renderGalleryMarkup = galleryItems.map(createGalleryMarkup).join('');

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', renderGalleryMarkup);

galleryEl.addEventListener('click', onImageClick);

function onImageClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.preventDefault();
  modalShow(event.target.dataset.source);
}

let instance = null;

function modalShow(src) {
  instance = basicLightbox.create(
    `<img src="${src}" style="height:90vh; display:block"></img>`,
    {
      onShow: instance => {
        addListener();
      },
      onClose: instance => {
        removeListener();
      },
    },
  );
  instance.show();
}
function addListener() {
  window.addEventListener('keydown', onEscClick);
}

function onEscClick(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

function removeListener() {
  window.removeEventListener('keydown', onEscClick);
}