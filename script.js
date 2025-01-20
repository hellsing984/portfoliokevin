    // code pour les bouton du footer
    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', () => {
        alert(`    ${button.textContent}`);
      });
    });
      // Sélection du logo et du menu
      const logo = document.getElementById('Menu1');
      const menu = document.getElementById('menu');
    
      // Ajout d'un événement de clic sur le logo
      logo.addEventListener('click', function() {
        // Alterne la visibilité du menu
        menu.classList.toggle('hidden');
      });