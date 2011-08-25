var http = require("http");

/**
 * Start out http server
 */
function start(){
	http.createServer(function(request, response) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("Vladivostok Developer Conference #0");
		response.end();
	}).listen(8888);
	
	console.log("Nodejs server started");
};

exports.start = start;