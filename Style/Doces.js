// Simulando dados de produtos
const produtos = [
    { nome: "Bolo de Chocolate", descricao: "Delicioso bolo de chocolate com cobertura", imagem: "bolo-chocolate.jpg" },
    { nome: "Torta de Morango", descricao: "Torta de morango fresquinha e saborosa", imagem: "torta-morango.jpg" },
    { nome: "Pudim de Leite", descricao: "Pudim de leite caseiro e cremoso", imagem: "pudim-leite.jpg" },
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
