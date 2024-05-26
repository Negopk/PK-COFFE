// Redirecionar para a página de produtos com os parâmetros na URL
window.location.href = `caminho/para/pagina_de_produtos.html?name=${encodeURIComponent(name)}&category=${encodeURIComponent(category)}&price=${encodeURIComponent(price.toFixed(2))}&image=${encodeURIComponent(imageUrl)}`;
