const hours = document.getElementById("hours");
const minuts = document.getElementById("minuts");
const seconds = document.getElementById("seconds");

const day = document.getElementById("day");
const dayWeek = document.getElementById("day-week");
const month = document.getElementById("month");
const year = document.getElementById("year");

function setTimeN() {
    let now = new Date();
    
    hours.textContent = `${(now.getHours() < 10) ?'0' + now.getHours() : now.getHours()}`;
    minuts.textContent = `${(now.getMinutes() < 10) ? '0' + now.getMinutes() : now.getMinutes()}`;
    seconds.textContent = `${(now.getSeconds() < 10) ? '0' + now.getSeconds() : now.getSeconds()}`;

    let days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    let monthes = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];

    day.textContent = `${now.getDate()}`;
    dayWeek.textContent = `${days[now.getDay()]}`;
    month.textContent = `${monthes[now.getMonth()]}`;
    year.textContent = `${now.getFullYear()}`;

setInterval("setTimeN()", 1000);
}