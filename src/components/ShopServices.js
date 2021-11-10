import React from 'react';

const ShopServices = () => {
  return (
    <section class='shop-services section home'>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-3 col-md-6 col-12'>
            {/* Start Single Service */}
            <div class='single-service'>
              <i class='ti-rocket'></i>
              <h4>Livraison partout</h4>
              <p>au Sénégal</p>
            </div>
            {/* End Single Service */}
          </div>
          <div class='col-lg-3 col-md-6 col-12'>
            {/* Start Single Service */}
            <div class='single-service'>
              <i class='ti-reload'></i>
              <h4>Retour</h4>
              <p>sur 3 jours</p>
            </div>
            {/* End Single Service */}
          </div>
          <div class='col-lg-3 col-md-6 col-12'>
            {/* Start Single Service */}
            <div class='single-service'>
              <i class='ti-lock'></i>
              <h4>Paiement</h4>
              <p>à la livraison</p>
            </div>
            {/* End Single Service */}
          </div>
          <div class='col-lg-3 col-md-6 col-12'>
            {/* Start Single Service */}
            <div class='single-service'>
              <i class='ti-tag'></i>
              <h4>Meilleurs Produits</h4>
              <p>Aux meilleurs prix</p>
            </div>
            {/* End Single Service */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopServices;
