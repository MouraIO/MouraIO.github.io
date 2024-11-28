document.addEventListener("DOMContentLoaded", function () {
  const gamesLink = document.querySelector("#games-menu");
  const gamesGridMenu = document.querySelector(".games-grid-menu");
  const sportsLink = document.querySelector("#sports-menu");
  const sportsGridMenu = document.querySelector(".sports-grid-menu");

  function toggleSubmenu(link, menu) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.toggle("active");
      menu.classList.toggle("active");
    });
  }

  toggleSubmenu(gamesLink, gamesGridMenu);
  toggleSubmenu(sportsLink, sportsGridMenu);

  document.addEventListener("click", function (e) {
    if (!gamesLink.contains(e.target) && !gamesGridMenu.contains(e.target)) {
      gamesLink.classList.remove("active");
      gamesGridMenu.classList.remove("active");
    }
    if (!sportsLink.contains(e.target) && !sportsGridMenu.contains(e.target)) {
      sportsLink.classList.remove("active");
      sportsGridMenu.classList.remove("active");
    }
  });

  // Pegar todas as imagens do banner
  const bannerImages = document.querySelectorAll(".banner img");
  
  // Ativar a primeira imagem quando a página carregar
  bannerImages[0].classList.add("active");
  
  // Adicionar o evento de clique em cada imagem
  bannerImages.forEach((img) => {
    img.addEventListener("click", () => {
      // Remover active de todas as imagens
      bannerImages.forEach((image) => {
        image.classList.remove("active");
      });
      
      // Adicionar active na imagem clicada
      img.classList.add("active");
    });
  });
});
