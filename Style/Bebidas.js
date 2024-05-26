// Simulando dados de produtos
const produtos = [
    { nome: "Café Espresso", descricao: "Café forte e encorpado, perfeito para um impulso de energia", imagem: "cafe-espresso.jpg" },
    { nome: "Cappuccino", descricao: "Café cremoso com uma generosa camada de espuma de leite", imagem: "cappuccino.jpg" },
    { nome: "Chá de Camomila", descricao: "Chá suave e reconfortante, ideal para relaxar", imagem: "cha-camomila.jpg" },
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
