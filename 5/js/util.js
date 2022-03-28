//Функция по поиску случайного числа
function getRandomInt (min, max) {
  if (min > max){
    return 'Неверный диапазон';
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random()* (max - min + 1)) + min;
}
export {getRandomInt};

//Функция проверки строки
function commentsValid(string,max) {
  if (string.lenght > max) {
    return false;
  }

  return true;
}
export {commentsValid};

