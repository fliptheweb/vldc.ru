var
  express = require('express'),
  app = express(),
  DEFAULT_PORT = 12000,
  PORT = process.env.PORT || process.argv[2] || DEFAULT_PORT,
  title = "VLDC — Владивостокская конференция разработчиков";

app.set('view engine', 'jade');
app.set('view options', {layout: false});   //dont use layout in `render` method
app.set('views', __dirname + '/views');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(app.router);
app.use(express.methodOverride());
app.use(express.static(__dirname + '/public'));

//todo actions into separate route file

//all path routed to root
app.get('/', function(req, res) {
  var registered = req.cookies.registered || 0;
  res.render('index', {
    title: title,
    registered: registered
  });
});

app.listen(PORT, function() {
	console.log('Running on http://127.0.0.1:' + PORT + '/');
});
