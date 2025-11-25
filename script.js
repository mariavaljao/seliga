// Menu Responsivo (Toggle para Mobile)
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Menu';
    toggleButton.style.display = 'none';
    toggleButton.style.background = '#f87aeeff';
    toggleButton.style.color = 'white';
    toggleButton.style.border = 'none';
    toggleButton.style.padding = '0.5rem';
    toggleButton.style.cursor = 'pointer';
    header.appendChild(toggleButton);

    // Mostrar botão em telas pequenas
    const checkScreen = () => {
        if (window.innerWidth <= 768) {
            toggleButton.style.display = 'block';
            nav.style.display = 'none';
        } else {
            toggleButton.style.display = 'none';
            nav.style.display = 'flex';
        }
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);

    toggleButton.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });

    // Validação Simples de Formulário (Adicione um form no HTML se quiser)
    // Exemplo: Para um formulário de contato no rodapé
    const form = document.querySelector('#contact-form'); // Adicione <form id="contact-form"> no HTML
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            if (email) {
                alert('Obrigado! Entraremos em contato em breve.');
            } else {
                alert('Por favor, insira um e-mail válido.');
            }
        });
    }
});