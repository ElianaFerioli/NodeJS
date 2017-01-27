
var fs = require('fs');
function inicio() {
  return fs.readFileSync("index.html", "utf8");
}

function media(data) {
  console.log("Manipulador de petición 'media' ha sido llamado.");
  var sum = parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2]);
  var media = sum/3;
  return "La media es: " + media;
}

exports.media = media;
exports.inicio = inicio;