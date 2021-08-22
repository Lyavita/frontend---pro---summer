const urlToDos = "https://jsonplaceholder.typicode.com/todos";
const list = document.querySelector("#todo-list");
const btnLoadToDos = document.querySelector("#btn-load-todos");
let countToDoPosition = trigger();
btnLoadToDos.addEventListener("click", () => countToDoPosition(putToList, urlToDos, switchTaskStatus, removeTask));

function trigger() {
  let clicks = 0;
  return function(funcMain, url, func1, func2) {
    ++clicks;
    funcMain(url, clicks, func1, func2);
  }
}

function putToList(url, pos, funcForTaskClick, funcForTaskBtnClick) {
  fetch(url)
    .then(res => res.json())
    .then(function (data) {
      let title = data[pos].title;
      let status = data[pos].completed;
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
      nextTask.textContent = title;
      nextTask.classList.add("li-task");
      nextTask.addEventListener("click", () => funcForTaskClick(nextTask, delTask));
      list.appendChild(nextTask);
      delTask.classList.add("button-del");
      delTask.addEventListener("click", () => funcForTaskBtnClick(nextTask, delTask));
      list.appendChild(delTask);
    })
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

