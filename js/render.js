import {createUsersProfiles} from './data.js';

const pictureListElement = document.querySelector('.picture');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const pictureRendering = createUsersProfiles();

const pictureListFragment = document.createDocumentFragment();

pictureRendering.forEach(({url, likes, comments}) => {
  const  pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.src').textContent = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureListFragment.appendChild(pictureElement);
});
pictureListElement.appendChild(pictureListFragment);
