const secondsEl = document.querySelector(".seconds");
const minutesEl = document.querySelector(".minutes");
const hoursEl = document.querySelector(".hours");
const secondsDigEl = document.querySelector(".second");
const minutesDigEl = document.querySelector(".minute");
const hoursDigEl = document.querySelector(".hour");
const digitalClock = document.querySelector(".digital-clock");

const date = new Date();

const hour = date.getHours() >= 12 ? date.getHours() - 12 : date.getHours();

const secondsPassed = date.getMinutes() * 60 + date.getSeconds();

let secDeg = date.getSeconds() * 6;
let minDeg = (secondsPassed * 6) / 60;
let hourDeg = ((hour * 3600 + secondsPassed) * 6) / 12 / 60;

const setHands = () => {
  secondsEl.style.transform = `translateY(-50%) rotate(${secDeg}deg)`;
  minutesEl.style.transform = `translateY(-50%) rotate(${minDeg}deg)`;
  hoursEl.style.transform = `translateY(-50%) rotate(${hourDeg}deg)`;
};

const setDigitalClockNums = () => {
  secondsDigEl.innerHTML = `${new Date().getSeconds()}`.padStart(2, "0");
  minutesDigEl.innerHTML = `${new Date().getMinutes()}`.padStart(2, "0");
  hoursDigEl.innerHTML = `${new Date().getHours()}`.padStart(2, "0");
};

setTimeout(() => {
  digitalClock.classList.remove("blink");

  setHands();
  setDigitalClockNums();

  setInterval(() => {
    if (secDeg === 360) {
      secDeg = 0;
    }
    if (minDeg === 360) {
      minDeg = 0;
    }
    if (hourDeg === 360) {
      hourDeg = 0;
    }

    secDeg += 6;
    minDeg += 6 / 60;
    hourDeg += 6 / 12 / 60;

    setHands();
    setDigitalClockNums();
  }, 1000);
}, 1000 - date.getMilliseconds());
