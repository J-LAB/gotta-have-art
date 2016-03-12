var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ArtworkSchema = new Schema({
	collectionId: Number,
	externalId: Number,
	imageFilename: String,
  artistTextOne: String,
  artistTextTwo: String,
  artistTextThree: String,
  artistTextFour: String,
  artistTextFive: String,
  artistTextSix: String,
  artistTextSeven: String,
	artists: [
    {type : Schema.ObjectId, ref : 'artist'}
  ],
  titleOne: String,
  titleTwo: String,
  titleThree: String,
  titleFour: String,
  dateText: String,
  date: Date,
  dateRangeStart: Date,
  dateRangeEnd: Date,
  mediumText: String,
  medium: [
    String
  ],
  materialsText: String,
  materials: [
    String
  ],
  techniquesText: String,
  techniques: [
    String
  ],
  supportsText: String,
  supports: [
    String
  ],
  dimensionsText: String,
  dimensions: {
    length: Number,
    width: Number,
    height: Number
  },
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
