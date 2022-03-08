import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from "react-js-loader";

const Product = () => {

	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		let timer = setTimeout(() => setLoaded(true), 2000);
		return () => {
		  clearTimeout(timer);
		};
	  }, []);

	  useEffect(() => {
        document.title = "Product Page"
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
											<h1 className="border-title border-left">Product</h1>
											<ol className="breadcrumb">
												<li>Home</li>
												<li>Company</li>
												<li><Link href="/about">Product</Link></li>
											</ol>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<section id="main-container" className="main-container">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="content-inner-page">
                                        <h2 className="border-title border-left">Products</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="product-boxes">
                                    <div className="col-md-4">
                                        <div className="single-box">
                                            <h2>AD-LINCO</h2>
                                        <ul>
                                            <li><Link to="#">Composition : Lincomycin 4.4%</Link></li>
                                            <li><Link to="#">Dosage per Metric Ton feed : 200-250 gm</Link></li>
                                            <li><Link to="#">Purpose of use : Growth promoter, Prevention & Treatment of Necrotic Enteritis , Mycoplasmosis & CRD.</Link></li>
                                            <li><Link to="#">Manufacturing Company : ADBIOTECH CO. LTD.</Link></li>
                                            <li><Link to="#">Country of Origin : South Korea</Link></li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="single-box">
                                            <h2>LIVERIN</h2>
                                        <ul>
                                            <li><Link to="#">Composition : Blend of Natural Herbs.</Link></li>
                                            <li><Link to="#">Dosage per Metric Ton feed : 500-1000 gm</Link></li>
                                            <li><Link to="#">Purpose of use : Prevention & Treatment of Liver & Kidney</Link></li>
                                            <li><Link to="#">Manufacturing Company : ARGANO ORGANIC LTD.</Link></li>
                                            <li><Link to="#">Country of Origin : India</Link></li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="single-box">
                                            <h2>ETHOPANIC</h2>
                                        <ul>
                                            <li><Link to="#">Composition : Ethopabate 1.6% + Nicarbazin 8%</Link></li>
                                            <li><Link to="#">Dosage per Metric Ton feed : 500-625 gm</Link></li>
                                            <li><Link to="#">Purpose of use : Prevention of Coccidiosis</Link></li>
                                            <li><Link to="#">Manufacturing Company : EZELKIM LTD.</Link></li>
                                            <li><Link to="#">Country of Origin : Turkey</Link></li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="single-box">
                                            <h2>MITA OXYGEN</h2>
                                        <ul>
                                            <li><Link to="#">Composition : Sodium Percarbonate.</Link></li>
                                            <li><Link to="#">Dosage : 1 kg-2 kg/ 1000-5000 Cubic Meter of Water</Link></li>
                                            <li><Link to="#">Purpose of use : To increase the dissolve oxygen in water</Link></li>
                                            <li><Link to="#">Manufacturing Company : MITAVET CO. LTD.</Link></li>
                                            <li><Link to="#">Country of Origin : Vietnam</Link></li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="single-box">
                                            <h2>MITA YUCA</h2>
                                        <ul>
                                            <li><Link to="#">Composition : Prebiotic & Probiotic</Link></li>
                                            <li><Link to="#">Dosage : 1 kg/ 100 Cubic Meter of Water</Link></li>
                                            <li><Link to="#">Purpose of use : Decomposition of organic matters & Reduce toxic gases</Link></li>
                                            <li><Link to="#">Manufacturing Company : JOLINK CANTHO CO. LTD.</Link></li>
                                            <li><Link to="#">Country of Origin : Vietnam</Link></li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="call-to-action classic">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="call-to-action-text">
                                            <h3 className="action-title ">Interested with this service. Want to work with us for your Next Project?</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="call-to-action-btn ">
                                            <Link className="btn btn-dark" href="#">Get a Quote</Link>
                                        </div>
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

export default Product;