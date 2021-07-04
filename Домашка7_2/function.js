function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function strReqursiya(e) {
    let str;
    if (e === 0) {
        return '';
    }
    str = strReqursiya(e - 1) + ` ` + e;
    return str;
}
   
    
function sumMass(a) {
    let sum;
    if (a === 0) {
        return 0;
    }
    sum = a + sumMass(a - 1);
    return sum;
}