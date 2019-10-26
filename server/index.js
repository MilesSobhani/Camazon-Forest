const express = require('express');
const port = 4239;
const path = require('path');
const config = require('../config');
const app = express();
const absolutePath = path.join(__dirname, '/../dist');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require("cors");
let productName = 'Hell Fire';
app.use(cors());
app.use(express.static(absolutePath));
bodyParser.json();

var connection = mysql.createConnection({
  host: 'fec-hallowes.ccdz2i80m3e7.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'TempleRun',
  database: 'Hallowes',
});
connection.connect();
//config.userconfig.hostconfig.DBPW

// app.use(express.json());


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

