import React from 'react';
import { Link } from 'react-router-dom';
import './working.css';
import NavbarOfWeb from './NavbarOfWeb';
import Footer from './Footer';
import './ContactUs.css'
export default function ContactUs(){

    return (
        <>
        <NavbarOfWeb/>

      <div class="container">
          <div class="row">
            
              <div class="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
                  <h1 class="section-title">Love to Hear From You</h1>
              </div>
          </div>
          <div class="row">
             
              <div class="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
                <p>We will love to listen from you gorgeous people. You may send us queries, issues you face or you may send us reviwes and suggestion to improve website.Our first priority is You. we will feel privileged to assist your queries and will love to listen reviews from you .. your reveiws will incourage us to do more for you to make compitent in era of acedemia.</p>

                <div class="find-widget">
                 Company:  StudyHub
                </div>
                <div class="find-widget">
                 Address:  sukkur IBA university
                </div>
                <div class="find-widget">
                  Phone:  0315-1234567
                </div>
                
                <div class="find-widget">
                  Website:  <a href="#">www.StudyHub.com</a>
                </div>
              </div>
              
              <div class="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
                  <form class="shake" role="form" method="post" id="contactForm" name="contact-form" data-toggle="validator">
                     
                      <div class="form-group label-floating">
                        <label class="control-label" for="name">Name</label>
                        <input class="form-control" id="name" type="text" name="name" required data-error="Please enter your name"/>
                        <div class="help-block with-errors"></div>
                      </div>
               
                      <div class="form-group label-floating">
                        <label class="control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="email" name="email" required data-error="Please enter your Email"/>
                        <div class="help-block with-errors"></div>
                      </div>
                     
                      <div class="form-group label-floating">
                        <label class="control-label">Subject</label>
                        <input class="form-control" id="msg_subject" type="text" name="subject" required data-error="Please enter your message subject"/>
                        <div class="help-block with-errors"></div>
                      </div>
                     
                      <div class="form-group label-floating">
                          <label for="message" class="control-label">Message</label>
                          <textarea class="form-control" rows="3" id="message" name="message" required data-error="Write your message"></textarea>
                          <div class="help-block with-errors"></div>
                      </div>
                     
                      <div class="form-submit mt-5 text-center">
                          <button class="btn btn-primary text-center " type="submit" id="form-submit"><i class="material-icons mdi mdi-message-outline"></i> Send Message</button>
                          <div id="msgSubmit" class="h3 text-center hidden"></div>
                          <div class="clearfix"></div>
                      </div>
                  </form>
              </div>
          </div>
      </div>

    <Footer/>
        </>
        )
}