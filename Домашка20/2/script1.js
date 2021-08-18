let inputName = document.getElementById("input-name");
let inputPrice = document.getElementById("input-price");
let inputQuantity = document.getElementById("input-quantity");
let summ = document.getElementById("my-table-summ");
let tb = document.getElementById("my-table-tbody");
summ.textContent = 0;

function putToList() {
    if (checkValuesEmpty()) {
      alert("Заполните все необходимые поля, пожалуйста");
    } else {
        if (checkValues()) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let btnDel = document.createElement("button");
            btnDel.classList.add("button-del");
            btnDel.innerHTML = "Удалить товар";
            td4.appendChild(btnDel);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            td1.textContent = inputName.value;
            td2.textContent = inputQuantity.value;
            td3.textContent = inputPrice.value;
            tb.appendChild(tr);

            inputName.value = "";
            inputPrice.value = "";
            inputQuantity.value = "";

            summ.textContent = Number(summ.textContent) + Number(td3.innerHTML) * Number(td2.innerHTML);
            btnDel.addEventListener("click", removeTask);

            function removeTask() {
                summ.textContent = Number(summ.textContent) - Number(td3.innerHTML) * Number(td2.innerHTML);
                tb.removeChild(tr);
            }
        } else {
            alert("Введите числа, там где от вас ждут числа!");
            inputPrice.value = "";
            inputQuantity.value = "";
        }
    }
}

function checkValues() {
  if (((Math.sign(inputPrice.value) == 1 || Math.sign(inputPrice.value) == 0)) && (Math.sign(inputQuantity.value) == 1 || Math.sign(inputQuantity.value) == 0) && inputQuantity.value !== "-0" && inputPrice.value !== "-0") {
    return true;
  } else {
    return false;
  }
}

function checkValuesEmpty() {
  if (inputName.value == "" || inputQuantity.value == "" || inputPrice.value == "") {
    return true;
  } else {
    return false;
  }
}