import {React, useState} from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router'; 

export function Employee(){
    const [date, setDate] = useState(''); 
    const [Preparer, setPreparer] = useState(''); 
    const [Hours, setHours] = useState(''); 
    const [OT, setOT] = useState(''); 
    const [Vacation, setVacation] = useState(''); 
    const [New, setNew] = useState(''); 
    const [Returning, setReturning] = useState(''); 
    const [Commission, setCommission] = useState(''); 
    const [CommQty, setCommQty] = useState(''); 
    
    let history = new useHistory();  

    

    const sendData = (evt)=>{
        evt.preventDefault();
                 
        const dataObj={
            date:date,
            Preparer: Preparer,
            Hours:Hours,
            OT:OT,
            Vacation:Vacation,
            New:New,
            Returning:Returning,
            Commission:Commission,
            CommQty: CommQty
        }
        console.log("Data insert");
        console.log(dataObj);
        Axios.post("http://localhost:3002/api/employees", dataObj).then((res)=>{
        console.log("Data insert");
        console.log(res);
            if(res){
                alert("You Data has been Inserted!");
                history.push("/");
            }    
  
        })
    }

    return(
        // 
        <div className='card col-lg-10 offset-lg-1 mt-5 border-warning py-5 shadow bg-secondary' style={{color:'white'}}>
            <h2 className='card-title' style={{textAlign:'center', color:'white'}}>Please Insert your Data</h2>
            <div className='card-body'>
                <div className='row mt-5 '>
                        <label className="col-lg-1 ">Date: </label>
                        <div className='col-lg-2 '>
                            <input className='form-control' type='text' placeholder="yyyy-mm-dd" onChange={(e)=>{
                                setDate(e.target.value);
                            }} /> <br /> <br />
                        </div>
                    
                        <label className="col-lg-2">Preparer: </label>
                        <div className='col-lg-2 '>
                            <input className='form-control' type='text' style={{lineHeight:'2px'}} onChange={(e)=>{
                                setPreparer(e.target.value);
                            }}/> <br /> <br />
                        </div>

                        <label className="col-lg-2">Hours: </label>
                        <div className='col-lg-2 '>
                            <input className='form-control' type='number' style={{lineHeight:'2px'}} onChange={(e)=>{
                                setHours(e.target.value);
                            }}/> <br /> <br />
                        </div>
                    
                </div>
                <div className='row '>
                    
                        <label className="col-lg-1">OT: </label>
                        <div className='col-lg-2 '>
                            <input className='form-control' type='number' style={{lineHeight:'2px'}} onChange={(e)=>{
                                setOT(e.target.value);
                            }}/> <br /> <br />
                        </div>
                    
                        <label className="col-lg-2">Vacation: </label>
                        <div className='col-lg-2 '>
                            <input className='form-control' type='number' style={{lineHeight:'2px'}} onChange={(e)=>{
                                setVacation(e.target.value);
                            }}/> <br /> <br />
                        </div>

                        <label className="col-lg-2">New: </label>
                        <div className='col-lg-2 '>
                            <input className='form-control' type='number' style={{lineHeight:'2px'}} onChange={(e)=>{
                                setNew(e.target.value);
                            }}/> <br /> <br />
                        </div>
                    
                </div>
                <div className='row '>
                    
                        <label className="col-lg-1">Returning:</label>
                        <div className='col-lg-2 '>
                            <input className='form-control' type='number' style={{lineHeight:'2px'}} onChange={(e)=>{
                                setReturning(e.target.value);
                            }}/> <br /> <br />
                        </div>
                        <label className="col-lg-2"> Commission$: </label>
                        <div className='col-lg-2 '>
                            <input className='form-control' type='number' style={{lineHeight:'2px'}} onChange={(e)=>{
                                setCommission(e.target.value);
                            }}/> <br /> <br />
                        </div>

                        <label className="col-lg-2" >CommQty: </label>
                        <div className='col-lg-2 '>
                            <input className='form-control' type='number' style={{lineHeight:'2px'}} onChange={(e)=>{
                                setCommQty(e.target.value);
                            }}/> <br /> <br />
                        </div>
                </div>
                <div style={{textAlign:'center'}}>
                <button className='btn btn-primary w-25 border-warning' onClick={sendData}>Submit</button></div>
            </div>
        </div>
    )
}