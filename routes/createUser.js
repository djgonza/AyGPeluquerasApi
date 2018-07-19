const UserModel = require('models/user');

module.exports = saveUser;

/* Functions */

function saveUser (req, res) {



	/* Validaciones */
	if (
		!req.body.hasOwnProperty('name') ||
		!req.body.hasOwnProperty('secret') 
		) {
		res.sendStatus(400);
		res.send("Petición no valida");
		return;
	}

	//Creamos el objeto imagen
	var user = new UserModel({
		name: req.body.name,
		secret: req.body.secret
	});

	//Guardamos la imagen
	user.save()
	.then(createdUser => {
		res.send("ok");
	})
	.catch(err => {
		console.log(err);
		res.send(err);
	})
	

}

