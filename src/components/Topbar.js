import React from 'react';

const Topbar = () => {
  return (
    <div className='topbar'>
      {/* Topbar */}
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 col-md-12 col-12'>
            {/* Top Left */}
            <div className='top-left'>
              <ul className='list-main'>
                <li>
                  <i className='ti-headphone-alt'></i> +221781110455
                </li>
                <li>
                  <i className='ti-email'></i> service.baanabaana@gmail.com
                </li>
              </ul>
            </div>
            {/*/ End Top Left */}
          </div>
          <div className='col-lg-7 col-md-12 col-12'>
            {/* Top Right */}
            <div className='right-content'>
              <ul className='list-main'>
                <li>
                  <i className='ti-user'></i> <a href='#'>Mon Compte</a>
                </li>
                <li>
                  <i className='ti-power-off'></i>
                  <a href='login.html#'>Se connecter</a>
                </li>
              </ul>
            </div>
            {/* End Top Right */}
          </div>
        </div>
      </div>
      {/* End Topbar */}
    </div>
  );
};

export default Topbar;
