const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ImageTypes = mongoose.model('ImageTypes', 
{ 
	extension: String,
	contentType: String
	updateDate: { 
		type: String,
		default: Date.now
	}
});

module.exports = ImageTypes;