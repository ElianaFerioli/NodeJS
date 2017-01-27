var http = require("http");
var url = require("url");
var querystring = require('querystring');


function iniciar(route, handle) {
  function onRequest(request, response) {
    //Extracción de los datos necesarios de la url
    var pathname = url.parse(request.url).pathname;
    console.log("Petición Recibida.");
    var contenido = route(pathname, handle);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(contenido);
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado en http://localhost:8888");
}

exports.iniciar = iniciar;