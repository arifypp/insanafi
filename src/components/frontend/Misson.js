import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from "react-js-loader";

const Misson = () => {

	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		let timer = setTimeout(() => setLoaded(true), 2000);
		return () => {
		  clearTimeout(timer);
		};
	  }, []);

	  useEffect(() => {
        document.title = "Misson Page"
     }, []);

    return(
        <div>
		{!loaded ? (
			<div className='WebLoader'>
				<Loader type="bubble-spin" bgColor={"#FFF"} title={"Insanafi Loading"} color={'#FFF'} size={100} />
			</div>

		 ) : (
			    <div>
					<div id="banner-area" className="banner-area" style={{ backgroundImage: `url(${require("../../assets/frontend/images/banner/banner1.jpg")})` }}>
					<div className="banner-text">
							<div className="container">
								<div className="row">
									<div className="col-xs-12">
										<div className="banner-heading">
											<h1 className="border-title border-left">Mission</h1>
											<ol className="breadcrumb">
												<li>Home</li>
												<li>Company</li>
												<li><Link href="/about">Mission</Link></li>
											</ol>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<section id="main-container" class="main-container pt-50">
						<div class="container">
							<div class="row">
								<div class="col-md-8">
										<div class="profile-content">
											<h3 class="border-title border-left mar-t0">Profile</h3>
												<p>Insanafi Agro Vista started journey since January-2017 It's a new establishment, but behind it has the long and wide range of experiences in this sector for more than twenty years. We are doing with many renown global partners and a skilled young team focusing on economy of live stock and agriculture sector in Bangladesh. We represents & promotes various innovative, sophisticated premium quality product by providing marketing, sales, distribution and technical support to our agro sector in Bangladesh. We are maintaining international standard warehouse for ensuring optimum product quality. At present we are importing feed additives from South Korea, Turkey, Vietnam, India.</p>
										</div>       
								</div>
								<div class="col-md-4">
									<div class="profile-image">
									<img src={require('../../assets/frontend/images/389_ceo.bmp')} className="img-fluid" width={"70%"} alt="Md Message"/>
									</div>
								</div>
								
								<div class="col-md-12">
									<div class="mission-content pt-100">
										<h3 class="border-title border-left mar-t0">Mission</h3>
											<p>Sustainable growth and contribute to our agro economy in Bangladesh. Insanafi has single & focused goal in future to become a leading organization for natural, organic, green, healthy and ecological harmony in Bangladesh.</p>
									</div>       
								</div>
								
								<div class="col-md-12">
									<div class="vission-content pt-100">
										<h3 class="border-title border-left mar-t0">Vission</h3>
											<p>Our vision is to provide best quality & cost effective products and technical services to the customers to minimize the production cost & increase profitability of the customers. Insanafi Agro Vista is committed to meet the customer's need.</p>
									</div>       
								</div>
							</div>
						</div>
					</section>
				</div>				
			
			)}
		</div>
    )
}

export default Misson;