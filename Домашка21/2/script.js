const urlToDos = "https://jsonplaceholder.typicode.com/todos";
const list = document.querySelector("#todo-list");
const btnLoadToDos = document.querySelector("#btn-load-todos");
btnLoadToDos.addEventListener("click", () => onLoadToDosClick(urlToDos));

function onLoadToDosClick(url) { 
  fetch(url)
    .then(res => res.json())
    .then(data => data.forEach(element => putToList(element)))
}
        
function putToList(dataFromServer) {
    let dataId = dataFromServer.id;
    let title = dataFromServer.title;
    let status = dataFromServer.completed;

    let nextTask = document.createElement("li");
    let delTask = document.createElement("button");
    if (status) {
        nextTask.setAttribute("class", "color-did");
        delTask.setAttribute("class", "color-did");
        delTask.textContent = "Удалить задание (задание выполнено)";
    } else {
        nextTask.setAttribute("class", "color-will");
        delTask.setAttribute("class", "color-will");
        delTask.textContent = "Удалить задание (задание еще не выполнено)";
    }
    nextTask.setAttribute("data-id", `${dataId}`);
    nextTask.textContent = title;
    nextTask.classList.add("li-task");
    nextTask.addEventListener("click", () => switchTaskStatus(nextTask, delTask));
    list.appendChild(nextTask);
    delTask.classList.add("button-del");
    delTask.addEventListener("click", () => removeTask(nextTask, delTask));
    list.appendChild(delTask);
}

function removeTask(task, btn) {
  list.removeChild(task);
  list.removeChild(btn);
}

function switchTaskStatus(task, btn) {
  task.classList.toggle("color-will");
  task.classList.toggle("color-did");
  btn.classList.toggle("color-will");
  btn.classList.toggle("color-did");
  if (task.classList.contains("color-did")) {
      btn.textContent = "Удалить задание (задание выполнено)";
  }
}