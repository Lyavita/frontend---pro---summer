function taskOne() {
    let year = document.getElementById('title').firstElementChild;
    year.textContent = '2020';
}

function taskTwo(attr) {
    let elems = document.getElementsByTagName('*');
    for (let i = 0; i < elems.length; i++) {
        if (elems[i].hasAttribute(attr)) {
            elems[i].removeAttribute(attr);
        }
    }
}

function taskThree(attr) {
    let elems = document.getElementsByTagName('*');
    for (let i = 0; i < elems.length; i++) {
        if (elems[i].hasAttribute(attr)) {
            elems[i].setAttribute("style", "background: palegreen");
        }
    }
}

function taskFore() {
    let badTr = document.querySelector('table').firstElementChild.firstElementChild.nextElementSibling;
    badTr.remove();
}

function taskFive() {
    let lastTr = document.querySelector('#summ').parentElement.parentElement.previousElementSibling;
    let dopTr = lastTr.cloneNode(true);
    dopTr.firstElementChild.textContent = 'OneMoreCompany';
    dopTr.firstElementChild.nextElementSibling.textContent = 'OneMoreMen';
    dopTr.lastElementChild.textContent = 'MoreThanEveryone';
    lastTr.after(dopTr);
}