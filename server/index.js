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
  user: 'admin',
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
  let options = [];
  connection.query(`SELECT * FROM urls WHERE Name = "${productName}"`, options, function (error, results, fields) {
    if (error){ 
      throw error
    } else {
      // let urlArray =  results.map((urls) =>  {
      //   return results;
      // })
        console.log('This is the res send ', results);
        // res.send.data = urlArray;
        res.send(results);
      }
    })

  });


app.listen(port, () => console.log(`Listening to port ${port}`));