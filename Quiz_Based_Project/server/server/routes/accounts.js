var express = require('express');


var loginRouter = express.Router();

var createAccountRouter = express.Router();

/* GET users listing. */
const mysql = require('mysql');

//MySql
const db = mysql.createPool({
    host: 'localhost',
    user:   'root',
    password: '',
    database: 'web_semeter_project'
});




module.exports = {
  loginRouter:
  loginRouter.post('/signIn', function(req, res, next) {
    db.getConnection((err, connect)=>{
      if(err) throw err

      connect.query(`SELECT * from users WHERE email='${req.body.email}' AND password='${req.body.password}'`,(err,rows,fields)=>{
          if(err) throw err
          console.log(rows.length)
          if(rows.length>0){
            res.send({
              responseCode:1,
              responseMessage:"loginSuccessFull"  
            })
          }else{
            res.send({
              responseCode:0,
              responseMessage:"loginUnSuccessFull"  
            })
          }
 
      })
  })
  })
  ,
  createAccountRouter:
  createAccountRouter.post('/signUp', function(req, res, next) {
   
    db.getConnection((err, connect)=>{
      if(err) throw err
      
      var sql = `INSERT INTO users (email,firstName,password,lastName,gender) VALUES ('${req.body.email}','${req.body.firstName}','${req.body.password}','${req.body.lastName}','${req.body.gender}')`;
      connect.query(sql, function (err, result) {
      if (err)
      {
          res.status(400).send({
              responseCode:0,
              responseMessage:"Could not create account because of : "+err
          })
      }
      else
      {
          res.status(200).send({
              responseCode:1,
              responseMessage:"Account created"
          })
      }

      console.log("Created the account");
      });
  })

  })
};
