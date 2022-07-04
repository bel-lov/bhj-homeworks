const items = document.getElementById('items');
const activImg = document.querySelector('.loader_active');

let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {//если запрос выполнился удачно, то 
        obj = JSON.parse(xhr.responseText)//создаем объект с данными ответа от сервера
        objValute = obj.response.Valute
        for (i in objValute) {
            let charCode = objValute[i].CharCode
            let value = objValute[i].Value
            const html = `<div class="item__code">${charCode}</div>
            <div class="item__value">${value}</div>
            <div class="item__currency">руб.</div>`
            elem = document.createElement("div");
            elem.className = "item";
            elem.innerHTML = html;
            items.append(elem);
        }
        activImg.classList.remove('loader_active')//удаляем изображение анимации загрузки
    }
})
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();