var controllers = require('./controllers')

module.exports = function (app) {
  app.get('/', function(req, res){
    res.render('index', {
      user: req.user,
      message: req.session.messages
    });
  });
  app.get('/adventure', function(req, res){
    res.render('adventure', {
      user: req.user,
      message: req.session.messages
    });
  });
};

