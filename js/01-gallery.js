import { galleryItems } from './gallery-items.js';
// Change code below this line

// Gallery markup
const gallery = document.querySelector('.gallery');
const markup = galleryItems
    .map((item) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>
        </div>`)
    .join('');
gallery.innerHTML = markup;

// Click event handle
let bigSizeUrl = '';
gallery.addEventListener('click', handleClick);
function handleClick(event) {
    event.preventDefault();
    bigSizeUrl = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src=${bigSizeUrl}>`);
    instance.show(() => document.body.addEventListener("keydown", ({key}) => {
        if (key === "Escape") {
        instance.close()
        }
    }));
}

