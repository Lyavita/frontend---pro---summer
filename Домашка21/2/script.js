let list = document.querySelector("#todo-list");


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

let urlToDos = "https://jsonplaceholder.typicode.com/todos";

function putToList(url) {
    fetch(url)
        .then(res => res.json())
        .then(function (data) {
            
            console.log(data[1]);
            console.log(typeof data);
        })
   



// let nextTask = document.createElement("li");
//             let delTask = document.createElement("button");
//             if (gg) {
// nextTask.setAttribute("class", "color-will");}
//         nextTask.textContent = yy;
//      nextTask.classList.add("li-task");
//        list.appendChild(nextTask);
       
//  nextTask.addEventListener("click", () => switchTaskStatus(nextTask, delTask));

//         delTask.classList.add("button-del");
//          delTask.textContent = "Удалить задание";
//         list.appendChild(delTask);
//         delTask.addEventListener("click", () => removeTask(nextTask, delTask));

        // })
}