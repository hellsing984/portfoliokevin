    // code pour les bouton du footer
    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', () => {

        if(button.attributes[0].localName!="ignore"){
          alert(`    ${button.textContent}`)
        }
      });
    });
    
      // /*code pour que le js prend le json en compte */
      // fetch("style.json")
      // .then(response => {
      //     // Vérifier si la réponse est correcte
      //     if (!response.ok) {
      //         throw new Error("Erreur lors du chargement du fichier JSON");
      //     }
      //     // Retourner la réponse sous forme de JSON
      //     return response.json();
      // })
      // .then(data => {
      //     // Sélectionner l'élément où afficher les utilisateurs
      //     const utilisateursDiv = document.getElementById("utilisateurs");
  
      //     // Ajouter chaque utilisateur dans la page
      //     data.forEach(utilisateur => {
      //         const userDiv = document.createElement("div");
      //         userDiv.classList.add("utilisateur");
      //         userDiv.innerHTML = `
      //             <h2>${utilisateur.nom}</h2>
      //             <p>Email : ${utilisateur.email}</p>
      //             <p>Âge : ${utilisateur.age}</p>
      //         `;
      //         utilisateursDiv.appendChild(userDiv);
      //     });
      // })
      // .catch(error => {
      //     console.error("Erreur :", error);
      // });
