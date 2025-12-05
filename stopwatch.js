let hours = 0, minutes = 0, seconds = 0;
let timer = null;
let running = false;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    display.innerText = `${h}:${m}:${s}`;
}

function startStopwatch() {
    if (!running) {
        running = true;
        startStopBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    } else {
        running = false;
        clearInterval(timer);
        startStopBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}

function resetStopwatch() {
    running = false;
    clearInterval(timer);
    hours = minutes = seconds = 0;
    updateDisplay();
    startStopBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
}

startStopBtn.addEventListener("click", startStopwatch);
resetBtn.addEventListener("click", resetStopwatch);
