// script.js
// Simples funcionalidade para o botão de comprar (alerta)
document.querySelectorAll('.comprar').forEach(button => {
    button.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho!');
    });
});

// Menu responsivo (opcional, para mobile)
const menu = document.querySelector('.menu');
const toggleMenu = () => {
    menu.classList.toggle('active');
};

// Adicionar um botão hambúrguer se necessário (não incluído no HTML, mas pode ser adicionado)