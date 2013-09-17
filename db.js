var pg = require('pg'),
  conString = 'postgress://vldc:LgX0965VS4R857H@localhost/vldc',
  client = new pg.Client(conString),
  connection;

module.exports.connectDatabase = function(callback) {
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err){
      console.log(err);
      process.exit(1);
    }

    module.exports.client = client;
    callback();
  })
};