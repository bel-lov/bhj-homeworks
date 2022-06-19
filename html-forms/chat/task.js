const showChat = document.querySelector('.chat-widget');
const messages = document.getElementById('chat-widget__messages');//контейнер для сообщений
const input = document.getElementById('chat-widget__input');
const message = document.querySelector('.message');
const date = new Date();
//const windowChat = document.querySelector('.chat-widget__area');

showChat.addEventListener('click', function () {
    showChat.classList.add('chat-widget_active');
});

function handleFormSubmit(event) {
    if (event.keyCode === 13) {
        const messageClient = input.value;
        const html = `Сообщение от клиента <div class="message message_client"><div class="message__time">${date.toLocaleTimeString()}</div>
<div class="message__text">${messageClient}</div></div>`;
        let parentChat = document.querySelector('#chat-widget__messages');
        let div = document.createElement('div');
        div.innerHTML = html;
        parentChat.append(div);
        input.value = null;
        robotAnswerSubmit();
      //  windowChat.scrollTo(0, scrollHeight);Как пролистать скрол к актуальному сообщению?
    window.scrollTo(0,document.querySelector(".chat-widget__messages-container").scrollHeight);
    }
}

function robotAnswerSubmit() {
        const messageRobot = getList();
        const html = `Сообщение от робота <div class="message"><div class="message__time">${date.toLocaleTimeString()}</div>
<div class="message__text">${messageRobot}</div></div>`;
        let parentChat = document.querySelector('#chat-widget__messages');
        let div = document.createElement('div');
        div.innerHTML = html;
        parentChat.append(div);
    }


function getList(){
    const lists = [// список ответов чат бота
        'Кто здесь?)',
        'Не пишите нам больше',
        'На какой бюджет Вы рассчитываете?',
        'Я могу помочь с любым вопросом',
        'Скачайте приложение и пройдите регистрацию',
        'Благодарю за выбор и доверие',
        'Было приятно пообщаться',
        'Поздравляю с покупкой',
        'Если возникнут вопросы, звоните',
    ],
      index = Math.floor(Math.random() * lists.length);

    return lists[index];
}

input.addEventListener('keydown', handleFormSubmit);


