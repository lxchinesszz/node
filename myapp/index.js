var express = require('express');
var app = express();

app.get('/a', function (req, res, next) {
    console.log('response will be sent by the next function ...');
    next();
}, function (req, res) {
    // res.json('./package.json');
    res.redirect("www.baidu.com");
});

var middle=require('./middle');

app.use("/middle",middle);

var server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

