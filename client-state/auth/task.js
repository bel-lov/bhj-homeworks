const form = document.querySelector('#signin__form');
const button =document.querySelector('#signin__btn');
const welcomeId = document.querySelector('#welcome');
const welcomActiv = document.querySelector('.welcome');

button.addEventListener('click',function () {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () =>{
        
        if(xhr.readyState === xhr.DONE){
            response_obj = JSON.parse(xhr.responseText);
            if(response_obj.success){
                localStorage.setItem('user_id', response_obj.user_id);
                welcomActiv.textContent = welcomActiv.textContent + localStorage.getItem('user_id');
                welcomActiv.classList.add('welcome_active');
            }
            else{
                alert("Неверный логин/пароль"); 
            }
        }
        else {
            alert("Ошибка " + xhr.status);
        }
        })
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        xhr.send(formData);
        // xhr.onload = () => alert(xhr.status);
    });
})



