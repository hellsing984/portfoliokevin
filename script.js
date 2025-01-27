    // code pour les bouton du footer
    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', () => {

        if(button.attributes[0].localName!="ignore"){
          alert(`    ${button.textContent}`)
        }
      });
    });
 // Sélection des éléments
const menuButton = document.getElementById('Menu1'); // Bouton cliquable
const menu = document.getElementById('menu'); // Menu
const openIcon = document.getElementById('open'); // Icône "bars"
const closeIcon = document.getElementById('close'); // Icône "close"

// Ajouter un événement de clic au bouton
menuButton.addEventListener('click', function () {
  // Alterner la visibilité du menu
  menu.classList.toggle('hidden');
  // Alterner la visibilité des icônes
  if (menu.classList.contains('hidden')) {
    // Si le menu est masqué, montrer l'icône "bars" et cacher l'icône "close"
    openIcon.classList.remove('invisible');
    closeIcon.classList.add('invisible');
  } else {
    // Si le menu est visible, montrer l'icône "close" et cacher l'icône "bars"
    openIcon.classList.add('invisible');
    closeIcon.classList.remove('invisible');
  }
});

