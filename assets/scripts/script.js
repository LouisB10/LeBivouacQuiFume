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
  
  document.querySelector('.hamburger').addEventListener('click', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.querySelector('body');

    hamburger.classList.toggle('is-active');
    mobileNav.classList.toggle('open');
    body.classList.toggle('overflow-hidden');
});

document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        const hamburger = document.querySelector('.hamburger');
        const mobileNav = document.querySelector('.mobile-nav');
        const body = document.querySelector('body');

        hamburger.classList.remove('is-active');
        mobileNav.classList.remove('open');
        body.classList.remove('overflow-hidden');
    });
});




