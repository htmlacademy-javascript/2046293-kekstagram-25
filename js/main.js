function getRandomInt (min, max) {                 //Информацию взял из источника: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  if (max>=min){return 'Неверный диапазон';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()* (max - min + 1)) + min;
}
getRandomInt();

function commentsValid (stringTest, maxLenght) {
  if (stringTest > maxLenght){
    return false;
  }
  return true;
}
commentsValid();
