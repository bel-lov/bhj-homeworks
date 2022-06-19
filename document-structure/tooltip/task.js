const hasTooltip = document.querySelectorAll('.has-tooltip');

// for(let i =0; i <hasTooltip.length; i++ ){
// hasTooltip[i].addEventListener('click', (event)=>{
//     event.preventDefault()
//     console.log(hasTooltip[i]);
// })
// }

function handleFormSubmit(e,i) {
    let titleValue = hasTooltip[i].title;

    a = document.querySelector('.has-tooltip.tooltip_active');
        if (a){
        a.classList.remove('.tooltip_active')
        titleValue = null;
        }
    const html = `<div class="tooltip tooltip_active" style="bottom: 50%">${titleValue}
</div>`;
    let parentChat = document.querySelector('.has-tooltip');
    let div = document.createElement('div');
    div.innerHTML = html;
    parentChat.append(div);
}

for (let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].addEventListener('click', (e) => {
        
        e.preventDefault();
        handleFormSubmit(e,i)
    })
}