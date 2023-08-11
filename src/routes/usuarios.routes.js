var express = require('express');
var router = express.Router();
var usuarioController = require('../controllers/usuarios.controllers')

router.get('/', usuarioController.obtenerUsuarios);
router.post('/', usuarioController.insertarUsuario);

module.exports = router;