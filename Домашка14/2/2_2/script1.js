let g = [[1, 2, 3], [4, 5], [6]];
let sumArray = g.flat(Infinity).reduce((total, amount) => total + amount)
console.log(sumArray);


