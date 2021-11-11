import React from 'react'
import {Link} from 'react-router-dom'

const Chics = () => {
  return (
    <div className="product-area most-popular section">
        <div className="container">
            <div className="row">
				<div className="col-12">
					<div className="section-title">
						<h2>Produits Chics</h2>
					</div>
				</div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="owl-carousel popular-slider">
						{/* Start Single Product */}
						<div className="single-product">
							<div className="product-img">
								<Link to="product-details.html">
									<img className="default-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jE3zLhVHuU57wiJrt3MIhdzkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS8W_tpvznGklSs1VKijrsm5rH8FGc9yZ3xLzXZP1AdjWeLMTvSD0.GFzcVMXERG4_cUf2E2qkeA2TXQvm_pqzRC" alt="#" />
									<img className="hover-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jE3zLhVHuU57wiJrt3MIhdzkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS8W_tpvznGklSs1VKijrsm5rH8FGc9yZ3xLzXZP1AdjWeLMTvSD0.GFzcVMXERG4_cUf2E2qkeA2TXQvm_pqzRC" alt="#" />
									<span className="out-of-stock">Hot</span>
								</Link>
								<div className="button-head">
									<div className="product-action">
										
										<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Ajouter au panier</span></Link>
										
									</div>
									<div className="product-action-2">
										<Link title="Add to cart" to="#">Ajouter au panier</Link>
									</div>
								</div>
							</div>
							<div className="product-content">
								<h3><Link to="product-details.html">Chaise pour Enfants</Link></h3>
								<div className="product-price">
									<span className="old">25000FCFA</span>
									<span>24000FCFA</span>
								</div>
							</div>
						</div>
						{/* End Single Product */}
						{/* Start Single Product */}
						<div className="single-product">
                            <div className="product-img">
                                <Link to="product-details.html">
                                    <img className="default-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jGyXgjNTfKqyY2O5ktbyqR9kCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS_Mc109w_813nOnUUk5cxH3zJLpBfKDbWcG7zO1NCxGw4bS0KLeij_zU3Oi4NqOGxjlQq15x_Z6VaSn4gkf5wn2" alt="#" />
                                    <img className="hover-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jGyXgjNTfKqyY2O5ktbyqR9kCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS_Mc109w_813nOnUUk5cxH3zJLpBfKDbWcG7zO1NCxGw4bS0KLeij_zU3Oi4NqOGxjlQq15x_Z6VaSn4gkf5wn2" alt="#" />
                                </Link>
								<div className="button-head">
									<div className="product-action">
									
										<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
										
									</div>
									<div className="product-action-2">
										<Link title="Add to cart" to="#">Ajouter au panier</Link>
									</div>
								</div>
                            </div>
                            <div className="product-content">
                                <h3><Link to="product-details.html">Moule à gâteau 3 formes</Link></h3>
                                <div className="product-price">
                                    <span>5500FCFA</span>
                                </div>
                            </div>
                        </div>
						{/* End Single Product */}
						{/* Start Single Product */}
						<div className="single-product">
                            <div className="product-img">
                                <Link to="product-details.html">
                                    <img className="default-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jG4lhcRHUDs_AMUzlzuDNBfkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS_SrmR0_4OzWmsiGyIcRSaTPuejEnpOKr99vWr8z4akSPxRhyssBGzogblB6KRsGZRTJfySzG55TFCpPqAKviUL" alt="#" />
                                    <img className="hover-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jG4lhcRHUDs_AMUzlzuDNBfkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS_SrmR0_4OzWmsiGyIcRSaTPuejEnpOKr99vWr8z4akSPxRhyssBGzogblB6KRsGZRTJfySzG55TFCpPqAKviUL" alt="#" />
									<span className="new">New</span>
                                </Link>
								<div className="button-head">
									<div className="product-action">
										
										<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
										
									</div>
									<div className="product-action-2">
										<Link title="Add to cart" to="#">Ajouter au panier</Link>
									</div>
								</div>
                            </div>
                            <div className="product-content">
                                <h3><Link to="product-details.html">Nier Dicer Quick 5 en 1</Link></h3>
                                <div className="product-price">
                                    <span>2900FCFA</span>
                                </div>
                            </div>
                        </div>
						{/* End Single Product */}
						{/* Start Single Product */}
						<div className="single-product">
                            <div className="product-img">
                                <Link to="product-details.html">
                                    <img className="default-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jHK1sW7O.glMP1yY73pM.kJkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS_BpQOUBwCl.20htGkyAjidRXdaAt6XOXNVDA4tiGhY8mM0sdwEi4XIHW7dyxu6qqRyY5kLW1mpXKQtbVO0o9a4" alt="#" />
                                    <img className="hover-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jHK1sW7O.glMP1yY73pM.kJkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS_BpQOUBwCl.20htGkyAjidRXdaAt6XOXNVDA4tiGhY8mM0sdwEi4XIHW7dyxu6qqRyY5kLW1mpXKQtbVO0o9a4" alt="#" />
                                </Link>
								<div className="button-head">
									<div className="product-action">
									
										<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
										
									</div>
									<div className="product-action-2">
										<Link title="Add to cart" to="#">Ajouter au panier</Link>
									</div>
								</div>
                            </div>
                            <div className="product-content">
                                <h3><Link to="product-details.html">Lot de 6 ustensiles de cuisine</Link></h3>
                                <div className="product-price">
                                    <span>2000FCFA</span>
                                </div>
                            </div>
                        </div>
						{/* End Single Product */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chics
