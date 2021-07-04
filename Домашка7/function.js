function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function createStr1N(c) {
    let s = 0;
    let str;

    function strReqursiya(e) {
        if (e === s) {
            return ``;
        }
    s = s + 1;
    str = s + ` ` + strReqursiya(e);
    return str;
    }
    return strReqursiya(c);
}

function sumMassReq(b) {
    let sum = 0;

    function sumMass(a) {
        if (a === 0) {
            return 1;
        }
  
    sum = a + sumMass(a - 1);
    return sum;
    }
    return sumMass(b);
}