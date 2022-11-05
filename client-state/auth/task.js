const form = document.querySelector('#signin__form');
const button = document.querySelector('#signin__btn');
const welcomeId = document.querySelector('#welcome');
const welcomActiv = document.querySelector('.welcome');
const signin = document.querySelector('#signin');

button.addEventListener('click', function () {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.addEventListener('load', () => {
            // const response_obj = JSON.parse(xhr.responseText);
            const response_obj = xhr.response;
            if (response_obj.success) {
                localStorage.setItem('user_id', response_obj.user_id);
                welcomActiv.textContent = welcomActiv.textContent + localStorage.getItem('user_id');
                welcomActiv.classList.add('welcome_active');
                signin.classList.remove('signin_active');
                form.reset();
            }
            else {
                alert("Неверный логин/пароль");
            }
        })
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        xhr.send(formData);
    });
})


