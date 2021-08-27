import  React, {useState, useEffect, useRef} from 'react';
import {Button, Row, Col, Form, Card, ListGroup, Modal} from 'react-bootstrap';


const ShowResult=({onClose, results, data})=> {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Result</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <ListGroup>
        {    
            results.map((result, i)=>{ 
               
               return <ListGroup.Item key={i}> 
                <p> <strong>{result.q}</strong></p>
                <p varient={result.a === data[i].answer ? "success"  : "danger"}>Your answer: {result.a}</p>
                {result.a !== data[i].answer && <p variant="danger"> correct answer: {data[i].answer}</p>}
                </ListGroup.Item>
            })
        
        }
        
                </ListGroup>
          </Modal.Body>
          
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>
      </>
    );
  }


// const ShowResult=({onClose, results, data})=>{



//     return (
//         <div>


{/* <Modal.Dialog style={{width:"500px"}}>
  <Modal.Header closeButton>
    <Modal.Title>Your Answers</Modal.Title>
  </Modal.Header>

  <Modal.Body> */}

  {/* <ListGroup>
        {    
            results.map((result, i)=>{ 
               
               return <ListGroup.Item key={i}> 
                <p> <strong>{result.q}</strong></p>
                <p varient={result.a === data[i].answer ? "success"  : "danger"}>Your answer: {result.a}</p>
                {result.a !== data[i].answer && <p variant="danger"> current answer: {data[i].answer}</p>}
                </ListGroup.Item>
            })
        
        }
        
                </ListGroup> */}
                               
  {/* </Modal.Body>

  <Modal.Footer>
  </Modal.Footer>
</Modal.Dialog> */}


            {/*
            <Card>
                <Card.Header>Your Answers <button style={{float:'right'}} onClick={onClose}></button></Card.Header>
   
                    <Card.Body>

                    <ListGroup variant="flush">
                                
                    {
                        results.map((result, i)=>{
                            <ListGroup.Item key={i}> 
                            
                            <p> <strong>{result.q}</strong></p>
                            <p varient={result.a === data[i].answer ? "success"  : "danger"}>Your answer: {result.a}</p>
                            
                            {result.a !== data[i].answer && <p variant="danger"> current answer: {data[i].answer}</p>}

                             </ListGroup.Item>
                        })
                    }
                    
                    </ListGroup>
                    </Card.Body>
   
            </Card>

            */}
//         </div>
//     );
// }

export default ShowResult;