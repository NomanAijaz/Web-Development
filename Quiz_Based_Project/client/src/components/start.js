import React, { useState } from 'react';
import {Button, Row, Col, Form, Card, InputGroup, FormControl} from 'react-bootstrap';
let na='';
export const Strt = ({onStart})=>{

  

  const getText=(e)=>{
  na=e.target.value;
}

  return(
  <div className="App">
    <Card className="bg-light" style={{"width":"600px","height":"530px", textAlign:"center",borderRadius:"10px" }}>
    <Card.Img variant="top"  src="https://i.pcmag.com/imagery/reviews/00NgiYhM8PUthyqlLKWLSp8-1..1615317883.png" />
    <Card.Body>
      <Card.Title>Start Quiz</Card.Title>
 
  <InputGroup className="mb-3">
  <InputGroup.Prepend>
  <InputGroup.Text>Enter Name</InputGroup.Text>
  </InputGroup.Prepend>
  <FormControl  onChange={getText}/>
  </InputGroup>
 
 
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" size="lg" style={{width:"300px"}} onClick ={()=>{onStart(na)}}>
      Start Quiz
    </Button>
    </Card.Footer>
  </Card>
        </div>

      
    );
}

export default Strt;