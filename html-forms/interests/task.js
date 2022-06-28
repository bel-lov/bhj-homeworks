
addEventListener('change', e => {
	const target = e.target

	if ( target.classList.contains('interest__check') ) {
		const interest = target.closest('.interest')
		const interests = interest.querySelector('.interests')

		if ( interests ) {
			const checkboxElems = interests.querySelectorAll('.interest input[type=checkbox]')

			Array.from(checkboxElems).forEach(checkbox => checkbox.checked = target.checked)
		}
	}
})
