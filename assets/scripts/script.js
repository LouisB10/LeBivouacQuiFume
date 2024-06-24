//BUTTON BACK TO TOP
document.addEventListener("DOMContentLoaded", function() {
    const backToTopBtn = document.getElementById("backToTopBtn");
  
    window.addEventListener("scroll", function() {
        // Affiche le bouton lors du premier scroll depuis le haut
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });
  });
  //SMOOTH SCROLL 
  function scrollToTop() {
    // Fait défiler vers le haut de la page en douceur
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  }
  // FONCTION DISPLAY MENU MOBILE 

  function toggleMenu() {
    const menu = document.querySelector(".mobile-nav");
    const body = document.querySelector("body");
    const hamburger = document.querySelector('.hamburger');

    menu.classList.toggle("open");
    body.classList.toggle("overflow-hidden");
    hamburger.classList.toggle('is-active');
}

document.querySelector('.hamburger').addEventListener('click', toggleMenu);

// Sélectionner tous les liens du menu mobile
const mobileLinks = document.querySelectorAll('.mobile-nav a');

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Fermer le menu si un lien est cliqué
        if (document.querySelector(".mobile-nav").classList.contains("open")) {
            toggleMenu();
        }
    });
});
