let isPaused = false;
let interval;

const title = document.createElement("h1");
document.body.appendChild(title);
title.textContent = 'Таймер';

const container = document.createElement('form');
container.id = 'timeForm';
document.body.appendChild(container);
const timeForm = document.querySelector('#timeForm')

const validLabel = document.createElement('label');
validLabel.innerText = "Введите время в формате мм:сс (от 00:00 до 59:59).";
validLabel.setAttribute('for', 'inputTimer');
container.appendChild(validLabel);

const inputTimer = document.createElement('input');
inputTimer.setAttribute('type', 'text');
inputTimer.setAttribute('required', '');
inputTimer.setAttribute('pattern', '^[0-5][0-9]:[0-5][0-9]$');
inputTimer.setAttribute('placeholder', 'мм:сс')
inputTimer.id = 'inputTimer';
container.appendChild(inputTimer);

const start = document.createElement('button');
start.setAttribute('type', 'submit');
start.innerText = 'start';

let minutes = 0;
let seconds = 0;

const containerTimer = document.createElement("h1");
containerTimer.id = 'containerTimer';
containerTimer.style = 'display: none';
containerTimer.innerText = formatTime(minutes, seconds);
document.body.appendChild(containerTimer);
const timer = document.querySelector("#containerTimer");

const pause = document.createElement('button');
pause.id = 'pause';
pause.innerText = 'pause';

const reset = document.createElement('button');
reset.id = 'reset';
reset.innerText = 'reset';

container.appendChild(start);
document.body.appendChild(pause);
document.body.appendChild(reset);

timeForm.addEventListener('submit', submitButton);
document.body.addEventListener('click', handlesButtons);


function submitButton(event) {
    event.preventDefault();
    const valueInput = inputTimer.value.split(':');
    inputTimer.setAttribute('readonly', '')
    minutes = Number(valueInput[0]);
    seconds = Number(valueInput[1]);
    localStorage.setItem("minutes", minutes);
    localStorage.setItem("seconds", seconds);
    localStorage.setItem("pause", isPaused);
    startTimer()
}

(function () {
    const storedMinutes = localStorage.getItem("minutes");
    const storedSeconds = localStorage.getItem("seconds");
    const storedPause = localStorage.getItem("pause");
    if (storedMinutes !== null && storedSeconds !== null) {
        inputTimer.setAttribute('readonly', '')
        minutes = Number(storedMinutes);
        seconds = Number(storedSeconds);
        isPaused = storedPause === 'true';
        if (!isPaused) {
            startTimer();
        }
    }
})();

function handlesButtons(event){
    const idEvent = event.target.id;
    if (idEvent === pause.id){
        pauseTimer()
    }else if (idEvent === reset.id){
        resetTimer()
    }
}

function formatTime(min, sec) {
    const formattedMin = min < 10 ? `0${min}` : min;
    const formattedSec = sec < 10 ? `0${sec}` : sec;
    return `${formattedMin}:${formattedSec}`;
}


function startTimer() {
    if (interval) return;
    isPaused = false;
    timer.textContent = formatTime(minutes, seconds);
    timer.style = 'display: block';

    interval = setInterval(function () {
        if (minutes === 0 && seconds === 0) {
            clearInterval(interval);
            interval = null;
            timer.textContent = "00:00";
            return;
        }
        if (seconds === 0) {
            --minutes
            seconds = 59;
        }else {
            --seconds
        }
        localStorage.setItem("minutes", minutes);
        localStorage.setItem("seconds", seconds);
        localStorage.setItem("pause", isPaused);
        timer.textContent = formatTime(minutes, seconds);
    }, 1000)
}
function pauseTimer() {
    if (!isPaused) {
        clearInterval(interval);
        interval = null;
        isPaused = true;
        localStorage.setItem("pause", isPaused);
    }else {
        startTimer()
    }
}
function resetTimer() {
    inputTimer.removeAttribute('readonly')
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    interval = null;
    timer.textContent = formatTime(minutes, seconds);
    timer.style = 'display: none';
    isPaused = false;
    localStorage.setItem("minutes", minutes);
    localStorage.setItem("seconds", seconds);
    localStorage.setItem("pause", isPaused);
}