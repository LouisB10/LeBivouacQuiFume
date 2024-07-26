// FONCTION PRINCIPALE DE L'APPLICATION
// Cette fonction est exécutée lorsque le corps du document est chargé.
document.body.onload = function() {
    const nbr = 4; // Nombre total de diapositives
    const nbImgM = 2; // Nombre d'images à afficher en mode mobile
    const nbImgD = 1; // Nombre d'images à afficher en mode desktop
    const container = document.getElementById("container"); // Conteneur des images du carrousel
    const r = document.getElementById("r"); // Bouton pour faire défiler à droite
    const l = document.getElementById("l"); // Bouton pour faire défiler à gauche

    // Vérification de la largeur de l'écran pour déterminer le nombre d'images à afficher
    const screenWidth = window.innerWidth;
    const nbImg = screenWidth < 1024 ? nbImgM : nbImgD;

    // Calcul de la largeur de chaque diapositive en pourcentage
    const slideWidth = 100 / nbImg;
    // &

    // Définir la largeur totale du conteneur en fonction du nombre de diapositives et de la largeur de chaque diapositive
    container.style.width = `${slideWidth * nbr}%`;

    // Initialiser les images du carrousel
    initializeImages(nbr, container);
    // Configurer le modal pour les images du carrousel
    configureModal();
    // Configurer le contrôle du carrousel
    carouselControl(nbr, container, l, r);

    // FONCTION DE CONTRÔLE DU CARROUSEL
    // Cette fonction gère le défilement des images du carrousel
    function carouselControl(nbr, container, l, r) {
        let p = 0; // Position actuelle du carrousel (indice de la diapositive)
        let q = 0; // Position actuelle du carrousel en pourcentage

        // Fonction pour afficher ou masquer les boutons de contrôle en fonction de la position actuelle
        function afficherMasquer() {
            r.style.display = p == -nbr + nbImg ? "none" : "block"; // Masquer le bouton droit si à la fin
            l.style.display = p == 0 ? "none" : "block"; // Masquer le bouton gauche si au début
        }

        // Événement de clic pour le bouton gauche
        l.onclick = function() {
            if (p < 0) p++; // Incrémenter la position si possible
            q = (q + 25); // Déplacer le carrousel à droite de 25%
            container.style.transform = `translateX(${q}%)`;
            container.style.transition = "all 0.5s ease"; // Animation de défilement
            afficherMasquer(); // Mettre à jour l'affichage des boutons
            console.log(p);
        };

        // Événement de clic pour le bouton droit
        r.onclick = function() {
            if (p > -nbr + 2) p--; // Décrémenter la position si possible
            q = (q - 25); // Déplacer le carrousel à gauche de 25%
            container.style.transform = `translateX(${q}%)`;
            container.style.transition = "all 0.5s ease"; // Animation de défilement
            afficherMasquer(); // Mettre à jour l'affichage des boutons
            console.log(p);
        };

        // Initialiser l'affichage des boutons de contrôle
        afficherMasquer();
    }
};
