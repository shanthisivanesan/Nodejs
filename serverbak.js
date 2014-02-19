
var express = require('express'),


cors = require('cors'),


Db = require('mongodb').Db,


Connection = require('mongodb').Connection,


Server = require('mongodb').Server,


//users = require('./server/routes/users.js');


app = express();


app.configure(function () {


app.use(express.bodyParser());


app.use(cors());


app.use(express.static(__dirname+'/app/' ));


});


app.listen(3000);


console.log('Listening on port 3000...');
