import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer class='footer'>
      {/* Footer Top */}
      <div class='footer-top section'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-5 col-md-6 col-12'>
              {/* Single Widget */}
              <div class='single-footer about'>
                <div class='logo'>
                  <a href='/'>
                    <h5>Baana-Baana</h5>
                  </a>
                </div>
                <p class='text'>
                  Nous sommes pour l'innovation, et votre satisfaction est notre
                  raison d'être
                </p>
                <p class='call'>
                  Vous avez une question? vous pouvez nous appeler 24/7
                  <span>
                    <a href='tel:123456789'>+0123 456 789</a>
                  </span>
                </p>
              </div>
              {/* End Single Widget */}
            </div>
            <div class='col-lg-2 col-md-6 col-12'>
              {/* Single Widget */}
              <div class='single-footer links'>
                <h4>Information</h4>
                <ul>
                  <li>
                    <a href='#'>A propos de nous</a>
                  </li>

                  <li>
                    <a href='#'>Termes & Conditions</a>
                  </li>
                  <li>
                    <a href='#'>Contacts</a>
                  </li>
                  <li>
                    <a href='#'>Aide</a>
                  </li>
                </ul>
              </div>
              {/* End Single Widget */}
            </div>
            <div class='col-lg-2 col-md-6 col-12'>
              {/* Single Widget */}
              <div class='single-footer links'>
                <h4>Services Clients</h4>
                <ul>
                  <li>
                    <a href='#'>Méthode de paiement</a>
                  </li>
                  <li>
                    <a href='#'>Retourner un produit</a>
                  </li>

                  <li>
                    <a href='#'>Livraison</a>
                  </li>
                </ul>
              </div>
              {/* End Single Widget */}
            </div>
            <div class='col-lg-3 col-md-6 col-12'>
              {/* Single Widget */}
              <div class='single-footer social'>
                <h4>Get In Touch</h4>
                {/* Single Widget */}
                <div class='contact'>
                  <ul>
                    <li>Parcelles Assainies .</li>
                    <li>Marché unité 17.</li>
                    <li>service.baanabaana@gmail.com</li>
                    <li>+221781110455</li>
                  </ul>
                </div>
                {/* End Single Widget */}
                <ul>
                  <li>
                    <a href='#'>
                      <i class='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i class='fa fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i class='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li></li>
                </ul>
              </div>
              {/* End Single Widget */}
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Top */}
      <div class='copyright'>
        <div class='container'>
          <div class='inner'>
            <div class='row'>
              <div class='col-lg-6 col-12'>
                <div class='left'>
                  <p>
                    Copyright © {year}{' '}
                    <a href='http://www.wpthemesgrid.com' target='_blank'>
                      made with
                      <i className='fa fa-heart'></i> by Tapha Gaye
                    </a>{' '}
                    - Tout droits réservés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
