function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
 
function createMass1N(a) {
    let s = 1;
    let arr = [];
    
    function massPush1N(b) {
        if (b === s - 1) {
            return arr;
        }
        arr.push(s); 
        s += 1;
        return massPush1N(b);
    }
    return massPush1N(a);    
}

function outputMassBySpace(mass) {
    let massStr = mass.join(' '); 
    alert(massStr);
}

function sumMassReq(arr) {
    let i = arr.length; 
    let sum = 0;

    function sumMass(arr) {
        if (i === 0) {
            return 0;
        }
        i--;
        sum = arr[i] + sumMass(arr);
        return sum;
    }
    return sumMass(arr);
}



