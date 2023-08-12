const { TYPES } = require('mssql');
var getConection = require('../index');

const obtenerVehiculos = async (req, res) =>{
    const pool = await getConection.conector();
    const result = await pool.request().query('SELECT * FROM vehiculo');
    // console.log(result.recordset);
    res.send(result.recordset);
}


exports.obtenerVehiculos = obtenerVehiculos;