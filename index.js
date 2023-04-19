const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ariass:43354316@cluster0.resfzpb.mongodb.net/blog?retryWrites=true&w=majority')

const User = mongoose.model('User',{
	username: String ,
	edad: Number ,
})

const crear = async () => {
	const user = new User ({ username: 'ariass',edad: 20})
	const savedUser = await user.save()
	console.log(savedUser)

}

//crear()

const buscarTodo = async () => {
	const users = await User.find()
	console.log(users)
}


//buscarTodo()

const buscar = async () => {
	const user = await User.find({ username : 'lautaro'})
	console.log(user)
}

//buscar()

const buscarUno = async () => {
	const user = await User.findOne({ username: 'lautaro'})
	console.log(user)

}

//buscarUno()


const actualizar = async () => {
	const user = await User.findOne({ username: 'lautaro'})
	console.log(user)
	user.edad = 25
	await user.save()
}

//actualizar()


 const eliminar = async () => {
 	const user = await User.findOne({ username: 'ariass'})
 	console.log(user)
 	if (user) { 
 	await user.deleteOne()
   }
 }
 

 //eliminar()