function route(pathname, handle) {
  console.log("A punto de rutear una peticion para " + pathname);
  if(typeof handle[pathname] == 'function'){
    return handle[pathname]();
  } else{
    console.log("Recurso no encontrado.");
  }
}

exports.route = route;