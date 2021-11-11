import React from 'react'
import {Link} from 'react-router-dom' 
const Products = () => {
  return (
    <div className="product-area section">
            <div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section-title">
							<h2>Nos Produits</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="product-info">
							<div className="nav-main">
								{/*<!-- Tab Nav --> */}
								<ul className="nav nav-tabs" id="myTab" role="tablist">
									<li className="nav-item"><Link className="nav-link active" data-toggle="tab" to="#man" role="tab">Electoménagers</Link></li>
									<li className="nav-item"><Link className="nav-link" data-toggle="tab" to="#women" role="tab">Cuisines</Link></li>
									<li className="nav-item"><Link className="nav-link" data-toggle="tab" to="#kids" role="tab">Armoires</Link></li>
									<li className="nav-item"><Link className="nav-link" data-toggle="tab" to="#accessories" role="tab">Range Chaussures</Link></li>
									
								</ul>
								{/*<!--/ End Tab Nav -->*/}
							</div>
							<div className="tab-content" id="myTabContent">
								{/*<!-- Start Single Tab -->*/}
								<div className="tab-pane fade show active" id="man" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jH5jhO.ATHU_.KftcKIDNCSkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS.03NehV.OBunXkkPW2lNJnH._wnonQvZl0WvwV7ae.LAVGt.9kL4woGqdKnem4QPsUf2E2qkeA2TXQvm_pqzRC" alt="#" />
															<img className="hover-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jH5jhO.ATHU_.KftcKIDNCSkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS.03NehV.OBunXkkPW2lNJnH._wnonQvZl0WvwV7ae.LAVGt.9kL4woGqdKnem4QPsUf2E2qkeA2TXQvm_pqzRC" alt="#" />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter Au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Le batteur Electrique</Link></h3>
														<div className="product-price">
															<span>7900FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jEXXarrjJLfKjfNoiw_1pB4kCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS_auTNNq.SKNY6Ds2tYenmSA_miVMNMfuJlRPPjZhc_xCJBxBUl282yajyYdbpBx3jlQq15x_Z6VaSn4gkf5wn2" alt="#" />
															<img className="hover-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jEXXarrjJLfKjfNoiw_1pB4kCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS_auTNNq.SKNY6Ds2tYenmSA_miVMNMfuJlRPPjZhc_xCJBxBUl282yajyYdbpBx3jlQq15x_Z6VaSn4gkf5wn2" alt="#" />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter Au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Hachoir Electrique – Viande et Légumes</Link></h3>
														<div className="product-price">
															<span>8900FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jHpqTlpTjw85PFoiaX8b2MukCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS8XUx5hEXx_h7OIVH9Hfk3sCA08mZCd4h5Hg1ptrqFhkmzkQY6oNmXWzTdJJvUTrdZTJfySzG55TFCpPqAKviUL" alt="#" />
															<img className="hover-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jHpqTlpTjw85PFoiaX8b2MukCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS8XUx5hEXx_h7OIVH9Hfk3sCA08mZCd4h5Hg1ptrqFhkmzkQY6oNmXWzTdJJvUTrdZTJfySzG55TFCpPqAKviUL" alt="#" />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter Au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Pompe à Eau Electrique</Link></h3>
														<div className="product-price">
															<span>11500FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jGEP4pIAoCYhg9zesKikirQkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS9aJgs7opDG0fBMMmjXdWBNP9qRLXxtJoxbeMvDEjLIKXcdToVEkFDqL3gaGFUYa8RyY5kLW1mpXKQtbVO0o9a4" alt="#" />
															<img className="hover-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jGEP4pIAoCYhg9zesKikirQkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS9aJgs7opDG0fBMMmjXdWBNP9qRLXxtJoxbeMvDEjLIKXcdToVEkFDqL3gaGFUYa8RyY5kLW1mpXKQtbVO0o9a4" alt="#" />
															<span className="new">New</span>
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter Au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Fer à Repasser à Vapeur</Link></h3>
														<div className="product-price">
															<span>11500FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jGsRcXyxdiCZilyLNqDoAL5kCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS_KyEg.dswD_5T1QdTyFLVM6Pu_6pTgj_Thu4.UWJx0j4HH_ZodGh8ZaZr26edRiXQACkaUmBqdsxzM7nPyznxN" alt="#" />
															<img className="hover-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jGsRcXyxdiCZilyLNqDoAL5kCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS_KyEg.dswD_5T1QdTyFLVM6Pu_6pTgj_Thu4.UWJx0j4HH_ZodGh8ZaZr26edRiXQACkaUmBqdsxzM7nPyznxN" alt="#" />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter Au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Batteur Electrique avec Bol 2 Litres</Link></h3>
														<div className="product-price">
															<span>12900FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jFV3kP5QQ.nSj5bVfb0QElZkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS.Zrybca.dtQMcGr_kwRxco3LCIkWp14PLJSWaDARxIbhHZ8FfZryz9z1ee4ofKNkYCp7wfZ54Wj3_IyUCSTMKH" alt="#" />
															<img className="hover-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jFV3kP5QQ.nSj5bVfb0QElZkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS.Zrybca.dtQMcGr_kwRxco3LCIkWp14PLJSWaDARxIbhHZ8FfZryz9z1ee4ofKNkYCp7wfZ54Wj3_IyUCSTMKH" alt="#" />
															<span className="price-dec">30% Off</span>
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter Au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">4 en 1 à Panini et Croque-monsieur en Acier Inoxydable</Link></h3>
														<div className="product-price">
															<span>16900FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jFJnO2sYd8WNpGac0hh6QhHkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS.4TfXH6q3ZIXttCcLAwt8IoUe2utcoAZhFtLnpV9Mtr0E.uzdyml__iQ.KG0xuV6JoVxo6kS4OJMzmmEJSdZkM" alt="#" />
															<img className="hover-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jFJnO2sYd8WNpGac0hh6QhHkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS.4TfXH6q3ZIXttCcLAwt8IoUe2utcoAZhFtLnpV9Mtr0E.uzdyml__iQ.KG0xuV6JoVxo6kS4OJMzmmEJSdZkM" alt="#" />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter Au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Generic Blender Mixeur Presse Agrumes Multifonctions</Link></h3>
														<div className="product-price">
															<span>47000FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jEcQmvae.kzd8Wzetu7p53KkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS.wRyZ.XbKy9Ykoxw9gyMXvtwFxyBX_2IAyK_NffPIA7A4Imua.7bq8keeU4CyNNogbH8dxoCBMDHEvsT39ODJ6" alt="#" />
															<img className="hover-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jEcQmvae.kzd8Wzetu7p53KkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS.wRyZ.XbKy9Ykoxw9gyMXvtwFxyBX_2IAyK_NffPIA7A4Imua.7bq8keeU4CyNNogbH8dxoCBMDHEvsT39ODJ6" alt="#" />
															<span className="out-of-stock">Hot</span>
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Thermos 1.9 Litre – Inox</Link></h3>
														<div className="product-price">
															<span className="old">7500FCFA</span>
															<span>6900FCFA</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/*<!--/ End Single Tab -->*/}
								{/*<!-- Start Single Tab -->*/}
								<div className="tab-pane fade" id="women" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jFATsKIYowLoDDL_5hhlR7lkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS.YxLilSEQyN_mKksf2wgb7.KzrimCm1PsW.nxQH_UkPk0H__Y9CYVaeoPmHtRU8R8Uf2E2qkeA2TXQvm_pqzRC" alt="#" />
															<img className="hover-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jFATsKIYowLoDDL_5hhlR7lkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS.YxLilSEQyN_mKksf2wgb7.KzrimCm1PsW.nxQH_UkPk0H__Y9CYVaeoPmHtRU8R8Uf2E2qkeA2TXQvm_pqzRC" alt="#" />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">3 pièces Théière en Aluminium – 1 Litres,700ml et 500ml</Link></h3>
														<div className="product-price">
															<span>9000FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jFQ3l8m8d62.FjtdetnoA6CkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS8y3in6SD8yFvmrTuHzNatxMObInPFATRNv8eao8wvVbzq60bm8NjmAoYDyJ9CCwBXlQq15x_Z6VaSn4gkf5wn2" alt="#" />
															<img className="hover-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jFQ3l8m8d62.FjtdetnoA6CkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS8y3in6SD8yFvmrTuHzNatxMObInPFATRNv8eao8wvVbzq60bm8NjmAoYDyJ9CCwBXlQq15x_Z6VaSn4gkf5wn2" alt="#" />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">6 Tasse Petit Déjeuner en Verre – 35 ml</Link></h3>
														<div className="product-price">
															<span>9000FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jFwgbVL_iu4qOI2G1T37l9hkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS9azKwkUKdQuAAZNE9z4OSMse9CMKiW_5lnPCjytYBhuVYURmXHp03qnrQy.TBuRG8ACkaUmBqdsxzM7nPyznxN" alt="#" />
															<img className="hover-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jFwgbVL_iu4qOI2G1T37l9hkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS9azKwkUKdQuAAZNE9z4OSMse9CMKiW_5lnPCjytYBhuVYURmXHp03qnrQy.TBuRG8ACkaUmBqdsxzM7nPyznxN" alt="#" />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Couscoussier italia en inox 6 litres</Link></h3>
														<div className="product-price">
															<span>12000FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jGS7PcWGm4jUTV2XPyAPuY6kCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS.MNPY8GSBvUzDKKmA7dEkDx998ywBb8U0yDSd3zHXT0KdGDPc.NrJwzVlE5LZbsTgbH8dxoCBMDHEvsT39ODJ6" alt="#" />
															<img className="hover-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jGS7PcWGm4jUTV2XPyAPuY6kCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS.MNPY8GSBvUzDKKmA7dEkDx998ywBb8U0yDSd3zHXT0KdGDPc.NrJwzVlE5LZbsTgbH8dxoCBMDHEvsT39ODJ6" alt="#" />
															<span className="new">New</span>
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Poêle Antiadhésif 28 cm</Link></h3>
														<div className="product-price">
															<span>12000FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jFBT46S4VvrjHJp_asYBk0.kCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS.FfRL78VxBrBBbzIrZKZKEIzfECnN68qIB.fvZPXE3SuYr5KxGwNBMtfGDh7.vAZVoVxo6kS4OJMzmmEJSdZkM" alt="#" />
															<img className="hover-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jFBT46S4VvrjHJp_asYBk0.kCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS.FfRL78VxBrBBbzIrZKZKEIzfECnN68qIB.fvZPXE3SuYr5KxGwNBMtfGDh7.vAZVoVxo6kS4OJMzmmEJSdZkM" alt="#" />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Presse Agrume Electrique</Link></h3>
														<div className="product-price">
															<span>7900FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jFLgRXOHt20OWU8DdpYg3pWkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS_SUuyF.xMcE97B50BtSavK8VbUyFLzntmkx_JOuX2nA3ezSi5qgnKRdZjyLMsS.5ACp7wfZ54Wj3_IyUCSTMKH" alt="#" />
															<img className="hover-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jFLgRXOHt20OWU8DdpYg3pWkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS_SUuyF.xMcE97B50BtSavK8VbUyFLzntmkx_JOuX2nA3ezSi5qgnKRdZjyLMsS.5ACp7wfZ54Wj3_IyUCSTMKH" alt="#" />
															<span className="price-dec">30% Off</span>
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Égouttoir vaisselle 2 couches en acier inoxydable</Link></h3>
														<div className="product-price">
															<span>7900FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jETt1r5W0k9WpmzMdqGvSmxkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS_mwZVQtc2tySeny0groWHeiidezceJn3QJ6_GzrMWhhGMEAvtfe3MTaYG2kgpDwVVyY5kLW1mpXKQtbVO0o9a4" alt="#" />
															<img className="hover-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jETt1r5W0k9WpmzMdqGvSmxkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS_mwZVQtc2tySeny0groWHeiidezceJn3QJ6_GzrMWhhGMEAvtfe3MTaYG2kgpDwVVyY5kLW1mpXKQtbVO0o9a4" alt="#" />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Blender Mixeur – 1.5L</Link></h3>
														<div className="product-price">
															<span>25000FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jGbWFE35unMdrZ97cA1j.2OkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS.ukTsRvb5m5udFHommE3igo8OnsBfOGAg7gjiDHSlgqBULAcOXfy.IoR.nfqWdh21TJfySzG55TFCpPqAKviUL" alt="#" />
															<img className="hover-img" src="https://icecube-eu-304.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRDWZPHFsIS76rqKgjpB81jGbWFE35unMdrZ97cA1j.2OkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS.ukTsRvb5m5udFHommE3igo8OnsBfOGAg7gjiDHSlgqBULAcOXfy.IoR.nfqWdh21TJfySzG55TFCpPqAKviUL" alt="#" />
															<span className="out-of-stock">Hot</span>
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">pack de 13 spatules</Link></h3>
														<div className="product-price">
															<span className="old">11000FCFA</span>
															<span>9900FCFA</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/*<!--/ End Single Tab -->*/}
								{/*<!-- Start Single Tab -->*/}
								<div className="tab-pane fade" id="kids" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://icecube-eu-403.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRFLT_PKHO3HkBwSWj6IBlYkLCeJKgR9bRIBx8G1AnY28kCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS8cgjxpONhddKcMfPC5nZ0AlEN6LRrxoae46GuyKUpGP7XlwcLPGOjx.L9z1JbLHLd1tKRq99qUEq2rWlG8uNq3xo1tQrzaOIebCdtoL9pauxobo0LXpsHNSwEl_OO8kHSVJM9Zr6TawsKGiuEJ8w4b" alt="#" />
															<img className="hover-img" src="https://icecube-eu-403.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRFLT_PKHO3HkBwSWj6IBlYkLCeJKgR9bRIBx8G1AnY28kCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS8cgjxpONhddKcMfPC5nZ0AlEN6LRrxoae46GuyKUpGP7XlwcLPGOjx.L9z1JbLHLd1tKRq99qUEq2rWlG8uNq3xo1tQrzaOIebCdtoL9pauxobo0LXpsHNSwEl_OO8kHSVJM9Zr6TawsKGiuEJ8w4b" alt="#" />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Armoire à deux battants </Link></h3>
														<div className="product-price">
															<span>30000FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://icecube-eu-403.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRFLT_PKHO3HkBwSWj6IBlYnHzsZamPObl18t2nSw1jAdkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS95xRe65oknep1EqZJpHMBccEw7XmGo3UpchBr6U8Pb_ZAV8QTnd9gfUUB.dYlslyl1tKRq99qUEq2rWlG8uNq3xo1tQrzaOIebCdtoL9pauxqQIA5ROczP55jyKqif9VaVJM9Zr6TawsKGiuEJ8w4b" alt="#" />
															<img className="hover-img" src="https://icecube-eu-403.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRFLT_PKHO3HkBwSWj6IBlYnHzsZamPObl18t2nSw1jAdkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS95xRe65oknep1EqZJpHMBccEw7XmGo3UpchBr6U8Pb_ZAV8QTnd9gfUUB.dYlslyl1tKRq99qUEq2rWlG8uNq3xo1tQrzaOIebCdtoL9pauxqQIA5ROczP55jyKqif9VaVJM9Zr6TawsKGiuEJ8w4b" alt="#" />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">armoire 2 battants avec range chaussure</Link></h3>
														<div className="product-price">
															<span>22000FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://icecube-eu-403.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRFLT_PKHO3HkBwSWj6IBlYmVR62TkAPScBxSzlY7IA2UkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS_B6iSIYWeg3SYnkHKS5sxRIM9GxLgN4UcJc1SdwsIq1lyRSR3LTkye.tIEf8MY32h1tKRq99qUEq2rWlG8uNq3xo1tQrzaOIebCdtoL9pau3FXOdGiqu1svZ8KBUGDdYqVJM9Zr6TawsKGiuEJ8w4b" alt="#" />
															<img className="hover-img" src="https://icecube-eu-403.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRFLT_PKHO3HkBwSWj6IBlYmVR62TkAPScBxSzlY7IA2UkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS_B6iSIYWeg3SYnkHKS5sxRIM9GxLgN4UcJc1SdwsIq1lyRSR3LTkye.tIEf8MY32h1tKRq99qUEq2rWlG8uNq3xo1tQrzaOIebCdtoL9pau3FXOdGiqu1svZ8KBUGDdYqVJM9Zr6TawsKGiuEJ8w4b" alt="#" />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">armoire 1 battant avec range chaussure</Link></h3>
														<div className="product-price">
															<span>30000FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://icecube-eu-403.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRFLT_PKHO3HkBwSWj6IBlYm7mTvKOF0kN642zaaFEbNgkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS.M6ib2kTUZUbLF2ab3uHxIKc6gZMZQKtJpztrjYZRA3NiGsx7MwpOwI_0AGunAYR91tKRq99qUEq2rWlG8uNq3xo1tQrzaOIebCdtoL9pau.6l05batBPSBsCy9V.qpoc-" alt="#" />
															<img className="hover-img" src="https://icecube-eu-403.icedrive.io/download?p=rXK3pkwWG19L84aDC2_uRFLT_PKHO3HkBwSWj6IBlYm7mTvKOF0kN642zaaFEbNgkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS.M6ib2kTUZUbLF2ab3uHxIKc6gZMZQKtJpztrjYZRA3NiGsx7MwpOwI_0AGunAYR91tKRq99qUEq2rWlG8uNq3xo1tQrzaOIebCdtoL9pau.6l05batBPSBsCy9V.qpoc-" alt="#" />
															<span className="new">New</span>
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Armoire 2 battant avec range chaussures</Link></h3>
														<div className="product-price">
															<span>30000FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://i0.wp.com/www.mondialevaise.com/wp-content/uploads/2021/10/d9a699e0-e643-42b0-8db0-1d1413035584.jpg?fit=540%2C540&ssl=1" alt="#" />
															<img className="hover-img" src="https://i0.wp.com/www.mondialevaise.com/wp-content/uploads/2021/10/d9a699e0-e643-42b0-8db0-1d1413035584.jpg?fit=540%2C540&ssl=1" alt="#" />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">armoire 4 battants noir blanc avec double range chaussure</Link></h3>
														<div className="product-price">
															<span>50000FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/3.jpg?fit=500%2C500&ssl=1" alt="#" />
															<img className="hover-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/3.jpg?fit=500%2C500&ssl=1" alt="#" />
															<span className="price-dec">30% Off</span>
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Armoire de rangement Plastique 4 Battants</Link></h3>
														<div className="product-price">
															<span>45000FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://i0.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/HTB1pGUDKVXXXXamXXXXq6xXFXXX8.jpg_q50.jpg?fit=622%2C722&ssl=1" alt="#" />
															<img className="hover-img" src="https://i0.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/HTB1pGUDKVXXXXamXXXXq6xXFXXX8.jpg_q50.jpg?fit=622%2C722&ssl=1" alt="#" />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Armoire de rangement Plastique 4 Battants</Link></h3>
														<div className="product-price">
															<span>45000FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://i0.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/9e5065ef-e3f4-48a8-b943-e5505ae180dc.jpg?fit=1440%2C1080&ssl=1" alt="#" />
															<img className="hover-img" src="https://i0.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/9e5065ef-e3f4-48a8-b943-e5505ae180dc.jpg?fit=1440%2C1080&ssl=1" alt="#" />
															<span className="out-of-stock">Hot</span>
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Armoire Etagère Modulable</Link></h3>
														<div className="product-price">
															<span className="old">30000FCFA</span>
															<span>28000FCFA</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/*<!--/ End Single Tab -->*/}
								{/*<!-- Start Single Tab -->*/}
								<div className="tab-pane fade" id="accessories" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-2020-12-22T120848.748.jpg?fit=500%2C500&ssl=1" alt="#" />
															<img className="hover-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-2020-12-22T120848.748.jpg?fit=500%2C500&ssl=1" alt="#" />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Range Chaussures -12 Paires</Link></h3>
														<div className="product-price">
															<span>5900FCFA </span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-2020-12-22T115943.571.jpg?fit=500%2C500&ssl=1" alt="#" />
															<img className="hover-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-2020-12-22T115943.571.jpg?fit=500%2C500&ssl=1" alt="#" />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Range Chaussures – Double Cabine – 36 paires – Bleu</Link></h3>
														<div className="product-price">
															<span>12900FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-2020-12-24T125040.711.jpg?fit=500%2C500&ssl=1" alt="#" />
															<img className="hover-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-2020-12-24T125040.711.jpg?fit=500%2C500&ssl=1" alt="#" />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Range Chaussures – 5 Étagères – Rouge Bordeaux</Link></h3>
														<div className="product-price">
															<span>9900FCFA </span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://i2.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/2-2-1.jpg?fit=500%2C500&ssl=1" alt="#" />
															<img className="hover-img" src="https://i2.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/2-2-1.jpg?fit=500%2C500&ssl=1" alt="#" />
															<span className="new">New</span>
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">rmoire à Chaussures Meuble de Rangement pour 24 Paires</Link></h3>
														<div className="product-price">
															<span>22900FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/Hf39395a1307a4738a333df713a349e46e-1.jpg_q50-1.jpg?fit=1000%2C1000&ssl=1" alt="#" />
															<img className="hover-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/Hf39395a1307a4738a333df713a349e46e-1.jpg_q50-1.jpg?fit=1000%2C1000&ssl=1" alt="#" />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">Armoire de Rangement de Chaussures – 36 Paires – Rouge Bordeaux</Link></h3>
														<div className="product-price">
															<span>13900FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/10/15554f25-0881-4651-8e8c-374c990ad870.jpg?fit=720%2C720&ssl=10" alt="#" />
															<img className="hover-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/10/15554f25-0881-4651-8e8c-374c990ad870.jpg?fit=720%2C720&ssl=1" alt="#" />
															<span className="price-dec">30% Off</span>
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">armoire 4battants blanc avec double range chaussure</Link></h3>
														<div className="product-price">
															<span>50000FCFA </span>
														</div>
													</div>
												</div>
											</div>

										</div>
									</div>
								</div>
								{/*<!--/ End Single Tab -->*/}
								
					
							</div>
						</div>
					</div>
				</div>
            </div>
    </div>
  );
};

export default Products
