function route(handle, pathname) {
	console.log("Request for " + pathname + "by route module");
	if (typeof handle[pathname] === 'function') {
		handle[pathname]();
	} else {
		console.log("No request handler found for " + pathname);
	}
}

exports.route = route;