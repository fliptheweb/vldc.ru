function start() {
	console.log("Request handler 'start' was called.");
	return "Start route";
}

function upload() {
	console.log("Request handler 'upload' was called.");
	return "Upload route";
}

function error404() {
	console.log("404");
	return "404";
}

exports.start = start;
exports.upload = upload;
exports.error404 = error404;