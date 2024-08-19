'use strict';

const unemployedDate = new Date('08/14/2024 07:33:00');
const hoursInDay = 24;
const minutesInHour = 60;
const secondsInMinute = 60;
const millisecondsInSecond = 1000;

const countDays = () => {
    const currentDate = new Date();

    const difference = currentDate.getTime() - unemployedDate.getTime();

    const days = Math.floor(difference / (hoursInDay*minutesInHour*secondsInMinute*millisecondsInSecond));
    const daysRemaining = difference % (hoursInDay*minutesInHour*secondsInMinute*millisecondsInSecond);

    const hours = Math.floor(daysRemaining / (minutesInHour*secondsInMinute*millisecondsInSecond));
    const hoursRemaining = daysRemaining % (minutesInHour*secondsInMinute*millisecondsInSecond);

    const minutes = Math.floor(hoursRemaining / (secondsInMinute*millisecondsInSecond));
    const minutesRemaining = hoursRemaining % (secondsInMinute*millisecondsInSecond);

    const seconds = Math.floor(minutesRemaining / millisecondsInSecond);
    
    console.log(days, hours, minutes, seconds);
    
    document.querySelector('.days').innerHTML = days + " DAYS";
    document.querySelector('.hours').innerHTML = hours + " HRS";
    document.querySelector('.minutes').innerHTML = minutes + " MINS";
    document.querySelector('.seconds').innerHTML = seconds + " SECS";
}

setInterval(countDays, millisecondsInSecond);