import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top py-3 d-block ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/assets/img/gallery/Cap.PNG" height="50" alt="logo" />
          Ras'Services
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
            <li className="nav-item px-2">
              <Link className="nav-link" to="/">Accueil</Link>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#services">Nos Services</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#findUs">Comment nous trouver ?</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#avis">Témoignages</a>
            </li>
          </ul>
          
          <a className="btn btn-primary order-1 order-lg-0 ms-lg-3" href="tel:61622199">
            Contactez-nous
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
