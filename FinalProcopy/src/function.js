import {greetBlock, formUserLogin, greeting, header, inputUserLogin, chatBlockWrapper, container, byebye, blockAskLoginFilling, inputMessage, messages} from './app.js';
import { createNewConnection, socket } from './ws.js';
import { Obj } from './script';
//  export class Obj {
//   constructor(type, username, message) {
//     this.type = type;
//     this.payload = { username, message };
//   }
// }

export function checkLocalStorage() {
  if (localStorage.getItem('username')) {
  greetBlock.style.display = "block";
  formUserLogin.style.display = "none";  
    greeting.textContent = `Добро пожаловать, ${localStorage.getItem('username')}`;
    header.style.display = 'none';
  }
}

export function checkLoginFilling() {
  checkCorrectLogin() ? writeUsernameToLocalStorage() : askLoginFilling();
}

export function checkCorrectLogin() {
  if (inputUserLogin.value == "") {
  return 0;
  } else {
  return 1; }
}

export function writeUsernameToLocalStorage() {
  byebye.style.display = 'none';
  blockAskLoginFilling.style.display = 'none';
  greetBlock.style.display = "block";
  formUserLogin.style.display = "none"; 
  localStorage.setItem('username', `${inputUserLogin.value}`);
  inputUserLogin.value = "";
  greeting.textContent = `Добро пожаловать, ${localStorage.getItem('username')}`;
}

export function askLoginFilling() {
  byebye.style.display = 'none';
  blockAskLoginFilling.style.display = 'block';
  blockAskLoginFilling.textContent = "Вы не ввели имя! А придется!";
}

export function userExit() {
  byebye.style.display = 'block';
  byebye.textContent = `Byebye, ${localStorage.getItem('username')}`;
  greetBlock.style.display = "none";
  localStorage.clear();
  formUserLogin.style.display = 'block';
}

export function goToChat() {
  createNewConnection();
  container.style.display = 'none';
  chatBlockWrapper.style.display = 'block';
}

export function exitFromChat() {
  chatBlockWrapper.style.display = 'none';
  container.style.display = 'block';
}

export function closeSocket() {
  let msgCloseSocket = new Obj("message", "", "Ви вышла");
  socket.send(JSON.stringify(msgCloseSocket));
  setTimeout(() => {socket.close(1000, "работа закончена")
  }, 5000);
  exitFromChat();
}

export function sendMsg() {
  let newMsg = new Obj("message", "Ви", `${inputMessage.value}`);
  
  if (socket.readyState == 1) {
    socket.send(JSON.stringify(newMsg));
  } else {
    let p4 = document.createElement('p');
    p4.textContent = "Соединение не установлено, залогиньтесь";
    messages.append(p4);
  }
}
 
