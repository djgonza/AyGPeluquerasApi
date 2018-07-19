const ImageModel = require('models/image');

module.exports = saveImage;

/* Functions */

function saveImage (req, res) {

	console.log("token", req.token);

	/* Validaciones */
	if (
		!req.body.hasOwnProperty('name') ||
		!req.body.hasOwnProperty('path') ||
		!req.body.hasOwnProperty('size') ||
		!req.body.hasOwnProperty('type')
		) {
		res.sendStatus(400);
		res.send("Petición no valida");
		return;
	}

	//Creamos el objeto imagen
	var image = new ImageModel({
		type: req.body.type,
		size: req.body.size,
		name: req.body.name,
		path: req.body.path,
		user: req.token.id
	});

	//Guardamos la imagen
	image.save()
	.then(createdImage => {
		res.send(createdImage);
	})
	.catch(err => {
		console.log(err);
		res.send(err);
	})
	

}

