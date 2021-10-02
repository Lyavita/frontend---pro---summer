import { inputMessage, messages, arrayOfMsgForReserv } from './app.js';
export let socket;
import { Obj } from './script';
  
export function createNewConnection() {
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

  arrayOfMsgForReserv.push(event.data);
  localStorage.setItem('messages', JSON.stringify(arrayOfMsgForReserv));
  }
  
  socket.onopen = function (e) {
  let msgEnter = new Obj("message", "", "Ви вошла в чат");
  socket.send(JSON.stringify(msgEnter));
  }
    
  let messagesContent = document.querySelectorAll("div#messages-block > p");
  messagesContent.forEach((item) => item.remove());
  let res = JSON.parse(localStorage.getItem('messages'));
  res.forEach(function (item) {
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
  });
}
