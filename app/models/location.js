var mongoose = require('mongoose'),
  findOrCreate = require('mongoose-findorcreate'),
	Schema = mongoose.Schema;

var LocationSchema = new Schema({
	name: String,
	type: String,
	floor: String,
	enabled: Boolean,
	title: String
});

LocationSchema.plugin(findOrCreate);

mongoose.model('Location', LocationSchema);
