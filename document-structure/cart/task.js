const productStorage = document.querySelector('.cart__products');
let cartStorageKey = 'products';

// Добавление продуктов из localStorage при загрузке страницы
window.addEventListener('load', function() {
    const savedProducts = window.localStorage.getItem(cartStorageKey);
    console.log(savedProducts);
    if(savedProducts) {
        const products = JSON.parse(savedProducts);
        for (const product of products) {
            const cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.dataset.id = product.id;
            cartProduct.innerHTML = `
                <img class="cart__product-image" src="${product.image}">
                <div class="cart__product-count">${product.count}</div>
            `;
            productStorage.appendChild(cartProduct);
        }
    }
});

// Добавит продукты в localStorage
const addProductToLocalStorage = () => {
    const products = [];
    productStorage.querySelectorAll('.cart__product').forEach((product) => {
        const productId = product.dataset.id;
        const productImage = product.querySelector('.cart__product-image').src;
        const productCount = parseInt(product.querySelector('.cart__product-count').textContent);
        products.push({
            id: productId,
            image: productImage,
            count: productCount
        })
        const productsJson = JSON.stringify(products);
        window.localStorage.setItem(cartStorageKey, productsJson);
    })
};

const productControls = document.querySelectorAll('.product__quantity-controls');

// Управление кнопками - и +
productControls.forEach(control => {
    const buttonAddValue = control.querySelector('.product__quantity-control_inc');
    const buttonRemoveValue = control.querySelector('.product__quantity-control_dec');
    const productQuantityValue = control.querySelector('.product__quantity-value');

    buttonAddValue.addEventListener('click', () => {
        productQuantityValue.textContent = parseInt(productQuantityValue.textContent) + 1;
    });

    buttonRemoveValue.addEventListener('click', () => {
        productQuantityValue.textContent = parseInt(productQuantityValue.textContent) - 1;
        if(productQuantityValue.textContent < 1) {
            productQuantityValue.textContent = 1;
        }
    });
});

const addToCartButtons = document.querySelectorAll('.product__add');

// Добавление продукта в корзину при клике на кнопку "Добавить в корзину"
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.closest('.product');
        const productId = product.dataset.id;
        const productImage = product.querySelector('.product__image').src;
        const productCount = parseInt(product.querySelector('.product__quantity-value').textContent);
        
        let cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);
        if(cartProduct) {
            let cartProductCount = parseInt(cartProduct.querySelector('.cart__product-count').textContent) + productCount;
            cartProduct.querySelector('.cart__product-count').textContent = cartProductCount;
        } else {
            cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.dataset.id = productId;
            cartProduct.innerHTML = `
                <img class="cart__product-image" src="${productImage}">
                <div class="cart__product-count">${productCount}</div>
            `;
            document.querySelector('.cart__products').appendChild(cartProduct);
        }
        addProductToLocalStorage();
    });
});

// Удаление продукта из корзины при клике на кнопку "Удалить из корзины"
const deteleProductFromCartButtons = document.querySelectorAll('.product__delete');

deteleProductFromCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.closest('.product');
        const productId = product.dataset.id;
        const productCount = parseInt(product.querySelector('.product__quantity-value').textContent);
        let cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);
        if(cartProduct) {
            let cartProductCount = parseInt(cartProduct.querySelector('.cart__product-count').textContent);
            cartProductCount -= productCount;
            if (cartProductCount > 0) {
                cartProduct.querySelector('.cart__product-count').textContent = cartProductCount;
            } else {
                cartProduct.remove();
            }
        }
        addProductToLocalStorage();
    });
});