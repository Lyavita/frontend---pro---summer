// function createCounter() {
//     let element = document.createElement('div');
//     let element1 = document.createElement('div');
//     let element2 = document.createElement('div');
//     element.classList.add('ff');
//     element1.classList.add('dd');
//     element2.classList.add('gg');
//     element1.innerHTML = counterInitialValue.value;
//     element2.addEventListener("click", makeCounter);
//     element2.textContent = "Ииии... Рррраз!";
//     divNewCounter.append(element);
//     element.append(element1);
//     element.append(element2);
//     function makeCounter() {
//         return element1.innerHTML++;
//     }
// }



// function createCounter() {
//     let element = document.createElement('div');
//     let element1 = document.createElement('div');
//     let element2 = document.createElement('div');
//     element.classList.add('ff');
//     element.textContent = "Насчитали:"
//     element1.classList.add('dd');
//     element2.classList.add('gg');
//     element1.innerHTML = counterInitialValue.value;
//     element2.addEventListener("click", makeCounter);
//     element2.textContent = "Ииии... Рррраз!";
//     // documentWrapper.append(element);
//     documentWrapper.append(element);
//     documentWrapper.append(element1);
//     documentWrapper.append(element2);
//     function makeCounter() {
//         return element1.innerHTML++;
//     }
// }

function createCounter() {
    let element0 = document.createElement('div');
    let element = document.createElement('div');
    let element1 = document.createElement('div');
    let element2 = document.createElement('div');
    element0.classList.add('yy');
    element.classList.add('ff');
    element.textContent = "Насчитали:"
    element1.classList.add('dd');
    element2.classList.add('gg');
    element1.innerHTML = counterInitialValue.value;
    element2.addEventListener("click", makeCounter);
    element2.textContent = "Ииии... Рррраз!";
    // documentWrapper.append(element);
    documentWrapper.prepend(element0);
    element0.append(element);
    element0.append(element1);
    element0.append(element2);
    function makeCounter() {
        return element1.innerHTML++;
    }
}















// function removeAttribute() {
//     let elems = document.querySelectorAll("[my-attribute]");
//     for (let i = 0; i < elems.length; i++) {
//         elems[i].removeAttribute("my-attribute");
//     }
// }

// function paintGreen(event) {
//     event.stopPropagation();
//     let elems = document.querySelectorAll("[data-id]");
//     for (let i = 0; i < elems.length; i++) {
//         elems[i].setAttribute("style", "background: palegreen");
//     }
// }

// function addRow() {
//     let allTr = document.querySelectorAll("tbody > tr");
//     let lastTr = allTr[allTr.length - 2];
//     let dopTr = lastTr.cloneNode(true);
//     dopTr.firstElementChild.textContent = "OneMoreCompany";
//     dopTr.firstElementChild.nextElementSibling.textContent = "OneMoreMen";
//     dopTr.lastElementChild.textContent = "googol";
//     lastTr.after(dopTr);
// }

// function removeRow() {
//     let badTr = document.querySelectorAll("tr")[1];
//     badTr.remove();
// }

// function changeFontSize() {
//     let headerTitle = document.getElementById("title");
//     headerTitle.setAttribute("style", "font-size: 24px;");
// }