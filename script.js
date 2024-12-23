document.addEventListener("DOMContentLoaded", () => {
  console.log("Script carregado");

  // Código anterior de troca de imagens (mantido na íntegra)
  const imagens = document.querySelectorAll(".botao-acessos img");
  const imagensTablete = document.querySelectorAll(
    ".botao-acessos-tablete img"
  );
  const imagemEsquerda = document.querySelector(
    ".funcionalides-imagens-acesso img"
  );

  console.log("Número de imagens desktop encontradas:", imagens.length);
  console.log("Número de imagens tablete encontradas:", imagensTablete.length);
  console.log("Imagem da esquerda:", imagemEsquerda);

  const imagensMap = {
    0: {
      comHover: "./img/botao-imagem-atividades-com-hover.svg",
      semHover: "./img/botao-imagem-atividades-sem-hover.svg",
      imagemEsquerda: "./img/imagem-atividades.svg",
    },
    1: {
      comHover: "./img/botao-imagem-compartilhar-com-hover.svg",
      semHover: "./img/botao-imagem-compartilhar-sem-hover.svg",
      imagemEsquerda: "img/imagem-esquerda-compartilhar.svg",
    },
    2: {
      comHover: "./img/botao-imagem-ranking-com-hover.svg",
      semHover: "./img/botao-imagem-ranking-sem-hover.svg",
      imagemEsquerda: "img/imagem-esquerda-ranking.svg",
    },
    3: {
      comHover: "img/imagem-conquistas-com-hover.svg",
      semHover: "img/imagem-conquistas-sem-hover.svg",
      imagemEsquerda: "img/imagem-esquerda-ranking.svg",
    },
  };

  console.log("Mapa de imagens:", imagensMap);

  function adicionarListenersImagens(imagensElemento) {
    if (imagensElemento.length === 0) {
      console.error("Nenhuma imagem encontrada!");
      return;
    }

    imagensElemento[0].classList.add("selecionada");
    imagensElemento[0].src = imagensMap[0].comHover;

    imagensElemento.forEach((imagem, index) => {
      imagem.addEventListener(
        "click",
        (event) => {
          console.log("Imagem clicada:", imagem);
          console.log("Índice da imagem:", index);

          event.preventDefault();
          event.stopPropagation();

          imagensElemento.forEach((img, imgIndex) => {
            console.log(`Resetando imagem ${imgIndex}`);
            img.src = imagensMap[imgIndex].semHover;
            img.classList.remove("selecionada");
          });

          console.log(`Atualizando imagem ${index} para hover`);
          imagem.src = imagensMap[index].comHover;
          imagem.classList.add("selecionada");

          if (imagemEsquerda) {
            console.log(
              `Atualizando imagem da esquerda para ${imagensMap[index].imagemEsquerda}`
            );
            imagemEsquerda.src = imagensMap[index].imagemEsquerda;
          } else {
            console.error("Imagem da esquerda não encontrada!");
          }
        },
        true
      );
    });
  }

  // Adicionar listeners para imagens de desktop
  adicionarListenersImagens(imagens);

  // Adicionar listeners para imagens de tablete
  adicionarListenersImagens(imagensTablete);

  console.log("Listeners de clique adicionados");

  // Novo código para expansão de dúvidas
  const accordion = document.querySelector(".container-duvidas .accordion");
  if (accordion) {
    const accordionItems = accordion.querySelectorAll(".accordion-item");

    accordionItems.forEach((item) => {
      const toggleBtn = item.querySelector(".toggle-btn");
      const content = item.querySelector(".accordion-content");

      if (toggleBtn && content) {
        toggleBtn.addEventListener("click", () => {
          // Fechar todos os outros itens
          accordionItems.forEach((otherItem) => {
            if (otherItem !== item) {
              otherItem.querySelector(".toggle-btn").textContent = "+";
              otherItem
                .querySelector(".accordion-content")
                .classList.remove("active");
            }
          });

          // Toggle do item atual
          content.classList.toggle("active");
          toggleBtn.textContent = content.classList.contains("active")
            ? "-"
            : "+";
        });
      }
    });
  }

  const menuSuporte = document.querySelector(".menu-suporte");
  const duvidasBg = document.querySelector(".container-ajuda-bg");

  if (menuSuporte && duvidasBg) {
    menuSuporte.addEventListener("click", () => {
      duvidasBg.classList.toggle("mostrar-duvidas");
      duvidasBg.scrollIntoView({ behavior: "smooth" });
    });
  }
});
