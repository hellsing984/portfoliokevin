    // code pour les bouton du footer
    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', () => {
        alert(`c'est bien   ${button.textContent}`);
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




