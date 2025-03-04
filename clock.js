// Get references to the HTML elements
const clockElement = document.getElementById('clock');
const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const resetButton = document.getElementById('resetBtn');

let clockInterval;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function startClock() {
    clockInterval = setInterval(updateClock, 1000); 
}


function stopClock() {
    clearInterval(clockInterval); 
}
function resetClock() {
    clearInterval(clockInterval); 
    clockElement.textContent = '00:00:00'; 
}


startButton.addEventListener('click', startClock);
stopButton.addEventListener('click', stopClock);
resetButton.addEventListener('click', resetClock); 
