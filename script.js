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
      /*code pour que le js prend le json en compte */
      fetch("style.json")
      .then(response => {
          // Vérifier si la réponse est correcte
          if (!response.ok) {
              throw new Error("Erreur lors du chargement du fichier JSON");
          }
          // Retourner la réponse sous forme de JSON
          return response.json();
      })
      .then(data => {
          // Sélectionner l'élément où afficher les utilisateurs
          const utilisateursDiv = document.getElementById("utilisateurs");
  
          // Ajouter chaque utilisateur dans la page
          data.forEach(utilisateur => {
              const userDiv = document.createElement("div");
              userDiv.classList.add("utilisateur");
              userDiv.innerHTML = `
                  <h2>${utilisateur.nom}</h2>
                  <p>Email : ${utilisateur.email}</p>
                  <p>Âge : ${utilisateur.age}</p>
              `;
              utilisateursDiv.appendChild(userDiv);
          });
      })
      .catch(error => {
          console.error("Erreur :", error);
      });
      /*base de données */
      const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// Endpoint pour recevoir les données du formulaire.
app.post("/submit", (req, res) => {
    const userData = req.body;

    // Lire le fichier JSON existant ou créer un nouveau tableau.
    const data = fs.existsSync("database.json")
        ? JSON.parse(fs.readFileSync("database.json"))
        : [];

    // Ajouter les nouvelles données.
    data.push(userData);

    // Écrire dans le fichier JSON.
    fs.writeFileSync("style.json", JSON.stringify(data, null, 2));

    res.json({ message: "Données enregistrées avec succès !" });
});

app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
// Charger les données du fichier JSON et les ajouter au DOM
async function loadProjects() {
  try {
    // Charger les données du fichier JSON
    const response = await fetch('projects.json');
    const projects = await response.json();

    // Sélectionner le conteneur pour les projets
    const container = document.getElementById('projects-container');

    // Ajouter une carte pour chaque projet
    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';

      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">Voir le projet</a>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Erreur lors du chargement des projets:', error);
  }
}
// Appeler la fonction pour charger les projets
loadProjects();
