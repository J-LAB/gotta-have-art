var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ArtworkSchema = new Schema({
	collectionId: Number,
	externalId: String,
	imageFilename: String,
  artistTextOne: String,
  artistTextTwo: String,
  artistTextThree: String,
  artistTextFour: String,
  artistTextFive: String,
  artistTextSix: String,
  artistTextSeven: String,
	artists: [
    {type : Schema.ObjectId, ref : 'Artist'}
  ],
  titleOne: String,
  titleTwo: String,
  titleThree: String,
  titleFour: String,
  dateText: String,
  dateStart: Date,
  dateEnd: Date,
  mediumText: String,
  mediums: [
    {type : Schema.ObjectId, ref : 'Medium'}
  ],
  materialsText: String,
  materials: [
    {type : Schema.ObjectId, ref : 'Material'}
  ],
  techniquesText: String,
  techniques: [
    {type : Schema.ObjectId, ref : 'Technique'}
  ],
  supportsText: String,
  supports: [
    {type : Schema.ObjectId, ref : 'Support'}
  ],
  dimensions: String,
  locationText: String,
  location: { type: Schema.ObjectId, ref: 'Location', index: true },
  geography: String,
  latitude: Number,
  longitude: Number,
  creditLine: String,
  purchasedDate: Date,
  url: String
});

mongoose.model('Artwork', ArtworkSchema);
