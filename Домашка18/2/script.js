const btnLogin = document.getElementById('submit');
const fieldInput = document.getElementById('name');
const greetForm = document.getElementById('greet');
const formAuth = document.getElementById('forma');

function checkLocalStorage() {
  if (!localStorage.getItem('username')) {
    writeToLocalStorage();
  }
  else {
    greetForm.style.display = "block";
    greetForm.textContent = `Добро пожаловать, ${localStorage.getItem('username')}`;
  }
}

function writeToLocalStorage() {
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
    localStorage.setItem('username', `${fieldInput.value}`)
  }
}

