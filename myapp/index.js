
var http=require("http");

var server = http.createServer(function(req, res) {
    req.on('data', function(chunk) {
        res.write(chunk);

        console.log(chunk.toString());
    });
    req.on('end', function() {
        res.end();
    });
});

server.listen(3003);