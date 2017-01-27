function inicio() {
  console.log("Manipulador de petición 'inicio' ha sido llamado.");
  return "<br>Pagina de inicio";
}

function contacto() {
  console.log("Manipulador de petición 'contacto' ha sido llamado.");
  return "<br>Pagina de contacto";
}

function error() {
  console.log("Manipulador de petición 'error' ha sido llamado.");
  return "<br>Pagina de error";
}

exports.inicio = inicio;
exports.contacto = contacto;
exports.error = error;