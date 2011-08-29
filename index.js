var server = require("./server");
var router = require("./route");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/404"] = requestHandlers.error404;

server.start(router.route, handle);