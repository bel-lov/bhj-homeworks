const arrayTabs = Array.from(document.querySelectorAll('.tab'));
const arrayTabsContent = Array.from(document.querySelectorAll('.tab__content'));

function add(){
    for (let i = 0; i < arrayTabs.length; i++){
    arrayTabs[i].onclick = () => {
    let  currentTab = arrayTabs.findIndex(item => item.classList.contains('tab_active'));//находим индекс активной вкладки
    arrayTabs[currentTab].classList.remove('tab_active');
    arrayTabsContent[currentTab].classList.remove('tab__content_active');
    arrayTabs[i].classList.add('tab_active');
    arrayTabsContent[i].classList.add('tab__content_active');
    }}
}
window.addEventListener('click', add);



