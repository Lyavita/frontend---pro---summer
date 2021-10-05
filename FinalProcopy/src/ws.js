import { inputMessage, messages, arrayOfMsgForReserv, usersBlock, usersArray} from './app.js';
export let socket;
import { Obj } from './script';
import { checkCheckbox, checkNotEmptyField } from './function.js';
 
export function createNewConnection() {
  socket = new WebSocket("wss://fep-app.herokuapp.com/");
  let oldMsg;

  if (localStorage.getItem('messages') !== null) {
    oldMsg = JSON.parse(localStorage.getItem('messages'));
    } else {
    oldMsg = [];
  }
  
  socket.onmessage = function (event) {
    inputMessage.placeholder = "";
    if (checkNotEmptyField(inputMessage) || JSON.parse(event.data).payload.message !== ''){
    inputMessage.value = "";
    arrayOfMsgForReserv.push(event.data);
    let allMsg = oldMsg.concat(arrayOfMsgForReserv);
    localStorage.setItem('messages', JSON.stringify(allMsg));
      writeMsgToMsgblock(event.data);
    } else {
      inputMessage.placeholder = "Ваше сообщение";
    }
  }
 
  socket.onopen = function (e) {
    oldMsg.forEach(function (item) {
    writeMsgToMsgblock(item);
    });
    let msgEnter = new Obj("message", "", `${localStorage.getItem('username')} вошел в чат`);
    socket.send(JSON.stringify(msgEnter));

  }
  
  socket.onclose = function(evt) {
    if (evt.code !== 1000) {
        checkCheckbox();
    }
  }
}
 
function writeMsgToMsgblock(parseObj) {
  let username = JSON.parse(parseObj).payload.username;
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  p1.textContent = username;
  p2.textContent = JSON.parse(parseObj).payload.message;
  if (username == `${localStorage.getItem('username')}`) {
    p1.style.color = '#5194DB';
    p2.style.color = "#66AEF2";
    p1.style.margin = `0 0 0 30px`;
    p2.style.margin = `0 0 20px 30px`;
  } else if (username == '') {
    p2.style.color = "#E8E2CF";
    p2.style.margin = "0 0 20px 0";
  } else {p1.style.color = '#9A93DB';
    p2.style.color = "#D4A9F5";
    p2.style.margin = "0 0 20px 0";
  }
  
  messages.append(p1);
  messages.append(p2);
  
  let h = messages.scrollHeight;
  messages.scrollTop = h;
    
  let p5 = document.createElement('p');
  if (!usersArray.has(username) && username !== `${localStorage.getItem('username')}` && username !== '') {
  p5.textContent = JSON.parse(parseObj).payload.username;
  usersBlock.append(p5);
  let h1 = usersBlock.scrollHeight;
  usersBlock.scrollTop = h1;
  usersArray.add(username);
  }
}