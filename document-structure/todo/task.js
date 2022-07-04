////Добвление задач в список
const tasksList = document.querySelector('.tasks__list');//в список задач вставляем новые задачи
const button = document.querySelector('.tasks__add');
let countStorage = 0;

function createTask(elem) {
    elem.preventDefault()
    let input = document.querySelector('input');
    const html = `<div class="task__title">${input.value}</div>
    <a href="#" class="task__remove">&times;</a>
    </div>`
    if (input.value) {
        elem = document.createElement("div");
        elem.className = "task";
        elem.innerHTML = html;
        tasksList.append(elem);
        localStorage.setItem(countStorage, input.value);
        countStorage++;
    }
    input.value = ''
}

function removeTask(elem) {
    elem.remove();
}

function restart() {
    for (i = 0; i < localStorage.length; i++) {
        const html = `<div class="task__title">${localStorage.getItem(i)}</div>
    <a href="#" class="task__remove">&times;</a>
    </div>`
        elem = document.createElement("div");
        elem.className = "task";
        elem.innerHTML = html;
        tasksList.append(elem);
    }
}
// localStorage.clear()
restart()

button.addEventListener('click', createTask);

tasksList.addEventListener('click', (elem) => {
    const target = elem.target;
    if (target.classList.contains('task__remove')) {
        e = target.closest('.task');
        removeTask(e)
    }
})





