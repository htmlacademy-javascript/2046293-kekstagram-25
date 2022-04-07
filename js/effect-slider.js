const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const inputEffectNone = document.querySelector('#effect-none');
const inputEffectChrome = document.querySelector('#effect-chrome');
const inputEffectSepia = document.querySelector('#effect-sepia');
const inputEffectMarvin = document.querySelector('#effect-marvin');
const inputEffectPhobos = document.querySelector('#effect-phobos');
const inputEffectHeat = document.querySelector('#effect-heat');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const inputScale = document.querySelector('.scale__control--value');
const buttonBigger = document.querySelector('.scale__control--bigger');
const buttonSmaller = document.querySelector('.scale__control--smaller');

//Создание слайдера и запись значений
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});


sliderElement.noUiSlider.on('update', () => {
  valueElement.setAttribute('value', sliderElement.noUiSlider.get());
});

document.querySelectorAll('.effects__radio').forEach((element) => {
  element.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      imgUploadPreview.className = `effects__preview--${element.value}`;
    }
  });
});

// Настройки слайдера для эффектов
const updateForChromeSepia = () => {
  sliderElement.removeAttribute('disabled');
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1
  });
};

const updateForMarvin = () => {
  sliderElement.removeAttribute('disabled');
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1
  });
};

const updateForFobos = () => {
  sliderElement.removeAttribute('disabled');
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1
  });
};

const updateForHeat = () => {
  sliderElement.removeAttribute('disabled');
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
  });
};
//Обработчики эффектов
inputEffectHeat.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    updateForHeat();
    sliderElement.noUiSlider.on('update', () => {
      imgUploadPreview.setAttribute('style', `filter: brightness(${valueElement.value}); transform: scale(${inputScale.value})`);
      valueElement.setAttribute('value', sliderElement.noUiSlider.get());
    });
  }
});
inputEffectPhobos.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    updateForFobos();
    sliderElement.noUiSlider.on('update', () => {
      imgUploadPreview.setAttribute('style', `filter: blur(${valueElement.value}px); transform: scale(${inputScale.value})`);
      valueElement.setAttribute('value', sliderElement.noUiSlider.get());
    });
  }
});
inputEffectMarvin.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    updateForMarvin();
    sliderElement.noUiSlider.on('update', () => {
      imgUploadPreview.setAttribute('style', `filter: invert(${valueElement.value}%); transform: scale(${inputScale.value})`);
      valueElement.setAttribute('value', sliderElement.noUiSlider.get());
    });
  }
});
inputEffectSepia.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    updateForChromeSepia();
    sliderElement.noUiSlider.on('update', () => {
      imgUploadPreview.setAttribute('style', `filter: sepia(${valueElement.value}); transform: scale(${inputScale.value})`);
      valueElement.setAttribute('value', sliderElement.noUiSlider.get());
    });
  }
});
inputEffectChrome.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    updateForChromeSepia();
    sliderElement.noUiSlider.on('update', () => {
      imgUploadPreview.setAttribute('style', `filter: grayscale(${valueElement.value}); transform: scale(${inputScale.value})`);
      valueElement.setAttribute('value', sliderElement.noUiSlider.get());
    });
  }
});
inputEffectNone.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    imgUploadPreview.setAttribute('style', `transform: scale(${inputScale.value})`);
    sliderElement.setAttribute('disabled', true);
    sliderElement.classList.add('hidden');
  }
});
// Масштабирование
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

