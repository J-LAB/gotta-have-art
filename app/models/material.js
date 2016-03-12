var mongoose = require('mongoose'),
  findOrCreate = require('mongoose-findorcreate'),
	Schema = mongoose.Schema;

var MaterialSchema = new Schema({
	name: String
});

MaterialSchema.plugin(findOrCreate);

mongoose.model('Material', MaterialSchema);
