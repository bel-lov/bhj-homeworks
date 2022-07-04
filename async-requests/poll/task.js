const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');

//Создаём объект запроса
let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        obj = JSON.parse(xhr.responseText);//перезаписываем полученный ответ от сервера в JSON объект
        const title = obj.data.title;//получаем вопрос опроса
        const id = obj.id;//получаем id опроса
        pollTitle.textContent = title;//отображаем текстовое значение вопроса
        const answer = obj.data.answers;//получаем ответы опроса

        for (elem of answer) {//перебираем элементы массива с ответами и создаем кнопки с ответами
            elem_button = document.createElement("button");
            elem_button.className = "poll__answer";
            elem_button.textContent = elem
            pollAnswers.append(elem_button);
        }
        pollAnswers.addEventListener('click', (e) => {//при клике по кнопке определяем цель клика
            const target = e.target;
            indexAnswer = answer.indexOf(target.textContent);//получаем индекс кликнутого ответа в массиве ответов

            const post = new XMLHttpRequest;//создаем объект POST запроса
            post.addEventListener('readystatechange', () => {//слушаем ответ
                if (post.readyState === post.DONE) {
                    response_obj = JSON.parse(post.responseText)//получаем данные из запроса
                    pollAnswers.remove();//удаляем кнопки
                    responseStat = response_obj.stat//обращаемся к ключу stat
                    for (el in responseStat) {
                        statAnswer = responseStat[el].answer//получаем каждый текст ответа
                        votes = responseStat[el].votes//каждую статистику по ответам
                        let html = document.createElement('p');
                        html.textContent = `${statAnswer}: ${votes / 100}%`
                        pollTitle.append(html)
                    }
                }
            })
            post.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
            post.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            post.send(`vote=${id}&answer=${indexAnswer}`);
            alert('«Спасибо, ваш голос засчитан!»')
        })
    }
})
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

