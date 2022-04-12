import { urlObject } from './util.js';
import { getData } from './api.js';
import { renderPhotoDataList } from './galery.js';
import { closePopup } from './form-popup.js';
import './validation.js';
import { setUserFormSubmit } from './popup-submit.js';
import './effect-scale-photo.js';
import './effect-slider.js';
import { showFilters, hideFilters, initFilters, filterPhoto, showGetDataMessageError } from './filters.js';


getData(
  urlObject,
  (photos) => {
    renderPhotoDataList(photos);
    showFilters();
    initFilters();
    filterPhoto();
  },
  () => {
    showGetDataMessageError();
    hideFilters();
  }
);

setUserFormSubmit(closePopup);
