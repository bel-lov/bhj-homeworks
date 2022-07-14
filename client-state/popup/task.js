const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__close.modal__close_times');

document.addEventListener('DOMContentLoaded', () => {
    const cookie = getCookie('modal__close');
    if (cookie === 'true') {
        modal.classList.remove('modal_active');
    }
    else {
        modal.classList.add('modal_active');
        close.addEventListener('click', () => {
            modal.classList.remove('modal_active');
            setCookie('modal__close', 'true');
        })
    }
})

function getCookie(name) {//читает значение по имени кука
    if (document.cookie.length > 0) {
        const pairs = document.cookie.split('; ')
        const cookie = pairs.find(p => p.startsWith(name + '='))
        return cookie.substring(name.length + 1)
    }
    // return null;
}
function setCookie(name, value) { //устанавливает куки
    document.cookie = name + '=' + encodeURIComponent(value)//зписывем новую куку в документ куков, при этом значение кодируем
}