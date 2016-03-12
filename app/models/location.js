var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var LocationSchema = new Schema({
	name: { type: String, required: true, trim: true },
	type: { type: String, required: true, trim: true },
	floor: { type: String, required: true, trim: true },
	enabled: { type: Boolean, required: false, trim: true },
	title: { type: String, required: false, trim: true }
});

mongoose.model('Location', LocationSchema);
