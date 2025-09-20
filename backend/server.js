const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connexion à MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        
  password: '',        
  database: 'ras_services'
});

db.connect((err) => {
  if (err) {
    console.error('❌ Erreur de connexion MySQL :', err.message);
    process.exit(1);
  }
  console.log('✅ Connecté à la base MySQL.');

  // Création de la table si elle n’existe pas
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS avis (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nom VARCHAR(255) NOT NULL,
      contact VARCHAR(255),
      message TEXT NOT NULL,
      note INT NOT NULL,
      date_creation DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;
  db.query(createTableQuery, (err) => {
    if (err) {
      console.error('❌ Erreur lors de la création de la table :', err.message);
    } else {
      console.log('📦 Table "avis" prête.');
    }
  });
});

// Routes API

// GET /api/avis - Récupérer tous les avis
app.get('/api/avis', (req, res) => {
  db.query("SELECT * FROM avis ORDER BY date_creation DESC", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// POST /api/avis - Créer un nouvel avis
app.post('/api/avis', (req, res) => {
  const { nom, contact, message, note } = req.body;

  if (!nom || !message || !note) {
    return res.status(400).json({ 
      error: 'Les champs nom, message et note sont obligatoires' 
    });
  }

  if (note < 1 || note > 5) {
    return res.status(400).json({ 
      error: 'La note doit être entre 1 et 5' 
    });
  }

  const sql = `INSERT INTO avis (nom, contact, message, note) VALUES (?, ?, ?, ?)`;
  db.query(sql, [nom, contact || '', message, note], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    res.status(201).json({ 
      message: 'Avis enregistré avec succès',
      id: result.insertId
    });
  });
});

// GET /api/stats - Statistiques des avis
app.get('/api/stats', (req, res) => {
  const sql = `
    SELECT 
      COUNT(*) as total_avis,
      AVG(note) as note_moyenne,
      MIN(note) as note_min,
      MAX(note) as note_max,
      SUM(CASE WHEN note >= 3 THEN 1 ELSE 0 END) as clients_satisfaits,
      COUNT(*) as marchandises_livrees
    FROM avis
  `;
  db.query(sql, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    const stats = rows[0] || {};
    res.json({
      total_avis: stats.total_avis || 0,
      note_moyenne: stats.note_moyenne ? Math.round(stats.note_moyenne * 10) / 10 : 0,
      note_min: stats.note_min || 0,
      note_max: stats.note_max || 0,
      clients_satisfaits: stats.clients_satisfaits || 0,
      marchandises_livrees: stats.marchandises_livrees || 0,
      heures_bureau: 100
    });
  });
});

// Route de test
app.get('/api/test', (req, res) => {
  res.json({ message: 'API Ras\'Services fonctionne correctement!' });
});

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erreur interne du serveur' });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur Ras'Services démarré sur le port ${PORT}`);
  console.log(`🌐 API disponible sur: http://localhost:${PORT}/api`);
});
