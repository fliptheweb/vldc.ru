var http = require("http");
var url = require("url");

/**
 * Start http server
 */
function start(route, handle){
	function onRequest(request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;

		request.setEncoding("utf8");

		/**
		 * Build our post request from chunk
		 */
		request.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
			console.log("Received POST data chunk '" + postDataChunk + "'.");
		});

		/**
		 * Send response and request to route()
		 */
		request.addListener("end", function() {
			route(handle, pathname, response, postData);
		});
	}

	http.createServer(onRequest).listen(8888);
	console.log("Nodejs server started");
};

exports.start = start;