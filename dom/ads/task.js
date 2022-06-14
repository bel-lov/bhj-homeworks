const texts = document.querySelectorAll('.rotator__case');
const rotator = document.querySelector('.rotator');


function addClass() {  
    for (let i = 0; i < texts.length; i++) {
        const text = texts[i];

        const data = text.dataset.speed;
        const color = text.dataset.color;

        const activCase = rotator.querySelector('.rotator__case.rotator__case_active');

        if (data === '2000') {
            activCase.classList.remove('rotator__case_active');// удаляем класс у активного элемента
            text.classList.add('rotator__case_active');
            color.setAttribute('green'); 
        }
        else if(data === '1000'){
            activCase.classList.remove('rotator__case_active');
            text.classList.add('rotator__case_active');
            //color.setAttribute('#000');
        }
        else if(data === '500'){
            activCase.classList.remove('rotator__case_active');
            text.classList.add('rotator__case_active');
        }
        else if(data === '200'){
            activCase.classList.remove('rotator__case_active');
            text.classList.add('rotator__case_active');
        }
    }
}

setInterval(() => {
    addClass(texts);
}, 1000);