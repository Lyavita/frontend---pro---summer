let getNodeListByAttr = attr => document.querySelectorAll(attr);

function replaceLetterInNumber(number) {
    for (let i = 0; i < number.length; i++) {
        if (number[i] === 'B') {
            number[i] = '000000000';
        } else if (number[i] === 'M') {
            number[i] = '000000';
        }
    }
    return number;
};


