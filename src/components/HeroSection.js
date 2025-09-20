import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="py-xxl-10 pb-0" id="home" style={{
      backgroundImage: 'url(/assets/img/gallery/hero-header-bg.png)',
      backgroundPosition: 'top center',
      backgroundSize: 'cover',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 col-xl-6 col-xxl-7 order-0 order-md-1 text-end">
            <img 
              className="pt-7 pt-md-0 w-100" 
              src="/assets/img/illustrations/hero.png" 
              alt="hero-header" 
            />
          </div>
          <div className="col-md-75 col-xl-6 col-xxl-5 text-md-start text-center py-8">
            <h1 className="fw-normal fs-6 fs-xxl-7">Un fournisseur de confiance pour</h1>
            <h1 className="fw-bolder fs-6 fs-xxl-7 mb-2">vos livraisons.</h1>
            <p className="fs-1 mb-5">
              Nous assurons la livraison de vos produits, quel que soit leur type, directement à votre 
              domicile, en toute sécurité et dans les meilleurs délais.
            </p>
            <Link className="btn btn-primary me-2" to="/formulaire-livraison" role="button">
              Commencer ! <i className="fas fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
