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

  const bannerImages = document.querySelectorAll(".banner img");
  const whiteScreen = document.querySelector(".white-screen");

  bannerImages.forEach((img) => {
    img.addEventListener("click", () => {
      bannerImages.forEach((image) => {
        image.classList.remove("active");
      });

      img.classList.add("active");

      whiteScreen.classList.add("active");

      setTimeout(() => {
        whiteScreen.classList.remove("active");
      }, 500);
    });
  });
});
