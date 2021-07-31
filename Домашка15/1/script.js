const user = {
    firstName: "Nikola",
    secondName: "Tesla",
    getFullName: function () {
        return console.log(this.firstName + ' ' + this.secondName);
    }
}
user.getFullName()

const secondUser = {
    firstName: "Steve",
    secondName: "Jobs",
}
user.getFullName.call(secondUser);

const thirdUser = {
    firstName: "Steve",
    secondName: "Wozniak "
}
user.getFullName.apply(thirdUser);

const fourthUser = {
    firstName: "Julia ",
    secondName: "Roberts"
}
let newGetFullName = user.getFullName.bind(fourthUser);
newGetFullName();

function User(firstName, secondName) {
    this.firstName = firstName;
    this.secondName = secondName;
};
const vasya = new User("Вася", "Солнышкин");
const kuzya = new User("Кузя", "Молнышкин");
const izya = new User("Изя", "Машдельштам");
console.log(vasya);
console.log(kuzya);
console.log(izya);