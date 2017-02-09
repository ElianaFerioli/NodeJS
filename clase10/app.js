var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var persona = {
    nombre: "Eliana Mariel",
    apellidos: "Ferioli Núñez"
}

var direccion = {
    calle: "C/ Alameda de Andalucía, 10"
}

app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/contacto', function(req, res) {
    res.render('contacto', direccion);
});

app.get('/usuario', function(req, res) {
    res.render('usuario', persona);
});

app.get('/saluda/:nombre', function(req, res) {
    datos = {
        "nombre": req.params.nombre
    }
    res.render('saluda', datos);
});

app.get('/formulario', function(req, res) {
    res.render('formulario');
});
app.post('/registro', function(req, res) {
    let datos = {
        "usuario": req.body.usuario,
        "contrasena": req.body.contrasena
    };
    res.render('registro', datos);
});

app.listen(8000);