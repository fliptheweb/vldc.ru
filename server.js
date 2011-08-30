var http = require("http");
var url = require("url");

/**
 * Start http server
 */
function start(route, handle){
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		request.setEncoding("utf8");
		route(handle, pathname, response, request);
	}

	http.createServer(onRequest).listen(8888);
	console.log("Nodejs server started");
};

exports.start = start;