const minutesEl = document.querySelector ("#minutes")
const secondsEl = document.querySelector ("#seconds")
const milliSecondsEl = document.querySelector ("#milliSeconds")
const startBtnEl = document.querySelector ("#startBtn")
const pauseBtnEl = document.querySelector ("#pauseBtn")
const resumeBtnEl = document.querySelector ("#resumeBtn")
const resetBtnEl = document.querySelector ("#resetBtn")

let interval;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pausetimer)
resumeBtn.addEventListener("click", resumetimer)
resetBtn.addEventListener("click",resetTimer)

function startTimer(){

    interval = setInterval(() => {

        if(!isPaused){
            milliSeconds += 10 

            if(milliSeconds === 1000){
                seconds++;
                milliSeconds = 0
            }

            if(seconds === 60){
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            milliSecondsEl.textContent =  formatmilliseconds(milliSeconds);
        }
    }, 10)

startBtn.style.display = "none";
pauseBtn.style.display = "block";

}

function pausetimer() {
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resumetimer() {
    isPaused = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none"
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    milliSecondsEl.textContent = "000";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatmilliseconds (time) {
    return time < 100 ? `${time}`.padStart (3, "0") : time;
}