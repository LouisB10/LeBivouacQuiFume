// FONCTION DISPLAY MENU MOBILE

// Cette fonction permet d'afficher ou de masquer le menu mobile

function toggleMenu() {
  const menu = document.querySelector(".mobile-nav"); // Sélectionne l'élément du menu mobile
  const body = document.querySelector("body"); // Sélectionne l'élément body
  const hamburger = document.querySelector(".hamburger"); // Sélectionne l'icône hamburger

  // Ajoute ou enlève la classe "open" au menu mobile
  menu.classList.toggle("open");
  // Ajoute ou enlève la classe "overflow-hidden" au body pour empêcher le défilement
  body.classList.toggle("overflow-hidden");
  // Ajoute ou enlève la classe "is-active" à l'icône hamburger pour l'animer
  hamburger.classList.toggle("is-active");
}

// Ajoute un événement de clic à l'icône hamburger pour déclencher la fonction toggleMenu
document.querySelector(".hamburger").addEventListener("click", toggleMenu);

// Sélectionne tous les liens du menu mobile
const mobileLinks = document.querySelectorAll(".mobile-nav a");

// Ajoute un événement de clic à chaque lien du menu mobile
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Ferme le menu mobile si un lien est cliqué et que le menu est ouvert
    if (document.querySelector(".mobile-nav").classList.contains("open")) {
      toggleMenu(); // Appelle la fonction toggleMenu pour fermer le menu
    }
  });
});
