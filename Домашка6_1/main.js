let arr = [1, 3, 6, 7, 33]

function reverse(mass) {
    let massReverse = [];
    for (i = mass.length - 1; i >= 0; i--) {
        massReverse.push(mass[i]);
    }
    return massReverse;
}

alert(`Исходный массив ${arr}`);
alert(`Обртаный массив ${reverse(arr)}`);