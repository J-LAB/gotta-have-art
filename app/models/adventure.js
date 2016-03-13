var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var AdventureSchema = new Schema({
	name: String,
	description: String,
	artworks: [
    {type : Schema.ObjectId, ref : 'Artwork'}
  ],
});

mongoose.model('Adventure', AdventureSchema);
