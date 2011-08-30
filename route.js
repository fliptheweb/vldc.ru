function route(handle, pathname, response, request) {
	console.log("Request - " + pathname);
	if (typeof handle[pathname] === 'function') {
		return handle[pathname](response, request);
	} else {
		return handle["/404"](response, request);
	}
}

exports.route = route;