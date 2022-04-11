import {inputScale, imgUploadPreview } from './effect-slider.js';

const buttonBigger = document.querySelector('.scale__control--bigger');
const buttonSmaller = document.querySelector('.scale__control--smaller');

const setScalePhoto = () => {
  const step = 25;
  const maxSize = 100;
  const coefficientCorrectStyleValue = 0.01;
  inputScale.value = '100%';
  let valueSize = parseInt(inputScale.value.match(/\d+/), 10);
  const setShowScale = () => {
    inputScale.value = `${valueSize}%`;
    imgUploadPreview.style.transform = `scale(${valueSize * coefficientCorrectStyleValue
    })`;
  };

  const onButtonSmallerSizeClick = () => {
    if (valueSize === step) {
      setShowScale();
    } else {
      valueSize = valueSize - step;
      setShowScale();
      return valueSize;
    }
  };
  buttonSmaller.addEventListener('click', onButtonSmallerSizeClick);
  const onButtonBiggerSizeClick = () => {
    if (valueSize === maxSize) {
      setShowScale();
    } else {
      valueSize = valueSize + step;
      setShowScale();
    }
  };
  buttonBigger.addEventListener('click', () => {
    onButtonBiggerSizeClick();
  });
};
setScalePhoto();

export {buttonBigger, buttonSmaller };
