const urlObject = 'https://25.javascript.pages.academy/kekstagram/data';
const urlPost =  'https://25.javascript.pages.academy/kekstagram';
// кнопка ESC
const isEscapeKey = (evt) => evt.key === 'Escape';

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};


export {isEscapeKey, debounce, urlObject, urlPost};
