var http = require("http");
var url = require("url");
var querystring = require('querystring');


function iniciar(route, handle) {
  function onRequest(request, response) {
    //Extracción de los datos necesarios de la url
    var pathname = url.parse(request.url).pathname;
    var cadenaDatos = request.url.split('?')[1];
    var numeros = [
                    querystring.parse(cadenaDatos)["n1"],
                    querystring.parse(cadenaDatos)["n2"],
                    querystring.parse(cadenaDatos)["n3"]
                  ];
    console.log("Petición Recibida.");

    var contenido = route(pathname, handle, numeros);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(contenido);
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado en http://localhost:8888");
}

exports.iniciar = iniciar;