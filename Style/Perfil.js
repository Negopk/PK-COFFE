const perfilBtn = document.getElementById('perfil-btn');
const perfil = document.getElementById('perfil');

perfilBtn.addEventListener('click', () => {
    perfil.classList.toggle('hide');
});


let cartOpen = false;

function toggleCart() {
    const cart = document.getElementById("cart");
    cartOpen = !cartOpen;

    if (cartOpen) {
        cart.classList.add("active");
    } else {
        cart.classList.remove("active");
    }
}