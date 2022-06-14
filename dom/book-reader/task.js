const buttonElems = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');
const bookControl = document.querySelector('.book__control');
const bookControls = document.querySelector('.book__controls');
const buttonColors = document.querySelectorAll('.color');

for (let i = 0; i < buttonElems.length; i++) {
    const button = buttonElems[i];
    const data = button.dataset.size;

    button.addEventListener('click', function (e) {
        e.preventDefault();

        const buttonActivSize = bookControls.querySelector('.font-size.font-size_active');
        buttonActivSize.classList.remove('.font-size_active');

        if (data === 'small') {
            button.classList.add('font-size_active');
            book.classList.add('book_fs-small');
        }
        else if (data === 'big') {
            button.classList.add('font-size_active');
            book.classList.add('book_fs-big');
        }
    })
}

for (let i = 0; i < buttonColors.length; i++) {
    const buttonColor = buttonColors[i];
    const dataText = buttonColor.dataset.textColor;

    buttonColor.addEventListener('click', function (e) {
        e.preventDefault();
        const buttonActivColorText = bookControls.querySelector('.color_active');
        buttonActivColorText.classList.remove('.color_active');

        if (dataText === 'black') {
            buttonColor.classList.add('color_active');
            book.classList.add('book_color-black');
        }
        else if (dataText === 'gray') {
            buttonColor.classList.add('color_active');
            book.classList.add('book_color-gray');
        }
        else if (dataText === 'whitesmoke') {
            buttonColor.classList.add('color_active');
            book.classList.add('book_color-whitesmoke');
        }
    })
}
