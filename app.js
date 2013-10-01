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
  var registered = req.cookies.registered || 0;
  res.render('index', {
    title: 'Главная',
    registered: registered
  });
});

app.post('/', function(req, res) {
  var registered = req.cookies.registered || 0;
  console.log(req.headers);
  console.log(req.body);
  console.log(req.query);
  var request = req.body,
    surname = request.surname || "",
    name = request.name || "",
    email = request.email || "",
    workplace = request.workplace || "",
    emailRex = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/,
    emailOk = email.match(emailRex);

    if (!surname || !name || !email || !workplace || !emailOk) {
    res.render('index', {
      title: "VLDC — Владивостокская конференция разработчиков",
      flash: "Заполните, пожалуйста, все поля",
      error: true,
      name: name,
      surname: surname,
      email: email,
      workplace: workplace,
      registered: registered
    });
  }


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
          error: true,
          name: name,
          surname: surname,
          email: email,
          workplace: workplace,
          registered: registered
        });
    } else {
      query = 'insert into event_member (event_id, name, date, email, workplace)' +
        'values (1, \''+name+'\', now(), \''+email+'\', \''+workplace+'\')';
      db.client.query(query, function(err, result){
        if (err) {
          res.json(err)
        } else {
          var MAGICK_NUMBER = 1000000000;
          res.cookie('registered', '1', {expires: new Date(Date.now() + MAGICK_NUMBER)});
          //todo send email
          res.render('index',
            {
              title: "Главная",
              flash: "Все ок, иди в жопу",
              error: false,
              registered: 1
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
