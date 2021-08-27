import React from 'react';
import {link} from 'react-router-dom';
import NavbarOfWeb from './NavbarOfWeb';
import Footer from './Footer';
import './About.css'

export default function About() {

  return (
    <>
    <NavbarOfWeb/>
    <div className="row mt-5 mb-5">
    <div className="col col-md-4 offset-2">
        <div>
        <div className="card shadow bd-grey" >
        <img src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="card-img-top" alt="..."/>

      
    </div>
    </div>
    </div>
    <div className="col col-md-4 ">
        <div>
        <div className="card shadow" >
        <h5 className="card-title text-dark text-center mt-2 mb-2"> About Us</h5>
        <div className="card-body">
           <p className="card-text">this plate form is mainly introduced to work on students interpersonal and professional skills,not only for student but also for teacher. it helps teacher to communicate student remotely from any distance. it helps them to interact with our website online. our main mission is to take a deep dive into new technology and to turn todays learner to earner.this seems exciting and we hope that our hark work will turn a ordinary person to a leader.
</p>
        
      </div>
      
    </div>
    </div>
    </div>
    
    </div>
    <Footer/>
    </>
  )}