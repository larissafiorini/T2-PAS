index = (app) => {
	app.get('/', req, res) => {
		res.json({status:'ok'});
	}
}

exports = index;