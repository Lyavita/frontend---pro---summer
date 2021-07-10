let sum = 0;
let elements = getNodeListByAttr('[data-id]');
elements.forEach(function(element) {
    sum += +replaceLetterInNumber(element.innerHTML.split('')).join('');
});
document.querySelector('#summ').innerHTML += ' ' + sum;