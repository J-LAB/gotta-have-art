var mongoose = require('mongoose'),
  findOrCreate = require('mongoose-findorcreate'),
	Schema = mongoose.Schema;

var TechniqueSchema = new Schema({
	name: String
});

TechniqueSchema.plugin(findOrCreate);

mongoose.model('Technique', TechniqueSchema);
