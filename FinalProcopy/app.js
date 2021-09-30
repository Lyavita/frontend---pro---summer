document.addEventListener("DOMContentLoaded", checkLocalStorage);

const container= document.getElementById('container');
const formUserLogin = document.getElementById('form-login');
const btnUserLogin = document.getElementById('btn-login');
const inputUserLogin = document.getElementById('input-nikname');
const header = document.getElementById('header');

const blockAskLoginFilling = document.getElementById('block-ask-login-filling');

const byebye = document.getElementById('byebye');

const greetBlock = document.getElementById('greet-block');
const greeting = document.getElementById('greet');
const btnUserExit = document.getElementById('btn-exit-user');
const btnEnterChat = document.getElementById('btn-enter-chat');

const chatBlockWrapper = document.getElementById('wrapper-chat-block');
const chatBlock = document.getElementById('chat-block');
const messages = document.getElementById('messages-block');
const message = document.getElementById('write-message-block');
const inputMessage = document.getElementById('input-message');
const btnSendMessage = document.getElementById("btn-send-message");

const checkbox = document.getElementById('checkbox_check');
const btnExitFromChat = document.getElementById('btn-exit-user-from-chat');
const btnReloadUser = document.getElementById('btn-reload-user');

btnUserLogin.addEventListener("click", checkLoginFilling);
btnUserExit.addEventListener('click', userExit);
btnEnterChat.addEventListener('click', goToChat);
btnReloadUser.addEventListener('click', reload);
btnSendMessage.addEventListener('click', sendMsg);
btnExitFromChat.addEventListener('click', closeSocket);

