const mongoose = require('mongoose')

const Users = mongoose.model('User' , {
	name: { type: String, required: true, minLength: 3 },
	number: { type: String, required: true, minLength: 5 },
	email:{ type:String, required:true, minLength:10 },
	password: { type:String,required:true},
	salt: { type: String,required:true} ,
	
})

module.exports = Users