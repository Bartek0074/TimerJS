const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');
const infoBtn = document.querySelector('.fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');
const colorBtn = document.querySelector('.fa-brush');
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
const colors = document.querySelector('.colors');
const root = document.querySelector(':root');

let countTime;
let minutes = 0;
let seconds = 0;

let timesArr = [];

const handleStart = () => {
    clearInterval(countTime);

    countTime = setInterval(() => {
        if (seconds < 9) {
            seconds++;
            stopwatch.textContent = `${minutes}:0${seconds}`
        }
        else if (seconds < 59) {
            seconds++;
            stopwatch.textContent = `${minutes}:${seconds}`

        }
        else {
            minutes++;
            seconds = 0;
            stopwatch.textContent = `${minutes}:00`
        }
    }, 1000);
}

const handlePause = () => {
    clearInterval(countTime);
}

const handleStop = () => {
    time.textContent = stopwatch.textContent;

    if (stopwatch.textContent !== '0:00'){
        time.style.visibility = 'visible';
        timesArr.push(stopwatch.textContent)
        console.log(timesArr)
    }

    clearStuff();
}

const handleReset = () => {
    clearStuff();
    timesArr = [];
    time.style.visibility = 'hidden';
}

const clearStuff = () => {
    clearInterval(countTime);
    minutes = 0;
    seconds = 0;
    timeList.textContent = '';
    stopwatch.textContent = '0:00'
}

const showHistory = () => {
    timeList.textContent = '';
    let num = 1;

    timesArr.forEach(time => {
        const newTime = document.createElement('li');
        newTime.innerHTML = `Record № ${num}: <span>${time}</span>`;
        timeList.appendChild(newTime);
        num++;
    })
}

const showModal = () => {
    modalShadow.style.display = 'block';
    modalShadow.classList.add('modal-animation');
}

const closeModal = () => {
    modalShadow.style.display = 'none';
    modalShadow.classList.remove('modal-animation');
}

const handleColor = (color) => {
    root.style.setProperty('--first-color', color)
}

const handleColorsBar = () => {
    colors.classList.toggle('show-colors');
}

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', showHistory);

infoBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', e => e.target === modalShadow ? closeModal() : false);

colorOne.addEventListener('click', () => handleColor('rgb(250, 20, 6)'));
colorTwo.addEventListener('click', () => handleColor('rgb(0, 140, 255)'));
colorThree.addEventListener('click', () => handleColor('rgb(0, 255, 42)'));
colorBtn.addEventListener('click', handleColorsBar);