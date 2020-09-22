import moment from '../node_modules/moment/dist/moment.js';

function updateTimer(time) {
    const timerEl = document.getElementById('timer');
    timerEl.innerText = time;
}

const time = moment(new Date()).format('L');
updateTimer(time);