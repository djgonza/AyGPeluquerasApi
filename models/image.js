const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Image = mongoose.model('Image', 
{ 
	updateDate: { 
		type: String,
		default: Date.now
	},
	type: Schema.Types.ObjectId,
	size: Number,
	name: String,
	path: String,
	user: Schema.Types.ObjectId
});

module.exports = Image;