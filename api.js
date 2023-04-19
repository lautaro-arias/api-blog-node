const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.controller')
const app = express()
const port = 3000

	app.use(express.json())
	mongoose.connect('mongodb+srv://ariass:43354316@cluster0.resfzpb.mongodb.net/blog?retryWrites=true&w=majority')
	
	
	app.get('/users',user.list)               //info
	app.post('/users',user.create)             //create user
	app.get('/users/:id',user.get)             // bucar en la lista un elemento
	app.put('/users/:id',user.update) 
	app.patch('/users/:id',user.update)               //actualizacion 
	app.delete('/users/:id',user.destroy)             //borar				
	
	app.use(express.static('client'))
	app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname });
   });

	app.get('*',(req,res) => {
		res.status(404).send('wrong route')
	})
	app.listen(port, () => {
		console.log('api start')                  //node.apijs
	})