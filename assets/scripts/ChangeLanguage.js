class Translator {
    constructor(data) {
      this.data = data;
    }
  
    translate(key, lang, callback) {
      // console.log(`Translation data for language ${lang}:`, this.data[lang]);
      if (this.data[lang] && this.data[lang][key]) {
        // console.log(`Translation for key ${key} in language ${lang}: ${this.data[lang][key]}`);
        callback(this.data[lang][key]);
      } else {
        // console.warn(`Translation not found for key: ${key} in language: ${lang}`);
        callback(key);
      }
    }
  
    updateLanguage(lang) {
      const elements = document.querySelectorAll("[data-lang-key]");
  
      elements.forEach((element) => {
        const translationKey = element.getAttribute("data-lang-key");
        this.translate(translationKey, lang, (translatedText) => {
          // Créez un élément temporaire pour stocker le texte traduit avec les balises <span>
          const tempElement = document.createElement("div");
          tempElement.innerHTML = translatedText;
  
          // Remplacez le contenu de l'élément avec le contenu du conteneur temporaire
          if (element.tagName.toLowerCase() === "input") {
            element.setAttribute("placeholder", tempElement.innerText);
          } else {
            // Remplacez le contenu de l'élément avec le contenu du conteneur temporaire
            element.innerHTML = tempElement.innerHTML;
          }
        });
      });
  
      // Mettez à jour l'attribut data-lang de la balise <html>
      document.documentElement.setAttribute("data-lang", lang);
      // Mettez à jour l'affichage des drapeaux en fonction de la langue sélectionnée
      const flagFr = document.getElementById("flag-fr");
      const flagEn = document.getElementById("flag-en");
  
      flagFr.style.display = lang === "fr" ? "none" : "inline-block";
      flagEn.style.display = lang === "en" ? "none" : "inline-block";
    }
  }
  
  const translationData = {
    en: {
      NAV_l1: "EVENTS",
      NAV_l2: "OUR MENU",
      NAV_l3: "CONTACT US",
      LANDING_h1: "Le Bivouac qui fume sets the scene in a picturesque setting, in the heart of the vineyards.",
      LANDING_h3: "Sharing plates or simmered dishes, relaxation and play areas, activities, and events will be on the agenda this summer!",
      EVENTS_h2: "OUR EVENTS",
      EVENTS_actual:"The next one",
      EVENTS_next: "Upcoming",
      FOLLOW_h2: "FOLLOW US",
      MENU_h2: "OUR MENU",
      MENU_desc: "Discover the Bivouac menu which includes a variety of spreads, tapas, homemade dishes, and desserts.",
      MUSIQUE_h2: "MUSIC<br>POINT",
      MUSIQUE_desc:"Click on the vinyls to access the Bivouac playlists.",
      FOOTER_contact:"CONTACT US",
      FOOTER_copyright:"All rights reserved by <span>LEBIVOUACQUIFUME</span>",
      FOOTER_l2:"OUR MENU",
      FOOTER_l3:"CONTACT US"
    },
    fr: {
      NAV_l1: "ÉVÉNEMENTS",
      NAV_l2: "NOTRE MENU",
      NAV_l3: "CONTACTEZ-NOUS",
      LANDING_h1:"Le Bivouac qui fume plante le décor dans un cadre pittoresque, au coeur des vignes.",
      LANDING_h3:"Assiettes à partager ou plats mijotés, espaces détente et jeux, animations et événements seront au programme de cet été !",
      EVENTS_h2: "NOS ÉVÉNEMENTS",
      EVENTS_actual:"Le prochain",
      EVENTS_next: "À venir",
      FOLLOW_h2: "SUIVEZ-NOUS",
      MENU_h2: "NOTRE CARTE",
      MENU_desc: "Découvrez le menu du Bivouac qui comporte un assortiment de tartinades, tapas, plats et desserts fait maison.",
      MUSIQUE_h2: "POINT<br>MUSIQUE",
      MUSIQUE_desc:"Cliquez sur les vinyles pour accéder aux playlists du Bivouac.",
      FOOTER_contact:"NOUS CONTACTER",
      FOOTER_copyright:"Tous droits réservés par <span>LEBIVOUACQUIFUME</span>",
      FOOTER_l2:"MENU",
      FOOTER_l3:"CONTACT",
     
    },
  };
  
  const translator = new Translator(translationData);
  
  // Fonction pour changer la langue
  function changeLanguage(lang) {
    // console.log(`Changing language to ${lang}`);
    translator.updateLanguage(lang);
  }
  