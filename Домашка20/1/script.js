let inputName = document.getElementById("input-name");
let inputPrice = document.getElementById("input-price");
let inputQuantity = document.getElementById("input-quantity");
let btnReserv = document.getElementById("btn-input-list");
let summ = document.getElementById("my-table-summ");
let tb = document.getElementById("my-table-tbody");
summ.textContent = 0;
btnReserv.addEventListener("click", putToList);

function putToList() {
  if (checkValuesEmpty()) {
      alert("Заполните все необходимые поля, пожалуйста");
  } else {
      if (checkValues()) {
          let template = document.querySelector("#productrow");
          let td = template.content.querySelectorAll("td");
          let tr = template.content.querySelector("tr");
          console.log(tr);
          let btnDelete = template.content.querySelector("input");
          console.log(btnDelete);
          td[0].textContent = inputName.value;
          td[1].textContent = inputPrice.value;
          td[2].textContent = inputQuantity.value;
        
          inputName.value = "";
          inputPrice.value = "";
          inputQuantity.value = "";
        
          summ.textContent = Number(summ.textContent) + td[1].textContent * td[2].textContent;
          tb.append(template.content.cloneNode(true));
      } else {
          alert("Введите положительные числа, там где от вас ждут положительные числа!");
          inputPrice.value = "";
          inputQuantity.value = "";
      }
  }
}

function deleteItemFromList(event) {
    let target = event.target;
    if (target.tagName != "INPUT") return;
    let quantityDel = target.parentElement.previousElementSibling.textContent;
    let priceDel = target.parentElement.previousElementSibling.previousElementSibling.textContent;
    summ.textContent = summ.textContent - quantityDel * priceDel;
    target.closest("tr").remove();
};

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