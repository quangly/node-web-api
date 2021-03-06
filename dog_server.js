var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dogs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var dogRoutes = require('./routes/dog.js')(app);
var myport = 3003
var server = app.listen(myport, function () {
    console.log('Server running at http://localhost:'+myport+'/');
});
