const express = require('express');
const port = 4239;
const path = require('path');
//const config = require('../config');
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
  host: 'fec-hallowes-carousel.cgmhnhykd7qi.us-east-2.rds.amazonaws.com',
  user: 'atgeorge11',
  password: 'atgeorge11',
  database: 'fec_hallowes_carousel',
});
connection.connect();
//config.userconfig.hostconfig.DBPW

// app.use(express.json());


app.get('/lem', (req, res) => {
  // console.log("this request is working");
  // console.log(connection);
// let thisQuery = 'SELECT * FROM urls '
  connection.query(`SELECT * FROM items WHERE name = "${productName}"`, function (error, results, fields) {
    if (error){ 
      throw error;
    } else {
      // let starterLoad = {
      //   urls: resultsOne,
      // }
      // connection.query(`SELECT * FROM product_table WHERE Name = "${productName}"`, function (error, results, fields) {
      // // let urlArray =  results.map((urls) =>  {
      //   if(error){
      //     throw error;
      //   } else {
          // starterLoad.cate = results;
          console.log('This is the res send ', results);
          res.send(results);
        // }
      // })
      }
    })

  });


app.listen(port, () => console.log(`Listening to port ${port}`));

