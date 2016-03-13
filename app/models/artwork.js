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
  dateStart: Number,
  dateEnd: Number,
  mediumText: String,
  mediaArray: [String],
  media: [
    {type : Schema.ObjectId, ref : 'Medium'}
  ],
  materialsText: String,
  materialsArray: [String],
  materials: [
    {type : Schema.ObjectId, ref : 'Material'}
  ],
  techniquesText: String,
  techniquesArray: [String],
  techniques: [
    {type : Schema.ObjectId, ref : 'Technique'}
  ],
  supportsText: String,
  supportsArray: [String],
  supports: [
    {type : Schema.ObjectId, ref : 'Support'}
  ],
  dimensions: String,
  locationText: String,
  galleryText: String,
  location: { type: Schema.ObjectId, ref: 'Location', index: true },
  geography: String,
  latitude: Number,
  longitude: Number,
  creditLine: String,
  purchasedDate: String,
  url: String
});

mongoose.model('Artwork', ArtworkSchema);
