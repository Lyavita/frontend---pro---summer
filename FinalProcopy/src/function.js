import {greetBlock, formUserLogin, greeting, header, inputUserLogin, chatBlockWrapper, container, byebye, blockAskLoginFilling, inputMessage, messages, checkbox} from './app.js';
import { createNewConnection, socket } from './ws.js';
import { Obj } from './script';

export function checkLocalStorage() {
  if (localStorage.getItem('username')) {
  greetBlock.style.display = "block";
  formUserLogin.style.display = "none";  
  greeting.textContent = `Hi, ${localStorage.getItem('username')}`;
  header.style.display = 'none';
  }
}

export function checkLoginFilling() {
  checkNotEmptyField(inputUserLogin) ? writeUsernameToLocalStorage() : askLoginFilling();
}

export function checkNotEmptyField(inputField) {
  if (inputField.value == "") {
  return 0;
  } else {
  return 1; }
}

export function writeUsernameToLocalStorage() {
  byebye.style.display = 'none';
  blockAskLoginFilling.style.display = 'none';
  greetBlock.style.display = "block";
  formUserLogin.style.display = "none";
  header.style.display = "none";
  localStorage.setItem('username', `${inputUserLogin.value}`);
  inputUserLogin.value = "";
  greeting.textContent = `Hi, ${localStorage.getItem('username')}`;
}

export function askLoginFilling() {
  byebye.style.display = 'none';
  blockAskLoginFilling.style.display = 'block';
  blockAskLoginFilling.textContent = "You should enter The Name!";
}

export function userExit() {
  byebye.style.display = 'block';
  formUserLogin.style.display = 'block';
  byebye.textContent = `Byebye, ${localStorage.getItem('username')}`;
  greetBlock.style.display = "none";
  localStorage.clear();
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
  let msgCloseSocket = new Obj("message", "", `${localStorage.getItem('username')} вышел`);
  socket.send(JSON.stringify(msgCloseSocket));
  setTimeout(() => {socket.close(1000, "работа закончена")
  }, 5000);
  exitFromChat();
}

export function sendMsg() {
  let newMsg = new Obj("message", `${localStorage.getItem('username')}`, `${inputMessage.value}`);
  if (socket.readyState == 1) {
  socket.send(JSON.stringify(newMsg));
  } else {
  reportNoConnection();
  }
}

function reportNoConnection() {
  let p4 = document.createElement('p');
  p4.textContent = "Соединение не установлено, залогиньтесь";
  messages.append(p4);
  inputMessage.value = "";
}

export function checkCheckbox() {
if (checkbox.checked) {
  createNewConnection();
	}
	else {
	reportNoConnection();
	}
}
 
