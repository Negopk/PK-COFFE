let cartOpen = false;
let cartItems = [];

function toggleCart() {
    const cart = document.getElementById("cart");
    cartOpen = !cartOpen;

    if (cartOpen) {
        cart.classList.add("active");
        displayCartItems();
    } else {
        cart.classList.remove("active");
    }
}

function addToCart(item) {
    cartItems.push(item);
    updateCartCount();
}


function displayCartItems() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Limpa a lista antes de adicionar os itens novamente
    cartItems.array.forEach(element => {
        forEach
    });(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        cartItemsList.appendChild(listItem);
    });
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cartItems.length;
}

function loadItems() {
    let beveragesSection = document.getElementById('beverages');
    let sweetsSection = document.getElementById('sweets');
    let savorySection = document.getElementById('savory');

    // Bebidas
    beveragesSection.innerHTML += '<p>Café Espresso <button onclick="addToCart(\'Café Espresso\')">Adicionar ao Carrinho</button></p>';
    beveragesSection.innerHTML += '<p>Cappuccino <button onclick="addToCart(\'Cappuccino\')">Adicionar ao Carrinho</button></p>';

    // Doces
    sweetsSection.innerHTML += '<p>Bolo de Chocolate <button onclick="addToCart(\'Bolo de Chocolate\')">Adicionar ao Carrinho</button></p>';
    sweetsSection.innerHTML += '<p>Cheesecake <button onclick="addToCart(\'Cheesecake\')">Adicionar ao Carrinho</button></p>';

    // Salgados
    savorySection.innerHTML += '<p>Coxinha <button onclick="addToCart(\'Coxinha\')">Adicionar ao Carrinho</button></p>';
    savorySection.innerHTML += '<p>Pão de Queijo <button onclick="addToCart(\'Pão de Queijo\')">Adicionar ao Carrinho</button></p>';
}

window.onload = loadItems;

//Adicionar nuemro ao icon carrinho 

document.addEventListener("DOMContentLoaded", function() {
    const cartItemsElement = document.querySelector(".cart-items");
    const addToCartButtons = document.querySelectorAll(".product button");
    let cartItemsCount = 0;

    // Função para atualizar a contagem de itens no carrinho
    function updateCartItemsCount() {
        cartItemsElement.textContent = cartItemsCount;
    }

    // Adiciona evento de clique para cada botão "Adicionar ao Carrinho"
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            cartItemsCount++;
            updateCartItemsCount();
            // Você pode adicionar lógica aqui para adicionar o produto ao carrinho
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const cartItemsElement = document.querySelector(".cart-items");
    const addToCartButtons = document.querySelectorAll(".product button");
    let cartItemsCount = 0;

    // Função para atualizar a contagem de itens no carrinho
    function updateCartItemsCount() {
        cartItemsElement.textContent = cartItemsCount;
    }

    // Adiciona evento de clique para cada botão "Adicionar ao Carrinho"
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            cartItemsCount++;
            updateCartItemsCount();
            // Você pode adicionar lógica aqui para adicionar o produto ao carrinho
        });
    });
});

//Perfil e Home 

function goToProfile() {
    window.location.href = 'Perfil.html';
}

function goToHome() {
   
        window.location.href = 'header.html';
}