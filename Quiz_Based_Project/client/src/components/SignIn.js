import React, { useState } from 'react';
import {Link,useHistory} from 'react-router-dom';

function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [serverResponse, setServerResponse] = useState('');
  
  let history = useHistory ();
  
  const loginHandler = (evt)=>{
    evt.preventDefault()
    var data=
    {
      email : email,
      password:password
    }
    fetch("http://localhost:3000/accountService/signIn",{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      ).then((respo)=>{return respo.json()}).then((data)=>{
        console.log(data)
        console.log(typeof data.responseCode)
        if(data.responseCode===1)
        {
            setServerResponse("Login Sccuess full")
            localStorage.setItem("is_logeIn",true)
            console.log(data)
            history.push("/Home")
        }
        else if(data.responseCode===0)
        {
            localStorage.setItem("is_logeIn",false)
            setServerResponse("Cant find user with these creadentials")
        }
       


    }
        )

  }

  return (
    <>
    
    <div classNameName=" text-center" >
    <div className="container"  id="wrap">
	  <div className="row">
        <div className="col-md-8 offset-2 mt-5  mb-5 bg-dark" style={{borderRadius:'10px'}}>
            <form className="form text-center shadow text-light"  style={{padding:'60px', margin:'20px'}}>
                   <legend><b>Sign In</b></legend>
                    
                    <input type="text" name="email" className="form-control input-lg mt-3" placeholder="Your Email" 
                    onChange={(e)=>{
                      setEmail(e.target.value);
                    }}
                    />
                    <input type="password" name="password" className="form-control input-lg mt-3" placeholder="Password"  
                    onChange={(e)=>{
                      setPassword(e.target.value);
                    }}
                    />
            
              <div className="row">
                        <div className="col-xs-3 col-md-3 mt-3 offset-1">
              </div>



                    </div>
                    <button className="btn btn-lg btn-primary btn-block signup-btn mt-3 mb-3" type="" onClick={loginHandler}>
                        Login</button>{serverResponse}
                        <Link className="nav-link " style={{marginLeft:"10px"}} to="/SignUp">Create new Account?</Link>

            </form>          
          </div>
</div>            
</div>
</div>

    </>
    );
  
}
export default SignIn;