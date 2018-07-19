const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = mongoose.model('User', 
{ 
	name: String,
	secret: String,
	updateDate: { 
		type: String,
		default: Date.now
	}
});

module.exports = User;