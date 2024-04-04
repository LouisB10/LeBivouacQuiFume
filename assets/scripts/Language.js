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
      const elements = document.querySelectorAll('[data-lang-key]');
  
      elements.forEach(element => {
        const translationKey = element.getAttribute('data-lang-key');
        this.translate(translationKey, lang, translatedText => {
          // Créez un élément temporaire pour stocker le texte traduit avec les balises <span>
          const tempElement = document.createElement('div');
          tempElement.innerHTML = translatedText;
    
          // Remplacez le contenu de l'élément avec le contenu du conteneur temporaire
          if (element.tagName.toLowerCase() === 'input') {
            element.setAttribute('placeholder', tempElement.innerText);
          } else {
            // Remplacez le contenu de l'élément avec le contenu du conteneur temporaire
            element.innerHTML = tempElement.innerHTML;
          }
        });
      });
      
      // Mettez à jour l'attribut data-lang de la balise <html>
      document.documentElement.setAttribute('data-lang', lang);
      // Mettez à jour l'affichage des drapeaux en fonction de la langue sélectionnée
      const flagFr = document.getElementById('flag-fr');
      const flagEn = document.getElementById('flag-en');
  
      flagFr.style.display = lang === 'fr' ? 'none' : 'inline-block';
      flagEn.style.display = lang === 'en' ? 'none' : 'inline-block';
  
    }
  }
  
  const translationData = {
    en: {
    },
    fr: {
    },
  };
  
  
  
  const translator = new Translator(translationData);
  
  // Fonction pour changer la langue
  function changeLanguage(lang) {
    // console.log(`Changing language to ${lang}`);
    translator.updateLanguage(lang);
  }
  