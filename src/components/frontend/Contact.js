import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from "react-js-loader";
import { send } from 'emailjs-com';

const Contact = () => {

	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		let timer = setTimeout(() => setLoaded(true), 2000);
		return () => {
		  clearTimeout(timer);
		};
	  }, []);

	  useEffect(() => {
        document.title = "Contact Us"
     }, []);


     const [toSend, setToSend] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_rxbms8g',
          'template_hp24tr7',
          toSend,
          'user_DOFkrIK5hXWLbJQBAGtQb'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            var error = document.getElementById("error");
            error.className += " alert alert-success";
            error.innerHTML = "Your contact form has been submitted!";
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

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
											<h1 className="border-title border-left">Contact Us</h1>
											<ol className="breadcrumb">
												<li>Home</li>
												<li>Company</li>
												<li><Link href="/about">Contact Us</Link></li>
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
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="sidebar sidebar-left">
                                        <div className="widget contact-info">
                                            <h3 className="widget-title">Contact Us</h3>

                                            <div className="contact-info-box">
                                                <i className="fa fa-map">&nbsp;</i>
                                                <div className="contact-info-box-content">
                                                    <h4>Visit Us</h4>
                                                    <p>Office : House : # 23 (Level-10), Road # Gareeb-E-Newaz Avenue, Sector # 13, Uttara, Dhaka, Bangladesh</p>
                                                </div>
                                            </div>

                                            <div className="contact-info-box">
                                                <i className="fa fa-envelope">&nbsp;</i>
                                                <div className="contact-info-box-content">
                                                    <h4>Mail Us</h4>
                                                    <p>Info@insanafi.com</p>
                                                </div>
                                            </div>

                                            <div className="contact-info-box">
                                                <i className="fa fa-phone-square">&nbsp;</i>
                                                <div className="contact-info-box-content">
                                                    <h4>Call Us</h4>
                                                    <p>+88-01713-176235</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                    <h3 className="border-title border-left">Contact Form</h3>
                                    <form onSubmit={onSubmit}>
                                        <div id="error"></div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label>Name</label>
                                                <input
                                                type='text'
                                                name='name'
                                                placeholder=''
                                                value={toSend.name}
                                                onChange={handleChange}
                                                className="form-control form-control-name" required/>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                <label>Email</label>

                                                <input
                                                type='email'
                                                name='email'
                                                placeholder=''
                                                value={toSend.email}
                                                onChange={handleChange}
                                                className="form-control form-control-email" required/>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label>Subject</label>
                                                    
                                                    <input
                                                    type='text'
                                                    name='subject'
                                                    placeholder=''
                                                    value={toSend.subject}
                                                    onChange={handleChange}
                                                    className="form-control form-control-subject"  required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Message</label>
                                            <input
                                            name='message'
                                            placeholder=''
                                            value={toSend.message}
                                            onChange={handleChange}
                                            className="form-control form-control-message"  
                                            required/>
                                        </div>
                                        <div className="text-right"><br/>
                                            <button className="btn btn-primary solid blank" type="submit">Send Message</button> 
                                        </div>
                                    </form>
                                </div>
                            
                            </div>
                        </div>
                    </section>
				</div>				
			
			)}
		</div>
    )
}

export default Contact;