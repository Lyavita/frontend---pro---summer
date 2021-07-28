let array = [[1, 2, 3], [4, 5], [6]];
let sumArray = array.flat(Infinity).reduce((total, amount) => total + amount)
console.log(sumArray);


