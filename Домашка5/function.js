function inputRadiusPrompt() {

let radiusString = prompt(`Введите радиус окружности.`);
  
    while ( !((!!radiusString || radiusString === '0') && +radiusString >= 0 && radiusString !== '-0')) {
        alert(`Вы не поняли. Я жду от вас любое положительное число или ноль. 
    Ну или, если хотите, можем для бесконечности посчитать (введите тогда Infinity)! 
    Насчет нуля и бесконечности - надеюсь вы понимаете всю бессмыленность затеи...`);
        radiusString = prompt(`Введите радиус окружности.`); 
    }

return +radiusString;
}
  
function inputOperationPrompt() {

let method = +prompt(`Введите номер команды чтобы посчитать: 1 - диаметр, 2 - площадь круга, 3 - длину окружности.`);

    for ( ; !(method === 1 || method === 2 || method === 3); ) {
        alert('1, 2, 3! Ну разве это сложно...');
        method = +prompt(`Введите номер команды чтобы посчитать: 1 - диаметр, 2 - площадь круга, 3 - длину окружности.`);
    }

return method;
}
  
function output(input1, input2, func1, func2, func3) {

const radius = input1();
const operation = input2();

    if (operation === 1) {
        alert(`Диаметр окружности с радиусом ${radius} равен ${func1(radius)}`);
    } else if (operation === 2) {
        alert(`Площадь круга с радиусом ${radius} равна ${func2(radius)}`);
    } else if (operation === 3) {
        alert(`Длина окружности с радиусом ${radius} равна ${func3(radius)}`);
    }
}
  
function calcDiameter (radius) {
return 2 * radius;
}

function calcCircumference (radius) {
return 2 * Math.PI * radius;
}

function calcAreaCirc (radius) {
return Math.PI * radius * radius;
}
  

  