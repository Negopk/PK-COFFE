// Redirecionar para a página de produtos com os parâmetros na URL
window.location.href = `Produtos.html?name=${encodeURIComponent(name)}&category=${encodeURIComponent(category)}&price=${encodeURIComponent(price.toFixed(2))}&image=${encodeURIComponent(imageUrl)}`;



document.addEventListener('DOMContentLoaded', function() {
    // Obter parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const category = urlParams.get('category');
    const price = urlParams.get('price');
    const image = urlParams.get('image');

    // Verificar se os parâmetros estão presentes
    if (name && category && price && image) {
        // Criar o elemento de produto
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <p><strong>Nome:</strong> ${decodeURIComponent(name)}</p>
            <p><strong>Categoria:</strong> ${decodeURIComponent(category)}</p>
            <p><strong>Preço:</strong> $${decodeURIComponent(price)}</p>
            <img src="${decodeURIComponent(image)}" alt="Imagem do Produto">
        `;
        
        // Adicionar o produto à página
        const productList = document.getElementById('product-list');
        productList.appendChild(productItem);
    } else {
        // Se os parâmetros estiverem faltando, mostrar uma mensagem de erro ou redirecionar para outra página
        console.error('Parâmetros inválidos na URL');
    }
});
