var express = require('express');
var app = express();

//Definir las varibables de entorno IMPORTANTE
app.set('port',(process.env.PORT||8080))

//basic test
app.get('/',function(req,res){
	res.send("<h1>Test Heroku OK1</h1>");
})

//TEST CON kali>node app.js
app.listen(app.get('port'));