const MAX_LENGTH_HASHTAGS = 5;
const REG_HASHTAGS = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const uploadPhotoForm = document.querySelector('.img-upload__form');
const inputHashtags = uploadPhotoForm.querySelector('.text__hashtags');


const isHashtagValid = (hashtag) => REG_HASHTAGS.test(hashtag);

const isNotSameElements = (hashtags) => {
  const lowercasedHashtags = hashtags.map((element) => element.toLowerCase());
  return hashtags.length === new Set(lowercasedHashtags).size;
};

const validateMaxLength = (hashtags, length) => hashtags.length <= length;

const pristine = new Pristine(uploadPhotoForm, {
  classTo: 'form__element',
  errorTextParent: 'form__element',
  errorTextClass: 'form__error-text',
});

const normalizeHashtags = (value) => {
  const hashtags = value.split(' ');
  return hashtags.filter((element) => element !== '');
};

const checkHandlerLength = (value) => validateMaxLength(normalizeHashtags(value), MAX_LENGTH_HASHTAGS);

const checkHandlerSameElements = (value) => isNotSameElements(normalizeHashtags(value));

const checkHandlerHashtag = (value) => {

  if (value === '') {
    return true;
  } else {
    return normalizeHashtags(value).every((element) => isHashtagValid(element));
  }
};

pristine.addValidator(
  inputHashtags,
  checkHandlerLength,
  `Максимальное количесвто хэштегов: ${MAX_LENGTH_HASHTAGS}`
);

pristine.addValidator(
  inputHashtags,
  checkHandlerSameElements,
  'Один и тот же хэш-тег не может быть использован дважды'
);

pristine.addValidator(
  inputHashtags,
  checkHandlerHashtag,
  'хэш-тег начинается с символа # и может состоять только из букв и чисел, максимальная длина одного хэш-тега 20 символов, включая решётку'
);

export { pristine };
