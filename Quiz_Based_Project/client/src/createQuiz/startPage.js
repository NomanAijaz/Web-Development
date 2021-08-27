import  React, {useState, useEffect, useRef} from 'react';
import {Button, Row, Col, Form, Card, ListGroup, Modal} from 'react-bootstrap';
import '../App.css'

let count=0;
let count2=0;

var array=[];
const StartPage=()=>{
 
    const [addOption, setAddOption] =useState({option:[]});
    const [questionInput, setQuestionInput] =useState('');
    const [answerInput, setAnswerInput] =useState('');

    const [serverResponse, setServerResponse] = useState('');

    const [question, setQuestion] =useState({data:[]});

    const handleChange =(e, index)=>{
        addOption.option[index] = e.target.value
        setAddOption({option: addOption.option});
    } 

    const  handleRemove = (i)=>{
        addOption.option.splice(i,1);
        setAddOption({option: addOption.option});
    }

    const handleNext=(e)=>{
       
      let opt="";
      (addOption.option).forEach(element => {
           opt+=element+","
         });
         
       opt= opt.substring(0,opt.length-1);

        question.data.push({
            question:questionInput,
            choices: opt,
            answer: answerInput
        });

        alert(question.data)
        count2+=1;
        
        setQuestion({data:question.data});

        setAddOption({option:[]});
        setQuestionInput('');
        setAnswerInput('');


    }

    const handleOnSubmit = (e)=>{
        let jsonData = JSON.stringify(question);
        
        fetch("http://localhost:3000/quizService/uploadQuiz",{
          method: 'POST',
          headers: {
          'Content-Type': 'application/json'
          },
          body: jsonData
        }
        ).then((respo)=>{return respo.json()}).then((data)=>{
          console.log(data)
          console.log(typeof data.responseCode)
          if(data.responseCode===1)
          {
              setServerResponse("Login Sccuess full")
              localStorage.setItem("is_logeIn",true)
              console.log(data)
          }
          else if(data.responseCode===0)
          {
              localStorage.setItem("is_logeIn",false)
              setServerResponse("Cant find user with these creadentials")
          }
         
  
  
      }
          )
  


        alert(jsonData);      
}

    return(
    <div className="App">
     
     <div className="block-example border border-success" style={{borderRadius:"10px", padding:"10px"}}>
     <Form className="block-example border border-primary" style={{width:"800px",borderRadius:"10px", padding:"50px"}}>
            <h1 style={{textAlign:"center"}}>Create Quiz</h1><br/>
  <Form.Group controlId="questionTxt">
    <Form.Label>Enter Question</Form.Label>
    <Form.Control type="text" placeholder="Enter Question" value={questionInput} onChange={(e)=>{
        setQuestionInput(e.target.value);
    }}/>
  </Form.Group>

  {
      addOption.option.map((data,index)=>{
          return(
            <Form.Group controlId={"optionTxt"+index} key={index}>
            <Form.Label>Option: {index+1}</Form.Label>
            <Form.Control type="text" value={data} placeholder="Option" onChange={(e)=>{
               handleChange(e,index);                
            }} />
            <Button variant="primary" style={{float:"right",marginTop:"10px",marginBottom:"10px" }} type="" onClick={()=>{
                handleRemove(index);
            }}>Remove</Button>
        
          </Form.Group>
          );
      })
  }

  <Button variant="primary" style={{width:"150px", marginBottom:"10px",marginTop:"10px"}} type="" onClick={()=>{
      count+=1;
      setAddOption({option:[...addOption.option,""]});
  }}>
    Add Option
  </Button>
  <br/><br/>
  <Form.Group controlId="answerTxt">
    <Form.Label>Enter Answer</Form.Label>
    <Form.Control type="text" placeholder="Enter Answer" value={answerInput} onChange={(e)=>{
       setAnswerInput(e.target.value);
    }} />
  </Form.Group>
  <br/>
  <div  style={{textAlign:'center'}}>
  <Button variant="primary" style={{width:"500px"}} type="" onClick={(e)=>{
      handleNext(e);
  }}>
Next  </Button>
  </div>
<br/>
  <div style={{textAlign:'center'}}>
  <Button variant="primary" style={{width:"500px"}} type="submit" onClick={(e)=>{
      handleOnSubmit(e);
  }}>
    Submit
  </Button>

  </div>
</Form>
     </div>

    </div>);
}

export default StartPage;