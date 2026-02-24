
let timer;
let isRunning = false;

let seconds = 0;
let minutes = 0;
let hours = 0;

let lapCount = 1;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("startBtn").addEventListener("click", startStopwatch);
document.getElementById("pauseBtn").addEventListener("click", pauseStopwatch);
document.getElementById("resetBtn").addEventListener("click", resetStopwatch);
document.getElementById("lapBtn").addEventListener("click", recordLap);
document.getElementById("clearBtn").addEventListener("click", clearLaps);

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.innerText = `${h}:${m}:${s}`;
}

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;

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
  }
}

function pauseStopwatch() {
  clearInterval(timer);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;

  seconds = 0;
  minutes = 0;
  hours = 0;
  lapCount = 1;

  updateDisplay();
  laps.innerHTML = "";
}

function recordLap() {
  if (isRunning) {
    let lapTime = display.innerText;

    let li = document.createElement("li");
    li.innerText = `Lap ${lapCount}: ${lapTime}`;

    laps.appendChild(li);
    lapCount++;
  }
}

function clearLaps() {
  laps.innerHTML = "";
  lapCount = 1;
}

updateDisplay();