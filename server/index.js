const express = require('express');
const port = 4239;
const config = require('../config');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require("cors");
let productName = 'Window With Ghost In it Sometimes';
app.use(cors());

var connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.DBPW,
  database: 'Hallowes',
});
connection.connect();

app.use(express.static('dist'));
// app.use(express.json());
bodyParser.json();

app.get('/lem', (req, res) => {
  // console.log("this request is working");
  // console.log(connection);
// let thisQuery = 'SELECT * FROM urls '
  connection.query(`SELECT * FROM urls WHERE Name = "${productName}"`, function (error, resultsOne, fields) {
    if (error){ 
      throw error;
    } else {
      let starterLoad = {
        urls: resultsOne,
      }
      connection.query(`SELECT * FROM product_table WHERE Name = "${productName}"`, function (error, results, fields) {
      // let urlArray =  results.map((urls) =>  {
        if(error){
          throw error;
        } else {
          starterLoad.cate = results;
          console.log('This is the res send ', starterLoad);
          res.send(starterLoad);
        }
      })
      }
    })

  });


app.listen(port, () => console.log(`Listening to port ${port}`));