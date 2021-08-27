import React from 'react';
import {Link} from 'react-router-dom';
import './Role.css'

export default function Role() {

  return (
    <>

    <div className="row mt-5 mb-5">
    <div className="col col-md-4 offset-2">
        <div>
        <div className="card shadow" style={{borderRadius:'10px'}}>
        <h5 className="card-title text-dark text-center mt-2 mb-2" >Enter As teacher</h5>
        <img src="https://images.unsplash.com/photo-1580894732930-0babd100d356?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="card-img-top" alt="..."/>
        <div className="card-body">
        
        <p className="card-text">‘I never teach my pupils; I only attempt to provide the conditions in which they can learn.’<br/> –Albert Einstein </p>
        <div className="text-center">
        <Link to="/startPage" className="btn btn-primary"  style={{width:'300px'}}>Enter</Link>
      </div>
      <div/></div>
    </div>
    </div>
    </div>  
    <div className="col col-md-4 ">
        <div>
        <div className="card shadow" style={{borderRadius:'10px'}}>
        <h5 className="card-title text-dark text-center mt-2 mb-2">Enter As Student</h5>
        <img src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=748&q=80" className="card-img-top" alt="..."/>
        <div className="card-body">
        
        <p className="card-text">“Don't let what you cannot do interfere with what you can do.”<br/><br/> – John Wooden.
</p>
<div className="text-center">
        <Link to="/Start" className="btn btn-primary cardbtn text-center" style={{width:'300px'}}>Enter</Link>
        </div>
      </div>
      
    </div>
    </div>
    </div>
    
    </div>
    </>
    )}