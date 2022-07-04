const productControl = document.querySelectorAll('.product__quantity-controls');

//увеличение и уменьшение количества товара
for (let i = 0; i < productControl.length; i++) {
    const productControlElem = productControl[i];
    const productValue = productControlElem .querySelector('.product__quantity-value');
    const controlDec = productControlElem .querySelector('.product__quantity-control_dec');
    const controlInc = productControlElem .querySelector('.product__quantity-control_inc');

    controlInc.addEventListener('click', e => productValue.innerText++);
    controlDec.addEventListener('click', e => {
        if (productValue.innerText > 1) {
            productValue.innerText--
        }
        else {
            productValue.innerText = 1;
        }
    })
}

//Добвление товара в корзину
const cart = document.querySelector('.cart__products');//корзина

addEventListener('click', e => {
	const target = e.target;

    if(target.classList.contains('product__add')){
        const product = target.closest('.product');//карточка, в которой находится кнопка, по которой мы кликнули
        const productId = product.dataset.id;//Получаем id товара
        const productImgSrc = product.querySelector('.product__image').src;//Получаем значение src картинки товара
        const productToCart = cart.querySelector(`[data-id="${productId}"]`);// Ищем товар в корзине
        let productQuantity = product.querySelector('.product__quantity-value').innerText;// Получаем кол-во товаров
        if (productToCart) {
            const productCount = productToCart.querySelector('.cart__product-count')//кол-во добавленного товара
            productCount.innerText = parseInt(productQuantity) + parseInt(productCount.innerText)//прибавляем к текущему кол-ву, новое кол-во товара
        }
        else{
            cart.insertAdjacentHTML('beforeend', generateCartProduct(productImgSrc, productQuantity, productId));
        }
    }
});

//html добавляемой в корзину карточки
const generateCartProduct = (img, productValue, id) =>{
    return `<div class="cart__product" data-id="${id}">
    <img class="cart__product-image" src="${img}">
    <div class="cart__product-count">${productValue}</div>
    </div>`;
}
