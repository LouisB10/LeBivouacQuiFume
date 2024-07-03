// FONCTION FAIRE DÉFILER VERS LE HAUT DE LA PAGE

// Cette fonction fait défiler la page vers le haut en douceur

function scrollToTop() {
    // Utilise la méthode window.scrollTo pour faire défiler la page
    window.scrollTo({
        top: 0,          // Définit la position verticale cible à 0 (haut de la page)
        behavior: "smooth" // Utilise un défilement doux (smooth scrolling)
    });
}
