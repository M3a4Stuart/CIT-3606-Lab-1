const express = require('express'); 
const app = express();
app.get('/', function(req, res){
   res.send("Hello world!");
});
app.listen(8080);

const mysql =require('mysql');
require('dotnev').config();

const db = mysql.createConnection({
    host: 'localhost',
    password: process.env.DB_PASSWORD,
    database: 'citdemo',
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
});

conn.connect((err) =>{
      if(err) throw err;
      console.log('Connected!')
})

