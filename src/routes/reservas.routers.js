var express = require('express');
var router = express.Router();
var reservasController = require('../controllers/reserva.controller')

// router.get('/', reservasController.obtenerUsuarios);
router.post('/', reservasController.insertarRerserva);
// router.post('/usuarios', reservasController.insertarUsuario);

module.exports = router;