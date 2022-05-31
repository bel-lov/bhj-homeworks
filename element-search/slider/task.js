const sliderArrow = document.querySelectorAll('.slider__arrow');
let slideIndex = 0;
let currentSlide;//текущий слайд

for (let i = 0; i < sliderArrow.length; i++) {
    let link = sliderArrow[i];
    link.onclick = function(){
    showSlides(slideIndex);
}
}

function showSlides() {
    let slides = document.querySelectorAll('.slider__item');
    for (let slide of slides) {
        slide.classList.add('slider__item_active');
    }
}


