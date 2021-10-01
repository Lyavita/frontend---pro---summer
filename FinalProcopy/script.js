class Obj {
  constructor(type, username, message) {
    this.type = type;
    this.payload = { username, message };
  }
}

let socket = new WebSocket("wss://fep-app.herokuapp.com/");

  
  // socket.onopen = function (e) {
  //   // let de = new Obj("message", "", "Ви вошла в чат");
  //   socket.send(JSON.stringify(dde));
  // }

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
      console.log(event.data);
     
      newMessages.push(event.data);
      localStorage.setItem('messages', JSON.stringify(newMessages));
//       if (localStorage['messages']) {
//         newMessages = JSON.parse(localStorage.getItem("messages"));
//         console.log(typeof newMessages);
//         // newMessages = newMessages.push(event.data);
//         localStorage.setItem('messages', JSON.stringify(newMessages));
//       } else {
//         // localStorage.setItem('messages', JSON.stringify(event.data));
//         // newMessages[0] = event.data;
// newMessages = JSON.parse(localStorage.getItem("messages"));
//         console.log(typeof newMessages);

//       }
      

//       console.log(localStorage.getItem('messages'));
//       console.log(JSON.parse(localStorage.getItem('messages')));
      // let nnn = JSON.parse(localStorage.getItem('messages'));
//       console.log(nnn);
      // nnn.push(event.data);
//       console.log(nnn);
//       localStorage.setItem('messages', JSON.stringify(nnn));
      console.log(JSON.parse(localStorage.getItem("messages")));
}
    


