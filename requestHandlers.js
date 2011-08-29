var exec = require("child_process").exec;

function start(response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("Start");
	response.end();
}
function upload(response, postData) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("You've sent: " + postData);
	response.end();
}

function error404(response) {
	response.writeHead(404, {"Content-Type": "text/html"});
	response.write("404 not found");
	response.end();
}

exports.start = start;
exports.upload = upload;
exports.error404 = error404;