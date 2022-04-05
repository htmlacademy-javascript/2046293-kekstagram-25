//Функция по поиску случайного числа
function getRandomInt (min, max) {
  if (min > max){
    return 'Неверный диапазон';
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random()* (max - min + 1)) + min;
}
//Функция проверки строки
function commentsValid(value,max) {
  if (value.lenght > max) {
    return false;
  }

  return true;
}

//Создаёт элемент LI
const createComment = function (src, alt, p) {

  const elementLi = document.createElement('li');
  elementLi.classList.add('social__comment');

  const elementImg = document.createElement('img');
  elementImg.classList.add('social__picture');

  const elementP = document.createElement('p');
  elementP.classList.add('social__text');
  elementLi.appendChild(elementImg);
  elementLi.appendChild(elementP);
  elementImg.setAttribute('src', src );
  elementImg.setAttribute('alt', alt);
  elementImg.setAttribute('width', 35);
  elementImg.setAttribute('height', 35);
  elementP.textContent = p;
  return elementLi;
};

//кнопка ESC
const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInt, commentsValid, createComment, isEscapeKey};
