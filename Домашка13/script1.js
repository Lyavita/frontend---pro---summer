// const calc = createCalculator(10);

// function createCalculator(b) {
//     return {
//         sum: function (q) {
//             b = q + b
//             return b;
//         },
//         mult: function (q) {
//             b = q * b;
//             return b;
//         },
//         sub: function (q) {
//             b = b - q;
//             return b;
//         },
//         div: function (q) {
//             b = b / q;
//             return b;
//         },
//         set: function (q) {
//             return q;
//         },
//     }
// }

// console.log(calc.sum(5));
// console.log(calc.mult(10));
// console.log(calc.sub(40));
// console.log(calc.div(10));
// console.log(calc.set(100));

function say667() {
    // Local variable that ends up within closure
    var num = 666;
    var sayAlert = function () { alert(num); }
    num++;
    return sayAlert;
}

var sayNumber = say667();
alert(sayNumber());
alert(sayNumber()); alert(sayNumber());
