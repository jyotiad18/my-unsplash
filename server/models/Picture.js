const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Please add title of a picture.'],
		unique: true
	},
	url: {
		type: String,
		required: [true, 'Please add url of a picture.'],
		unique: true		
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('pictures', pictureSchema);