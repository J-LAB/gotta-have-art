var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ArtworkSchema = new Schema({
	name: { type: String, required: true, trim: true },
});

mongoose.model('Artwork', ArtworkSchema);
