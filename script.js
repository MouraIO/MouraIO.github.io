document.addEventListener("DOMContentLoaded", () => {
  // --- Código das Imagens ---
  const imagens = document.querySelectorAll(".imagens-conteudos img");
  const imagemEsquerda = document.querySelector(
    ".conteudo-imagem-esquerdo img"
  );

  const imagensMap = {
    atividades: {
      comHover: "./img/atividade-com-hover.svg",
      semHover: "./img/atividades-sem-hover.svg",
      imagemEsquerda: "./img/imagem-conteudo esquerda.svg",
    },
    compartilhar: {
      comHover: "./img/compartilhar-com-hover.svg",
      semHover: "./img/compartilhar-sem-hover.svg",
      imagemEsquerda: "./img/imagem-hover-compartilhar.svg",
    },
    ranking: {
      comHover: "./img/ranking-com-hover.svg",
      semHover: "./img/ranking-sem-hover.svg",
      imagemEsquerda: "./img/imagem-hover-ranking.svg",
    },
    conquistas: {
      comHover: "./img/conquistas-com-hover.svg",
      semHover: "./img/conquistas-sem-hover.svg",
      imagemEsquerda: "./img/imagem-conteudo esquerda.svg",
    },
  };

  imagens[0].classList.add("selecionada");

  imagens.forEach((imagem) => {
    imagem.addEventListener("click", () => {
      imagens.forEach((img) => {
        const nomeImagem = img.alt.toLowerCase();
        img.src = imagensMap[nomeImagem].semHover;
        img.classList.remove("selecionada");
      });

      const nomeImagemClicada = imagem.alt.toLowerCase();
      imagem.src = imagensMap[nomeImagemClicada].comHover;
      imagem.classList.add("selecionada");

      imagemEsquerda.src = imagensMap[nomeImagemClicada].imagemEsquerda;
    });
  });

  // --- Código do FAQ ---
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      // Encontra o elemento pai e a resposta
      const parent = question.parentElement;
      const answer = parent.querySelector(".faq-answer");
      const symbol = question.querySelector(".toggle-symbol");

      // Alterna a classe active para mostrar/esconder a resposta
      parent.classList.toggle("active");
      answer.style.display =
        answer.style.display === "block" ? "none" : "block";

      // Troca o símbolo "+" para "-"
      symbol.textContent = symbol.textContent === "+" ? "-" : "+";
    });
  });
});
