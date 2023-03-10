const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

const color = {
  intervaID: null,

  startChangeBgColor() {
    refs.body.style.background = getRandomHexColor();
  },
  startBtn() {
    refs.start.setAttribute('disabled', 'disabled');
    refs.stop.removeAttribute('disabled', 'disabled');
    this.intervaID = setInterval(this.startChangeBgColor, 1000);
  },

  stopBtn() {
    clearInterval(this.intervaID);
    refs.stop.setAttribute('disabled', 'disabled');
    refs.start.removeAttribute('disabled', 'disabled');
  },
};

const onStartChangeBgColor = () => {
  color.startBtn();
};

const onStopChangeBgColor = () => {
  color.stopBtn();
};

refs.start.addEventListener('click', onStartChangeBgColor);
refs.stop.addEventListener('click', onStopChangeBgColor);
