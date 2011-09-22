var app = require('express').createServer();

//configurate our server
app.configure(function(){
    app.set('view engine', 'jade');             //we used jade templates
    app.set('view options', {layout: false});   //dont use layout in `render` method
});

//all path routed to root
app.get('/*', function(req, res){
	res.render('index');
});

app.listen(3000);