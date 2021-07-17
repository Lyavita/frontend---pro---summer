let oneMoreTask = document.querySelector("#input-list");
let list = document.querySelector("#todo-list");

function putToList(task) {
    if (task.value == "") {
        alert("Введите Очень Важное Дело, пожалуйста");
    } else {
        let nextTask = document.createElement("li");
        let delTask = document.createElement("button");

        nextTask.setAttribute("class", "color-will");
        nextTask.textContent = task.value;
        nextTask.classList.add("li-task");
        list.appendChild(nextTask);
        task.value = "";
        nextTask.addEventListener("click", () => switchTaskStatus(nextTask, delTask));

        delTask.classList.add("button-del");
        delTask.textContent = "Удалить задание";
        list.appendChild(delTask);
        delTask.addEventListener("click", () => removeTask(nextTask, delTask));
    }
}

function removeTask(task, btn) {
    list.removeChild(task);
    list.removeChild(btn);
}

function switchTaskStatus(task, btn) {
    task.classList.toggle("color-will");
    task.classList.toggle("color-did");
    if (task.classList.contains("color-did")) {
        btn.textContent = "Удалить задание (задание выполнено)";
    } else {
        btn.textContent = "Удалить задание (задание еще не выполнено)";
    }
}
