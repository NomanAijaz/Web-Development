import React from 'react';
import { Link } from 'react-router-dom';
import './working.css';

export default function Working() {

    return (
        <>
        <h3><b>How does studyHub works?</b></h3>
            <div className="row mt-5 mb-5">
                <div className="col col-md-10 mt-3 offset-1">
                    <div className="row">
                    <div className="col col-md-4 mt-5">
                            <div>
                                <div className="card shadow" >
                                   
                                    <img src="https://images.unsplash.com/photo-1599249300675-c39f1dd2d6be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="card-img-top" alt="..." />
                                    <h5 className="card-title text-dark text-center mt-2 mb-2" >Create</h5>
                                    <div className="card-body">

                                        <p className="card-text"> It only takes minutes to create a learning game or trivia quiz on any topic, in any language. </p>
                                       
                                    </div>

                                </div>
                            </div>
                          
                   
                    </div>

                    <div className="col col-md-4">
                            <div>
                                <div className="card shadow" >
                                    
                                    <img src="https://images.unsplash.com/photo-1618404526182-d4c3c2af8048?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" className="card-img-top" alt="..." />
                                    <h5 className="card-title text-dark text-center mt-2 mb-2" >attempt</h5>
                                    <div className="card-body">

                                        <p className="card-text"> student can attempt quiz easy in our user freindly interface</p>
                                    </div>

                                </div>
                            </div>
                          
                   
                    </div>

                    <div className="col col-md-4 mt-5">
                            <div>
                                <div className="card shadow" >
                                  
                                    <img src="https://images.unsplash.com/photo-1548048026-5a1a941d93d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGlicmFyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                                    <h5 className="card-title text-dark text-center mt-2 mb-2" >Enhance Knowledge</h5>
                                    <div className="card-body">

                                        <p className="card-text"> It enhance knowledge of student and teacher. moreover, it makes online learning easy regardless of domain.</p>
                                    </div>

                                </div>
                            </div>
                          
                   
                    </div>


                        

                    </div>
                </div>
                
            </div>
        </>
    );
}