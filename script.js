document.addEventListener("DOMContentLoaded", function() {
    // Mapeia os textos em diferentes idiomas
    var languageData = {
        'fra': {
            'hello': 'Bonjour! Je suis Clive Kifumbi',
            'developer': 'Développeur Full Stack',
            'description': 'Un développeur frontend en formation passionné par la technologie. Je me lance toujours dans de nouveaux projets et recherche des retours d\'information dans la communauté de programmation, en plus de partager mes connaissances.',
        },
        'eng': {
            'hello': 'Hello! I\'m Clive Kifumbi',
            'developer': 'Full Stack Developer',
            'description': 'A frontend developer in training passionate about technology. I\'m always diving into new projects and seeking feedback in the programming community, in addition to sharing my knowledge.',
        },
        'port': {
            'hello': 'Olá! Eu sou o Clive Kifumbi',
            'developer': 'Desenvolvedor Full Stack',
            'description': 'Um desenvolvedor frontend em formação apaixonado por tecnologia. Estou sempre me desafiando com novos projetos e buscando feedback na comunidade de programação, além de compartilhar meus conhecimentos.',
        }
    };

    // Adiciona um ouvinte de evento de clique a todos os links com a classe 'translate'
    document.querySelectorAll('.translate').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita o comportamento padrão do link
            
            // Obtém o idioma do link clicado
            var lang = link.getAttribute('data-lang');

            // Chama a função para alterar o idioma da página
            changeLanguage(lang);

            // Altera o idioma do botão também
            document.querySelector('.btn-cv').setAttribute('data-lang', lang);
        });
    });

    // Função para alterar o idioma da página
    function changeLanguage(lang) {
        // Atualiza os textos de acordo com o idioma selecionado
        var data = languageData[lang];
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var elements = document.querySelectorAll('.' + key);
                elements.forEach(function(element) {
                    element.textContent = data[key];
                });
            }
        }
    }

    // Adiciona um ouvinte de evento de clique a todos os links com a classe 'nav-item'
    document.querySelectorAll('.nav-item').forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Permite que o link funcione normalmente
            return true;
        });
    });
});
