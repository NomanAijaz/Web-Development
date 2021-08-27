import React from 'react';
import {Form, Row, Col, Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
export function Home(){
    return(<div>

<div className = 'container mt-5'>
                

          {/* <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div> */}

                <div>
                <Container fluid="md" className='card p-5 border-warning shadow bg-secondary' style={{height:'300px'}}>
                  <h1 style={{textAlign:'center',color:'white'}}>Please Select an Option</h1>
                  <Row className="justify-content-md-center mt-5">
                    <Col style={{textAlign:'center'}}>    
                    <Link to='/login'><Button className='btn btn-primary border-warning' style={{width:'300px'}}>AdminPanel</Button></Link><br/>
                    <Link to='/Employees'><Button className='btn btn-primary mt-5 border-warning' style={{width:'300px'}}>Employees</Button></Link>
                    </Col>
                  </Row>
                </Container>
                </div>
             </div>
    </div>);
}