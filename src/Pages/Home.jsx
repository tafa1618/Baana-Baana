import React from 'react'
import Topbar from '../components/Topbar';
import MiddleInner from '../components/MiddleInner';
import Footer from '../components/Footer';
import HeaderInner from '../components/HeaderInner';
import Hero from '../components/Hero';
import ShopServices from '../components/ShopServices';
import imgElectro from "../products/electroménager/imgElectroménager/img1.jpg"
import imgCuisine from "../products/cuisine/imgCuisine/img4.jpg"
import imgArmoire from "../products/Armoires/imgArmoires/img5.jpg"
import Products from './Products';
import Chics from "../Pages/Chics"
import EnVogue from "../Pages/EnVogue"


const Home = () => {
  const style = {
    width: 350,
    height: 250
  };
  return (
    <>

      <header className='header shop'>
        <Topbar />
        <MiddleInner />
        <HeaderInner />
      </header>
      <Hero />
      <section className="small-banner section">
		<div className="container-fluid">
			<div className="row">
				{/*<!-- Single Banner  -->*/}
				<div className="col-lg-4 col-md-6 col-12">
					<div className="single-banner">
						<img src="https://icecube-eu-303.icedrive.io/download?p=_Gbftgi_XCZ82edlFIvfwQXbBjGxncLB25qi06S5sbt7KzCqdE0_RNt7Z.V_wGdSkCWLft9PGR0jD4VDb0Fjvi8CMFaiagNUfN0SG_nFfS8lcgbcBF5EMTjdAEeCTiq912NU.ze8CSHkzlJLKLM1wjRZ.8kM5yhAqQlpFZbHZ5_lQq15x_Z6VaSn4gkf5wn2" alt="#" style={style}/>
						<div className="content">
							<p>Electoménagers</p>
							
							<a href="#">Découvrir</a>
						</div>
					</div>
				</div>
				{/*<!-- /End Single Banner  -->*/}
				{/*<!-- Single Banner  -->*/}
				<div className="col-lg-4 col-md-6 col-12">
					<div className="single-banner">
						<img src={imgCuisine} style={style} alt="#" />
						<div className="content">
							<p>Cuisines</p>
							
							<a href="#">Acheter</a>
						</div>
					</div>
				</div>
				{/*<!-- /End Single Banner  -->*/}
				{/*<!-- Single Banner  -->*/}
				<div className="col-lg-4 col-12">
					<div className="single-banner tab-height">
						<img src={imgArmoire} style={style} alt="#" />
						<div className="content">
							<p>Armoires</p>
							
							<a href="#">Découvrir</a>
						</div>
					</div>
				</div>
				{/*<!-- /End Single Banner  -->*/}
			</div>
		</div>
	</section>
  
      <Products />
      <Chics />
      <EnVogue />
      <ShopServices />
      <Footer />
      
    </>
  )
}

export default Home
