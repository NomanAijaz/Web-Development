import {Button, Row, Col, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useReducer } from 'react';
import Start from './components/start';
import Question from './components/question';


import EndComponent from './components/endComponent';
import './App.css'
import StartPage from './createQuiz/startPage';
import { BrowserRouter as Router,Switch,Route,Link,useLocation,useHistory,usePrams,useRouteMatch } from 'react-router-dom';

import NavbarOfWeb from './components/NavbarOfWeb';
import HomePage from './components/HomePage';
import Working from './components/working';
import About from './components/About';
import ContactUs from './components/ContactUs'
import SignUp from './components/SignUp'
import ShowResult from './components/showResult'
import Slideshow from './components/Slideshow';
import Footer from './components/Footer'
import SignIn from './components/SignIn'


let interval;
function App() {

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


  const quizStartHandler=(na)=>{
    
    setStep(2);
    setName(na);
    interval = setInterval(()=>{
      setTime(prevTime=>prevTime+1);
    },1000);
  }

  return (
    <>
    <Router>
      <switch>
        <Route path="/" exact><HomePage/></Route>
        <Route path="/About" exact><About/></Route>
        <Route path="/working" exact><Working/></Route>
        <Route path="/ContactUs" exact><ContactUs/></Route>
        <Route path="/SignUp" exact>
        <NavbarOfWeb/>          
          <SignUp/>
          <Footer />
          </Route>

          <Route path="/SignIn" exact>
          <NavbarOfWeb/>          
          <SignIn/><Footer /></Route>

        
      </switch>
    </Router>
  <div className="App">
    {/* {step === 1 &&  <Start 
    onStart={quizStartHandler}
     />
     } */}
    {/* {step === 2 && <Question  
    data={quizData.data[activeQuestion]}
    onAnswerUpdate = {setAnswer}
    numberOfQuestions = {quizData.data.length}
    activeQuestion = {activeQuestion}
    onSetActiveQuestion={setActiveQuestion}
    onSetStep = {setStep}
    time={time}
    name={name}
    />} */}

{/* {step === 3 && <EndComponent

results = {answer}
data = {quizData.data}
onReset = {resetClickHandler}
onAnswerCheck={()=>setShowModel(true)}
time={time}
name={name}
/>} */}

{/* {showModel && <ShowResult
  onClose={()=>{setShowModel(false)}}
  results ={answer}
  data ={quizData.data}

  />
} */}
    
  </div> </>);
}

export default App;
