import {Modal, Button} from 'react-bootstrap';
import {React, useState } from 'react';
import { useHistory } from 'react-router';
import Axios from 'axios';
import { format } from 'date-fns';

export function EditDataModal(props) {
    
    // const [date, setDate] = useState(''); 
    // const [Preparer, setPreparer] = useState(''); 
    // const [Hours, setHours] = useState(''); 
    // const [OT, setOT] = useState(''); 
    // const [Vacation, setVacation] = useState(''); 
    // const [New, setNew] = useState(''); 
    // const [Returning, setReturning] = useState(''); 
    // const [Commission, setCommission] = useState(''); 
    // const [CommQty, setCommQty] = useState(''); 

    
    let history = new useHistory();

    const [Id, setId] = useState(props.d.Id); 
    const [date, setDate] = useState(props.d.Pay_period); 
    const [Preparer, setPreparer] = useState(props.d.Preparer); 
    const [Hours, setHours] = useState(props.d.Hours); 
    const [OT, setOT] = useState(props.d.OT); 
    const [Vacation, setVacation] = useState(props.d.Vacation); 
    const [New, setNew] = useState(props.d.New); 
    const [Returning, setReturning] = useState(props.d.rt); 
    const [Commission, setCommission] = useState(props.d.Commissions); 
    const [CommQty, setCommQty] = useState(props.d.CommQty); 


    const sendData = (evt)=>{
        evt.preventDefault();
                 
        const dataObj={
            Id:Id,
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
        console.log("Updated");
        console.log(dataObj);
        Axios.put("http://localhost:3002/api/EditDataModal", dataObj).then((res)=>{
        console.log("res:");    
        console.log(res);
        
            if(res){
                alert("You Data has been Updated!");
                history.push("/adminPanel");
            }    
  
        })
    }

    return (
      <Modal
       show={true}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='card col-lg-10 offset-lg-1 mt-5 border-warning py-5 shadow bg-secondary' style={{color:'white'}}>
            <h2 className='card-title' style={{textAlign:'center', color:'white'}}>Please Insert your Data </h2>
            <div className='card-body'>
                <div className='row mt-5 '>
                        <label className="col-lg-1 ">Date: </label>
                        <div className='col-lg-2 '>
                      
                        {/* value={format(new Date(date), 'yyyy-MM-dd')} */}
                        
                            <input className='form-control' type='text' value={date} placeholder="yyyy-mm-dd"  onChange={(e)=>{
                                setDate(e.target.value);
                            }} /> <br /> <br />
                        </div>
                    
                        <label className="col-lg-2">Preparer: </label>
                        <div className='col-lg-2 '>
                            <input className='form-control' type='text' value={Preparer} style={{lineHeight:'2px'}} onChange={(e)=>{
                                setPreparer(e.target.value);
                            }}/> <br /> <br />
                        </div>
                            
                        <label className="col-lg-2">Hours: </label>
                        <div className='col-lg-2 '>
                            <input className='form-control' type='number' value={Hours} style={{lineHeight:'2px'}} onChange={(e)=>{
                                setHours(e.target.value);
                            }}/> <br /> <br />
                        </div>
                    
                </div>
                <div className='row '>
                    
                        <label className="col-lg-1">OT: </label>
                        <div className='col-lg-2 '>
                            <input className='form-control' type='number' value={OT} style={{lineHeight:'2px'}} onChange={(e)=>{
                                setOT(e.target.value);
                            }}/> <br /> <br />
                        </div>
                    
                        <label className="col-lg-2">Vacation: </label>
                        <div className='col-lg-2 '>
                            <input className='form-control' type='number' value={Vacation} style={{lineHeight:'2px'}} onChange={(e)=>{
                                setVacation(e.target.value);
                            }}/> <br /> <br />
                        </div>

                        <label className="col-lg-2">New: </label>
                        <div className='col-lg-2 '>
                            <input className='form-control' type='number' value={New} style={{lineHeight:'2px'}} onChange={(e)=>{
                                setNew(e.target.value);
                            }}/> <br /> <br />
                        </div>
                    
                </div>
                <div className='row '>
                    
                        <label className="col-lg-1">Returning:</label>
                        <div className='col-lg-2 '>
                            <input className='form-control' type='number' value={Returning} style={{lineHeight:'2px'}} onChange={(e)=>{
                                setReturning(e.target.value);
                            }}/> <br /> <br />
                        </div>
                        <label className="col-lg-2"> Commission$: </label>
                        <div className='col-lg-2 '>
                            <input className='form-control' type='number' value={Commission} style={{lineHeight:'2px'}} onChange={(e)=>{
                                setCommission(e.target.value);
                            }}/> <br /> <br />
                        </div>

                        <label className="col-lg-2" >CommQty: </label> 
                        <div className='col-lg-2 '>
                            <input className='form-control' type='number' value={CommQty} style={{lineHeight:'2px'}} onChange={(e)=>{
                                setCommQty(e.target.value);
                            }}/> <br /> <br />
                        </div>
                </div>
            </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={(e)=>{
              sendData(e)

          }}>Update</Button>
        </Modal.Footer>
      </Modal>
    );
  }
