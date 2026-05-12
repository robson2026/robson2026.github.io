// Função para carregar os produtos do arquivo JSON
async function carregarProdutos(categoria) {
    try {
        const resposta = await fetch('produtos.json');
        const dados = await resposta.json();
        const listaProdutos = dados[categoria];
        const container = document.querySelector('.product-grid');

        if (!container) return;

        container.innerHTML = ""; // Limpa o container antes de carregar

        listaProdutos.forEach(produto => {
            const card = `
                <div class="product-card">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao}</p>
                    <span class="price">R$ ${produto.preco}</span>
                    <a href="${produto.link}" target="_blank" class="btn-buy">Ver na Loja Parceira</a>
                </div>
            `;
            container.innerHTML += card;
        });
    } catch (erro) {
        console.error("Erro ao carregar produtos:", erro);
    }
}

// Identifica qual página está aberta e carrega a categoria certa
window.onload = () => {
    const path = window.location.pathname;
    if (path.includes("computadores.html")) carregarProdutos("computadores");
    if (path.includes("notebooks.html")) carregarProdutos("notebooks");
    if (path.includes("acessorios.html")) carregarProdutos("acessorios");
};
