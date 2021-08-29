const btnLoadToDos = document.querySelector("#btn-load-weather");
const city = document.querySelector("#input-city-field");
const country = document.querySelector("#input-country-field");
const term = document.querySelector("#term-real");
const cityName = document.querySelector("#city-name");
const date = document.querySelector("#date");
const temp = document.querySelector("#temp");
const clouds = document.querySelector("#clouds");
const cloudsImg = document.querySelector("#clouds-img");
let now = new Date().toLocaleDateString();
date.textContent = now;

let urlDefault = "http://api.openweathermap.org/data/2.5/weather?q=Одесса,UA&lang=ru&appid=c05330e71bf8270e12849a0e2a337297";

btnLoadToDos.addEventListener("click", createUrl);

fetch(urlDefault)
  .then(res => res.json())
  .then(data => loadWeather(data))