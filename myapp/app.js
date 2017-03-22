'use strict';

const express = require('express');
// const bodyParser = require('body-parser');

const app = new express();
// app.use(bodyParser);
// var stream = bodyParser.raw({type: 'application/vnd.custom-type'});
// app.use(stream);

// var urlencodedParser = bodyParser.urlencoded({ extended: true })
//用json形式解析
// var jsonParser = bodyParser.json();
// var txt=bodyParser.text({ type: 'text/html' });
app.post('/test', function (req, res) {
    req.on('data', function (chunk) {
        res.write(chunk);
        console.log(chunk.toString());
    });
    req.on('end', function () {
        res.end();
    });
});

app.listen(3010);

