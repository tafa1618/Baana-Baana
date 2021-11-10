import React from 'react';

const HeaderInner = () => {
  return (
    <div className='header-inner'>
      <div className='container'>
        <div className='cat-nav-head'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='all-category'>
                <h3 className='cat-heading'>
                  <i className='fa fa-bars' aria-hidden='true'></i>CATEGORIES
                </h3>
                <ul className='main-category'>
                  <li className='main-mega'>
                    <a href='#'>
                      Meilleures Ventes{' '}
                      <i className='fa fa-angle-right' aria-hidden='true'></i>
                    </a>
                    <ul className='mega-menu'>
                      <li className='single-menu'>
                        <a href='#' className='title-link'>
                          Electroménager
                        </a>
                        <div className='image'>
                          <img
                            src='https://via.placeholder.com/225x155'
                            alt='#'
                          />
                        </div>
                        <div className='inner-link'>
                          <a href='#'>Fer à repasser</a>
                          <a href='#'>Fer à repasser</a>
                          <a href='#'>Fer à repasser</a>
                          <a href='#'>Fer à repasser</a>
                        </div>
                      </li>
                      <li className='single-menu'>
                        <a href='#' className='title-link'>
                          Ustensiles Cuisines
                        </a>
                        <div className='image'>
                          <img
                            src='https://via.placeholder.com/225x155'
                            alt='#'
                          />
                        </div>
                        <div className='inner-link'>
                          <a href='#'>Egoutoire</a>
                          <a href='#'>Egoutoire</a>
                          <a href='#'>Egoutoire</a>
                          <a href='#'>Egoutoire</a>
                        </div>
                      </li>
                      <li className='single-menu'>
                        <a href='#' className='title-link'>
                          Armoires
                        </a>
                        <div className='image'>
                          <img
                            src='https://via.placeholder.com/225x155'
                            alt='#'
                          />
                        </div>
                        <div className='inner-link'>
                          <a href='#'>Armoires</a>
                          <a href='#'> Armoires</a>
                          <a href='#'>Armoires</a>
                          <a href='#'>Armoires</a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>Electroménager</a>
                  </li>
                  <li>
                    <a href='#'>Ustensiles Cuisines</a>
                  </li>
                  <li>
                    <a href='#'>Armoires</a>
                  </li>
                  <li>
                    <a href='#'>Range Chaussures</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-9 col-12'>
              <div className='menu-area'>
                {/* Main Menu */}
                <nav className='navbar navbar-expand-lg'>
                  <div className='navbar-collapse'>
                    <div className='nav-inner'>
                      <ul className='nav main-menu menu navbar-nav'>
                        <li className='active'>
                          <a href='#'>Accueil</a>
                        </li>
                        <li>
                          <a href='#'>Produits</a>
                        </li>

                        <li>
                          <a href='#'>
                            Achat<i className='ti-angle-down'></i>
                            <span className='new'>New</span>
                          </a>
                          <ul className='dropdown'>
                            <li>
                              <a href='cart.html'>Panier</a>
                            </li>
                            <li>
                              <a href='checkout.html'>Paiement</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href='#'>Pages</a>
                        </li>
                        <li>
                          <a href='#'>
                            Blog<i className='ti-angle-down'></i>
                          </a>
                          <ul className='dropdown'>
                            <li>
                              <a href='blog-single-sidebar.html'>
                                Blog Single Sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href='contact.html'>Nous contacter</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                {/*/ End Main Menu */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInner;
