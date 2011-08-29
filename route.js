function route(handle, pathname, response, postData) {
	console.log("Request - " + pathname);
	if (typeof handle[pathname] === 'function') {
		return handle[pathname](response, postData);
	} else {
		return handle["/404"](response, postData);
	}
}

exports.route = route;