import React from 'react';
import {Link} from 'react-router-dom';

const Middlebar = () => {
    return(
		<div className="container">
		<div className="row">
			<div className="logo-area clearfix">
				<div className="logo col-xs-12 col-md-3">
					<Link to="index.html">
						<img src={require('../../assets/frontend/images/logo1.png')} alt="logo"/>
					</Link>
				</div>

				<div className="col-xs-12 col-md-9 header-right">
					<ul className="top-info-box">
						<li>
							<div className="info-box"><span className="info-icon"><i className="fa fa-map-marker">&nbsp;</i></span>
								<div className="info-box-content">
									<p className="info-box-title">Find Us</p>
									<p className="info-box-subtitle">Gareeb-E-Newaz Avenue, S# 13, Uttara, Dhaka</p>
								</div>
							</div>
						</li>
						<li>
							<div className="info-box"><span className="info-icon"><i className="fa fa-phone">&nbsp;</i></span>
								<div className="info-box-content">
									<p className="info-box-title">Call Us</p>
									<p className="info-box-subtitle">+88-01713-176235</p>
								</div>
							</div>
						</li>
						<li>
							<div className="info-box last"><span className="info-icon"><i className="fa fa-compass">&nbsp;</i></span>
								<div className="info-box-content">
									<p className="info-box-title">We are Open</p>
									<p className="info-box-subtitle">10.00 AM - 6.00 Pm</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			
		</div>
	</div>
    );
}
export default Middlebar;
