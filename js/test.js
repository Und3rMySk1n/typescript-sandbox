const Timer = require('tiny-timer')
const moment = require('moment');

function showTimeLeft(time) {
    console.log(moment(time).format('mm:ss'));
}

const timer = new Timer();
timer.on('tick', ms => showTimeLeft(ms));
timer.start(180000);

