import {createUsersProfiles} from './data.js';

const pictureListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture');
const pictureRendering = createUsersProfiles();

const pictureListFragment = document.createDocumentFragment();

pictureRendering.forEach(({url, likes, comments}) => {
  const  pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src.textContent = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureListFragment.appendChild(pictureElement);
});
pictureListElement.appendChild(pictureListFragment);
