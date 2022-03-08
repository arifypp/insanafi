import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loader from "react-js-loader";

// All css 
import '../../assets/frontend/css/bootstrap.min.css';
import '../../assets/frontend/css/style.css';
import '../../assets/frontend/css/responsive.css';
import '../../assets/frontend/css/font-awesome.min.css';
import '../../assets/frontend/css/animate.css';

// All Js 
// import '../../assets/frontend/js/jquery.js';
// import '../../assets/frontend/js/bootstrap.min.js';
// import '../../assets/frontend/js/owl.carousel.min.js';
// import '../../assets/frontend/js/custom.js';
// import '../../assets/frontend/js/smoothscroll.js';

import Footer from './Footer';
import Middlebar from './Middlebar';
import Navbar from './Navbar';
import Topbar from './Topbar';
import routes from '../../routes/routes';


const MasterLayout = () => {
    const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		let timer = setTimeout(() => setLoaded(true), 2000);
		return () => {
		  clearTimeout(timer);
		};
	  }, []);

      useEffect(() => {
        document.title = "Insanafi Agro Vista"
     }, []);

    return(
        <div>
        {!loaded ? (
            <div className='WebLoader'>
                <Loader type="bubble-spin" bgColor={"#FFF"} title={"Insanafi Loading"} color={'#FFF'} size={100} />
            </div>

        ) : (
            <div className="body-inner">
                <Topbar />
                <header id="header" className="nav-style-boxed">
                    <Middlebar />
                    <Navbar />
                </header>
                {/* Main content should be here  */}
                    <Switch>
                        {routes.map((route, idx) => {
                            return (
                                route.component && (
                                    <Route 
                                        key = {idx}
                                        path = {route.path}
                                        exact = {route.exact}
                                        name = {route.name}
                                        render = {(props) => (
                                            <route.component {...props} />
                                        )}
                                    />
                                )
                            )
                        })}
                        <Redirect from="/" to="/" />
                    </Switch>
                <Footer />
            </div>
            )}
        </div>
    );
}

export default MasterLayout;