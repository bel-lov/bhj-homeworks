const rotatorElems = document.querySelectorAll('.rotator')

for (let i = 0; i < rotatorElems.length; i++) {
	const rotator = rotatorElems[i];//в переменной каждый элемент коллекции
    const rotatorCaseElems = rotator.querySelectorAll('.rotator__case')
    console.log(rotator)
    setActiveRotatorCase(rotator)
}
function setActiveRotatorCase(rotator){
    const rotatorCaseActive = rotator.querySelector('.rotator__case.rotator__case_active')//активный элемент
    const time = rotatorCaseActive.dataset.speed//время в атрибуте
    rotatorCaseActive.style.color = rotatorCaseActive.dataset.color//меняем цвет активному элементу
    const rotatorCaseNext = rotatorCaseActive.nextElementSibling !== null ? rotatorCaseActive.nextElementSibling : rotator.querySelector('.rotator__case')//следубщий элемент

setTimeout(e=>{
    rotatorCaseActive.classList.remove('rotator__case_active')//удаляем у активного элемента
    rotatorCaseNext.classList.add('rotator__case_active')//добавляем следующему элементу
    setActiveRotatorCase(rotator)
}, time)
}