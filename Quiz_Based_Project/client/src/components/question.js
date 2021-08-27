import  React, {useState, useEffect, useRef} from 'react';
import {Button, Row, Col, Form, Card} from 'react-bootstrap';


const Question=({data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep, time, name})=>{
  
  const [selected, setSelected]  =useState('');
  const [error, setError] = useState('');

  const radiowraper= useRef();
 
 

  const changeHandler = (e)=>{
    setSelected(e.target.value);
  }
  
  const nextClickHandler =(e) => {

    if(selected===''){
      return setError('Please select one Option!');
    }else{
      setError('');
    }
    onAnswerUpdate(prevState =>[...prevState, {
      q: data.question,
      a: selected
    }])
    setSelected('');
    if(activeQuestion < numberOfQuestions-1){
      onSetActiveQuestion(activeQuestion+1);
    }else{
      onSetStep(3);
    }
  }

return (
    <div className="App">
      <Form className="bg-light" style={{"width":"600px","height":"500px", textAlign:"center",borderRadius:"10px" }} >
      <Card  className="text-center">
  <Card.Header><span style={{float:"left"}}>{"Q"+(activeQuestion+1)+"/"+numberOfQuestions+":    Question Here "}</span>{name}<span style={{float:"right"}}>{" Time Interval "+time+"s"}</span></Card.Header>
  <Card.Body>
    <Card.Title>
      {"Q"+(activeQuestion+1)+": "+data.question}
      </Card.Title>

      
      {
        data.choices.map((choice, i)=>(
          <label className="Block" key={i}>
          <input  ref={radiowraper} 
              type="radio"
              value={choice}
              name="answer"
              onChange={changeHandler}
            />{choice}
         </label>    
        ))
      }

     
       

  {error && <Card.Title style={{color:"Red"}}>{error}</Card.Title> }
  </Card.Body>
  <Card.Footer className="text-muted"><Button variant="primary" style={{width:"300px"}} onClick={nextClickHandler}>Next</Button></Card.Footer>
</Card>
      </Form>
 
    </div>
);
}

export default Question;