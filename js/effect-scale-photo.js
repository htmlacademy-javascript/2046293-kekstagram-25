import {inputScale, imgUploadPreview } from './effect-slider.js';

const buttonBigger = document.querySelector('.scale__control--bigger');
const buttonSmaller = document.querySelector('.scale__control--smaller');

const STEP_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

const changeScale = (number) => {
  imgUploadPreview.style.transform = `scale(${number/MAX_SCALE})`;
};

buttonBigger.disabled = true;

buttonBigger.addEventListener('click', () => {
  let numberScaleValue = parseInt(inputScale.value.match(/\d+/), 10);
  numberScaleValue += STEP_SCALE;
  inputScale.value =  `${numberScaleValue}%`;

  if (numberScaleValue === MAX_SCALE) {
    buttonBigger.disabled = true;
  }
  buttonSmaller.disabled = false;

  changeScale(numberScaleValue);
});

buttonSmaller.addEventListener('click', () => {
  let numberScaleValue = parseInt(inputScale.value.match(/\d+/), 10);
  numberScaleValue -= STEP_SCALE;
  inputScale.value =  `${numberScaleValue}%`;

  buttonBigger.disabled = false;
  if (numberScaleValue === MIN_SCALE) {
    buttonSmaller.disabled = true;
  }

  changeScale(numberScaleValue);
});

export {buttonBigger, buttonSmaller};

