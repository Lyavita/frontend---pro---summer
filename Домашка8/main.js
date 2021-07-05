const user = {
    name: "Иван",
    age: 30,
    gender: "male",
    number: 18,
    parametrs: {
        height: 178,
        footLenght: 29,
        handParametrs: {
            finguers: 5,
            length: 74,
        }
    }
};

const userClone = copyObject(user);

console.log ("********************");
console.log (`Родительский объект`);  
console.log (user);
console.log ("********************");

userClone.name = "Пётр"; 
userClone.parametrs.handParametrs.length = 65;

console.log ("Родительский объект, после внесения изменений в клонированный");  
console.log (user); 
console.log ("********************");
console.log ("Клонированный объект, после внесения в него изменений");
console.log (userClone);
console.log ("********************");

alert(`Проверим, что изменение родительского объекта не затрагивает клонированный объект. В родительком параметр name = ${user.name}, в клонированном параметр name = ${userClone.name}`);
alert(`Проверим глубже, по вложенным объектам. Вложенный параметр .parametrs.handParametrs.length в родительском ${user.parametrs.handParametrs.length} и он же в клонированном ${userClone.parametrs.handParametrs.length}`)