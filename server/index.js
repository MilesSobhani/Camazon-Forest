const express = require('express');
const port = 4239;
const host = 'TODO';
const app = express();
app.use(express.static('./dist'));

// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'student',
//   database: 'pictures'
// });

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// connection.end();



app.listen(port, () => console.log(`Listening to port ${port}`));