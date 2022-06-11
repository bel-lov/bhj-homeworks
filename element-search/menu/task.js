const menuLink = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLink.length; i++) {
    const menuItem = menuLink[i].closest('.menu__item');
    const menuSub = menuItem.querySelector('.menu_sub');


    menuLink[i].onclick = function() {
    if(menuSub) {
    menuSub.classList.toggle('menu_active');
    return false;
    }
}
}
