function changeYear() {
    let inputYear = document.getElementById("yearBtn").previousElementSibling;
    let year = document.getElementById("title").firstElementChild;
    year.textContent = inputYear.value;
    inputYear.value = "";
}

function removeAttribute() {
    let elems = document.querySelectorAll("[my-attribute]");
    for (let i = 0; i < elems.length; i++) {
        elems[i].removeAttribute("my-attribute");
    }
}

function paintGreen(event) {
    event.stopPropagation();
    let elems = document.querySelectorAll("[data-id]");
    for (let i = 0; i < elems.length; i++) {
        elems[i].setAttribute("style", "background: palegreen");
    }
}

function addRow() {
    let allTr = document.querySelectorAll("tbody > tr");
    let lastTr = allTr[allTr.length - 2];
    let dopTr = lastTr.cloneNode(true);
    dopTr.firstElementChild.textContent = "OneMoreCompany";
    dopTr.firstElementChild.nextElementSibling.textContent = "OneMoreMen";
    dopTr.lastElementChild.textContent = "googol";
    lastTr.after(dopTr);
}

function removeRow() {
    let badTr = document.querySelectorAll("tr")[1];
    badTr.remove();
}

function changeFontSize() {
    let headerTitle = document.getElementById("title");
    headerTitle.setAttribute("style", "font-size: 24px;");
}