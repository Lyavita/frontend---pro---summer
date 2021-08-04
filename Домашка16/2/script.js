// ПЕРВЫЙ ВАРИАНТ

function Person(name) {
    this.name = name;
    this.sayHello = function () {
        console.log(`Hello, I'm ${this.name}`);
    }
}

function Employee(name) {
    this.name = name;
}

function Client(name) {
    this.name = name;
}

Employee.prototype = new Person();
Client.prototype = new Person();

const personJohn = new Person("John");
const sysAdmin = new Employee("Bob");
const clientNatalia = new Client("Natalia");

personJohn.sayHello();
sysAdmin.sayHello();
clientNatalia.sayHello();

// ***************************************************************************************************

// ВТОРОЙ ВАРИАНТ:

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayHello = function () {
//     console.log(`Hello, I'm ${this.name}`);
// }

// function Employee(name) {
//     this.name = name;
// }

// function Client(name) {
//     this.name = name;
// }

// Employee.prototype = Object.create(Person.prototype);
// Client.prototype = Object.create(Person.prototype);

// const personJohn = new Person("John");
// const sysAdmin = new Employee("Bob");
// const clientNatalia = new Client("Natalia");

// personJohn.sayHello();
// sysAdmin.sayHello();
// clientNatalia.sayHello();

// ***************************************************************************************************

// ТРЕТИЙ ВАРИАНТ:

// function Person(name) {
//     this.name = name;
//     this.sayHello = function () {
//         console.log(`Hello, I'm ${this.name}`);
//     }
// }

// function Employee(name) {
//     Person.call(this, name);
// }

// function Client(name) {
//     Person.call(this, name);
// }

// const personJohn = new Person("John");
// const sysAdmin = new Employee("Bob");
// const clientNatalia = new Client("Natalia");

// personJohn.sayHello();
// sysAdmin.sayHello();
// clientNatalia.sayHello();
