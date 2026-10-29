const botoes = document.querySelectorAll("[data-tema]");    

const areaOrientacoes = document.getElementById("area-orientacoes");
const tituloOrientacoes = document.getElementById("titulo-orientacoes");
const textoOrientacoes = document.getElementById("texto-orientacoes");
const botaoFechar = document.getElementById("fechar-orientacoes");

const orientacoes = {
    celular: {
        titulo: "Como usar melhor o celular",
0        passos: [
            "Para aumentar as letras, abra as Configurações do celular e procure por Tela ou Tamanho da fonte.",
            "Para ajustar o volume, use os botões laterais do aparelho. Os nomes e as opções podem variar conforme o modelo.",
            "Para aumentar o brilho, abra o painel de configurações rápidas e ajuste a barra de brilho.",
            "Se tiver dificuldade, peça ajuda a alguém de confiança e faça uma alteração por vez."
        ]
    },

    comunicacao: {
        titulo: "Como se comunicar pelo celular",
         passos: [
            "Abra o aplicativo de mensagens que você costuma utilizar.",
            "Escolha uma conversa existente ou procure o contato da pessoa com quem deseja falar.",
            "Para enviar uma mensagem, toque no campo de texto, escreva e pressione o botão de envio.",
            "Para uma chamada de vídeo, abra a conversa e procure o ícone de câmera, se o aplicativo oferecer essa opção.",
            "Antes de uma chamada, confira se o contato está correto e se você tem conexão com a internet."
        ]
    },

    seguranca: {
        titulo: "Como navegar com segurança",
        passos: [
            "Nunca compartilhe senhas, códigos de confirmação ou dados bancários por mensagem ou ligação inesperada.",
            "Desconfie de mensagens que exigem urgência, prometem prêmios ou pedem pagamentos inesperados.",
            "Evite clicar em links suspeitos. Confirme a informação diretamente no aplicativo ou site oficial.",
            "Use senhas fortes e diferentes para contas importantes. Não anote senhas em locais públicos.",
            "Se suspeitar de um golpe, não faça pagamentos nem envie dados. Peça ajuda a alguém de confiança."
        ]
    }
};

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        const tema = botao.dataset.tema;
        const conteudo = orientacoes[tema];

        if (!conteudo) {
            return;
        }

        tituloOrientacoes.textContent = conteudo.titulo;

        textoOrientacoes.innerHTML =
            "<ol>" +
            conteudo.passos.map(function(passo) {
                return "<li>" + passo + "</li>";
            }).join("") +
            "</ol>";

        areaOrientacoes.hidden = false;
        areaOrientacoes.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

botaoFechar.addEventListener("click", function() {
    areaOrientacoes.hidden = true;
});
