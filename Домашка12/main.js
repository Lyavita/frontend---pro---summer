let btnDelAttr = document.getElementById("removeAttrBtn");
btnDelAttr.addEventListener("click", removeAttribute, false);

let greenBtn = document.getElementById("setGreenBtn");
greenBtn.addEventListener("click", paintGreen, true);

let oneMoreRowBtn = document.getElementById("addRowBtn");
oneMoreRowBtn.addEventListener("click", addRow);

let delRowBtn = document.getElementById("removeSecondRowBtn");
delRowBtn.addEventListener("click", removeRow);

document.addEventListener("DOMContentLoaded", changeFontSize);
