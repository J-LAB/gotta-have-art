var controllers = require('./controllers')

module.exports = function (app) {
  app.get('/', controllers.adventure.index);
  app.get('/adventure/:id/details', controllers.adventure.details);
  app.get('/adventure/:id/show/:index', controllers.adventure.show);
  app.get('/adventure/new', controllers.adventure.new);
  app.post('/adventure/filter', controllers.adventure.filter);
  app.get('/adventure/create/:id', controllers.adventure.create);
};

