const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__close.modal__close_times');

document.addEventListener('DOMContentLoaded', () => {
    const cookie = getCookie('dom');
    if (cookie === '5') {
        modal.classList.remove('modal_active');
    }
    else {
        modal.classList.add('modal_active');
        close.addEventListener('click', () => {
            modal.classList.remove('modal_active');
            setCookie('dom', '5');
        })
    }
})

function getCookie(name) {//читает значение по имени кука
    if (document.cookie.length > 0) {
        const pairs = document.cookie.split('; ')
        const cookie = pairs.find(p => p.startsWith(name + '='))
        return cookie.substring(name.length + 1)
    }
    return null;
}

function eraseCookie(name) {   //удаляет куки
    document.cookie = name+'=; Max-Age=-99999999;';  
}


function setCookie(name, value){ //устанавливает куки
    document.cookie = name + '=' + encodeURIComponent(value)//зписывем новую куку в документ куков, при этом значение кодируем
}


document.cookie = 'age =; Expires=Thu, 01 Jan 1970 00:00:00 GMT'

console.log(document.cookie)