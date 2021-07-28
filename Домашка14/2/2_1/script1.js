let g = [[1, 2, 3], [4, 5], [6]];

let sum = 0;

for (let i = 0; i < g.length; i++) {
    for (let j = 0; j < g[i].length; j++) {
        sum = sum + g[i][j];
    }
}

console.log(sum);