var controllers = require('./controllers')

module.exports = function (app) {
  app.get('/', controllers.adventure.index);
  app.get('/adventure/:id/details', controllers.adventure.details);
  app.get('/adventure/:id/show/:index', controllers.adventure.show);
  app.get('/adventure/:id/edit/:index', controllers.adventure.edit);
  app.get('/adventure/new', controllers.adventure.new);
  app.post('/adventure/filter', controllers.adventure.filter);
  app.get('/adventure/:id/choose/:index', controllers.adventure.choose);
  app.get('/adventure/:adventure_id/add/:index/:artwork_id', controllers.adventure.add);
  app.get('/adventure/create/:id', controllers.adventure.create);
};

