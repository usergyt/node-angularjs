// Dependencies
var express = require('express');
var router = express.Router();
var request = require('request');
var querystring = require('querystring');

var 
    db = {},
    sequence = 0;

var notFound = function(res) {
    res.status(404).send('Not found!');
};

router.get('/', function(req, res) {
    res.json(db);
});

router.get('/:id', function(req, res) {
    var task = db[req.params.id];
    if(task) {
        res.json(task);
    }
    else {
        notFound(res);
    }
});
function callback(error, response, getData) {
    if (!error && response.statusCode == 200) {
        console.log(getData);
        //this.body =   render('list', {'messages': messages});
        //this.body =  "hello word";
    }
}
router.post('/', function(req, res) {
    //console.log("====",querystring.stringify(req))
    //req.query.id
    console.log("====", req.body.name)
    console.log("获取远程数据")
    var options={
        url:'https://testapi.open.ruixuesoft.com:30005/ropapi?method=ruixue.wheatfield.bankn.query&app_key=857F5C39-884C-470F-9FA7-DCABFD558ABE&format=json&timestamp=2016-08-30%2015%3A06%3A03&session=1472540762036323696&sign=D9865566BA325ABB798CC2D7E913912D',
        method: 'POST',
        rejectUnauthorized: false,
    }

    var newTask = {
        id: ++sequence,
        done: req.body.done || false,
        description: req.body.description
    };
    request(options, function (error, response, getData) {
        if (!error && response.statusCode == 200) {
            db[newTask.id] = newTask;
            res.send(getData);
          //  res.status(201).json(getData);
        }
    });

});

router.put('/:id', function(req, res) {
    var task = db[req.params.id];
    if(task) {
        task.done = req.body.done != null ? req.body.done : false;
        task.description = req.body.description || task.description;
        res.json(task);
    }
    else {
        notFound(res);
    }
});

router.delete('/:id', function(req, res) {
    var task = db[req.params.id];
    if(task) {
        delete db[req.params.id];
        res.send('Task deleted');
    }
    else {
        notFound(res);
    }
});

module.exports = router;