var express=require("express");
var logfmt = require("logfmt");
var pagedown= require('pagedown');
var converter=new pagedown.Converter();
var safeConverter=pagedown.getSanitizingConverter();
var app=express();

/*app.use(logfmt.requestLogger());

app.get('/', function(req,res)  {

//res.send('Welcome to slipperyslope!');
express.static(__dirname + '/public');

});
*/

//app.use('/', express.static(__dirname + '/public/freelancer'));

app.use('/', express.static(__dirname + '/public/basic/'));

app.use('/contact', express.static(__dirname + '/public/basic/'));
app.use('/faq', express.static(__dirname + '/public/basic/'));

var port = Number(process.env.PORT || 5001);

app.listen(port,function() {

  console.log("Listening on "+port);


});
