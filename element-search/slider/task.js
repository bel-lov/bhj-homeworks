const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');
const sliders = Array.from(document.querySelectorAll('.slider__item'));
let currentSlide;//индекс текущего слайда

sliderArrowNext.addEventListener('click', () => {
    let  currentSlide = sliders.findIndex(item => item.classList.contains('slider__item_active'));//находим индекс активного слайда
    let nextSlide = currentSlide == sliders.length -1 ? 0 : currentSlide + 1;
    sliders[currentSlide].classList.remove('slider__item_active');//Скрывайте слайд по найденной позиции
    sliders[nextSlide].classList.add('slider__item_active');
});

sliderArrowPrev.addEventListener('click', () => {
    let  currentSlide = sliders.findIndex(item => item.classList.contains('slider__item_active'));
    let nextSlide = currentSlide == 0 ? sliders.length -1 : currentSlide - 1;
    sliders[currentSlide].classList.remove('slider__item_active');
    sliders[nextSlide].classList.add('slider__item_active');
});

