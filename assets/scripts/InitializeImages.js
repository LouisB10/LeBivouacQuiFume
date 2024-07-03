// FONCTION INITIALISATION DES IMAGES

// Cette fonction initialise et ajoute des images à un conteneur donné
// Paramètres:
// - nbr: Nombre total d'images à ajouter
// - container: Élément HTML dans lequel les images seront ajoutées

function initializeImages(nbr, container) {
    // Boucle pour créer et ajouter les images
    for (let i = 1; i <= nbr; i++) {
        // Création des éléments nécessaires
        const containerModal = document.createElement("div"); // Conteneur principal pour chaque image et son modal
        const modal = document.createElement("div"); // Conteneur pour l'image dans le modal
        const img = document.createElement("img"); // Élément image

        // Ajout de classes CSS aux éléments créés
        containerModal.className = "modal-content-wrapper events-container";
        modal.className = "image-modal-content";
        img.className = "photo";

        // Définir la source de l'image
        img.src = `assets/img/affiches/affiche-${i}.webp`; // Chemin vers l'image

        // Construction de la hiérarchie des éléments
        container.appendChild(containerModal); // Ajouter le conteneur modal au conteneur principal
        containerModal.appendChild(modal); // Ajouter le modal au conteneur modal
        modal.appendChild(img); // Ajouter l'image au modal
    }
}
