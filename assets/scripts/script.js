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

// function displayMenu() {
//     const body = document.querySelector("body");
//     const hamburger = document.querySelector(".hamburger");
//     const menu = document.querySelector(".mobile-nav");
  
//     hamburger.classList.toggle("open");
//     menu.classList.toggle("open");
//     body.classList.toggle("overflow-hidden");
//     }

    document.querySelector('.hamburger').addEventListener('click', (e) => {
        const menu = document.querySelector(".mobile-nav");
        const body = document.querySelector("body");
	    e.currentTarget.classList.toggle('is-active');
        menu.classList.toggle("open");
        body.classList.toggle("overflow-hidden");
    })


