import {Button, Row, Col, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useReducer } from 'react';

import Footer from './Footer'
import NavbarOfWeb from './NavbarOfWeb';
import StartPage from '../createQuiz/startPage';
import { BrowserRouter as Router,Switch,Route,Link,useLocation,useHistory,usePrams,useRouteMatch } from 'react-router-dom';

import EndComponent from './endComponent';

import HomePage from './HomePage';
import Working from './working';
import About from './About';
import ContactUs from './ContactUs'
import SignUp from './SignUp'
import SignIn from './SignIn'
import App1 from '../App1'

import Start from './start';
import Question from './question';

import ShowResult from './showResult'


let interval;
function Splash() {

  const [step, setStep] =useState(1);
  const [activeQuestion, setActiveQuestion] =useState(0);
  const [answer, setAnswer] =useState([]);
  const [time, setTime] =useState(0);
  const [name, setName] =useState('');
  const [quizData,setQuizData] = useState({})
  const [showModel, setShowModel] =useState(false);

 
  useEffect(()=>{
    fetch("http://localhost:3000/quizService/retrieveQuiz").then((res)=>{
      return res.json()
    }).then((data)=>{
      let tempArray={data:[]}

     data.responseMessage.forEach(element => {
       console.log(element)
       let options = element.options.split(",")
      console.log(options)
       tempArray.data.push({
            question:element.question,
            choices: options,
            answer: element.answer
       })
     });

     console.log(tempArray)
     setQuizData(tempArray)
    })
  },[])
  

  const quizStartHandler=(na)=>{
    
    setStep(2);
    setName(na);
    interval = setInterval(()=>{
      setTime(prevTime=>prevTime+1);
    },1000);
  }

  useEffect(()=>{
    if(step===3){
      clearInterval(interval);
    }
  },[step])

  const resetClickHandler = ()=>{
    setActiveQuestion(0);
    setAnswer([]);
    setTime(0);
    setStep(2);
    interval = setInterval(()=>{
      setTime(prevTime =>prevTime+1)
    },1000)
  }

  return (
    <>
    <Router>
      <switch>
        <Route path="/Home" exact><HomePage/></Route>
        <Route path="/About" exact><About/></Route>
        <Route path="/working" exact><Working/></Route>
        <Route path="/ContactUs" exact><ContactUs/></Route>
        <Route path="/Home" exact><App1/></Route>
        
        <Route path="/SignUp" exact>

          <SignUp/>
        </Route>
        <Route path="/startPage" exact>
          <NavbarOfWeb/>
          <div style={{margin:'80px'}}><StartPage />
           </div>   
           <div style={{marginBottom:'80px'}}><Footer/>
           </div>
          </Route>

        <Route path="/" exact>
        <SignIn/>
          </Route>

          <Route path="/Start" exact>
        <NavbarOfWeb/>
        <div style={{margin:'80px'}}>{step === 1 &&  <Start 
         onStart={quizStartHandler}/>}
         {step === 2 && <Question  
    data={quizData.data[activeQuestion]}
    onAnswerUpdate = {setAnswer}
    numberOfQuestions = {quizData.data.length}
    activeQuestion = {activeQuestion}
    onSetActiveQuestion={setActiveQuestion}
    onSetStep = {setStep}
    time={time}
    name={name}
    />}
    {step === 3 && <EndComponent
results = {answer}
data = {quizData.data}
onReset = {resetClickHandler}
onAnswerCheck={()=>setShowModel(true)}
time={time}
name={name}
/>}
{showModel && <ShowResult
  onClose={()=>{setShowModel(false)}}
  results ={answer}
  data ={quizData.data}

  />
}
         </div>
         <Footer />
         </Route>

         

      </switch>
    </Router> </>);
}

export default Splash;
