
var fs = require('fs');
function inicio() {
  console.log("Manipulador de petición 'inicio' ha sido llamado.");
  return fs.readFileSync("index.html", "utf8");
}

function contacto() {
  console.log("Manipulador de petición 'contacto' ha sido llamado.");
  return fs.readFileSync("contacto.html", "utf8");
}

function sobre() {
  console.log("Manipulador de petición 'sobre' ha sido llamado.");
  return fs.readFileSync("sobre.html", "utf8");
}
function referencias(){
  console.log("Manipulador de petición 'referencias' ha sido llamado.");
   return fs.readFileSync("referencias.html", "utf8");
}

exports.inicio = inicio;
exports.contacto = contacto;
exports.referencias = referencias;
exports.sobre = sobre;