const btnLogin = document.getElementById('submit');
const fieldInput = document.getElementById('name');
const greetForm = document.getElementById('greet');
const formAuth = document.getElementById('forma');

function checkCookie() {
    if (!getCookie('username')) {
        writeCookie();
    }
    else {
        greetForm.style.display = "block";
        greetForm.textContent = `Добро пожаловать, ${getCookie('username')}`;
    }
}

function writeCookie() {
    formAuth.style.display = "block";
    btnLogin.addEventListener("click", checkEmpty);
}

function checkEmpty(event) {
    if (fieldInput.value == "") {
        alert('Вы не ввели имя! А придется!');
    }
    else {
        event.preventDefault();
        formAuth.style.display = "none";
        greetForm.style.display = "block";
        greetForm.textContent = `Добро пожаловать, ${fieldInput.value}`;
        setCookie("username", `${fieldInput.value}`);
        console.log(document.cookie);
    }
}

function setCookie(name, value) {
    document.cookie = name + "=" + value;
};

function getCookie(name) {
    var nam = name + "=";
    var arr = document.cookie.split(';');
    for (var i = 0; i < arr.length; i++) {
        var c = arr[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(name) == 0) return c.substring(nam.length, c.length);
    }
    return null;
}