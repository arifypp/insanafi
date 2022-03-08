import React, { useState, useEffect } from 'react';
import Slider from '../../layouts/frontend/Slider';
import { Link } from 'react-router-dom';
import Loader from "react-js-loader";
import { send } from 'emailjs-com';


const Hoempage = () => {

    const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		let timer = setTimeout(() => setLoaded(true), 2000);
		return () => {
		  clearTimeout(timer);
		};
	  }, []);

      useEffect(() => {
        document.title = "Home Page"
     }, []);

     const [toSend, setToSend] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        purpose: '',
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
            <Slider />
            <section className="welcome-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="welcome-content">
                                <h2> <span>Welcome to</span> <br/> INSANAFI AGRO VISTA</h2>
                            <p className="border-sub-title">Insanafi Agro Vista is an Animal Health Company & marketing Agro Feed additives in Bangladesh since 2014. We are representing some internationally recognized companies of abroad manufacturing world class products. We are marketing their products to our valued clients (Institutions like Feed mills, Hatcheries etc.) in Bangladesh. Our activities are dedicated to Livestock, Poultry & Aqua sectors. Our vision is to provide best quality & cost effective products and technical services to the customers to minimize the production cost & increase profitability of the customers.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={require('../../assets/frontend/images/cowimage.jpg')} className="img-fluid" width={"100%"} alt="Md Message"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="register-area">
                <div className="container">
                    <div className="row text-center">
                        <div className="register-content">
                            <h2 className="border-title">INSANAFI AGRO VISTA <span> <br/> is registered to</span> </h2>
                        <p className="border-sub-title"></p>
                        </div>
                    </div>

                    <div className="row text-center partners">
                        <div className="col-md-2 ">
                        <figure className="item partner-logo">
                            <Link to="#">
                                <img className="img-responsive" src={require('../../assets/frontend/images/partners/registered/link_1.png')} alt="client" />
                            </Link>
                            <p>Government of the People's Republic of Bangladesh.</p>
                        </figure>
                        </div>
                        <div className="col-md-2 "> 
                            <figure className="item partner-logo">
                                <Link to="#">
                                    <img className="img-responsive" src={require('../../assets/frontend/images/partners/registered/link_2.png')} alt="client" />
                                </Link>
                                <p>Department of Livestock Services of Bangladesh</p>
                            </figure>
                        </div>
                        <div className="col-md-2 "> 
                            <figure className="item partner-logo">
                                <Link to="#">
                                    <img className="img-responsive" src={require('../../assets/frontend/images/partners/registered/link_3.png')} alt="client" />
                                </Link>
                                <p>Department of Fisheries of Bangladesh</p>
                            </figure>
                        </div>
                        <div className="col-md-2 "> 
                            <figure className="item partner-logo">
                                <Link to="#">
                                    <img className="img-responsive" src={require('../../assets/frontend/images/partners/registered/link_4.png')} alt="client" />
                                </Link>
                                <p>Directorate General of Drug Administration</p>
                            </figure>
                        </div>
                        <div className="col-md-2 "> 
                            <figure className="item partner-logo last">
                                <Link to="#">
                                    <img className="img-responsive" src={require('../../assets/frontend/images/partners/registered/link_5.png')} alt="client" />
                                </Link>
                                <p>Animal Health companies association of Bangladesh</p>
                            </figure>
                        </div>
                        <div className="col-md-2 "> 
                            <figure className="item partner-logo">
                                <Link to="#">
                                    <img className="img-responsive" src={require('../../assets/frontend/images/partners/registered/link_3.png')} alt="client" />
                                </Link>
                                <p>Department of Fisheries of Bangladesh</p>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

            <section id="facts" className="facts-area bg-overlay no-padding">
                <div className="container">
                    <div className="row">
                        <div className="facts-wrapper">
                            <div className="col-md-3 col-sm-6 ts-facts">
                                <div className="ts-facts-img">
                                    <img src={require('../../assets/frontend/images/icon-image/fact1.png')} alt="" />
                                </div>
                                <div className="ts-facts-content">
                                    <h2 className="ts-facts-num"><span className="counterUp">5</span>Years</h2>
                                    <h3 className="ts-facts-title">Experience In <br/> Transportation</h3>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 ts-facts">
                                <div className="ts-facts-img">
                                    <img src={require('../../assets/frontend/images/icon-image/fact2.png')} alt="" />
                                </div>
                                <div className="ts-facts-content">
                                    <h2 className="ts-facts-num"><span className="counterUp">67</span>Plus</h2>
                                    <h3 className="ts-facts-title">Countries Servicing <br/> Worldwide</h3>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 ts-facts">
                                <div className="ts-facts-img">
                                    <img src={require('../../assets/frontend/images/icon-image/fact3.png')} alt="" />
                                </div>
                                <div className="ts-facts-content">
                                    <h2 className="ts-facts-num"><span className="counterUp">570</span>Plus</h2>
                                    <h3 className="ts-facts-title">Skilled Drivers <br/> In Our Fleet</h3>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 ts-facts">
                                <div className="ts-facts-img">
                                    <img src={require('../../assets/frontend/images/icon-image/fact4.png')} alt="" />
                                </div>
                                <div className="ts-facts-content">
                                    <h2 className="ts-facts-num"><span className="counterUp">10</span>Million</h2>
                                    <h3 className="ts-facts-title">Miles Driven <br/> Per Year</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="ts-quote-block" className="ts-quote-block pattern-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                            <h3 className="border-title border-left">Why Work With Us?</h3>

                            <div className="panel-group" id="accordion">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title"> 
                                            <Link data-toggle="collapse" data-parent="#accordion" to="#collapseOne">50 Years of Experience</Link> 
                                        </h4>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse in">
                                        <div className="panel-body">
                                            <img className="pull-left" src="images/services/service1.jpg" alt="" />
                                            <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Proin gravida nibh vel velit auctor</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <Link data-toggle="collapse" className="collapsed" data-parent="#accordion" to="#collapseTwo"> We have World Wide Transport</Link>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <img className="pull-right" src="images/services/service2.jpg" alt="" />
                                            <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Proin gravida nibh vel velit auctor</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <Link data-toggle="collapse" className="collapsed" data-parent="#accordion" to="#collapseThree"> You will get Cost Saving Solutions</Link>
                                        </h4>
                                    </div>
                                    <div id="collapseThree" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <img className="pull-left" src="images/services/service3.jpg" alt="" />
                                            <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Proin gravida nibh vel velit auctor</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <Link data-toggle="collapse" className="collapsed" data-parent="#accordion" to="#collapseFour"> We Care About Your Cargo</Link>
                                        </h4>
                                    </div>
                                    <div id="collapseFour" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <img className="pull-left" src="images/services/service3.jpg" alt="" />
                                            <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Proin gravida nibh vel velit auctor</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            
                        </div>

                        <div className="col-md-6">
                            <h3 className="border-title border-left">Get a Quick Quote</h3>

                            <form onSubmit={onSubmit}>
                                <div id="error"></div>
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <div className="form-group">
                                        <input 
                                        type='text'
                                        name='name'
                                        placeholder='Enter Name'
                                        value={toSend.name}
                                        onChange={handleChange}
                                        className="form-control form-control-name" required />
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-md-6">
                                        <div className="form-group">
                                        <input
                                        type='email'
                                        name='email'
                                        placeholder='Enter Email'
                                        value={toSend.email}
                                        onChange={handleChange}
                                        className="form-control form-control-email" required/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-md-12">
                                        <div className="form-group">
                                            <input
                                            type='text'
                                            name='subject'
                                            placeholder='Enter Subject'
                                            value={toSend.subject}
                                            onChange={handleChange}
                                            className="form-control form-control-subject"  required/>
                                        </div>
                                    </div>
                                </div>
                                    
                                <div className="form-group">
                                    <input
                                    name='message'
                                    placeholder='Enter Message'
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

export default Hoempage;