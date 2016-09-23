// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

// Express configuration
var app = express();
app.use(bodyParser.json({}));
app.use(express.static('public'));
app.use(cors());

/*app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/!*让options请求快速返回*!/
    else  next();
  });*/

//welcome
app.get('/', function(req, res) {
     res.redirect('./index.html');
});

// Task API
app.use('/api/tasks', require('./app/taskApi'));

var server = app.listen(8080, function() {
    console.log("Server running at http://localhost:8080");
});