import {getRandomInt} from './util.js';

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

// Функция генерирует массив с комментариями:
function generateComments (number) {
  const formatSvg = '.svg';
  const imgPath = 'img/avatar-';
  const createComments = [];
  for (let i = 0; i < number; i++) {
    createComments[i] = {
      id: getRandomInt(1, 87),
      avatar: imgPath + getRandomInt(1, 6) + formatSvg,
      message: commentsMessage[getRandomInt(0, 5)],
      name: users[getRandomInt(0, 9)]
    };
  }

  return createComments;
}
// Функция создает пользовательские профили с комментариями:
function createUsersProfiles (number) {
  const formatJpg = '.jpg';
  const photoPath =  'photos/';
  const profiles = [];
  for (let i = 0; i < number; i++) {
    profiles[i] = {
      id: getRandomInt(1, 25),
      url: photoPath + getRandomInt(1, 25) + formatJpg,
      description: descriptionsPhotos[getRandomInt(0, 8)],
      likes: getRandomInt(15, 200),
      comments: generateComments(15)
    };
  }
  return profiles;
}

export {createUsersProfiles, generateComments};
