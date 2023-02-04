import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime (data) {
    localStorage.setItem(STORAGE_KEY, data.seconds);
}


function setTime () {
    const currentTime = localStorage.getItem(STORAGE_KEY);
    if (currentTime) {
        player.setCurrentTime(currentTime);
    }
}

setTime();
