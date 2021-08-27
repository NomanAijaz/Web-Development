import { useState } from 'react';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import React from 'react';
import {Form, Row, Col, Button, Container} from 'react-bootstrap';

export function LoginComponent(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  let history = useHistory();


  const logIn = (evt)=>{
    evt.preventDefault()
    const data={
      email:email,
      password:password
    }

    Axios.post("http://localhost:3002/api/login", data).then((res)=>{
        if(res.data.message===1){
            history.push('/adminPanel');  
        }
        else{
            alert("Incorrect Email or Password")
        }  
 
    
});
  }

    return(<div>

<Container fluid="md" className="card mt-5 shadow p-5 border-warning bg-secondary" style={{color:'white'}}>
  <Row className="justify-content-md-center">
  <Col xs={6}>
    <h1 style={{textAlign:'center', color:'white'}}>Sign In</h1>
  <Form className="mt-3">
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
    <Form.Control type="email" placeholder="email@gmail.com" onChange={(e)=>{
      setEmail(e.target.value);
    }} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" onChange={(e)=>{
      setPassword(e.target.value);
    }}/>
    </Col>
  </Form.Group>
  <div style={{textAlign:'center'}}>
  <Button className="w-25 border-warning" variant="primary" type="submit" onClick={logIn}>
    Submit
  </Button>
  </div>

</Form>


  </Col>
  </Row>
</Container>


    </div>);
}