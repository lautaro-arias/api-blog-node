const mongoose = require('mongoose') ;


const Publications = mongoose.model('Publication', {
	name:{type:String,required:true,minLength:2},
	lastname:{type:String,required:true,minLength:2},
	title: { type: String, required: true, minLength: 2 },
	subtitle: { type: String, required: true, minLength: 1 },
	description: { type: String, required: true, minLength: 1 },
	email: { type: String, required: true, minLength: 1 },
	file:{}
});

module.exports = Publications;
