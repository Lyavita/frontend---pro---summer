function createUrl() {
    if (checkCityValuesEmpty(city.value)) {
        if (checkCountryValuesEmpty(country.value)) {
            url = `http://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&lang=ru&appid=c05330e71bf8270e12849a0e2a337297`;
        } else {
            url = `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=c05330e71bf8270e12849a0e2a337297`;
        }
        searchCity(url);
    } else {
        alert("Введите название города");
    }
}

function reverceKtoC(tempK) {
    let tempCel = tempK - 273.15;
    return tempCel;
}

function changeTempDegree(tempCel) {
    term.setAttribute("style", `height:${40 * 3.28 + (tempCel) * 3.28}px`);
}

function loadWeather(dat) {
    cityName.textContent = dat.name;
    temp.textContent = `${reverceKtoC(dat.main.temp).toFixed()}C${String.fromCharCode(176)}`;
    changeTempDegree(reverceKtoC(dat.main.temp));
    clouds.textContent = dat.weather[0]["description"];
    cloudsImg.innerHTML = '<img src="http://openweathermap.org/img/wn/' + dat.weather[0]['icon'] + '@2x.png">';
}

function searchCity(url) {
    fetch(url)
        .then(res => res.json())
        .then(function (data) {
            if (data.message == "city not found") {
                cityName.textContent = "На нашем глобусе нет такого города!";
                temp.textContent = "";
            } else {
                loadWeather(data);
            }
        })
        .catch(err => alert(err.message))
}

function checkCityValuesEmpty(a) {
    return a !== "";
}

function checkCountryValuesEmpty(b) {
    return b !== "";
}