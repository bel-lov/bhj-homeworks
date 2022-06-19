const texts = document.querySelectorAll('.rotator__case');
const rotator = document.querySelector('.rotator');
const allDataAttribute = Array.from(document.querySelectorAll('[data-speed]'));
let timeout = 0;
let count = allDataAttribute[0];

// allDataAttribute.forEach(el=>{
//     timeout += Number(el.dataset.speed);
//     el.style.color = el.dataset.color;
//     if(count > allDataAttribute.length){
//         count = allDataAttribute[0];
//     }
    
//     setInterval(() =>{
//         let activCase = rotator.querySelector('.rotator__case.rotator__case_active');
//         activCase.classList.remove('rotator__case_active');
//         el.classList.add('rotator__case_active');
//     }, timeout);
//     console.log(timeout)//в этом варианте всё считает корректно
// });

setInterval(() =>{
    allDataAttribute.forEach(el=>{
            timeout += Number(el.dataset.speed);
            el.style.color = el.dataset.color;
            // if(count > allDataAttribute.length){
            //     count = allDataAttribute[0];
            // }
            console.log(timeout)// timeout выдаёт какую-то дичь
            let activCase = rotator.querySelector('.rotator__case.rotator__case_active');
            activCase.classList.remove('rotator__case_active');
            el.classList.add('rotator__case_active');
        }, timeout);
    })

    