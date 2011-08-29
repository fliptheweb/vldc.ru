function route(handle, pathname) {
	console.log("Request for " + pathname + "by route module");
	if (typeof handle[pathname] === 'function') {
		return handle[pathname]();
	} else {
		console.log("No request handler found for " + pathname);
		return handle["/404"]();
	}
}

exports.route = route;