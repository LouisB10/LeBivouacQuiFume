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

function displayMenu() {
    const body = document.querySelector("body");
    const hamburger = document.querySelector(".hamburger-btn");
    const menu = document.querySelector(".mobile-nav");
  
    hamburger.classList.toggle("open");
    menu.classList.toggle("open");
    body.classList.toggle("overflow-hidden");
    }


// Sélection de toutes les images à l'intérieur de la classe image-modal-content
const lightboxImages = document.querySelectorAll('.image-modal-content img');

const modalPopup = document.querySelector('.image-modal-popup');
// Sélection dynamique de tous les éléments à l'intérieur de la popup modale
const modalElement = element => document.querySelector(`.image-modal-popup ${element}`);

// Sélection du body
const body = document.querySelector('body');

// Fonction pour ouvrir la modale
function openModal(imgSrc) {
    body.style.overflow = 'hidden'; // Empêche le défilement de la page
    modalPopup.style.display = 'block'; // Affiche la modale
    modalElement('img').src = imgSrc; // Affiche l'image cliquée dans la modale
}

// Fermeture de la modale lors du clic sur n'importe quelle partie de la page et restauration du défilement
document.addEventListener('click', () => {
    body.style.overflowX = 'hidden'; // Réactive le défilement horizontal de la page
    body.style.overflowY = 'auto'; // Désactive le défilement vertical de la page
    modalPopup.style.display = 'none'; // Cache la modale
});

// Boucle sur chaque image pour ajouter la fonctionnalité de clic
lightboxImages.forEach(img => {
    img.addEventListener('click', e => {
        e.stopPropagation(); // Empêche la propagation du clic jusqu'au document
        openModal(img.src); // Ouvre la modale avec l'image cliquée
    });
});

