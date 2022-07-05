////Добвление задач в список
const tasksList = document.querySelector('.tasks__list');//в список задач вставляем новые задачи
const button = document.querySelector('.tasks__add');
const countStorage = 'tasks';//название ключа в localStorage
let arrayTask = [];//массив для работы с названиями задач в localStorage

function createTask(elem) {//добавляем задачи на страницу и в localStorage
    elem.preventDefault()
    let input = document.querySelector('input');
    const html = `<div class="task__title">${input.value}</div>
    <a href="#" class="task__remove">&times;</a>
    </div>`
    if (input.value.trim()) {
        elem = document.createElement("div");
        elem.className = "task";
        elem.innerHTML = html;
        tasksList.append(elem);
        if (localStorage.length > 0) {//если длина localStorage больше 0 перезаписываем localStorage в массив
            arrayTask = localStorage[countStorage].split(',');
        }
        arrayTask.push(input.value);//если элементы в localStorage есть то добавляем новое значение в массив
        localStorage.setItem(countStorage, arrayTask);//перезаписывем localStorage из массива
    }
    input.value = ''
}

function removeTask(elem) {
    elem.remove();
}

function restart() {//при перезагрузке страницы подгрузка задач из localStorage
    arrLocalStorage = localStorage[countStorage].split(',')//полувчаем данные из localStorage
    for (i = 0; i < arrLocalStorage.length; i++) {//воспроизводим блоки с задачами
        const html = `<div class="task__title">${arrLocalStorage[i]}</div>
    <a href="#" class="task__remove">&times;</a>
    </div>`
        elem = document.createElement("div");
        elem.className = "task";
        elem.innerHTML = html;
        tasksList.append(elem);
    }
}

function delete_item_localStorage(text) {//удаляет задачу в localStorage по тексту в parentTargetText
    arrLocalStorage = localStorage[countStorage].split(',')//записываем в массив данные localStorage
    if (arrLocalStorage.length === 1) {//если в массиве всего одна запись и нажали крестик чистим массив полностью вместек с ключом
        localStorage.removeItem(countStorage)
    }
    else {//если записей больше чем 1, то запускем цикл для поиска нужной записи
        for (i = 0; i < arrLocalStorage.length; i++) {
            if (text === arrLocalStorage[i]) {//если текст из блока который нужно удалить равен записи в localStorage
                arrLocalStorage.splice(i, 1)//то удаляем его из промежуточного массива
                localStorage.setItem(countStorage, arrLocalStorage);//перезаписываем localStorage с значениями из промежуточного массива
            }
        }
    }
}

// localStorage.clear()
if (localStorage.length > 0) {
    restart()
}

button.addEventListener('click', createTask);

tasksList.addEventListener('click', (elem) => {
    const target = elem.target;
    if (target.classList.contains('task__remove')) {
        parentTarget = target.closest('.task');
        parentTargetText = target.previousElementSibling.textContent
        delete_item_localStorage(parentTargetText)//передаем в функцию текст задачи
        removeTask(parentTarget)
    }
})





