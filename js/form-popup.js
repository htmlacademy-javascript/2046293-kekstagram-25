import { buttonBigger, buttonSmaller} from './effect-scale-photo.js';
import { isEscapeKey } from './util.js';
import {sliderBackground} from './effect-slider.js';

const SCALE_VALUE = 100;
const PROCENT = '%';
const MAX_SCALE = 1;

const uploadFile = document.querySelector('#upload-file');
const popupWindow = document.querySelector('.img-upload__overlay');
const buttonClosePopup = document.querySelector('.img-upload__cancel');
const inputHashtags = document.querySelector('.text__hashtags');
const commentsText = document.querySelector('.text__description');
const scaleControl = document.querySelector('.scale__control--value');
const effectLevel = document.querySelector('.effect-level');
const uploadPhotoForm = document.querySelector('.img-upload__form');
const imgPreview = uploadPhotoForm.querySelector('.img-upload__preview img');
const effectSlider =  uploadPhotoForm.querySelector('.effect-level__slider');
const smallPreviewPhotos = Array.from(uploadPhotoForm.querySelectorAll('.effects__preview'));

// Функция открытия POPUP
function openPopup () {
  popupWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.querySelector('.effect-level__slider').classList.add('hidden');
  scaleControl.value = SCALE_VALUE + PROCENT;
  effectSlider.classList.remove('visually-hidden');
  sliderBackground.classList.add('hidden');


}
const focusHashtag = () => document.activeElement === inputHashtags;
const focusTextComments = () => document.activeElement === commentsText;

const onUploadPhotoEsc = (evt) => {
  if(isEscapeKey(evt) && !focusHashtag() && !focusTextComments()) {
    onClosePopup();
    uploadFile.value = '';
  }
};
// Функция закрытия POPUP
function onClosePopup () {
  popupWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  inputHashtags.value = '';
  commentsText.value = '';
  imgPreview.style.transform = `scale(${MAX_SCALE})`;
  imgPreview.style.filter = '';
  imgPreview.className = 'effects__preview--none';
  imgPreview.dataset.filterName = '';

  buttonBigger.disabled = true;
  buttonSmaller.disabled = false;
  uploadFile.value = '';

  // eslint-disable-next-line no-undef
  document.removeEventListener('keydown', onUploadPhotoEsc);

}

//Обработичик закрытия по крестику
buttonClosePopup.addEventListener('click', () => {
  onClosePopup();
  uploadFile.value = '';
});

//Обработчик открытия POPUP при загрузке изображения
uploadFile.addEventListener('change', () => {
  if (uploadFile.value.length !== 0) {
    openPopup();
  }
  imgPreview.src = URL.createObjectURL(uploadFile.files[0]);

  smallPreviewPhotos.forEach((photo) => {
    photo.style.backgroundImage = `url(${URL.createObjectURL(uploadFile.files[0])})`;
  });

  document.addEventListener('keydown', onUploadPhotoEsc);
});

export {uploadPhotoForm, imgPreview, effectLevel, scaleControl, onClosePopup as closePopup };
