var mongoose = require('mongoose'),
    async = require('async'),
    Artwork = mongoose.model('Artwork'),
    Artist = mongoose.model('Artist'),
    Medium = mongoose.model('Medium'),
    Adventure = mongoose.model('Adventure');

var adventure = {};

adventure.index = function(req, res) {
  Adventure.find({}, function(err, adventures) {
    if (err) {
      console.log('error getting adventures', err);
      return next(err);
    }
    res.render('index', {
      user: req.user,
      adventures: adventures
    });
  });
}

adventure.new = function(req, res) {
  async.waterfall([
    function(callback) {
      Medium.find({}, function(err, media) {
        callback(err, media);
      });
    },
    function(media, callback) {
      Artist.find({}, function(err, artists) {
        callback(err, { media: media, artists: artists });
      });
    }
  ], function(err, results) {
      if (err) {
        console.log('error', err);
        return next(err);
      }
      res.render('adventure_new', {
        user: req.user,
        media: results.media,
        artists: results.artists
      });
  });
}

adventure.filter = function(req, res) {
  var q = Artwork.find();
  if (req.body.date_end != null && req.body.date_end != "") {
    q.where('dateStart').lt(req.body.date_end);
  }
  if (req.body.date_start != null && req.body.date_start != "") {
    q.where('dateEnd').gt(req.body.date_start);
  }
  if (req.body.artist != null && req.body.artist != "") {
    q.where('artistTextOne').equals(req.body.artist);
  }
  if (req.body.medium != null && req.body.medium != "") {
    q.find({'mediaArray': req.body.medium});
  }
  q.limit(1).exec(function(err, artwork) {
    if (err) {
      console.log('error getting artwork', err);
      return next(err);
    }
    console.log(artwork);
    res.render('adventure_choose', {
      user: req.user,
      index: 0,
      artwork: artwork,
      filters: req.body
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

adventure.show = function(req, res) {
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
