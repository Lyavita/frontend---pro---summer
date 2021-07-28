let a = 5;
let b = 10;
let e = {};

function arrayFill(q, w) {

    for (let i = 0; i < w; i++) {
        e[i] = q;
    }

    return e;
}
arrayFill(a, b);

console.log(e);