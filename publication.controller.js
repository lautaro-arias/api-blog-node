const Publications = require('./publication.model')

const Publication = {
	list: async (req, res) => {
		const publications = await Publications.find()
		res.status(200).send(publications)
	},
	create: async (req, res) => {
		const publication = new Publications(req.body)
		await publication.save()
		res.status(200).send('create post!')
	},
	update: async (req, res) => {
		res.status(200).send('updating')
	},
	destroy: async (req, res) => { 
		const { id } = req.params
		const publication = await Publications.findOne({ _id: id })
   	   	await publication.deleteOne()
		res.status(200).send(' delete :(')
	}
}

module.exports = Publication
