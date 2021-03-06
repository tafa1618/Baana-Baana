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


import Electromenager from './Products'
import Cuisine from './Cuisine'
import Armoires from './Armoires'
import RangeChaussures from './RangeChaussures'


import Chics from "../Pages/Chics"
import EnVogue from "../Pages/EnVogue"
import {Link} from 'react-router-dom'
import Bambinos from './Bambinos';



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
						<img src={imgElectro} alt="#" style={style}/>
						<div className="content">
							<p>Electoménagers</p>
							
							<Link to="#">Découvrir</Link>
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
							
							<Link to="#">Acheter</Link>
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
							
							<Link to="#">Découvrir</Link>
						</div>
					</div>
				</div>
				{/*<!-- /End Single Banner  -->*/}
			</div>
		</div>
	</section>
  
      <Electromenager />
			<Cuisine />
			<Armoires />
			<RangeChaussures /> 
			<Bambinos />
      <Chics />
      <EnVogue />
      <ShopServices />
			{/* Whattsapp button */}
			<div class="whatsapp">
<a href="https://api.whatsapp.com/send?phone=+221781110455" >    
<i class="fa fa-whatsapp fa-3x fa-spin" aria-hidden="true"></i></a>
                </div>
			{/* Whattsapp button */}
      <Footer />
      
    </>
  )
}

export default Home
