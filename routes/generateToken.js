const jwt = require('jsonwebtoken');
const userModel = require('models/user');
const config = require('config.json');

module.exports = generateToken;

function generateToken (req, res) {

	//Si no hay propiedad secret
	if (!req.body.hasOwnProperty('name') ||
		!req.body.hasOwnProperty('secret')) {
		res.sendStatus(401);
		return;
	}

	console.log(req.body);

	userModel.findOne({
		name: req.body.name,
		secret: req.body.secret
	}).then(user => {
		console.log(user);
		var token = jwt.sign({id: user._id}, config.jwtSecret);
		res.send({token: token});
	}).catch (err => {
		console.log(err);
		res.sendStatus(500);
	});

}