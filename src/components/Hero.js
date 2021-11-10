import React from 'react';

const Hero = () => {
  return (
    <section className='hero-slider'>
      {/* Single Slider */}
      <div className='single-slider'>
        <div className='container'>
          <div className='row no-gutters'>
            <div className='col-lg-9 offset-lg-3 col-12'>
              <div className='text-inner'>
                <div className='row'>
                  <div className='col-lg-7 col-12'>
                    <div className='hero-text'>
                      <h1>
                        <span> </span>Des produits uniques à des prix
                        imbattables
                      </h1>

                      <div className='button'>
                        <a href='#' className='btn'>
                          Bon Shopping
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ End Single Slider */}
    </section>
  );
};

export default Hero;
