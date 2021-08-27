var express = require('express');
var uploadQuizRouter= express.Router();
var retrieveQuizRouter = express.Router();

/* GET users listing. */

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
  uploadQuizRouter:
  uploadQuizRouter.post('/uploadQuiz', function(req, res, next) {
db.getConnection((err, connect)=>{
  if(err) throw err

  for(let question of req.body.data){

    console.log(question.question);
    console.log(question.choices)
    console.log("Answer"+question.answer)
  
    
    var sql = `INSERT INTO quiz (question,options,answer) VALUES ('${question.question}','${question.choices}','${question.answer}')`;
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
    }
  
    console.log("Created the account");
    });

  
  
  }

  res.send({
    responseCode:1,
    responseMessage:"Uploaded"
})
  
})





})
  ,
  retrieveQuizRouter:
  retrieveQuizRouter.get('/retrieveQuiz', function(req, res, next) {
    db.getConnection((err, connect)=>{
      if(err) throw err

      connect.query(`SELECT * from quiz`,(err,rows,fields)=>{
          if(err) throw err
          console.log(rows)
          if(rows.length>0){
            res.send({
              responseCode:1,
              responseMessage:rows  
            })
          }
 
      })
  })
  })
};
