import { galleryItems } from './gallery-items.js';
// Change code below this line

// Gallery markup
const gallery = document.querySelector('.gallery');
const markup = galleryItems
    .map((item) =>
        `<a class="gallery__item" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                alt="${item.description}"
            />
        </a>`)
    .join('');
gallery.innerHTML = markup;

// Click event handle
gallery.addEventListener('click', handleClick);
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });
function handleClick(event) {
    event.preventDefault();
    const element = event.target;
    lightbox.open(element);
}
