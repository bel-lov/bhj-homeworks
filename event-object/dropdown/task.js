const list = document.querySelector('.dropdown__list');
const item = Array.from(document.querySelectorAll('.dropdown__item'));
const script = document.querySelector('.dropdown__value');

script.addEventListener('click', e => {
    console.log(e.currentTarget);
    list.classList.toggle('dropdown__list_active');
});

for (let i = 0; i < item.length; i++) {
    item[i].onclick = () => {
        script.textContent = item[i].textContent;
        list.classList.remove('dropdown__list_active');
    return false;
}
}