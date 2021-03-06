import { uploadPhotoForm} from './form-popup.js';
import { pristine } from './validation.js';
import { sendData } from './api.js';
import { isEscapeKey, urlPost } from './util.js';


const messageSuccessTemplate = document.querySelector('#success').content.querySelector('.success');
const messageSuccess = messageSuccessTemplate.cloneNode(true);

const messageErrorTemplate = document.querySelector('#error').content.querySelector('.error');
const messageError = messageErrorTemplate.cloneNode(true);

const submitFormButton = uploadPhotoForm.querySelector('.img-upload__submit');

const showMessageModal = (message, classType) => {
  document.body.append(message);

  const buttonMessage = message.querySelector(`.${classType}__button`);

  const onMessageModalEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      // eslint-disable-next-line no-use-before-define
      removeMessageModal(message);
    }
  };
  // eslint-disable-next-line no-shadow
  const removeMessageModal = (message) => {
    message.remove();
    document.removeEventListener('keydown', onMessageModalEscKeydown);
  };

  buttonMessage.addEventListener('click', () => {
    removeMessageModal(message);
  });

  document.addEventListener('keydown', onMessageModalEscKeydown);

  document.addEventListener('click', (evt) => {
    const inner = message.querySelector(`.${classType}__inner`);
    const click = evt.composedPath().includes(inner);
    if (!click) {
      removeMessageModal(message);
    }
  });
};

const blockSubmitFormButton = () => {
  submitFormButton.disabled = true;
  submitFormButton.textContent = 'Публикую';
};

const unblockSubmitFormButton = () => {
  submitFormButton.disabled = false;
  submitFormButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = (closeForm) => {
  uploadPhotoForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitFormButton();

      sendData(
        urlPost,
        new FormData(evt.target),
        () => {
          unblockSubmitFormButton();
          closeForm();
          showMessageModal(messageSuccess, 'success');
        },
        () => {
          unblockSubmitFormButton();
          closeForm();
          showMessageModal(messageError, 'error');
        }
      );

      evt.target.reset();
    }
  });
};

export { setUserFormSubmit };
