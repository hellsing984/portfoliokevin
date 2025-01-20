    // code pour les bouton du footer
    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', () => {
        alert(`    ${button.textContent}`);
      });
    });

    document.querySelectorAll('.hover-highlight').forEach(card => {
      card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
      });
      card.addEventListener('mouseout', () => {
        card.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
      });
    });
   // Sélection du logo et du menu
   const logo = document.getElementById('logo');
   const menu = document.getElementById('menu');
 
   // Ajout d'un événement de clic sur le logo
   logo.addEventListener('click', function() {
     // Alterne la visibilité du menu
     menu.classList.toggle('hidden');
   });
