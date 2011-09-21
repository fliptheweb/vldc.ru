var app = require('express').createServer();

app.get('/', function(req, res){
	res.send('VLDC #1');
});

app.listen(3000);