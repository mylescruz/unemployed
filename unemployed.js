'use strict';

const unemployedDate = new Date('08/14/2024');
const hoursInADay = 24;
const minutesInAHour = 60;
const secondsInAMinute = 60;
const millisecondsInASecond = 1000;

const countDays = () => {
    let currentDate = new Date();
    console.log(unemployedDate.toLocaleDateString());
    console.log(currentDate.toLocaleDateString());

    let difference = new Date();
    difference = currentDate.getTime() - unemployedDate.getTime();

    let days = Math.floor(difference / (hoursInADay*minutesInAHour*secondsInAMinute*millisecondsInASecond));
    let daysRemaining = difference % (hoursInADay*minutesInAHour*secondsInAMinute*millisecondsInASecond);

    let hours = Math.floor(daysRemaining / (minutesInAHour*secondsInAMinute*millisecondsInASecond));
    let hoursRemaining = daysRemaining % (minutesInAHour*secondsInAMinute*millisecondsInASecond);

    let minutes = Math.floor(hoursRemaining / (secondsInAMinute*millisecondsInASecond));
    let minutesRemaining = hoursRemaining % (secondsInAMinute*millisecondsInASecond);

    let seconds = Math.floor(minutesRemaining / millisecondsInASecond);
    
    console.log(days, hours, minutes, seconds);
    
    document.querySelector('.days').innerHTML = days + " DAYS";
    document.querySelector('.hours').innerHTML = hours + " HRS";
    document.querySelector('.minutes').innerHTML = minutes + " MINS";
    document.querySelector('.seconds').innerHTML = seconds + " SECS";
}

setInterval(countDays, millisecondsInASecond);