function taskOne() {
    let year = document.getElementById('title').firstElementChild;
    year.textContent = '2020';
}

function taskTwo(attr) {
    let elems = document.querySelectorAll(attr);
    for (let i = 0; i < elems.length; i++) {
        elems[i].removeAttribute(attr);
    }
}

function taskThree(attr) {
    let elems = document.querySelectorAll(attr);
    for (let i = 0; i < elems.length; i++) {
        elems[i].setAttribute("style", "background: palegreen");
    }
}

function taskFore() {
    let badTr = document.querySelectorAll('tr')[1];
    badTr.remove();
}

function taskFive() {
    let allTr = document.querySelectorAll('tbody > tr'));
    let lastTr = allTr[allTr.length - 2];
    let dopTr = lastTr.cloneNode(true);
    dopTr.firstElementChild.textContent = 'OneMoreCompany';
    dopTr.firstElementChild.nextElementSibling.textContent = 'OneMoreMen';
    dopTr.lastElementChild.textContent = 'MoreThanEveryone';
    lastTr.after(dopTr);
}