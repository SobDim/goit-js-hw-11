import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// import VanillaTilt from 'vanilla-tilt';

import { getPhotos } from './pixabay-api';
import { createMarkup } from './render-functions';
import { errorMsg, okMsg, warningMsg, hello } from './izi-toast-options';

const searchForm = document.querySelector('.js-search-form');
const gallery = document.querySelector('.js-gallery');
const input = searchForm.querySelector('.js-input');

let searchQ;
let pages = 1;

searchForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  gallery.innerHTML = '';

  searchQ = e.currentTarget.elements['user-search-q'].value.trim();

  if (!searchQ) return iziToast.error(errorMsg);

  getPhotos(searchQ, pages)
    .then(res => {
      if (res.hits.length === 0) {
        iziToast.error(errorMsg);
        return;
      }

      alert(`We found ${res.total} photos`);
      gallery.innerHTML = createMarkup(res.hits);
    })
    .catch(console.log);

  e.currentTarget.reset();
}

input.addEventListener('focus', () => {
  input.removeAttribute('placeholder');
});
input.addEventListener('blur', () => {
  input.setAttribute('placeholder', 'Search images...');
});

//     ulEl.innerHTML = createMarkup(res.results);
//     if (res.total < perPage) {
//       loadMoreBtnHide();
//     } else {
//       loadMoreBtnShow();
//     }
//   })
//   .catch(console.log)
//   .finally(() => spinnerStop());

// e.currentTarget.reset();
