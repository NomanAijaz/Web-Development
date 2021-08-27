import { LoginComponent } from './login';
import { AdminPanel } from './adminPanel';
import { Employee } from './Employees';
import { Home } from './Home';
import { useState } from 'react';
import { EditDataModal } from './editDataModal';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';

function App() {

  const [data, setData] = useState([]);
  const [step, setStep] = useState(0);

 const changeStep=(d)=>{
  console.log("When clicked on update");
  console.log(d);

  setData(d);
  setStep(1);
  
 }

  return (
  <div>
  <Router>
    <Switch>
      <Route path='/' exact><Home /></Route>
      <Route path="/login" exact><LoginComponent /></Route>
      <Route path="/adminPanel" exact><AdminPanel s={changeStep}/></Route>
      <Route path="/Employees" exact><Employee /></Route>
      <Route path="/EditDataModal" exact><EditDataModal d={data}/></Route>
    </Switch>
  </Router>
  </div>
  
  );
}

export default App;
