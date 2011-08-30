var querystring = require("querystring"),
	exec = require("child_process").exec,
	formidable = require("formidable"),
	fs = require("fs");

function start(response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	var body ='<form method="post" action="/upload"><input type="text" name="text" id=""><input type="submit" value=""></form>'
	response.write(body);
	response.end();
}
function upload(response, request) {
	var form = new formidable.IncomingForm();
	form.parse(request, function(error, fields, files) {
		fs.renameSync(files.upload.path, "/tmp/test.png");
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("received image:<br/>");
		response.write("<img src='/show' />");
		response.end();
	});

}

function show(response, request) {
	fs.readFile("/tmp/test.png", "binary", function(error, file) {
		if(error) {
			response.writeHead(500, {"content-type": "text/plain"});
			response.write(error + "\n");
			response.end();
		} else {
			response.writeHead(200, {"content-type": "image/png"});
			response.write(file, "binary");
			response.end();
		}
	});
}

function error404(response) {
	response.writeHead(404, {"Content-Type": "text/html"});
	response.write("404 not found");
	response.end();
}

exports.start = start;
exports.upload = upload;
exports.show = show;
exports.error404 = error404;