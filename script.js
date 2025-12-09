let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let contador = document.getElementById('contador');
contador.textContent = carrinho.length;

// Função para adicionar produto ao carrinho
document.querySelectorAll('.adicionar').forEach(button => {
    button.addEventListener('click', () => {
        const produto = button.getAttribute('data-produto');
        const preco = parseFloat(button.getAttribute('data-preco'));
        carrinho.push({ produto, preco });
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        contador.textContent = carrinho.length;
        alert($,{produto} ,adicionado ,ao ,carrinho);
    });
});

// Exibir carrinho (simples alerta; expanda para uma modal)
document.getElementById('carrinho-btn').addEventListener('click', () => {
    if (carrinho.length === 0) {
        alert('Carrinho vazio!');
    } else {
        let total = carrinho.reduce((sum, item) => sum + item.preco, 0);
        alert(Itens, ${carrinho,map(item , item,produto)join(', ')}\nTotal: R$ ${total.toFixed(2)});
    }
});
        