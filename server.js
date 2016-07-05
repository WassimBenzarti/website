var http = require('http');
var express = require('express');

var app = express();

app.use('/',function(req,res,next){
    
    res.send('<h1>This is MY express App</h1><br>\n<h2>'+process.version+'</h2>');

    next();
});

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.listen(port,ip,function(){
    console.log('My server is running on port %s : %s ',ip,port);
});