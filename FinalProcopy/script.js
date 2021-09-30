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
    }

