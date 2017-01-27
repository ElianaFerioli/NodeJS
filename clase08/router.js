function route(pathname, handle, data) {
  console.log("A punto de rutear una peticion para " + pathname);
  if(typeof handle[pathname] == 'function'){
    return handle[pathname](data);
  } else{
    return handle["/error"]();
  }
}

exports.route = route;