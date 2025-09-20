import React from 'react';

const Footer = () => {
  return (
    <>
      <section className="bg-900 pb-0 pt-5">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-sm-12 col-lg-6 mb-4 order-0 order-sm-0 text-center">
              <a className="text-decoration-none" href="#">
                <img src="/assets/img/gallery/Cap.PNG" height="51" alt="" />
              </a>
              <p className="text-500 my-4">
                Le livreur le plus fiable<br />
                Entreprise dans votre région.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-1000">
        <div className="container">
          <div className="row justify-content-md-between justify-content-evenly py-4">
            <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
              <p className="fs--1 my-2 fw-bold text-200">
                All rights Reserved &copy; Ras'Services, 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
