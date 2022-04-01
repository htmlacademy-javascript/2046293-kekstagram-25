import {pictureRendering} from './render.js';
import {createComment} from './util.js';


const bigPicture = document.querySelector('.big-picture');
const smallPictures = document.querySelectorAll('.jsClick');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = document.querySelector('.social__comments');
const socialCaption = document.querySelector('.social__caption');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const buttonCancel = document.querySelector('.big-picture__cancel');

for (let i = 0; i < smallPictures.length; i++) {
  smallPictures[i].addEventListener('click', ()=> {
    bigPictureImg.src = pictureRendering[i].url;
    likesCount.textContent = pictureRendering[i].likes;
    commentsCount.textContent = pictureRendering[i].comments.length;
    socialCaption.textContent = pictureRendering[i].description;
    bigPicture.classList.remove('hidden');
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    document.body.classList.add('modal-open');
    socialComments.innerHTML = '';
    for (let j = 0; j < pictureRendering[i].comments.length; j++){
      socialComments.appendChild(createComment(pictureRendering[i].comments[j].avatar, pictureRendering[i].comments[j].name, pictureRendering[i].comments[j].message));
    }
  });
}

buttonCancel.addEventListener('click', ()=> {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
});
