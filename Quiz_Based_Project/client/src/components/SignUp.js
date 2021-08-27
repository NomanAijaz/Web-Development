import  {React, useState} from 'react';
import {Link,useHistory} from 'react-router-dom';


function SignUp() {

    const [firstName, setFirstName] = useState('');
    const [lastNme, setLastName] = useState('');
    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [serverResponse, setServerResponse] = useState('');
    let history = useHistory ();
    
const createAccountHandler =(evt)=>{
  
    evt.preventDefault()
    var data=
    {
        firstName:firstName,
        lastName:lastNme,
        email : email,
        password:password,
        gender:gender
    }
    fetch("http://localhost:3000/accountService/signUp",{
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
            setServerResponse("Account created")
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

    console.log(gender);
}

  return (
    <>
    
    <div classNameName=" text-center" >
    <div className="container"  id="wrap">
	  <div className="row">
        <div className="col-md-6 offset-3 mt-5 bg-dark mb-5" style={{borderRadius:'10px'}} >
            <form className="form text-center text-light shadow "  style={{padding:'40px'}}>
                   <legend><b>Sign Up</b></legend>
                    
                    <div className="row">
                        <div className="col-xs-5 col-md-5 mt-3 offset-1">
                            <input type="text" name="firstname"  className="form-control input-lg offset-1" placeholder="First Name" onChange={(e)=>{
                                setFirstName(e.target.value);
                            }} />                        </div>
                        <div className="col-xs-5 col-md-5 mt-3">
                            <input type="text" name="lastname"  className="form-control input-lg" placeholder="Last Name" onChange={(e)=>{
                                setLastName(e.target.value);
                            }} />                        </div>
                    </div>
                    <input type="text" name="email" className="form-control input-lg mt-3" placeholder="Your Email" 
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                    />
                    <input type="password" name="password"  className="form-control input-lg mt-3" placeholder="Password" 
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    />
                    {/* <input type="password" name="confirm_password" value="" className="form-control input-lg mt-3 mb-3" placeholder="Confirm Password"  />          */}
                               <label>Birth Date</label>
                    <div className="row">
                        <div className="col-xs-3 col-md-3 mt-3 offset-1">
                            <select name="month" className = "form-control input-lg">
<option value="01">Jan</option>
<option value="02">Feb</option>
<option value="03">Mar</option>
<option value="04">Apr</option>
<option value="05">May</option>
<option value="06">Jun</option>
<option value="07">Jul</option>
<option value="08">Aug</option>
<option value="09">Sep</option>
<option value="10">Oct</option>
<option value="11">Nov</option>
<option value="12">Dec</option>
</select>                        </div>
                        <div className="col-xs-3 col-md-3 mt-3">
                            <select name="day" className = "form-control input-lg">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
<option value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
<option value="31">31</option>
</select>                        </div>
                        <div className="col-xs-4 col-md-4 mt-3">
                            <select name="year" className = "form-control input-lg">
<option value="1935">1935</option>
<option value="1936">1936</option>
<option value="1937">1937</option>
<option value="1938">1938</option>
<option value="1939">1939</option>
<option value="1940">1940</option>
<option value="1941">1941</option>
<option value="1942">1942</option>
<option value="1943">1943</option>
<option value="1944">1944</option>
<option value="1945">1945</option>
<option value="1946">1946</option>
<option value="1947">1947</option>
<option value="1948">1948</option>
<option value="1949">1949</option>
<option value="1950">1950</option>
<option value="1951">1951</option>
<option value="1952">1952</option>
<option value="1953">1953</option>
<option value="1954">1954</option>
<option value="1955">1955</option>
<option value="1956">1956</option>
<option value="1957">1957</option>
<option value="1958">1958</option>
<option value="1959">1959</option>
<option value="1960">1960</option>
<option value="1961">1961</option>
<option value="1962">1962</option>
<option value="1963">1963</option>
<option value="1964">1964</option>
<option value="1965">1965</option>
<option value="1966">1966</option>
<option value="1967">1967</option>
<option value="1968">1968</option>
<option value="1969">1969</option>
<option value="1970">1970</option>
<option value="1971">1971</option>
<option value="1972">1972</option>
<option value="1973">1973</option>
<option value="1974">1974</option>
<option value="1975">1975</option>
<option value="1976">1976</option>
<option value="1977">1977</option>
<option value="1978">1978</option>
<option value="1979">1979</option>
<option value="1980">1980</option>
<option value="1981">1981</option>
<option value="1982">1982</option>
<option value="1983">1983</option>
<option value="1984">1984</option>
<option value="1985">1985</option>
<option value="1986">1986</option>
<option value="1987">1987</option>
<option value="1988">1988</option>
<option value="1989">1989</option>
<option value="1990">1990</option>
<option value="1991">1991</option>
<option value="1992">1992</option>
<option value="1993">1993</option>
<option value="1994">1994</option>
<option value="1995">1995</option>
<option value="1996">1996</option>
<option value="1997">1997</option>
<option value="1998">1998</option>
<option value="1999">1999</option>
<option value="2000">2000</option>
<option value="2001">2001</option>
<option value="2002">2002</option>
<option value="2003">2003</option>
<option value="2004">2004</option>
<option value="2005">2005</option>
<option value="2006">2006</option>
<option value="2007">2007</option>
<option value="2008">2008</option>
<option value="2009">2009</option>
<option value="2010">2010</option>
<option value="2011">2011</option>
<option value="2012">2012</option>
<option value="2013">2013</option>
</select>                        </div>
                    </div>
                    <div className="mt-3">
                    <label >Gender   </label>  <br/>            
                          <label className="radio-inline">
                        <input type="radio" name="gender" value="Male" id="male" onChange={(e)=>{
                                setGender(e.target.value);
                            }} />                        Male   
                    </label>
                    <label className="radio-inline ml-5">
                        <input type="radio" name="gender" value="Female" id="female" 
                        onChange={(e)=>{
                            setGender(e.target.value);
                        }} />                        Female
                    </label>
                    <br />
                    </div>
                   
              <span className="help-block mt-3">By clicking Create my account, you agree to our Terms and that you have read our Data Use Policy, including our Cookie Use.</span>
                    <button className="btn btn-lg btn-primary btn-block signup-btn mt-3 mb-3" type="" onClick={createAccountHandler}>
                        Create my account</button>{serverResponse}
            </form>          
          </div>
</div>            
</div>
</div>

    </>
    );
  
}
export default SignUp;