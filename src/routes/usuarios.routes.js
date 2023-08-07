var express = require('express');
var router = express.Router();
var usuarioController = require('../controllers/usuarios.controllers')

router.get('/', usuarioController.obtenerUsuarios);

module.exports = router;