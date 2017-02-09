
var express = require('express');
var app = express();
//Añadimos esta linea para trabajar con Jade
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(8080);
