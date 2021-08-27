const express = require('express');
const app =express();
const mysql = require('mysql');
const cors = require('cors');

//const { query } = require('express');


app.use(express.json());
app.use(cors());

const conString = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'e-management'
}
const db = mysql.createConnection(conString);


app.post('/api/login',(req, res)=>{    
    db.query("SELECT * FROM admin WHERE email=? AND password =?",
    [req.body.email, req.body.password],
    (err, results)=>{
       if(err){
           res.send({err:err});
       }else{
           if(results.length>0){
               res.send({results: results,message:1});  
               console.log(results);              
           }else{
                res.send({message:0});
           }
       }
    });
});

app.put('/api/EditDataModal',(req, res)=>{   
    
    const dataObj={
        Id:req.body.Id,
        date:req.body.date,
        Preparer: req.body.Preparer,
        Hours:req.body.Hours,
        OT:req.body.OT,
        Vacation:req.body.Vacation,
        New:req.body.New,
        Returning:req.body.Returning,
        Commission:req.body.Commission,
        CommQty: req.body.CommQty
    }

    
    // const query = `UPDATE employees
    // SET Pay_period=${dataObj.date},Preparer=${dataObj.Preparer},Hours=${dataObj.Hours},OT=${dataObj.OT},Vacation=${dataObj.Vacation},New=${dataObj.New},Returning=${dataObj.Returning},Commissions=${dataObj.Commission},CommQty=${dataObj.CommQty}
    // WHERE Preparer = ${dataObj.Preparer} `;
   
    
    //const querySt = "UPDATE employees SET  Pay_period=?, Preparer=?, Hours=?, OT=?, Vacation=?, New=?, Returning=?, Commissions=?, CommQty = ? WHERE Preparer = ?"
    //const array = [dataObj.date, dataObj.Preparer, dataObj.Hours, dataObj.OT, dataObj.Vacation, dataObj.New, dataObj.Returning, dataObj.Commission,dataObj.CommQty , dataObj.Preparer]
    
    console.log("I came here");
    
    // `UPDATE employees SET  Pay_period=?, Preparer=?, Hours=?, OT=?, Vacation=?, New=?, Returning=?, Commissions=?, CommQty = ? WHERE Preparer = ?`,
    // [req.body.date, req.body.Preparer, req.body.Hours, req.body.OT, req.body.Vacation,req.body.New, req.body.Returning, req.body.Commission,req.body.CommQty , req.body.Preparer],
   // `UPDATE employees SET  Pay_period='${dataObj.date}', Preparer='${dataObj.Preparer}', Hours='${dataObj.Hours}', OT='${dataObj.OT}', Vacation='${dataObj.Vacation}', New='${dataObj.New}', Returning='${dataObj.Returning}', Commissions='${dataObj.Commission}', CommQty ='${dataObj.CommQty}' WHERE Preparer ='${dataObj.Preparer}'`
   console.log("Results in up");
   console.log(dataObj);

   db.query(`UPDATE employees SET Pay_period = '${dataObj.date}',  Preparer = '${dataObj.Preparer}', Hours='${dataObj.Hours}', OT='${dataObj.OT}', Vacation='${dataObj.Vacation}', New='${dataObj.New}', rt='${dataObj.Returning}',Commissions='${dataObj.Commission}', CommQty ='${dataObj.CommQty}' WHERE Id = '${dataObj.Id}'`,
    (err, results)=>{
        console.log("Results in Update");
        console.log({results:results});
       if(err){
           res.send({err:err});
       }else{
           if(results.length>0){
               res.send({results: results});  
               console.log(results);              
           }else{
                res.send({message:0});
           }
       }
    });
});


app.post('/api/employees',(req, res)=>{    
    
    const dataObj={
        date:req.body.date,
        Preparer: req.body.Preparer,
        Hours:req.body.Hours,
        OT:req.body.OT,
        Vacation:req.body.Vacation,
        New:req.body.New,
        Returning:req.body.Returning,
        Commission:req.body.Commission,
        CommQty: req.body.CommQty
    }

    // db.query(`CREATE TABLE IF NOT EXISTS employees (
    //     Pay_period date,
    //     Preparer varchar(255),
    //     Hours varchar(255),
    //     OT varchar(255),
    //     Vacation varchar(255),
    //     New varchar(255),
    //     Returning varchar(255),
    //     Commissions varchar(255),
    //     CommQty varchar(255)
    // )`,(err,result)=>{
    //     if(err) throw err
    //     else{}  
    // })

    //Pay_period, Preparer, Hours, OT, Vacation, New, Returning, Commissions, CommQty

        console.log("Results in insert");
        console.log(dataObj);
  
    db.query(`INSERT INTO employees (Pay_period, Preparer, Hours, OT, Vacation, New, rt, Commissions, CommQty) VALUES(?,?,?,?,?,?,?,?,?)`,[dataObj.date,dataObj.Preparer, dataObj.Hours,dataObj.OT,dataObj.Vacation,dataObj.New,dataObj.Returning,dataObj.Commission,dataObj.CommQty],
    (err, results)=>{
     if(err){
        res.send({err:err});
       }else{
           if(results.length>0){
               res.send({results: results});  
               console.log(results);              
           }else{
                res.send({results: results});
           }
       }
    });
});


app.get('/api/adminPanel', (req, res)=>{    
    db.query("SELECT * FROM employees ORDER BY Pay_period",
    (err, results)=>{
       if(err){
           res.send({err:err});
       }else{
           if(results.length>0){
               res.send({results:results});                
           }else{
                res.send({message:0});
           }
       }
    });
});

app.listen(3002,()=>{
    console.log("We are listening port 3002");
});