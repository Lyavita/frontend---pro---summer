function putToList(task) {
    let nextTask = document.createElement("li");
    let delTask = document.createElement("button");
    nextTask.setAttribute("class", "color-will");
    nextTask.textContent = task.value;
    list.appendChild(nextTask);
    nextTask.appendChild(delTask);
    task.value = "";
    nextTask.addEventListener('click', () => gggt(nextTask));
    delTask.addEventListener('click', () => removeTask(nextTask));
    // delTask.onclick = function () {
    //     delTask.parentElement.delete();
    // }

}

function removeTask(n) {  
    list.removeChild(n);
}
function gggt(d) {
    d.classList.toggle('color-will');
    d.classList.toggle('color-did');
}


// nextTask.classList.toggle('color1');
let lii = document.querySelectorAll('li');
lii.forEach(liii => console.log(liii));



let oneMoreTask = document.querySelector('#input-list');
let list = document.querySelector('#todo-list');
console.log(btn);