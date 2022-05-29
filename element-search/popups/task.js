const element = Array.from(document.querySelectorAll('.modal'));
let elementSuccess = document.querySelector('#modal_success');
let showClasses = document.querySelector('.show-success');
//element.className += "modal_active"; //добавляет в начало окно

let closing = document.querySelector('.modal__close');

function openModal () {
    element[0].classList.toggle("modal_active");
}
openModal();

function closeModal() {
    element.forEach((element)=> {element.classList.toggle("modal_active")});
    // element.classList.remove("modal_active")
}

closing.onclick  = function(){
    closeModal();
}
showClasses.onclick = function(){
    elementSuccess.classList.toggle("modal_active"); 
}