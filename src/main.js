import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";

const form = document.querySelector('.form');

form.addEventListener('submit', async e => {
  e.preventDefault();
  
  const searchText = form.elements['search-text'].value.trim();
  if (!searchText) {
    iziToast.warning({ message: "Please enter a search term", position: 'topRight' });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(searchText);
    
    if (data.hits.length === 0) {
      iziToast.info({ message: "Sorry, there are no images matching your search query. Please try again!", position: 'topRight' });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({ message: "An error occurred while fetching data", position: 'topRight' });
  } finally {
    hideLoader();
  }
});
