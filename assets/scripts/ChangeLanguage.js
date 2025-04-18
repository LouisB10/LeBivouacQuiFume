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
    NAV_l2: "MENU",
    NAV_l3: "GALLERY",
    NAV_l4: "CONTACT",
    LANDING_h1:
      "Le Bivouac qui fume sets the scene in a picturesque setting, in the heart of the vineyards.",
    LANDING_h3:
      "Sharing plates or simmered dishes, relaxation and play areas, activities, and events will be on the agenda this summer!",
    EVENTS_h2: "OUR EVENTS",
    EVENTS_actual: "The next one",
    EVENTS_next: "Upcoming",
    EVENTS_prog: "Program",
    EVENTS_RESERVATION: "Reservation",
    FOLLOW_h2: "FOLLOW US",
    MENU_h2: "OUR MENU",
    MENU_desc:
      "Discover the Bivouac menu : Variety of spreads, tapas, homemade dishes, and desserts.",
    FOOTER_contact: "CONTACT US",
    HORAIRE_h3: "SCHEDULES",
    HORAIRE_p: "TUESDAY TO SATURDAY <br>FROM 6:30 PM TO 11 PM",
    FOOTER_copyright: "All rights reserved by <span>LEBIVOUACQUIFUME</span>",
  },
  fr: {
    NAV_l1: "ÉVÉNEMENTS",
    NAV_l2: "MENU",
    NAV_l3: "GALERIE",
    NAV_l4: "CONTACT",
    LANDING_h1:
      "Le Bivouac qui fume plante le décor dans un cadre pittoresque, au coeur des vignes.",
    LANDING_h3:
      "Assiettes à partager ou plats mijotés, espaces détente et jeux, animations et événements seront au programme de cet été !",
    EVENTS_h2: "NOS ÉVÉNEMENTS",
    EVENTS_actual: "Le prochain",
    EVENTS_next: "À venir",
    EVENTS_prog: "Programme",
    EVENTS_RESERVATION: "Réservation",
    FOLLOW_h2: "SUIVEZ-NOUS",
    MENU_h2: "NOTRE CARTE",
    MENU_desc:
      "Découvrez le menu du Bivouac : Assortiment de tartinades, tapas, plats et desserts fait maison.",
    FOOTER_contact: "NOUS CONTACTER",
    HORAIRE_h3: "HORAIRES",
    HORAIRE_p: "DU MARDI AU SAMEDI <br>DE 18H30 À 23H",
    FOOTER_copyright: "Tous droits réservés par <span>LEBIVOUACQUIFUME</span>",
  },
};

const translator = new Translator(translationData);

// Fonction pour changer la langue
function changeLanguage(lang) {
  // console.log(`Changing language to ${lang}`);
  translator.updateLanguage(lang);
}
