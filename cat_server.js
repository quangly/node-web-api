var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var catRoutes = require('./routes/cat.js')(app);
var myport = 3000
var server = app.listen(myport, function () {
    console.log('Server running at http://localhost:'+myport+'/');
});
