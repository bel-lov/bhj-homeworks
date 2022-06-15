const texts = document.querySelectorAll('.rotator__case');
const rotator = document.querySelector('.rotator');
const allDataAttribute = document.querySelectorAll('[data-speed]');
let timeout = 1000;

allDataAttribute.forEach(el=>{
    timeout += Number(el.dataset.speed);
    let activCase = rotator.querySelector('.rotator__case.rotator__case_active');
    el.style.color = el.dataset.color;
    setTimeout(() =>{
        activCase.classList.remove('rotator__case_active');
        el.classList.add('rotator__case_active');  
    }, timeout);
});