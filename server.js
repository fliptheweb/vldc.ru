var http = require("http");
var url = require("url");

/**
 * Start out http server
 */
function start(){
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("Vladivostok Developer Conference #0");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Nodejs server started");
};

exports.start = start;