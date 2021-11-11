import React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to='#'>
                      Meilleures Ventes{' '}
                      <i className='fa fa-angle-right' aria-hidden='true'></i>
                    </Link>
                    <ul className='mega-menu'>
                      <li className='single-menu'>
                        <Link to='#' className='title-link'>
                          Electroménager
                        </Link>
                        <div className='image'>
                          <img
                            src='https://via.placeholder.com/225x155'
                            alt='#'
                          />
                        </div>
                        <div className='inner-link'>
                          <Link to='#'>Fer à repasser</Link>
                          <Link to='#'>Fer à repasser</Link>
                          <Link to='#'>Fer à repasser</Link>
                          <Link to='#'>Fer à repasser</Link>
                        </div>
                      </li>
                      <li className='single-menu'>
                        <Link to='#' className='title-link'>
                          Ustensiles Cuisines
                        </Link>
                        <div className='image'>
                          <img
                            src='https://via.placeholder.com/225x155'
                            alt='#'
                          />
                        </div>
                        <div className='inner-link'>
                          <Link to='#'>Egoutoire</Link>
                          <Link to='#'>Egoutoire</Link>
                          <Link to='#'>Egoutoire</Link>
                          <Link to='#'>Egoutoire</Link>
                        </div>
                      </li>
                      <li className='single-menu'>
                        <Link to='#' className='title-link'>
                          Armoires
                        </Link>
                        <div className='image'>
                          <img
                            src='https://via.placeholder.com/225x155'
                            alt='#'
                          />
                        </div>
                        <div className='inner-link'>
                          <Link to='#'>Armoires</Link>
                          <Link to='#'> Armoires</Link>
                          <Link to='#'>Armoires</Link>
                          <Link to='#'>Armoires</Link>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to='#'>Electroménager</Link>
                  </li>
                  <li>
                    <Link to='#'>Ustensiles Cuisines</Link>
                  </li>
                  <li>
                    <Link to='#'>Armoires</Link>
                  </li>
                  <li>
                    <Link to='#'>Range Chaussures</Link>
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
                          <Link to='#'>Accueil</Link>
                        </li>
                        <li>
                          <Link to='#'>Produits</Link>
                        </li>

                        <li>
                          <Link to='#'>
                            Achat<i className='ti-angle-down'></i>
                            <span className='new'>New</span>
                          </Link>
                          <ul className='dropdown'>
                            <li>
                              <Link to='cart.html'>Panier</Link>
                            </li>
                            <li>
                              <Link to='checkout.html'>Paiement</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to='#'>Pages</Link>
                        </li>
                        <li>
                          <Link to='#'>
                            Blog<i className='ti-angle-down'></i>
                          </Link>
                          <ul className='dropdown'>
                            <li>
                              <Link to='blog-single-sidebar.html'>
                                Blog Single Sidebar
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to='contact.html'>Nous contacter</Link>
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
