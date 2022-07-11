const textArea = document.querySelector('#editor');//// Инициализировала и присвоила переменной элемент textarea

textArea.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        localStorage.setItem('key', textArea.value)
    }
})
textArea.value = localStorage.getItem("key")

