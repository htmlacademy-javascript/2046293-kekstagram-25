import {pictureRendering} from './render.js';
import {createComment} from './util.js';


const bigPicture = document.querySelector('.big-picture');
const smallPictures = document.querySelectorAll('.jsClick');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = document.querySelector('.social__comments');
const socialCaption = document.querySelector('.social__caption');
const socialCommentCount = document.querySelector('.social__comment-count'); //Число показанных комментариев
const commentsLoader = document.querySelector('.comments-loader'); //Кнопка для загрузки комментариев
const buttonCancel = document.querySelector('.big-picture__cancel');

for (let i = 0; i < smallPictures.length; i++) {
  smallPictures[i].addEventListener('click', ()=> {
    bigPictureImg.src = pictureRendering[i].url;
    likesCount.textContent = pictureRendering[i].likes;
    commentsCount.textContent = pictureRendering[i].comments.length;
    socialCaption.textContent = pictureRendering[i].description;
    bigPicture.classList.remove('hidden');
    socialCommentCount.classList.remove('hidden');
    document.body.classList.add('modal-open');
    socialComments.innerHTML = '';
    for (let j = 0; j < 5; j++){
      const src = pictureRendering[i].comments[j].avatar;
      const alt = pictureRendering[i].comments[j].name;
      const p = pictureRendering[i].comments[j].message;
      socialComments.appendChild(createComment( src, alt, p));
      commentsLoader.classList.remove('hidden');
    }
    for (let j = 5; j < 10; j++){
      commentsLoader.addEventListener('click', () => {
        const src = pictureRendering[i].comments[j].avatar;
        const alt = pictureRendering[i].comments[j].name;
        const p = pictureRendering[i].comments[j].message;
        socialComments.appendChild(createComment( src, alt, p));
      });
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
