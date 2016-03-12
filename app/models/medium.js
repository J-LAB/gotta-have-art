var mongoose = require('mongoose'),
  findOrCreate = require('mongoose-findorcreate'),
	Schema = mongoose.Schema;

var MediumSchema = new Schema({
	name: String
});

MediumSchema.plugin(findOrCreate);

mongoose.model('Medium', MediumSchema);
