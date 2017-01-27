function route(pathname, handle) {
  console.log("A punto de rutear una peticion para " + pathname);
  if(typeof handle[pathname] == 'function'){
    handle[pathname]();
    return handle[pathname]();
  } else{
    handle["/error"]();
    return handle["/error"]();
  }
}

exports.route = route;