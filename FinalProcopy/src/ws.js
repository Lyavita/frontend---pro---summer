import { inputMessage, messages, arrayOfMsgForReserv, usersBlock, usersArray} from './app.js';
export let socket;
import { Obj } from './script';
import { checkCheckbox } from './function.js';
 
export function createNewConnection() {
  socket = new WebSocket("wss://fep-app.herokuapp.com/");
  let ggg;

  if (localStorage.getItem('messages') !== null) {
    ggg = JSON.parse(localStorage.getItem('messages'));
    } else {
    ggg = [];
  }
  
  socket.onmessage = function (event) {
    inputMessage.value = "";
    arrayOfMsgForReserv.push(event.data);
    let hhh = ggg.concat(arrayOfMsgForReserv);
    localStorage.setItem('messages', JSON.stringify(hhh));
    writeMsgToMsgblock(event.data);
  }
 
  socket.onopen = function (e) {
    let msgEnter = new Obj("message", "", `${localStorage.getItem('username')} вошел в чат`);
    socket.send(JSON.stringify(msgEnter));
    let messagesContent = document.querySelectorAll("div#messages-block > p");
    messagesContent.forEach((item) => item.remove());
    setTimeout(() => {  
      ggg.forEach(function (item) {
      writeMsgToMsgblock(item);
      });
    }, 0);
  }
  
  socket.onclose = function(evt) {
    if (evt.code !== 1000) {
        checkCheckbox();
      }
  }
}

function writeMsgToMsgblock(parseObj) {
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  p1.textContent = JSON.parse(parseObj).payload.username;
  p2.textContent = JSON.parse(parseObj).payload.message;
  if (p1.textContent == `${localStorage.getItem('username')}`) {
    p1.style.color = 'red';
    p2.style.color = 'red';
  }
  messages.append(p1);
  messages.append(p2);

  let h = messages.scrollHeight;
  messages.scrollTop = h;
  
  
  let p5 = document.createElement('p');
  if (!usersArray.has(JSON.parse(parseObj).payload.username) && JSON.parse(parseObj).payload.username !== `${localStorage.getItem('username')}` && JSON.parse(parseObj).payload.username !== '') {
  p5.textContent = JSON.parse(parseObj).payload.username;
    usersBlock.append(p5);
    let h1 = usersBlock.scrollHeight;
  usersBlock.scrollTop = h1;
  usersArray.add(JSON.parse(parseObj).payload.username);
  }
}