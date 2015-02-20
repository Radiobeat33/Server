var mongoose = require('mongoose');

var grantSchema = new mongoose.Schema({

	creator: {
		type: String,
		unique: true,
		required: true
	},

	googleToken: {
		type: String
	}

});

module.exports = mongoose.model('Grant', grantSchema);



