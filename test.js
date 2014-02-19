var express = require('express');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var http = require('http'),
    fs = require('fs');
var app = express();
var mongoose = require('mongoose');
function compile(str,path)
{
	return 
}
app.configure(function(){

  // disable layout
//app.set("views", {layout: false});
app.set("views", __dirname +'/server/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static('/css'));
app.use(express.logger('dev'));
app.use(express.bodyParser());
});

app.get('*/', function(req,res) {

  res.sendfile('server/views/index.html');
});
var port =3030;
app.listen(port);
console.log("listening on port: "+ port+'...');