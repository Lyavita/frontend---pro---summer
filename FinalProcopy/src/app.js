import * as myFunstion from './function.js';
import { createNewConnection } from './ws.js';
import '../css/style.css';

document.addEventListener("DOMContentLoaded", myFunstion.checkLocalStorage);
export let arrayOfMsgForReserv = [];

export const container= document.getElementById('container');
export const formUserLogin = document.getElementById('form-login');
export const btnUserLogin = document.getElementById('btn-login');
export const inputUserLogin = document.getElementById('input-nikname');
export const header = document.getElementById('header');

export const blockAskLoginFilling = document.getElementById('block-ask-login-filling');

export const byebye = document.getElementById('byebye');

export const greetBlock = document.getElementById('greet-block');
export const greeting = document.getElementById('greet');
export const btnUserExit = document.getElementById('btn-exit-user');
export const btnEnterChat = document.getElementById('btn-enter-chat');

export const chatBlockWrapper = document.getElementById('wrapper-chat-block');
export const chatBlock = document.getElementById('chat-block');
export const messages = document.getElementById('messages-block');
export const message = document.getElementById('write-message-block');
export const inputMessage = document.getElementById('input-message');
export const btnSendMessage = document.getElementById("btn-send-message");

export const checkbox = document.getElementById('checkbox_check');
export const btnExitFromChat = document.getElementById('btn-exit-user-from-chat');
export const btnReloadUser = document.getElementById('btn-reload-user');

btnUserLogin.addEventListener("click", myFunstion.checkLoginFilling);
btnUserExit.addEventListener('click', myFunstion.userExit);
btnEnterChat.addEventListener('click', myFunstion.goToChat);
btnReloadUser.addEventListener('click', createNewConnection);
btnSendMessage.addEventListener('click', myFunstion.sendMsg);
btnExitFromChat.addEventListener('click', myFunstion.closeSocket);

