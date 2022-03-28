import getRandomInt from './util.js';

const users = ['Евгений','Алина','Артём','Кирилл','Анастасия','Эдуард','Роман','Мия','Екатерина','Владислав'];
const commentsMessage = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const descriptionsPhotos = [
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
const createUsersProfiles = [];
const createComments = [];
const formatOne = '.jpg';
const formatTwo = '.svg';
const wayAvatar = 'img/avatar-';
const wayPhoto =  'photos/';

// Функция создания массива обьектов COMMENTS
const createComment = function () {
  for (let i = 1; i < 15; i++) {
    createComments[i] = {

      id: getRandomInt(1, 87),
      avatar: wayAvatar + getRandomInt(1, 6) + formatTwo,
      message: commentsMessage[getRandomInt(0, 5)],
      name: users[getRandomInt(0, 9)]
    };
  }
};
// Функция создания объекта пользователя
const createUserProfile = function () {
  for (let i = 1; i <= 25; i++) {
    createUsersProfiles[i] = {
      id: getRandomInt(1, 25),
      url: wayPhoto + getRandomInt(1, 25) + formatOne,
      description: descriptionsPhotos[getRandomInt(0, 8)],
      likes: getRandomInt(15, 200),
      comments: createComments
    };
  }
};
createComment();
createUserProfile();
