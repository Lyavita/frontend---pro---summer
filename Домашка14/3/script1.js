function createCounter() {
    let divNewCounter = document.createElement('div');
    let divNewCounterText = document.createElement('div');
    let divNewCounterCount = document.createElement('div');
    let divNewCounterBtn = document.createElement('div');

    divNewCounter.classList.add('new-counter');
    divNewCounterText.classList.add('new-counter-text');
    divNewCounterCount.classList.add('new-counter-count');
    divNewCounterBtn.classList.add('new-counter-btn');

    divNewCounterText.textContent = "Насчитали:"
    divNewCounterCount.innerHTML = counterInitialValue.value;
    divNewCounterBtn.addEventListener("click", makeCounter);
    divNewCounterBtn.textContent = "Ииии... Рррраз!";

    documentWrapper.prepend(divNewCounter);
    divNewCounter.append(divNewCounterText);
    divNewCounter.append(divNewCounterCount);
    divNewCounter.append(divNewCounterBtn);

    function makeCounter() {
        return divNewCounterCount.innerHTML++;
    }
}