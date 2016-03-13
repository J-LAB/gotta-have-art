var mongoose = require('mongoose'),
    async = require('async'),
    Artwork = mongoose.model('Artwork');
    Adventure = mongoose.model('Adventure');

var adventure = {};

adventure.index = function(req, res) {
  Adventure.find({}, function(err, adventures) {
    if (err) {
      console.log('error getting adventures', err);
      return next(err);
    }
    console.log(adventures);
    res.render('index', {
      user: req.user,
      adventures: adventures
    });
  });
}

adventure.details = function(req, res) {
  Adventure.findOne({ '_id': req.params.id }, function(err, adventure) {
    if (err) {
      console.log('error getting adventure ' + req.params.id, err);
      return next(err);
    }
    res.render('adventure_details', {
      user: req.user,
      adventure: adventure
    });
  });
}

adventure.view = function(req, res) {
  async.waterfall([
    function(callback) {
      Adventure.findOne({ '_id': req.params.id }, function(err, adventure) {
        callback(err, adventure);
      });
    },
    function(adventure, callback) {
      Artwork.find({ '_id': adventure.artworks[req.params.index] }, function(err, artwork) {
        callback(err, { adventure: adventure, artwork: artwork });
      });
    }
  ], function(err, results) {
      if (err) {
        console.log('error', err);
        return next(err);
      }
      res.render('adventure_view', {
        user: req.user,
        index: req.params.index,
        adventure: results.adventure,
        artwork: results.artwork
      });
  });
}

module.exports = adventure;
