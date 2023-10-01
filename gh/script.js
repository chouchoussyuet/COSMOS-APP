// script.js

document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            const product = this.parentElement;
            const productName = product.querySelector('h2').textContent;
            const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));
            
            const cartItem = document.createElement('li');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span class="item-name">${productName}</span>
                <span class="item-price">$${productPrice.toFixed(2)}</span>
            `;
            cartItemsList.appendChild(cartItem);
            
            total += productPrice;
            cartTotal.textContent = total.toFixed(2);
        });
    });
});
