const mongoose = require('mongoose');

const Recipe = new mongoose.Schema({
	title: { type:String, required: true },
	description: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date },
	rating: Number
}, {
	versionKey: false
});

module.exports = mongoose.model('Recipe', Recipe);
