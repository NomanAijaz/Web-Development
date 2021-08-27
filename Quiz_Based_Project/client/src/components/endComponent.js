import React, { useEffect, useState } from 'react';
import {Button, Row, Col, Form, Card} from 'react-bootstrap';

const EndComponent=({results, data, onReset, onAnswerCheck, time, name})=>{
    
    const [show, setShow] = useState(false);  
    const handleShow = () => setShow(true);

    const [correctAnswer, setCorrectAnswer] = useState(0); 
    
    useEffect(()=>{
        let correct  =0;
        results.forEach((result, index)=>{
            if(result.a === data[index].answer){
                correct+=1;
            }
        });
        setCorrectAnswer(correct);
    },[]);
    
    return (
        <div className="App">
<Card style={{width:"500px", borderRadius:"10px"}} className="text-center">
  <Card.Header>Your Result</Card.Header>
  <Card.Body>
  <Card.Title>{"Name: "+name}</Card.Title>   
    <Card.Title>{"Correct:"} {correctAnswer} out of {data.length}</Card.Title>
    <Card.Title>Percentage: {Math.floor((correctAnswer/data.length)*100)+"%"}</Card.Title>
    
    <Card.Text>
        <strong>Your time:</strong>{time+"s"} 
    </Card.Text>
    <Button variant="primary" onClick={onAnswerCheck}>Check you answers</Button>
    <Button variant="success" className="ml-3" onClick={onReset}>Try Again</Button>
  </Card.Body>
</Card>
        </div>
    );
}
export default EndComponent;