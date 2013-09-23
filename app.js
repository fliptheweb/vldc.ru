var
  db = require('./db'),
  express = require('express'),
  app = express(),
  DEFAULT_PORT = 3000,
  PORT = process.env.PORT || process.argv[2] || DEFAULT_PORT;

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
  res.render('index', {
    title: 'Главная'
  });
});

app.post('/member/new', function(req, res) {
  console.log(req.headers);
  console.log(req.body);
  console.log(req.query);
  var request = req.body,
    surname = request.surname || null,
    name = request.name || null,
    email = request.email || null,
    workplace = request.workplace || null;

  if (!surname || !name || !email || !workplace) {
    res.render('index', {
      title: "Главная",
      flash: "Ты говно, ты не заполнил все поля",
      error: true
    });
  }
  //todo validate email

  name = surname + ' ' + name;
  var query = 'select count(id) cnt from event_member where ' +
    'event_id=1 and name = \'' + name + '\'';

  db.client.query(query, function(err, result) {
    if (err) {
      console.error('error running query', err);
      res.json({error: err});
    }
    var isExist = result.rows[0].cnt > 0;
    if (isExist) {
      res.render('index',
        {
          title: "Главная",
          flash: "Ты говно, ты уже зареган",
          error: true
        });
    } else {
      query = 'insert into event_member (event_id, name, date, email, workplace)' +
        'values (1, \''+name+'\', now(), \''+email+'\', \''+workplace+'\')';
      db.client.query(query, function(err, result){
        if (err) {
          res.json(err)
        } else {
          //todo send email
          res.render('index',
            {
              title: "Главная",
              flash: "Все ок, иди в жопу",
              error: false
            });
        }
      });
    }

  });
});

db.connectDatabase(function() {
  app.listen(PORT, function() {
    console.log('Running on http://127.0.0.1:' + PORT + '/');
  });
});
