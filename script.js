const SHARE = document.querySelector('.share');
const ICON_SHARE = document.querySelector('.icon-share');
const ARROW = document.querySelector('.arrow-down');

ICON_SHARE.addEventListener('click', () => {
  if (!ICON_SHARE.classList.contains('icon-share-active')) {
    ICON_SHARE.src = './images/icon-share-white.svg';
    ICON_SHARE.classList.add('icon-share-active');
    SHARE.classList.add('show');
    ARROW.classList.add('show');
    return;
  }
  ICON_SHARE.src = './images/icon-share.svg';
  ICON_SHARE.classList.remove('icon-share-active');
  SHARE.classList.remove('show');
  ARROW.classList.remove('show');
});
