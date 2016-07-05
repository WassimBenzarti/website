var http = require('http');
var express = require('express');

var app = express();

app.use('/',function(req,res,next){
    res.send('<h1>This is MY express App</h1>');

    next();
});

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

function reqHandler(req, res){
    console.log('requested ', req.url, 'on host ',req.host);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('<h1>Hello GUYS !</h1>');
    res.end();
}


var server = http.createServer(reqHandler).listen(port,ip,function(){
    console.log('My server is running on port %s : %s ',ip,port);
});