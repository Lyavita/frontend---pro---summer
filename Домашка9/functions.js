let getNodeListByAttr = attr => document.querySelectorAll(attr);

function replaceLetterByNumber(number) {
for (let i = 0; i < number.length; i++) {
    if (number[i] === 'B') {
        number[i] = '000000000';
     } else if (number[i] === 'M') {
        number[i] = '000000';
     }
   }
return number;
};

let count = 0;
console.log(getNodeListByAttr('[data-id]'));

let elem = getNodeListByAttr('[data-id]');

elem.forEach(function (el, index, list) {
    
    console.log(replaceLetterByNumber(el.innerHTML.split('')).join(''));
    count += +replaceLetterByNumber(el.innerHTML.split('')).join('');
    
})

console.log(count);


