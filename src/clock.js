const time = document.querySelector(
  ".main-column:last-child .main-column-center-left .main-center-left_clock .time"
);

function loadTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  time.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }:${second < 10 ? `0${second}` : second}`;
}

function init() {
  loadTime();
  setInterval(loadTime, 1000);
}
init();
