const hasTooltip = document.querySelectorAll('.has-tooltip');
document.addEventListener('click', e =>{
    if (e.target.classList.contains('has-tooltip') || e.target.closest('.has-tooltip')) {
        let target
		if (e.target.classList.contains('has-tooltip')) {
			target = e.target
		}
		else {
			target = e.target.closest('.has-tooltip')
		}
        e.preventDefault()
		tooltipShow(target)
    }
    else {
		tooltipHide()
	}
})

function tooltipShow(link){
    if(!document.querySelector('.tooltip')){
        createTooltip(link);
    }
    const tooltip = document.querySelector('.tooltip');

	tooltip.innerHTML = link.getAttribute('title');
	tooltip.classList.add('tooltip_active');
    tooltip.style.left = link.getBoundingClientRect().left + ( link.offsetWidth / 2 ) - ( tooltip.offsetWidth / 2 ) + 'px';
    tooltip.style.top = link.getBoundingClientRect().top + window.scrollY - tooltip.clientHeight - 4 + 'px';
}

function tooltipHide(){
    const tooltip = document.querySelector('.tooltip');
    if(tooltip){
        tooltip.classList.remove('tooltip_active');
    }
}

function createTooltip(){
    const tooltip = document.createElement('div');
    console.log(tooltip);
    tooltip.classList.add('tooltip');
    document.body.append(tooltip);
}
