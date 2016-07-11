/// <reference path="../typings/index.d.ts" />
import * as express from "express";
import * as hbs from "express-handlebars";
import * as path from "path";


import Config from "../config/config";
import * as apiRoute from "./api/router";


var app = express();
app.engine('html', hbs.create({extname: '.html', layoutsDir: __dirname + '../src/'}).engine);
app.set('views',path.join(__dirname,'../src/'));
app.set('view engine', 'html');

app.use('/', function (req, res, next) {
  var hostname = req.headers['host'].split(":")[0].split('.');

  if (hostname.length <= 3) {
    if (Config.subDomains.indexOf(hostname[0]) > -1) {
      app.use('/', apiRoute);
    }
  }

  next();
});

app.use('/', function (req, res,next) {
  if(Config.pages.indexOf(req.url.substr(1)) > -1 ){
    res.render('index',{
      scripts:Config.scripts
    });
  }else{
    next();
  }
});
app.use(express.static('./dist/src'));
app.use(express.static('./public'));

app.use('/error/:page',function(req,res){
  var err="404";
  if(Config.errors.indexOf(req.params['page'])>-1) {
    err = req.params['page'];
  }
  res.render('error/index',{errorCode:err});
});

app.use('/',function(req, res){
  res.redirect('/error/404');
});


var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(port, ip, function () {
  console.log('My server is running on port %s : %s ', ip, port);
});