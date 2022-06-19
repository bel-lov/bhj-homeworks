const element = Array.from(document.querySelectorAll('.modal'));
let elementSuccess = document.getElementById('modal_success');
let showClasses = document.querySelector('.show-success');
let closing = document.querySelectorAll(".modal__close");//все элементы крестиков

for (let i = 0; i < closing.length; i++) {
    closing[i].onclick = closeModal;
}

element[0].classList.toggle("modal_active");

function closeModal() {
    //element.forEach((element)=> {element.classList.remove("modal_active")});
    this.closest('.modal').classList.remove("modal_active");
}

showClasses.onclick = function(){
    element[0].classList.toggle("modal_active");
    elementSuccess.classList.toggle("modal_active"); 
}