let variable = 5;
let arrLentgh = 10;
let array = [];

function arrayFill(q, w) {

    for (let i = 0; i < w; i++) {
        array[i] = q;
    }

    return array;
}
arrayFill(variable, arrLentgh);

console.log(array);