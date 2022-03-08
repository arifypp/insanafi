import React from 'react';
import {Link} from 'react-router-dom';
import { useLocation } from "react-router-dom";




const Navbar = () => {

	//assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return(
        <nav className="site-navigation navigation">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="site-nav-inner pull-left">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
							  <span className="sr-only">Toggle navigation</span>
							  <span className="icon-bar"></span>
							  <span className="icon-bar"></span>
							  <span className="icon-bar"></span>
							</button>

							<div className="collapse navbar-collapse navbar-responsive-collapse">
								<ul className="nav navbar-nav">
									<li className={splitLocation[1] === "" ? "active" : ""}>
										<Link to="/">Home </Link>
									</li>

									<li className={splitLocation[1] === "about" ? "active dropdown" : "dropdown" }>
										<Link to="/about" className="dropdown-toggle" data-toggle="dropdown">Company <i className="fa fa-angle-down"></i></Link>
										<ul className="dropdown-menu" role="menu">
											<li className={splitLocation[1] === "about" ? "active" : ""}><Link to="/about">About Us</Link></li>
											<li className={splitLocation[1] === "profile" ? "active" : ""} ><Link to="/profile">Profile</Link></li>
											<li className={splitLocation[1] === "misson" ? "active" : ""}><Link to="/misson">Misson</Link></li>
										</ul>
									</li>

									<li className={splitLocation[1] === "product" ? "active dropdown" : "dropdown"}>
										<Link to="/product" className="dropdown-toggle" data-toggle="dropdown">Our Product <i className="fa fa-angle-down"></i></Link>
										<ul className="dropdown-menu" role="menu">
											<li><Link to="#">AD-LINCO</Link></li>
											<li><Link to="#">LIVERIN</Link></li>
											<li><Link to="#">ETHOPANIC</Link></li>
											<li><Link to="#">MITA OXYGEN</Link></li>
											<li><Link to="#">MITA YUCA</Link></li>
										</ul>
									</li>

									
									<li className={splitLocation[1] === "contact" ? "active dropdown" : "dropdown"}>
										<Link to="/contact">Contact <i className="fa fa-angle-down"></i></Link>
									</li>

									<li className="header-get-a-quote">
										<Link to={{ pathname: "https://insanafi.com/app/public/login"}} target="_blank">Log in Account</Link>
									</li>

								</ul>
							</div>

						</div>

					</div>
				</div>
			</div>

		</nav>
    );
}

export default Navbar;