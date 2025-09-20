# Ras'Services - Application React

Application React moderne pour le service de livraison Ras'Services, recréée à partir du site web original.

## 🚀 Fonctionnalités

- **Landing Page moderne** avec sections :
  - Hero section avec appel à l'action
  - Services proposés (entreprises, repas, courses)
  - Statistiques de l'entreprise
  - **Système d'avis clients avec notation dynamique (1-5 étoiles)**
  - Section contact avec carte Google Maps
  - Footer informatif

- **Formulaire de livraison complet** :
  - Informations expéditeur et destinataire
  - Sélection du type de colis
  - Calcul automatique des tarifs selon les villes
  - Intégration WhatsApp pour confirmation
  - Interface responsive et intuitive

- **Backend API avec base de données** :
  - **Base de données SQLite** pour stocker les avis
  - **API REST** pour gestion des avis (CRUD)
  - **Système de notation interactif** avec validation
  - **Tous les avis visibles** immédiatement
  - **Statistiques** des avis

## 🛠️ Technologies utilisées

### Frontend
- **React 18** - Framework JavaScript
- **React Router** - Navigation entre pages
- **Bootstrap 5** - Framework CSS
- **Font Awesome** - Icônes
- **Google Maps** - Intégration cartographique

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **SQLite3** - Base de données
- **CORS** - Gestion des requêtes cross-origin

## 📦 Installation

### Option 1 : Démarrage automatique (Recommandé)
```bash
# Double-cliquer sur start-full-app.bat
# Ou exécuter :
start-full-app.bat
```

### Option 2 : Démarrage manuel

1. **Démarrer le backend** :
```bash
cd backend
npm install
npm start
```

2. **Démarrer le frontend** (dans un autre terminal) :
```bash
npm install
npm start
```

3. **Accéder à l'application** :
- Frontend : `http://localhost:3000`
- Backend API : `http://localhost:5000`

## 🏗️ Scripts disponibles

- `npm start` - Démarre le serveur de développement
- `npm build` - Construit l'application pour la production
- `npm test` - Lance les tests
- `npm eject` - Éjecte la configuration (irréversible)

## 📁 Structure du projet

```
src/
├── components/
│   ├── HomePage.js          # Page d'accueil principale
│   ├── Header.js            # Barre de navigation
│   ├── HeroSection.js       # Section hero
│   ├── ServicesSection.js   # Section services
│   ├── StatsSection.js      # Section statistiques
│   ├── TestimonialsSection.js # Section témoignages
│   ├── ContactSection.js    # Section contact
│   ├── Footer.js            # Pied de page
│   └── DeliveryForm.js      # Formulaire de livraison
├── App.js                   # Composant principal avec routage
├── App.css                  # Styles globaux
├── index.js                 # Point d'entrée
└── index.css                # Styles de base
```

## 🎯 Fonctionnalités principales

### Landing Page
- Navigation responsive avec effet de scroll
- Hero section avec image et call-to-action
- 3 cartes de services avec descriptions détaillées
- Statistiques de l'entreprise (clients, livraisons, heures)
- **Système d'avis clients avec notation dynamique**
- Carte Google Maps intégrée
- Footer avec informations de contact

### Formulaire de livraison
- **Informations expéditeur** : nom, téléphone, description objet
- **Détails colis** : type, point de collecte, destination
- **Informations destinataire** : nom, téléphone, adresse
- **Calcul automatique** des tarifs selon les villes
- **Intégration WhatsApp** pour envoi des commandes
- **Interface responsive** adaptée mobile/desktop

### Système d'avis clients
- **Notation interactive** : système d'étoiles (0-5) avec remplissage/vidage au clic
- **Formulaire d'avis** : nom, contact, message, note obligatoire (1-5)
- **Base de données SQLite** : stockage persistant et permanent
- **API REST** : création et lecture des avis uniquement
- **Affichage immédiat** : tous les avis visibles sans validation
- **Statistiques dynamiques** : clients satisfaits (≥3 étoiles), marchandises livrées

## 🗺️ Villes supportées

Le système de tarification inclut les villes suivantes :
- Calavi, Cotonou, Ouedo, Akpakpa, Hevié, Pahou
- Ouidah, Glo, Akassato, Gbetagbo, Tokan, Tankpe
- Maria-Gléta, Godomey, Cococodji, Cocotomey, Tori

## 💰 Système de tarification

Les tarifs sont calculés automatiquement selon :
- Ville de départ
- Ville d'arrivée
- Matrice de prix prédéfinie

## 📱 Intégration WhatsApp

Le formulaire génère automatiquement un message WhatsApp avec :
- Toutes les informations de la commande
- Calcul du tarif
- Numéro de contact : +229 61 62 21 99

## 🗄️ Base de données

### Structure de la table `avis`
```sql
CREATE TABLE avis (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nom TEXT NOT NULL,
  contact TEXT,
  message TEXT NOT NULL,
  note INTEGER NOT NULL CHECK (note >= 1 AND note <= 5),
  date_creation DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Endpoints API disponibles
- `GET /api/avis` - Récupérer tous les avis
- `POST /api/avis` - Créer un nouvel avis
- `GET /api/stats` - Statistiques dynamiques (clients satisfaits, marchandises livrées)
- `GET /api/test` - Test de l'API

**Note** : Les clients ne peuvent pas modifier ou supprimer leurs avis une fois soumis.

## 🎨 Design

- **Responsive** : Adapté mobile, tablette, desktop
- **Moderne** : Interface claire et intuitive
- **Cohérent** : Respect du design original
- **Accessible** : Navigation claire et formulaires validés

## 🚀 Déploiement

Pour déployer en production :

```bash
npm run build
```

Les fichiers de production seront dans le dossier `build/`.

## 📞 Contact

- **Téléphone** : +229 61 62 21 99
- **Email** : info@ras-services.com
- **WhatsApp** : [Cliquer ici](https://wa.me/22961622199)

## 📄 Licence

Tous droits réservés © Ras'Services, 2024
