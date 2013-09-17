var express = require('express'),
  app = express(),
  DEFAULT_PORT = 3000,
  PORT = process.env.PORT || process.argv[2] || DEFAULT_PORT;

app.use(app.router);
app.set('view engine', 'jade');
app.set('view options', {layout: false});   //dont use layout in `render` method
app.set('views', __dirname + '/views');
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(__dirname + '/public'));

//all path routed to root
app.get('/', function(req, res){
  res.render('index');
});

//if no one routes don't match
app.all('*', function(req, res) {
  //TODO create jade template for 404 page
  res.send('Извините, страница не найдена', 404);
});

//all path routed to root
app.get('/', function(req, res){
  res.render('index');
});

app.listen(PORT, function() {
  console.log('Running on http://127.0.0.1:' + PORT + '/');
});
