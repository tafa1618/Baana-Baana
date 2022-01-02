import React from 'react'
import {Link} from 'react-router-dom' 
const Electromenager = () => {
	
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
									
									<li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">Electoménagers</a></li>
									<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#women" role="tab">Cuisines</a></li>
									<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#kids" role="tab">Armoires</a></li>
									<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#accessories" role="tab">Range Chaussures</a></li>
									
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
															<img className="default-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/batteur-sokany.jpg?fit=500%2C500&ssl=1" alt="#" />
															<img className="hover-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/batteur-sokany.jpg?fit=500%2C500&ssl=1" alt="#" />
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
															<img className="default-img" src="https://i0.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-67.jpg?fit=500%2C500&ssl=1" alt="#" />
															<img className="hover-img" src="https://i0.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-67.jpg?fit=500%2C500&ssl=1" alt="#" />
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
															<span>7000FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-22.jpg?fit=500%2C500&ssl=1" alt="#" />
															<img className="hover-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-22.jpg?fit=500%2C500&ssl=1" alt="#" />
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
															<span>6900FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://i.ibb.co/JtFf7pY/fer29000.jpg" alt="#" />
															<img className="hover-img" src="https://i.ibb.co/JtFf7pY/fer29000.jpg" alt="#" />
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
															<span>29000FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img"src="https://i.ibb.co/n6WgXs9/fer11900.jpg" alt="#" />
															<img className="hover-img" src="https://i.ibb.co/n6WgXs9/fer11900.jpg" alt="#" />
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
															<span>12000FCFA</span>
														</div>
													</div>
												</div>
											</div>

											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://i.ibb.co/V9yW6h4/fer15000.jpg" alt="#" />
															<img className="hover-img" src="https://i.ibb.co/V9yW6h4/fer15000.jpg" alt="#" />
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
														<h3><Link to="product-details.html">Fer à repasser</Link></h3>
														<div className="product-price">
															<span>15000FCFA</span>
														</div>
													</div>
												</div>
											</div>

											
										
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-69.jpg?fit=500%2C500&ssl=1" alt="#" />
															<img className="hover-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-69.jpg?fit=500%2C500&ssl=1" alt="#" />
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
															<img className="default-img" src="https://i0.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-2020-12-24T111724.772.jpg?fit=500%2C500&ssl=1" alt="#" />
															<img className="hover-img" src="https://i0.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-2020-12-24T111724.772.jpg?fit=500%2C500&ssl=1" alt="#" />
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
															<span>25000FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://i0.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-2020-12-28T011007.933.jpg?fit=500%2C500&ssl=1" alt="#" />
															<img className="hover-img" src="https://i0.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-2020-12-28T011007.933.jpg?fit=500%2C500&ssl=1" alt="#" />
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
															<img className="default-img" src="https://i2.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-2021-04-10T141519.202.jpg?fit=680%2C680&ssl=1" alt="#" />
															<img className="hover-img" src="https://i2.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-2021-04-10T141519.202.jpg?fit=680%2C680&ssl=1" alt="#" />
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
															<img className="default-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-95.jpg?fit=500%2C500&ssl=1" alt="#" />
															<img className="hover-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-95.jpg?fit=500%2C500&ssl=1" alt="#" />
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
															<span>4500FCFA</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://i0.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-2020-12-24T183651.297.jpg?fit=500%2C500&ssl=1" alt="#" />
															<img className="hover-img" src="https://i0.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-2020-12-24T183651.297.jpg?fit=500%2C500&ssl=1" alt="#" />
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
															<img className="default-img" src="https://i0.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/41A4Buoc3BL.jpg?fit=500%2C314&ssl=1" alt="#" />
															<img className="hover-img" src="https://i0.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/41A4Buoc3BL.jpg?fit=500%2C314&ssl=1" alt="#" />
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
											
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src="https://i0.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/2-22.jpg?fit=500%2C500&ssl=1" alt="#" />
															<img className="hover-img" src="https://i0.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/2-22.jpg?fit=500%2C500&ssl=1" alt="#" />
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
															<img className="default-img" src="https://i0.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-2020-12-24T111724.772.jpg?fit=500%2C500&ssl=1" alt="#" />
															<img className="hover-img" src="https://i0.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-2020-12-24T111724.772.jpg?fit=500%2C500&ssl=1" alt="#" />
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
															<img className="default-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/H23274442e9d948b59822eef92f5b5100I.jpg?fit=800%2C800&ssl=1" alt="#" />
															<img className="hover-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/H23274442e9d948b59822eef92f5b5100I.jpg?fit=800%2C800&ssl=1" alt="#" />
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
															<img className="default-img" src="https://i2.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/8f2bcea9-6d7c-4753-8555-c21239385920.jpg?fit=1440%2C1080&ssl=1" alt="#" />
															<img className="hover-img" src="https://i2.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/8f2bcea9-6d7c-4753-8555-c21239385920.jpg?fit=1440%2C1080&ssl=1" alt="#" />
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

export default Electromenager
