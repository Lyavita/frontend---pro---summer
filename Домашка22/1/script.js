const btnLoadToDos = document.querySelector("#btn-load-weather");
btnLoadToDos.addEventListener("click", () => loadWeather());
const city = document.querySelector("#input-city-field");
const country = document.querySelector("#input-country-field");
const country1 = document.querySelector("#input-country-field1");
console.log(country1);
let url

function loadWeather() {
  if (checkCityValuesEmpty(city.value)) {
    if (checkCountryValuesEmpty(country1.value)) {
      url = `http://api.openweathermap.org/data/2.5/weather?q=${city.value},${country1.value}&appid=c05330e71bf8270e12849a0e2a337297`;
      console.log(url);  
    } else {
      url = `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=c05330e71bf8270e12849a0e2a337297`;
    console.log(url);
    }
fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(alert("Что-то пошло не так.. Возможно, на нашей карте нет такого города.."))
  } else {
    alert("Введите название города")
  }
}
 
function checkCityValuesEmpty(a) {
      return a !== "";
}
  
function checkCountryValuesEmpty(b) {
      return b !== "";
}
