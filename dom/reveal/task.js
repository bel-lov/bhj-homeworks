const element = document.querySelectorAll('.reveal');

function inVisible(el) {
    const { top, bottom } = el.getBoundingClientRect();
    if (bottom < 0 || top > window.innerHeight) {
        el.classList.remove('reveal_active');
        return;
    }
    el.classList.add('reveal_active');
}

window.addEventListener('scroll', function () {
    for (let i = 0; i < element.length; i++) {
        inVisible(element[i]);
    }
})

