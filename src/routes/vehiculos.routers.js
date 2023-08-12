var express = require('express');
var router = express.Router();
var vehiculosController = require('../controllers/vehiculos.controllers')

router.get('/', vehiculosController.obtenerVehiculos);

module.exports = router;