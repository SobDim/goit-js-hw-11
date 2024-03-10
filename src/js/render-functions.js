export function createMarkup(arr) {
  return arr
    .map(({ webformatURL, tags }) => {
      return ` <li class="gallery-item data-tilt" > 
              <a class="gallery-link" href="${webformatURL}">
              <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
              />
            </a>
          </li>`;
    })
    .join('');
}
