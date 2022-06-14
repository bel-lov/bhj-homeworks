
const element = document.querySelectorAll('.reveal');

if(element.length > 0){
function inVisible(el){
        const {top, bottom} = el.getBoundingClientRect()
        if(bottom < 0){
            el.classList.remove('reveal_active');
        }
        if(top > window.innerHeight){
            el.classList.remove('reveal_active');
        }
        el.classList.add('reveal_active');
    }
}

window.addEventListener('scroll', function () {
    for(let i = 0; i < element.length; i++){
    inVisible(element[i]);
    }
});


