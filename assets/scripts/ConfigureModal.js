// FONCTION DE CONFIGURATION DU MODAL

// Cette fonction configure et gère l'affichage des modals pour les images.
// Elle permet d'afficher une image en plein écran lorsque l'on clique dessus, 
// et de fermer le modal lorsqu'on clique en dehors de l'image.

function configureModal() {
    // Sélectionner toutes les images de la galerie
    const lightboxImages = document.querySelectorAll('.photo');
    // Sélectionner l'élément modal principal
    const modalPopup = document.querySelector('.image-modal-popup');
    // Fonction pour sélectionner un élément à l'intérieur du modal
    const modalElement = element => document.querySelector(`.image-modal-popup ${element}`);
    // Sélectionner l'élément body pour manipuler le style
    const body = document.querySelector('body');

    // Fonction pour ouvrir le modal avec l'image cliquée
    function openModal(imgSrc, isLarge) {
        body.style.overflow = 'hidden'; // Empêcher le défilement de la page
        modalPopup.style.display = 'block'; // Afficher le modal
        modalPopup.style.overflow = 'auto'; // Autoriser le défilement à l'intérieur du modal
        modalElement('img').src = imgSrc; // Afficher l'image cliquée dans le modal
          // Ajouter ou supprimer la classe image-modal-popup-large selon l'image cliquée
    if (isLarge) {
        modalPopup.classList.add('image-modal-popup-large');
    } else {
        modalPopup.classList.remove('image-modal-popup-large');
    }
    }

    // Écouter les clics sur le document pour fermer le modal
    document.addEventListener('click', () => {
        body.style.overflowX = 'hidden'; // Restaurer le défilement horizontal
        body.style.overflowY = 'auto'; // Restaurer le défilement vertical
        modalPopup.style.display = 'none'; // Cacher le modal
    });

    // Ajouter un écouteur de clic à chaque image pour ouvrir le modal
    lightboxImages.forEach(img => {
        img.addEventListener('click', e => {
            e.stopPropagation(); // Empêcher la propagation du clic au document
            openModal(img.src); // Ouvrir le modal avec l'image cliquée
        });
    });
}
