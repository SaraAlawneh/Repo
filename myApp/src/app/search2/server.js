var http = require('http');
var express = require('express');

var fs = require('fs');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get('/', function (req, res) {
	
	res.sendFile('employee.json', {root : __dirname});
});


app.post('/employee', function (req, res) {
  
   
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(data);
    res.end();});
  

   

  app.listen(8080);