import { commentsValid } from './util.js';

const HASHTAG_REG_EXP = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const COMMENT_MAX_LENGTH = 140;

const hashtagsText = document.querySelector('.text__hashtags'); //Поле ввода хэштегов
const buttonSend = document.querySelector('.img-upload__submit'); //Кнопка отправки
const form = document.querySelector('.img-upload__form'); // Форма для загрузки изображения
const commentsText = document.querySelector('.text__description'); //Поле ввода описания

const pristine = new Pristine(form);

pristine.addValidator(
  hashtagsText,
  (value) => {
    if(value === '') {
      return true;
    }
    const hashtags = value.split(' ');
    return hashtags.every((hashtag) => HASHTAG_REG_EXP.test(hashtag));
  },
  'Хэштеги не корректны',
);

pristine.addValidator(
  hashtagsText,
  (value) => {
    const hashtags = value.split(' ');
    return hashtags.length <= 5;
  },
  'Нельзя использовать больше 5 хеш-тегов',
);

pristine.addValidator(
  hashtagsText,
  (value) => {
    const hashtags = value.toLowerCase().split(' ');
    return hashtags.every((hashtag) => hashtags.filter((tag) => tag === hashtag).length === 1);
  },
  'Один и тот же хэш-тег не может быть использован дважды',

);
pristine.addValidator(
  commentsText,
  (value) => commentsValid(value, COMMENT_MAX_LENGTH),
  `Не более ${COMMENT_MAX_LENGTH} символов`
);

//Обработчик отмены кнопки ESC на поле
hashtagsText.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    evt.stopPropagation();
  }
});

//Обработчик отмены кнопки ESC на поле
commentsText.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    evt.stopPropagation();
  }
});

const initUploadFormValidation = (onSuccessValidation) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formIsValid = pristine.validate();

    if(formIsValid) {
      buttonSend.disabled = true;
      const formData = new FormData(evt.target);
      onSuccessValidation(formData);
    }
  });
};

initUploadFormValidation();

export {initUploadFormValidation};
