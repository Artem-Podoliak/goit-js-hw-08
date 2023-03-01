import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const addGalleryItems = createGalleryItems(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", addGalleryItems);

function createGalleryItems(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join("");
}

const options = {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
};

const lightbox = new SimpleLightbox(".gallery a", options);