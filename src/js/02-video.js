import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new Player(iframe);
const localStorageKey = `videoplayer-current-time`;
let saveTime = localStorage.getItem(localStorageKey);

if (saveTime) {
  iframePlayer.setCurrentTime(saveTime);
}
iframePlayer.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(localStorageKey, data.seconds);
  }),
  1000
);
