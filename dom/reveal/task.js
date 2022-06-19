const element = document.querySelectorAll('.reveal');

function inVisible(el) {
    //const {top, bottom} = el.getBoundingClientRect(); В презентации обучения был описан данный метод поиска элемента, но он  уменя почему-то не отрабатывает. В чем может быть проблема?
    const elementTop = el.getBoundingClientRect().top;//нашла вот такой рабочий вариант нахождения координат
    const elementBottom = el.getBoundingClientRect().bottom;
    if (elementBottom < 0) {
        return false//el.classList.remove('reveal_active');
    }
    if (elementTop > window.innerHeight) {//элемент находится ниже области просмотра
        return false //el.classList.remove('reveal_active');
    }
    return true
    //el.classList.add('reveal_active');
}

window.addEventListener('scroll', function () {
    for (let i = 0; i < element.length; i++) {
        if (inVisible(element[i])) {
            element[i].classList.add('reveal_active');
        }
        else {
            element[i].classList.remove('reveal_active');
        }
    }
}
);
//Почему не работает первый вариант?
// В функции inVisible я хотела сразу удалять и добавлять нужный класс.
// Не стала удалять оставила закоммченным код для лучшего понимания что я имею ввиду.

