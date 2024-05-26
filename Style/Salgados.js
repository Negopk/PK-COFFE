// Simulando dados de produtos
const produtos = [
    { nome: "Coxinha", descricao: "Coxinha deliciosa com massa crocante e recheio suculento", imagem: "coxinha.jpg" },
    { nome: "Pastel de Carne", descricao: "Pastel de carne saboroso e quentinho", imagem: "pastel-carne.jpg" },
    { nome: "Pão de Queijo", descricao: "Pão de queijo tradicional, macio por dentro e crocante por fora", imagem: "pao-queijo.jpg" },
];

// Função para carregar os produtos na página
function carregarProdutos() {
    const main = document.getElementById("main");

    produtos.forEach(produto => {
        const card = document.createElement("div");
        card.classList.add("card");

        const imagem = document.createElement("img");
        imagem.src = `imagens/${produto.imagem}`;
        imagem.alt = produto.nome;

        const nome = document.createElement("h2");
        nome.textContent = produto.nome;

        const descricao = document.createElement("p");
        descricao.textContent = produto.descricao;

        card.appendChild(imagem);
        card.appendChild(nome);
        card.appendChild(descricao);

        main.appendChild(card);
    });
}

// Carregar os produtos quando a página for carregada
window.onload = carregarProdutos;
