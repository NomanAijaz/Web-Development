import React from 'react';
import {link} from 'react-router-dom';

import './Slideshow.css';

import {Button, Row, Col, Form,Carousel} from 'react-bootstrap';

export default function Slideshow() {

  return (
    <div style={{
      width:'73%',
      height:'300px',
      justifyContent: 'center',
      alignItems: 'center',
      margin:'auto'
    }} >
    <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1571210862729-78a52d3779a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1512805668868-1608a189cc2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    </div>
  );}