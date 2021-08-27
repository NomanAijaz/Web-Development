import React from 'react';
import './Footer.css'
import {Link} from 'react-router-dom';

export default function Footer() {

    return (
        <div className='footer-pos'>

            <footer className="container-fluid bg-dark py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="logo-part">
                                        <h1>StudyHub</h1>
                                        <p>or mission, our better future</p>
                                    </div>
                                </div>
                                <div className="col-md-6 px-4">
                                    <h6> About studyHub</h6>
                                    <p>our plateform will help to enhance a good quality environment</p>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 px-4">
                                    <h6> Help us</h6>
                                    <div className="row ">
                                        <div className="col-md-6">
                                            <ul>
                                                <Link to="/"> Home</Link>
                                                <Link to="/About"> About</Link>
                                                <Link to="/working"> working</Link>
                                                <Link to="/ContactUs"> Contact Us</Link>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <h6> Newsletter</h6>
                                    <div className="social">
                                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    </div>
                                    <form className="form-footer my-3">
                                        <input type="text" placeholder="search here...." name="search" />
                                        <input type="button" value="Go" />
                                    </form>
                                    <p>That's technology limitation of LCD monitors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}