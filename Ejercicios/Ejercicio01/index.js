var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.inicio;
handle["/inicio"] = requestHandlers.inicio;
handle["/contacto"] = requestHandlers.contacto;
handle["/sobre"] = requestHandlers.sobre;
handle["/referencias"] = requestHandlers.referencias;
server.iniciar(router.route, handle);
