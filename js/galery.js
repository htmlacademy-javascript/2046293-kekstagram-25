import { isEscapeKey } from './util.js';

const MIN_NUMBER_COMMENTS = 5;

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const buttonCancel = bigPicture.querySelector('.big-picture__cancel');
const usersPhotos = document.querySelector('.pictures');

// Открытие фото
const openPicture = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

// Закрытие фото
const closePicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

// Создает комментарий
const createComment = (item, index) => {
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');

  const newCommentImg = document.createElement('img');
  newCommentImg.classList.add('social__picture');
  newCommentImg.src = item.avatar;
  newCommentImg.alt = item.name;
  newCommentImg.width = '35';
  newCommentImg.height = '35';
  newComment.append(newCommentImg);

  const newCommentText = document.createElement('p');
  newCommentText.textContent = item.message;
  newComment.append(newCommentText);

  if (index >= MIN_NUMBER_COMMENTS) {
    newComment.classList.add('hidden');
  }

  socialComments.append(newComment);
};

// Отрисовка  фотографий
const renderPhoto = (photoData) => {
  const userPhotoElement = pictureTemplate.cloneNode(true);
  userPhotoElement.querySelector('.picture__img').src = photoData.url;
  userPhotoElement.querySelector('.picture__likes').textContent = photoData.likes;
  userPhotoElement.querySelector('.picture__comments').textContent = photoData.comments.length;

  usersPhotos.append(userPhotoElement);

  userPhotoElement.addEventListener('click', () => {
    openPicture();

    bigPictureImg.src = photoData.url;
    likesCount.textContent = photoData.likes;
    commentsCount.textContent = photoData.comments.length;
    socialCaption.textContent = photoData.description;
    socialComments.innerHTML = '';

    const comments = photoData.comments;

    const commentsNumber = bigPicture.querySelector('.comments-number');
    const commentsLoader = bigPicture.querySelector('.social__comments-loader');

    commentsLoader.classList.remove('hidden');
    commentsNumber.textContent = MIN_NUMBER_COMMENTS;

    if (comments.length <= MIN_NUMBER_COMMENTS) {
      commentsLoader.classList.add('hidden');
      commentsNumber.textContent = comments.length;
    }

    comments.forEach(createComment);

    const commentsVisual = () => {
      let hiddenComments = Array.from(bigPicture.querySelectorAll('.social__comment.hidden'));

      if (hiddenComments.length <= MIN_NUMBER_COMMENTS) {
        commentsLoader.classList.add('hidden');
        commentsNumber.textContent = comments.length;
      } else {
        hiddenComments = hiddenComments.slice(0, MIN_NUMBER_COMMENTS);
        commentsNumber.textContent = parseInt(commentsNumber.textContent, 10) + MIN_NUMBER_COMMENTS;
      }
      hiddenComments.forEach((comment) => {
        comment.classList.remove('hidden');
      });
    };
    const onUserEscKey = (evt) => {
      if(isEscapeKey(evt)) {
        closePicture();
        document.removeEventListener('keydown', onUserEscKey);
        commentsLoader.removeEventListener('click', commentsVisual);
      }
    };

    commentsLoader.addEventListener('click', commentsVisual);

    buttonCancel.addEventListener('click', ()=> {
      bigPicture.classList.add('hidden');
      document.body.classList.remove('modal-open');
      commentsLoader.removeEventListener('click', commentsVisual);
    });

    document.addEventListener('keydown', onUserEscKey);
  });
};

const renderPhotoDataList = (similarPhotoData) => {
  similarPhotoData.forEach((photoData) => {
    renderPhoto(photoData);
  });
};

export { usersPhotos, renderPhotoDataList };
