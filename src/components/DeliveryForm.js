import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DeliveryForm = () => {
  const [formData, setFormData] = useState({
    expediteurNom: '',
    expediteurTelephone: '',
    descriptionObjet: '',
    parcelType: '',
    depart: 'Calavi',
    arrivee: 'Calavi',
    destinataireNom: '',
    destinataireTelephone: '',
    destinataireAdresse: ''
  });

  const [price, setPrice] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const tarifs = {
    "Calavi": {
      "Cotonou": 1000, "Calavi": 700, "Ouedo": 700, "Akpakpa": 1500, "Hevié": 1200,
      "Pahou": 1500, "Ouidah": 3000, "Glo": 1500, "Akassato": 1000, "Gbetagbo": 1200,
      "Tokan": 700, "Tankpe": 700, "Maria-Gléta": 700, "Godomey": 1000, "Cococodji": 1200,
      "Cocotomey": 1000, "Tori": 2000
    },
    "Cotonou": {
      "Calavi": 1000, "Ouedo": 1300, "Akpakpa": 800, "Hevié": 900, "Pahou": 1500,
      "Ouidah": 1000, "Glo": 1500, "Akassato": 1200, "Gbetagbo": 1000, "Tokan": 1300,
      "Tankpe": 700, "Maria-Gléta": 900, "Godomey": 1300, "Cococodji": 1100, "Cocotomey": 1200,
      "Tori": 2000
    }
  };

  const villes = [
    "Calavi", "Cotonou", "Ouedo", "Akpakpa", "Hevié", "Pahou", "Ouidah", "Glo",
    "Akassato", "Gbetagbo", "Tokan", "Tankpe", "Maria-Gléta", "Godomey", 
    "Cococodji", "Cocotomey", "Tori"
  ];

  const parcelTypes = [
    "Marchandises d'entreprise",
    "Expédition",
    "Accessoires",
    "Repas de restaurant",
    "Livraison rapide",
    "Options personnalisées",
    "Achat au supermarché",
    "Récupération de colis",
    "Paiement de factures"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Calculer le prix si c'est un changement de départ ou d'arrivée
    if (name === 'depart' || name === 'arrivee') {
      const newData = { ...formData, [name]: value };
      calculatePrice(newData.depart, newData.arrivee);
    }
  };

  const calculatePrice = (depart, arrivee) => {
    const price = tarifs[depart]?.[arrivee];
    if (price) {
      setPrice(price);
      setShowConfirmation(true);
    } else {
      setPrice(null);
      setShowConfirmation(false);
    }
  };

  const sendWhatsApp = () => {
    const numero = "22961622199";
    
    const message = `
Nouvelle Course :

🔹 *Expéditeur* :
- Nom : ${formData.expediteurNom}
- Téléphone : ${formData.expediteurTelephone}

🔹 *Détails du Colis* :
- Type : ${formData.parcelType}
- Description : ${formData.descriptionObjet}

🔹 *Livraison* :
- Point de Collecte : ${formData.depart}
- Destination : ${formData.arrivee}
- Tarif : ${price} FCFA

🔹 *Destinataire* :
- Nom : ${formData.destinataireNom}
- Téléphone : ${formData.destinataireTelephone}
- Adresse : ${formData.destinataireAdresse}

Merci d'avoir choisi notre service de livraison !
    `;

    const whatsappUrl = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const cancelRide = () => {
    setShowConfirmation(false);
    setPrice(null);
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-4">
            <h1 className="display-4 text-primary">
              <i className="fas fa-truck me-3"></i>
              Lancer une course...
            </h1>
            <p className="lead">Remplissez le formulaire ci-dessous pour demander une livraison</p>
          </div>

          {/* Section Expéditeur */}
          <div className="form-section">
            <h2><i className="fas fa-user"></i> Informations de l'Expéditeur</h2>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="expediteurNom" className="form-label">Nom de l'expéditeur :</label>
                <input
                  type="text"
                  className="form-control"
                  id="expediteurNom"
                  name="expediteurNom"
                  value={formData.expediteurNom}
                  onChange={handleInputChange}
                  placeholder="Nom de l'expéditeur"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="expediteurTelephone" className="form-label">Numéro de téléphone :</label>
                <input
                  type="tel"
                  className="form-control"
                  id="expediteurTelephone"
                  name="expediteurTelephone"
                  value={formData.expediteurTelephone}
                  onChange={handleInputChange}
                  placeholder="Téléphone de l'expéditeur"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="descriptionObjet" className="form-label">Description de l'objet :</label>
              <textarea
                className="form-control"
                id="descriptionObjet"
                name="descriptionObjet"
                rows="3"
                value={formData.descriptionObjet}
                onChange={handleInputChange}
                placeholder="Description de l'objet"
                required
              />
            </div>
          </div>

          {/* Section Détails du Colis */}
          <div className="form-section">
            <h2><i className="fas fa-box"></i> Détails du Colis</h2>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="parcelType" className="form-label">Type de colis :</label>
                <select
                  className="form-select"
                  id="parcelType"
                  name="parcelType"
                  value={formData.parcelType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Sélectionnez un type</option>
                  {parcelTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="depart" className="form-label">Point de Collecte :</label>
                <select
                  className="form-select"
                  id="depart"
                  name="depart"
                  value={formData.depart}
                  onChange={handleInputChange}
                >
                  {villes.map((ville, index) => (
                    <option key={index} value={ville}>{ville}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="arrivee" className="form-label">Destination :</label>
              <select
                className="form-select"
                id="arrivee"
                name="arrivee"
                value={formData.arrivee}
                onChange={handleInputChange}
              >
                {villes.map((ville, index) => (
                  <option key={index} value={ville}>{ville}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Section Destinataire */}
          <div className="form-section">
            <h2><i className="fas fa-user-plus"></i> Informations du Destinataire</h2>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="destinataireNom" className="form-label">Nom du destinataire :</label>
                <input
                  type="text"
                  className="form-control"
                  id="destinataireNom"
                  name="destinataireNom"
                  value={formData.destinataireNom}
                  onChange={handleInputChange}
                  placeholder="Nom du destinataire"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="destinataireTelephone" className="form-label">Numéro de téléphone :</label>
                <input
                  type="tel"
                  className="form-control"
                  id="destinataireTelephone"
                  name="destinataireTelephone"
                  value={formData.destinataireTelephone}
                  onChange={handleInputChange}
                  placeholder="Téléphone du destinataire"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="destinataireAdresse" className="form-label">Adresse détaillée :</label>
              <textarea
                className="form-control"
                id="destinataireAdresse"
                name="destinataireAdresse"
                rows="3"
                value={formData.destinataireAdresse}
                onChange={handleInputChange}
                placeholder="Adresse du destinataire"
                required
              />
            </div>
          </div>

          {/* Affichage du prix */}
          {price && (
            <div className="price-result">
              <h2>Le tarif de livraison est : <strong>{price} FCFA</strong></h2>
            </div>
          )}

          {/* Section de confirmation */}
          {showConfirmation && (
            <div className="confirmation-section">
              <h3 className="text-center mb-4">Confirmez-vous cette course ?</h3>
              <div className="text-center">
                <button className="btn btn-success me-3" onClick={sendWhatsApp}>
                  <i className="fab fa-whatsapp me-2"></i>
                  Confirmer et envoyer via WhatsApp
                </button>
                <button className="btn btn-danger me-3" onClick={cancelRide}>
                  <i className="fas fa-times me-2"></i>
                  Annuler
                </button>
                <Link className="btn btn-secondary" to="/">
                  <i className="fas fa-home me-2"></i>
                  Retour à l'accueil
                </Link>
              </div>
            </div>
          )}

          {/* Bouton de retour */}
          <div className="text-center mt-4">
            <Link className="btn btn-outline-primary" to="/">
              <i className="fas fa-arrow-left me-2"></i>
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryForm;
