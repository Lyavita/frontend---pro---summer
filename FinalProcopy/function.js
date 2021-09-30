function checkLocalStorage() {
  if (localStorage.getItem('username')) {
  greetBlock.style.display = "block";
  formUserLogin.style.display = "none";  
    greeting.textContent = `Добро пожаловать, ${localStorage.getItem('username')}`;
    header.style.display = 'none';
  }
}

function checkLoginFilling() {
  checkCorrectLogin() ? writeUsernameToLocalStorage() : askLoginFilling();
}

function checkCorrectLogin() {
  if (inputUserLogin.value == "") {
  return 0;
  } else {
  return 1; }
}

function writeUsernameToLocalStorage() {
  byebye.style.display = 'none';
  blockAskLoginFilling.style.display = 'none';
  greetBlock.style.display = "block";
  formUserLogin.style.display = "none"; 
  localStorage.setItem('username', `${inputUserLogin.value}`);
  inputUserLogin.value = "";
  greeting.textContent = `Добро пожаловать, ${localStorage.getItem('username')}`;
}

function askLoginFilling() {
  byebye.style.display = 'none';
  blockAskLoginFilling.style.display = 'block';
  blockAskLoginFilling.textContent = "Вы не ввели имя! А придется!";
}

function userExit() {
  byebye.style.display = 'block';
  byebye.textContent = `Byebye, ${localStorage.getItem('username')}`;
  greetBlock.style.display = "none";
  localStorage.clear();
  formUserLogin.style.display = 'block';
}

function goToChat() {
  container.style.display = 'none';
  chatBlockWrapper.style.display = 'block';
  let dde = new Obj("message", "", "Ви вошла в чат");
  // let eew = new Obj("message", "", "Соединение не установлено");
  if (socket.readyState == 1) {
    socket.send(JSON.stringify(dde));
  } else {
    console.log("Соединение не установлено");
  }
}

function exitFromChat() {
  chatBlockWrapper.style.display = 'none';
  container.style.display = 'block';
}

function closeSocket() {
  console.log(socket.readyState);
  let tte = new Obj("message", "", "Ви вышла");
  socket.send(JSON.stringify(tte));
  console.log(socket.readyState);
  setTimeout(() => {socket.close(1000, "работа закончена")
    
  }, 2000);
  
  
    // exitFromChat();
}

function sendMsg() {
    let fr = new Obj("message", "Ви", `${inputMessage.value}`);
  socket.send(JSON.stringify(fr));
    // userEnterChat(fr);
  }
 
function reload() {
  socket = new WebSocket("wss://fep-app.herokuapp.com/");
}
