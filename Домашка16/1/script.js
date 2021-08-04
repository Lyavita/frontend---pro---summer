// ПЕРВЫЙ ВАРИАНТ:

const personJohn = {
    name: "John",
    sayHello: function () {
        console.log(`Hello, I'm ${this.name}`);
    }
}

const sysAdmin = {
    name: "Bob",
    __proto__: personJohn
}

const clientNatalia = {
    name: "Natalia",
    __proto__: personJohn
}

personJohn.sayHello();
sysAdmin.sayHello();
clientNatalia.sayHello();

// ВТОРОЙ ВАРИАНТ:

// const personJohn = {
//     name: "John",
//     sayHello: function () {
//         console.log(`Hello, I'm ${this.name}`);
//     }
// }

// const sysAdmin = {
//     name: "Bob"
// }

// const clientNatalia = {
//     name: "Natalia"
// }

// Object.setPrototypeOf(sysAdmin, personJohn);
// Object.setPrototypeOf(clientNatalia, personJohn);

// personJohn.sayHello();
// sysAdmin.sayHello();
// clientNatalia.sayHello();










