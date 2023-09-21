var links = document.querySelectorAll(".link");

        // Função para bloquear a navegação entre páginas
        function bloquearNavegacao(event) {
            event.preventDefault();
            alert("A navegação entre páginas está bloqueada.");
        }

        // Adiciona um ouvinte de evento de clique para bloquear a navegação
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener("click", bloquearNavegacao);
        }

        // Impede o usuário de voltar para páginas bloqueadas usando o botão "Voltar" do navegador
        window.addEventListener("popstate", function(event) {
            alert("A navegação entre páginas está bloqueada.");
            history.pushState(null, null, window.location.href);
        });