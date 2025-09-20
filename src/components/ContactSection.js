import React from 'react';

const ContactSection = () => {
  return (
    <section id="findUs">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5 mb-6 text-center">
            <h5 className="text-danger">NOUS TROUVER</h5>
            <h2>Accédez facilement à nous</h2>
          </div>
          <div className="col-12">
            <div className="card card-span rounded-2 mb-3">
              <div className="row">
                <div className="col-md-6 col-lg-7 d-flex">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.729702306963!2d2.3545232745334466!3d6.448178293975233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102357b46e8e8c47%3A0x9a0d48be0518d32b!2sCalavi%2C%20B%C3%A9nin!5e0!3m2!1sfr!2s!4v1695155735649!5m2!1sfr!2s"
                    width="100%" 
                    height="400" 
                    style={{border: 0, filter: 'brightness(0.5)'}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation Ras'Services"
                  />
                </div>
                <div className="col-md-6 col-lg-5 d-flex flex-center">
                  <div className="card-body">
                    <h5>Contactez-nous</h5>
                    <p className="text-700 my-4">
                      <i className="fas fa-map-marker-alt text-warning me-3"></i>
                      <span>Service en ligne</span>
                    </p>
                    <p>
                      <i className="fas fa-business-time text-warning me-3"></i>
                      <span className="text-700">Lundi - Samedi: 10h - 22h</span>
                    </p>
                    <p>
                      <i className="fas fa-envelope text-warning me-3"></i>
                      <a className="text-700" href="mailto:info@ras-services.com">info@ras-services.com</a>
                    </p>
                    <ul className="list-unstyled list-inline mt-5">
                      <li className="list-inline-item">
                        <a className="text-decoration-none" href="#!">
                          <i className="fab fa-facebook-square fs-2"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="text-decoration-none" href="#!">
                          <i className="fab fa-instagram-square fs-2"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="text-decoration-none" href="https://wa.me/61622199" style={{color: 'green'}}>
                          <i className="fab fa-whatsapp-square fs-2"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary px-5" type="submit">
                <i className="fas fa-phone-alt me-2"></i>
                <a className="text-light" href="tel:61622199">Appelez-nous au 61622199</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
