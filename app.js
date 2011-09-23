var app = require('express').createServer();

//configurate our server
app.configure(function(){
    app.set('view engine', 'jade');             //we used jade templates
    app.set('view options', {layout: false});   //dont use layout in `render` method
});

app.use(app.router);
//if no one routes don't match
app.use(function(req, res){
    //TODO create jade template for 404 page
    res.send('Извините, страница не найдена', 404);
});

//Routes

//output static files
app.get("/layout/*", function(req, res, next){
    res.sendfile('layout/'+req.params, function(err){
        //go to next suitable route if error
        if(err){
            next();
        }
    });
});

//all path routed to root
app.get('/', function(req, res){
	res.render('index');
});

app.listen(3000);