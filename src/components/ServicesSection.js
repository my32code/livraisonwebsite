import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: "/assets/img/icons/services-1.svg",
      title: "Services aux entreprises",
      description: "Nous proposons la livraison à domicile dans toute la ville, où vos produits seront livrés à votre porte dans un délai de 48 à 72 heures.",
      features: [
        "Marchandises d'entreprise",
        "Expédition",
        "Accessoires"
      ]
    },
    {
      icon: "/assets/img/icons/services-2.svg",
      title: "Livraison de repas",
      description: "Que ce soit pour le déjeuner, le dîner ou une occasion spéciale, nous vous apportons des repas fraîchement préparés directement chez vous en un temps record.",
      features: [
        "Repas de restaurant",
        "Livraison rapide",
        "Options personnalisées"
      ]
    },
    {
      icon: "/assets/img/icons/services-3.svg",
      title: "Gestion des courses et services divers",
      description: "Nous prenons en charge vos courses quotidiennes, vos achats divers et la récupération de colis, en vous offrant un service pratique et fiable.",
      features: [
        "Achat au supermarché",
        "Récupération de colis",
        "Paiement de factures"
      ]
    }
  ];

  return (
    <section className="py-7" id="services">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5 text-center mb-3">
            <h5 className="text-danger">SERVICES</h5>
            <h2>Nos services pour vous</h2>
          </div>
        </div>
        <div className="row h-100 justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 pt-4 px-md-2 px-lg-3">
              <div className="card h-100 px-lg-5 card-span service-card">
                <div className="card-body d-flex flex-column justify-content-around">
                  <div className="text-center pt-5">
                    <img className="img-fluid" src={service.icon} alt="..." />
                    <h5 className="my-4">{service.title}</h5>
                  </div>
                  <p>{service.description}</p>
                  <ul className="list-unstyled">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <span className="me-2">
                          <i className="fas fa-circle text-primary" style={{fontSize: '.5rem'}}></i>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
