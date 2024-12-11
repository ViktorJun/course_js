const title = document.createElement("h1");
document.body.appendChild(title);
title.textContent = 'Таймер';

let minutes = 1;
let seconds = 27;

const containerTimer = document.createElement("p");
document.body.appendChild(containerTimer);
containerTimer.textContent = formatTime(minutes, seconds);

function formatTime(min, sec) {
    const formattedMin = min < 10 ? `0${min}` : min;
    const formattedSec = sec < 10 ? `0${sec}` : sec;
    return `${formattedMin}:${formattedSec}`;
}

const timer = document.querySelector("p");

const interval = setInterval(function () {
    if (minutes === 0 && seconds === 0) {
        clearInterval(interval);
        timer.textContent = "00:00";
        return;
    }
    if (seconds === 0) {
        --minutes
        seconds = 59;
    }else {
        --seconds
    }
    timer.textContent = formatTime(minutes, seconds);
}, 1000)
