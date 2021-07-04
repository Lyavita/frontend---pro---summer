let counterRightAnswers = 0;
let counterQuestions = 0;

let question1 = prompt("Сколько будет 2 + '2' в JavaScript?", "ваш ответ"); 
let question1Right = "22";
if (question1 == question1Right) {
    counterRightAnswers = ++counterRightAnswers;
}
counterQuestions = ++counterQuestions;

let question2 = prompt("Назовите оператор присваивания в JavaScript", "ваш ответ"); 
let question2Right = "=";
if (question2 == question2Right) {
    counterRightAnswers = ++counterRightAnswers;
}
counterQuestions = ++counterQuestions;

let question3 = prompt("Сколько будет 5 / 0?", "ваш ответ"); 
let question3Right = "Infinity";
if (question3 != null) {
  if (question3.toUpperCase() == question3Right.toUpperCase()) {
    counterRightAnswers = ++counterRightAnswers;
  }
}
counterQuestions = ++counterQuestions;

let question4 = prompt("Одинаково ли работает == и === в JavaScript?", "ваш ответ"); 
let question4Right = "no";
if (question4 != null) {
    if (question4.toUpperCase() == question4Right.toUpperCase()) {
      counterRightAnswers = ++counterRightAnswers;
    }
  }
counterQuestions = ++counterQuestions;

let question5 = prompt("Чему равно выражение Boolean(null) в JavaScript?", "ваш ответ"); 
let question5Right = "false";
if (question5 != null) {
    if (question5.toUpperCase() == question5Right.toUpperCase()) {
      counterRightAnswers = ++counterRightAnswers;
    }
  }
counterQuestions = ++counterQuestions;

let maxPoints = counterQuestions * 10;
let points = counterRightAnswers * 10;
let rating = points * 100 / maxPoints;

alert("Ваш результат: " + points + " баллов");
if (rating > 50) {
    alert("Вы молодец! Зачет! Сдано!")
}


// Это простой вариант, без проверки на Отмену и регистр ответа.

// let counterRightAnswers = 0;
// let counterQuestions = 0;

// let question1 = prompt("Сколько будет 2 + '2' в JavaScript?", "ваш ответ"); 
// let question1Right = "22";
// if (question1 == question1Right) {
//     counterRightAnswers = ++counterRightAnswers;
// }
// counterQuestions = ++counterQuestions;

// let question2 = prompt("Назовите оператор присваивания в JavaScript", "ваш ответ"); 
// let question2Right = "=";
// if (question2 == question2Right) {
//     counterRightAnswers = ++counterRightAnswers;
// }
// counterQuestions = ++counterQuestions;

// let question3 = prompt("Сколько будет 5 / 0?", "ваш ответ"); 
// let question3Right = "Infinity";
// if (question3 == question3Right) {
//     counterRightAnswers = ++counterRightAnswers;
// }
// counterQuestions = ++counterQuestions;

// let question4 = prompt("Одинаково ли работает == и === в JavaScript?", "ваш ответ"); 
// let question4Right = "no";
// if (question4 == question4Right) {
//     counterRightAnswers = ++counterRightAnswers;
// }
// counterQuestions = ++counterQuestions;

// let question5 = prompt("Чему равно выражение Boolean(null) в JavaScript?", "ваш ответ"); 
// let question5Right = "false";
// if (question5 == question5Right) {
//     counterRightAnswers = ++counterRightAnswers;
// }
// counterQuestions = ++counterQuestions;

// let maxPoints = counterQuestions * 10;
// let points = counterRightAnswers * 10;
// let rating = points * 100 / maxPoints;

// alert("Ваш результат: " + points + " баллов");
// if (rating > 50) {
//     alert("Вы молодец! Зачет! Сдано!")
// }





