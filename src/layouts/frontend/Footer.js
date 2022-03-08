import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <footer id="footer" className="footer bg-overlay">
            <div className="footer-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 footer-widget footer-about">
                            <h3 className="widget-title">About Us</h3>
                            <p>Thank you very much for visit our website & taking time to learn more about our company. Insanafi Agro Vista, the world-className animal solution provider committed to deal with a wide range of world renowned products to market inside the country through its own distribution network.</p>
                            <div className="footer-social">
                                <ul>
                                    <li><Link to="#"><i className="fa fa-rss"></i></Link></li>
                                    <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                    {/* <li><Link to="#"><i className="fa fa-twitter"></i></Link></li> */}
                                    {/* <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li> */}
                                    {/* <li><Link to="#"><i className="fa fa-linkedin"></i></Link></li> */}
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12 footer-widget">
                            <h3 className="widget-title">Our Product</h3>
                            <ul className="list-arrow">
                                <li><Link to="#">AD-LINCO</Link></li>
                                <li><Link to="#">LIVERIN</Link></li>
                                <li><Link to="#">ETHOPANIC</Link></li>
                                <li><Link to="#">MITA OXYGEN</Link></li>
                                <li><Link to="#">MITA YUCA</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-4 col-sm-12 footer-widget">
                            <h3 className="widget-title">Working Hours</h3>
                            <div className="working-hours">
                                We work 7 days a week, every day excluding major holidays. Contact us if you have an emergency, with our Hotline and Contact form.
                                <br/><br/> Monday - Friday: <span className="text-right">10:00 - 16:00 </span>
                                <br/> Saturday: <span className="text-right">12:00 - 15:00</span> 
                                <br/> Sunday and holidays: <span className="text-right">09:00 - 12:00</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="copyright-info">
                                <span>Copyright © {(new Date().getFullYear())} Insanafi. All Rights Reserved.</span>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6">
                            <div className="footer-menu">
                            <span>Build with from <i className="fa fa-heart"></i> <Link to="https://happyarif.com" style={{color:'white',}} target="blank">HappyArif</Link> </span>
                            </div>
                        </div>
                    </div>

                    {/* <div id="back-to-top" data-spy="affix" data-offset-top="10" className="back-to-top affix">
                        <button className="btn btn-primary" title="Back to Top">
                            <i className="fa fa-angle-double-up"></i>
                        </button>
                    </div> */}

                </div>
            </div>

        </footer>
    );
}
export default Footer;