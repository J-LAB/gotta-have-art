var mongoose = require('mongoose'),
  findOrCreate = require('mongoose-findorcreate'),
	Schema = mongoose.Schema;

var SupportSchema = new Schema({
	name: String
});

SupportSchema.plugin(findOrCreate);

mongoose.model('Support', SupportSchema);
