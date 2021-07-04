let n = getRandomInt(1, 10);
alert(`Дано натуральное число ${n}. Выведем через пробел числа от 1 до ${n}.`);
let array = createMass1N(n);
outputMassBySpace(array);
alert(`Сумма чисел от 1 до ${n}: ${sumMassReq(array)}`);
