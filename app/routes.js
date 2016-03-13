var controllers = require('./controllers')

module.exports = function (app) {
  app.get('/', controllers.adventure.index);
  app.get('/adventure/:id', controllers.adventure.details);
  app.get('/adventure/:id/:index', controllers.adventure.view);
};

