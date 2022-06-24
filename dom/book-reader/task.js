const buttonElems = document.querySelectorAll('.font-size') // Находим все кнопки с классом font-size
const bookControls = document.querySelector('.book__controls') // Находим контейнер с контроллерами
const bookContent = document.querySelector('.book__content') // Находим контент страницы

for (let i = 0; i < buttonElems.length; i++){
	const button = buttonElems[i] // получаем каждый элемент по отдельности

	button.addEventListener('click', e => {
		const buttonActive = bookControls.querySelector('.font-size.font-size_active') // Находим активную кнопку
		const data = button.dataset.size // Получаем значение data-size атрибута
		e.preventDefault()

		buttonActive.classList.remove('font-size_active')
		button.classList.add('font-size_active')

		bookContent.classList.remove('book_fs-small')
		bookContent.classList.remove('book_fs-big')

		if (data === 'small') {
			bookContent.classList.add('book_fs-small')
		}
		else if (data === 'big') {
			bookContent.classList.add('book_fs-big')
		}
	})
}