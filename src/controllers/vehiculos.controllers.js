const { TYPES } = require('mssql');
var getConection = require('../index');

const obtenerVehiculos = async (req, res) =>{
    const pool = await getConection.conector();
    const result = await pool.request().query('select v.*, md.nombre as modelo, mc.nombre as marca, tv.nombre as tipoVehiculo from vehiculo as v join tipoVehiculo as tv on v.idTipoVehiculo =tv.id join modelo as md on v.idModelo = md.id join marca as mc on md.idMarca = mc.id ');
    // console.log(result.recordset);
    res.send(result.recordset);
}


exports.obtenerVehiculos = obtenerVehiculos;


const obtenerTipoVehoculo = async (req, res) =>{
    const pool = await getConection.conector();
    const result = await pool.request().query('SELECT * FROM tipoVehiculo');
    // console.log(result.recordset);
    res.send(result.recordset);
}

exports.obtenerTipoVehoculos = obtenerTipoVehoculo;

const obtenerModeloVehiculo = async (req, res) =>{
    const pool = await getConection.conector();
    const result = await pool.request().query('SELECT * FROM modelo');
    // console.log(result.recordset);
    res.send(result.recordset);
}

exports.obtenerModeloVehiculo = obtenerModeloVehiculo;


const obtenerMarcaVehiculo = async (req, res) =>{
    const pool = await getConection.conector();
    const result = await pool.request().query('SELECT * FROM marca');
    // console.log(result.recordset);
    res.send(result.recordset);
}

exports.obtenerMarcaVehiculo = obtenerMarcaVehiculo;