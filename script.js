document.addEventListener("DOMContentLoaded", function () {
  const gamesLink = document.querySelector(".has-submenu");
  const gamesGridMenu = document.querySelector(".games-grid-menu");

  gamesLink.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("active");
    gamesGridMenu.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!gamesLink.contains(e.target) && !gamesGridMenu.contains(e.target)) {
      gamesLink.classList.remove("active");
      gamesGridMenu.classList.remove("active");
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
