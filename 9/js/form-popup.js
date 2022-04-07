const SCALE_VALUE = 100;
const PROCENT = '%';

const uploadFile = document.querySelector('#upload-file');  //Кнопка загрузки
const popupWindow = document.querySelector('.img-upload__overlay');  // Форма редактирования ( POPUP )
const buttonClosePopup = document.querySelector('.img-upload__cancel'); // Кнопка закрытия POPUP
const hashtagsText = document.querySelector('.text__hashtags'); //Поле ввода хэштегов
const commentsText = document.querySelector('.text__description'); //Поле ввода комментария
const photoPreview= document.querySelector('.img-upload__preview'); // Превью фото для загрузки
const scaleControl = document.querySelector('.scale__control--value'); // Значение размера изображения

// Функция открытия POPUP
function openPopup () {
  popupWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.querySelector('.effect-level__slider').classList.add('hidden');
  photoPreview.value = uploadFile.value;
  scaleControl.value = SCALE_VALUE + PROCENT;
  hashtagsText.value = '';
  commentsText.value = '';
  uploadFile.value = '';
}


//Функция закрытия POPUP
function closePopup () {
  popupWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadFile.value = '';
}

//Обработчик закрытия POPUPпо кнопке ESC
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    popupWindow.classList.add('hidden');
    document.body.classList.remove('modal-open');
    uploadFile.value = '';
  }
});

//Обработичик закрытия по крестику
buttonClosePopup.addEventListener('click', closePopup);
//Обработчик открытия POPUP при загрузке изображения
uploadFile.addEventListener('change', openPopup);

export {closePopup};
