

function getRandomInt (min, max) {                 //Информацию взял из источника: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  if (min > max){
    return 'Неверный диапазон';
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random()* (max - min + 1)) + min;
}
getRandomInt();

function commentsValid(string,max) {
  if (string.lenght > max) {
    return false;
  }

  return true;
}
commentsValid('Длинна строки', 5);

// Задание 2

// Массивы данных для работы
var users = ['Евгений','Алина','Артём','Кирилл','Анастасия','Эдуард','Роман','Мия','Екатерина','Владислав'];
var commentsMessage = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
var descriptionsPhotos = [
  'Я с парнем на Море!',
  'Здесь я был, теперь я дома уже.',
  'Красиво, вкусно, дорого!',
  'Онлайн гадания, ТАРО, чистая правда!',
  'Вечеринка в самом разгаре',
  'Ставки на спорт! НЕ ОБМАН',
  'ЗДЕСЬ МОГЛА БЫТЬ ВАША РЕКЛАМА!',
  'Медитация, йога, восход.',
  'Будь адаптивным как вода (Борис Ли)'
];
var createUsersProfiles = [];
var createComments = [];


// Функция создания массива обьектов COMMENTS
var createComment = function () {

  for (var i = 1; i < 15; i++) {
 createComments[i] = {

  id: getRandomInt(1, 87),
  avatar:'img/avatar-' + getRandomInt(1, 6) + '.svg',
  message: commentsMessage[getRandomInt(0, 5)],
  name: users[getRandomInt(0, 9)]
    }
  }
};
// Функция создания объекта пользователя
var createUserProfile = function () {
 for (var i = 1; i <= 25; i++) {

  createUsersProfiles[i] = {

    id: getRandomInt(1, 25),
    url: 'photos/' + getRandomInt(1, 25) + '.jpg',
    description: descriptionsPhotos[getRandomInt(0, 8)],
    likes: getRandomInt(15, 200),
    comments: createComments
  }
 }
};
//Вызов функций
createUserProfile();
createComment();

