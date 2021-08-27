import {React, useState, useEffect } from 'react';
import Axios from 'axios';

import { useHistory } from 'react-router';
import {Modal, Button} from 'react-bootstrap';
import { EditDataModal } from './editDataModal';

import * as FileSaver from 'file-saver';

import * as XLSX from 'xlsx';
import { format } from 'date-fns';


export function AdminPanel({s}){
    
      

    const [employeeData, setEmployeeData] = useState([0]);
    const [data, setData] = useState({d:[]});
    
    
    const [modalShow, setModalShow] = useState({
        state:false,
        dataRef:0
    });

//    const [dataRef, setDataRef] = useState();

    let history = new useHistory();

    useEffect(()=>{
        
        Axios.get("http://localhost:3002/api/adminPanel").then((res)=>{
        if(res.data.results){
            //  newObj = (res.data.results).map(function (obj) {
            //     var d = new Date(obj.Pay_period);
            //     obj.Pay_period=d.toLocaleDateString();
            //     return obj;
            // });
            
           // setData({d: });
            setEmployeeData((res.data.results).map(function (obj) {
                var d = new Date(obj.Pay_period);
                var d2=d.toLocaleDateString();
                obj.Pay_period = format(new Date(d2),"yyyy-MM-dd")
                return obj;
            }));  
            
            console.log("selection");
            console.log(employeeData);
            
        }else{
            alert("No Data Found!");
        }

    })
    },[])

    const getExcelFile = ()=>{
        
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

        const fileExtension = '.xlsx';
        const fileName = "employees_data";
        const csvData = employeeData;
        
            const ws = XLSX.utils.json_to_sheet(csvData);
    
            const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    
            const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    
            const data = new Blob([excelBuffer], {type: fileType});
    
            FileSaver.saveAs(data, fileName + fileExtension);
    
    };


  return(<div className='container'>
      <div style={{textAlign:'center'}}>
      <span className="ms-3" style={{fontSize:'50px'}}>Employees Record {}</span><br/>
      <button type="button" className="btn btn-primary border-warning w-25" onClick={()=>{
            history.push('/');
        }}>Home</button>
        <button type="button" className="btn btn-primary border-warning ms-3 w-25"  onClick={getExcelFile}>Export</button>
      </div>
        <br/>
   <div className='card border-warning shadow'>
      <div className='card-body'>
          <table className="table table-striped table-hover fs-5">
          <thead>
              <tr className='table-heading'>
                  <th>Pay Period</th>
                  <th>Preparer</th>
                  <th>Hours</th>
                  <th>OT</th>
                  <th>Vacation</th>
                  <th>New</th>
                  <th>Returning</th>
                  <th>Commission</th>
                  <th>Comm.Qty</th>
                  <th>Option</th>
              </tr>
              </thead>
              <tbody>
              {
                  employeeData.map(function(f,i){
                    return(
                <tr className='table-row' key={i}>
                  <td>{f.Pay_period}</td>
                  <td>{f.Preparer}</td>
                  <td>{f.Hours}</td>
                  <td>{f.OT}</td>
                  <td>{f.Vacation}</td>
                  <td>{f.New}</td>
                  <td>{f.rt}</td>
                  <td>{f.Commissions}</td>
                  <td>{f.CommQty}</td>
                  <td>
                  
                    <div  role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" onClick={()=>{
                        // setModalShow({
                        //     state:true,
                        //     dataRef:i
                        // });
                        //setDataRef(i);
                         s(employeeData[i]);
                         history.push("/EditDataModal");
//                        d();
                        
                        }}>Edit</button>
                        
                    </div>

                  </td>
              </tr>
                      );
                  })
              } 
              </tbody>                          
          </table>
      </div>
  </div>
       {/* <EditDataModal
             show={modalShow.state}
             index ={employeeData[modalShow.dataRef]}
             onHide={() => setModalShow(false)
            }
        /> */}
        
   
</div>);
}