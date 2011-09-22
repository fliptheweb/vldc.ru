var app = require('express').createServer();

//configurate our server
app.configure(function(){
    app.set('view engine', 'jade');             //we used jade templates
    app.set('view options', {layout: false});   //dont use layout in `render` method
});

//output static files (i think proxy nginx better :)
app.get("/layout/*", function(req, res){
    res.download('layout/'+req.params);
});

//all path routed to root
app.get('/*', function(req, res){
	res.render('index');
});

app.listen(3000);