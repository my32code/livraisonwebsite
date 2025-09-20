import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    contact: '',
    message: '',
    note: 0
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Charger les avis depuis l'API
  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/avis');
      if (response.ok) {
        const data = await response.json();
        setTestimonials(data);
      } else {
        console.error('Erreur lors du chargement des avis');
      }
    } catch (error) {
      console.error('Erreur de connexion à l\'API:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage('');

    // Validation : la note doit être entre 1 et 5
    if (newTestimonial.note < 1 || newTestimonial.note > 5) {
      setSubmitMessage('Veuillez sélectionner une note entre 1 et 5 étoiles.');
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/avis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTestimonial),
      });

      if (response.ok) {
        setSubmitMessage('Votre avis a été enregistré avec succès !');
        setNewTestimonial({ name: '', contact: '', message: '', note: 0 });
        // Recharger les avis
        fetchTestimonials();
      } else {
        const errorData = await response.json();
        setSubmitMessage(`Erreur: ${errorData.error}`);
      }
    } catch (error) {
      setSubmitMessage('Erreur de connexion. Veuillez réessayer.');
      console.error('Erreur lors de l\'envoi:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const renderStars = (note) => {
    return [...Array(5)].map((_, i) => (
      <i 
        key={i} 
        className={`fas fa-star ${i < note ? 'text-warning' : 'text-muted'}`}
      />
    ));
  };

  const StarRating = ({ value, onChange }) => {
    const handleStarClick = (starValue) => {
      // Si on clique sur la même étoile que la valeur actuelle, on la désélectionne
      if (starValue === value) {
        onChange(0); // 0 signifie aucune sélection
      } else {
        onChange(starValue);
      }
    };

    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <i
            key={star}
            className={`fas fa-star star ${star <= value ? 'active' : ''}`}
            onClick={() => handleStarClick(star)}
            style={{ 
              cursor: 'pointer', 
              fontSize: '1.5rem', 
              marginRight: '5px',
              color: star <= value ? '#ffc107' : '#ddd'
            }}
            title={`Cliquez pour ${star === value ? 'désélectionner' : 'sélectionner'} ${star} étoile${star > 1 ? 's' : ''}`}
          />
        ))}
        <span className="ms-2 text-muted">
          {value > 0 ? `(${value}/5)` : '(Aucune note)'}
        </span>
      </div>
    );
  };

  return (
    <section id="avis" className="py-7">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5 text-center mb-5">
            <h5 className="text-danger">TÉMOIGNAGES</h5>
            <h2>Ce que disent nos clients</h2>
          </div>
        </div>
        
        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Chargement...</span>
            </div>
            <p className="mt-2">Chargement des avis...</p>
          </div>
        ) : (
          <div className="row">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="col-md-4 mb-3">
                <div className="card h-100 card-span p-3 testimonial-card">
                  <h5 className="mb-0 text-primary">
                    {testimonial.note >= 4 ? "Excellent service!" : 
                     testimonial.note >= 3 ? "Bon service!" : 
                     "Service correct"}
                  </h5>
                  <p className="card-text pt-3">{testimonial.message}</p>
                  <div className="d-xl-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center mb-3">
                      {renderStars(testimonial.note)}
                    </div>
                    <div className="d-flex align-items-center">
                      <img className="img-fluid" src="/assets/img/icons/UTI.png" alt="" />
                      <div className="flex-1 ms-3">
                        <h6 className="mb-0 fs--1 text-1000 fw-medium">{testimonial.nom}</h6>
                        <p className="fs--2 fw-normal mb-0">
                          {testimonial.contact || 'Client satisfait'}
                        </p>
                        <small className="text-muted">
                          {new Date(testimonial.date_creation).toLocaleDateString('fr-FR')}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Formulaire pour ajouter un témoignage */}
        <div id="addTestimonial" className="mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5 col-xl-4">
              <img src="/assets/img/illustrations/callback.png" alt="..." />
              <h2 className="text-danger">Votre avis compte! Aidez-nous à nous améliorer.</h2>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4">
              <form onSubmit={handleSubmit} className="row">
                <div className="mb-3">
                  {/* <label className="form-label" htmlFor="testimonialName">Nom *</label> */}
                  <input 
                    className="form-control form-quriar-control" 
                    id="testimonialName" 
                    type="text" 
                    placeholder="Votre nom"
                    value={newTestimonial.nom}
                    onChange={(e) => setNewTestimonial({...newTestimonial, nom: e.target.value})}
                    required
                  />
                </div>
                <div className="mb-3">
                  {/* <label className="form-label" htmlFor="testimonialContact">Contact</label> */}
                  <input 
                    className="form-control form-quriar-control" 
                    id="testimonialContact" 
                    type="text" 
                    placeholder="Email/Numéro (optionnel)"
                    value={newTestimonial.contact}
                    onChange={(e) => setNewTestimonial({...newTestimonial, contact: e.target.value})}
                  />
                </div>
                <div className="mb-3">
                  {/* <label className="form-label">Note *</label> */}
                  <StarRating 
                    value={newTestimonial.note} 
                    onChange={(note) => setNewTestimonial({...newTestimonial, note})}
                  />
                </div>
                <div className="mb-5">
                  {/* <label className="form-label" htmlFor="testimonialMessage">Votre Avis *</label> */}
                  <textarea 
                    className="form-control form-quriar-control" 
                    id="testimonialMessage" 
                    placeholder="Partagez votre expérience avec notre service..." 
                    style={{height: '150px'}} 
                    required
                    value={newTestimonial.message}
                    onChange={(e) => setNewTestimonial({...newTestimonial, message: e.target.value})}
                  />
                </div>
                
                {submitMessage && (
                  <div className={`alert ${submitMessage.includes('Erreur') ? 'alert-danger' : 'alert-success'} mb-3`}>
                    {submitMessage}
                  </div>
                )}
                
                <div className="d-grid">
                  <button 
                    className="btn btn-primary" 
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Soumettre <i className="fas fa-paper-plane ms-2"></i>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
