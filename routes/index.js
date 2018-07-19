const express = require('express');
const router = express.Router();

const jwtProtected = require('utilities/jwtProtected');

/* Users */
router.post('/users', require('./createUser'));

/* Tokens */
router.post('/token', require('./generateToken'));

/* Images */
router.get('/images', jwtProtected, require('./listImages'));
router.post('/images', jwtProtected, require('./saveImage'));
router.delete('/images', jwtProtected, require('./deleteImage'));

module.exports = router;