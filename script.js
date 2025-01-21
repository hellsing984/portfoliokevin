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
    fs.writeFileSync("database.json", JSON.stringify(data, null, 2));

    res.json({ message: "Données enregistrées avec succès !" });
});

app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));

      