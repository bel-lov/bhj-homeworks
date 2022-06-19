const interestCheckElems = document.querySelectorAll('.interest__check');//li length 6
const interestElems = document.querySelector('.interest');
const interestsUlElems = document.querySelectorAll('.interests.interests_active');//ul length 2
const ingredients = document.querySelectorAll('ul input');

//  Логика у меня такая. 
//  Нахожу input с типом checkbox по классу .interest__check. 
//  Затем добавляю на него обработчик события в котором нахожу детей этого элемента и проставляю checked = true. 
//  При нажатии на input, детей он находит, но не проставляет им галочки.
//Подсккажите, пожалуйста, алгоритм действий.
const checkbox = document.querySelector(".interest__check");
checkbox.addEventListener("change", function (){
let elems = interestElems.children;
	console.log(elems);
    elems.checked = true;
})


//const checkbox = document.querySelectorAll(".interest__check");
// checkbox.forEach(el => {
//     el.addEventListener("change", function () {
//         console.log(el);
//         if (el.checked) {

//             if (el.children) {
//                 let elems = el.children;
//                 for (let elem of elems) {
//                     console.log('checked');
//                     elem.checked = true;
//                 }
//             }
//             // interestsUlElems.forEach(a =>{
//             // a.checked = true;
//             // console.log('checked');
//             // });
//         } else {
//             console.log("unchecked");
//         }
//     })
// })

