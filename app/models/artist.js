var mongoose = require('mongoose'),
  findOrCreate = require('mongoose-findorcreate'),
	Schema = mongoose.Schema;

var ArtistSchema = new Schema({
	name: String,
	geography: String,
	dateStart: Date,
	dateEnd: Date,
	artworks: [
    {type : Schema.ObjectId, ref : 'Artwork'}
  ]
});

ArtistSchema.plugin(findOrCreate);

mongoose.model('Artist', ArtistSchema);
