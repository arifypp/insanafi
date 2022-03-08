import React from 'react';
import {Link} from 'react-router-dom';

const Topbar = () => {

    return(
        <div id="top-bar" className="top-bar">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                        <ul className="top-info">
                            <li><i className="fa fa-phone">&nbsp;</i><p className="info-text">+88-01713-176235</p></li>
                            <li><i className="fa fa-envelope-o">&nbsp;</i><p className="info-text">info@insanafi.com</p></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 top-social text-right">
                        <ul className="unstyled">
                            <li>
                                <Link title="Facebook" to="#">
                                    <span className="social-icon"><i className="fa fa-facebook"></i></span>
                                </Link>
                                <Link title="Twitter" to="#">
                                    <span className="social-icon"><i className="fa fa-twitter"></i></span>
                                </Link>
                                <Link title="Google+" to="#">
                                    <span className="social-icon"><i className="fa fa-google-plus"></i></span>
                                </Link>
                                <Link title="Linkdin" to="#">
                                    <span className="social-icon"><i className="fa fa-linkedin"></i></span>
                                </Link>
                                <Link title="Rss" to="#">
                                    <span className="social-icon"><i className="fa fa-rss"></i></span>
                                </Link>
                                <Link title="Skype" to="#">
                                    <span className="social-icon"><i className="fa fa-skype"></i></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
	    </div>
    );
}

export default Topbar;