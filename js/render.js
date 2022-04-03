import {createUsersProfiles} from './data.js';

const pictureListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictureRendering = createUsersProfiles(25);

const pictureListFragment = document.createDocumentFragment();

pictureRendering.forEach(({url, comments, likes}) => {
  const  pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.classList.add('jsClick');
  pictureListFragment.appendChild(pictureElement);
});
pictureListElement.appendChild(pictureListFragment);

export {pictureRendering};
