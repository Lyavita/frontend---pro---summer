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
    let p4 = document.createElement('p');
    p4.textContent = "Соединение не установлено";
    messages.append(p4);
    // console.log();
  }

  console.log(JSON.parse(localStorage.getItem('messages')));
  let res = JSON.parse(localStorage.getItem('messages'));
  console.log(typeof res[0]);
console.log(JSON.parse(res[0]).payload.username);
  console.log(JSON.parse(res[0]).payload.message);
  res.forEach(function (item) 
  {console.log(JSON.parse(item).payload.username)
  let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      p1.textContent = JSON.parse(item).payload.username;
      p2.textContent = JSON.parse(item).payload.message;
      if (p1.textContent == 'Ви') {
        p1.style.color = 'red';
        p2.style.color = 'red';
      }
      messages.append(p1);
      messages.append(p2);
}
  
  );
}

 

function exitFromChat() {
  chatBlockWrapper.style.display = 'none';
  container.style.display = 'block';
}

function closeSocket() {
  let tte = new Obj("message", "", "Ви вышла");
  socket.send(JSON.stringify(tte));
  setTimeout(() => {socket.close(1000, "работа закончена")
  }, 2000);
  exitFromChat();
}

function sendMsg() {
  let fr = new Obj("message", "Ви", `${inputMessage.value}`);
  
  if (socket.readyState == 1) {
    socket.send(JSON.stringify(fr));
  } else {
    let p4 = document.createElement('p');
    p4.textContent = "Соединение не установлено, залогиньтесь";
    messages.append(p4);
    // userEnterChat(fr);
  }
}
 
function reload() {
  socket = new WebSocket("wss://fep-app.herokuapp.com/");

  socket.onmessage = function (event) {
      inputMessage.value = "";
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      p1.textContent = JSON.parse(event.data).payload.username;
      p2.textContent = JSON.parse(event.data).payload.message;
      if (p1.textContent == 'Ви') {
        p1.style.color = 'red';
        p2.style.color = 'red';
      }
      messages.append(p1);
      messages.append(p2);
  }
  
   socket.onopen = function (e) {
    let de = new Obj("message", "", "Ви вошла в чат");
    socket.send(JSON.stringify(de));
  }
  
}
