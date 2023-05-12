const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Publication = require('./publication.controller');
const { Auth,isAuthenticated } = require('./auth.controller');
const port = 3000;


mongoose.connect('mongodb+srv://ariass:43354316@cluster0.resfzpb.mongodb.net/blog?retryWrites=true&w=majority');
app.use(express.json());

app.get('/publications',isAuthenticated,Publication.list);
app.post('/publications',isAuthenticated, Publication.create);
app.put('/publications/:id',isAuthenticated, Publication.update);
app.patch('/publications/:id',isAuthenticated, Publication.update);
app.delete('/publications/:id',isAuthenticated, Publication.destroy);

app.post('/login', Auth.login);
app.post('/register', Auth.register);


app.use(express.static('client'));

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/index.html`);
});
	app.get('*',(req,res) => {
		res.status(404).send('wrong route');
});
	app.listen(port, () => {
		console.log('api start');   
});



