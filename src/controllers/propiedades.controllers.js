const { TYPES } = require('mssql');
var getConection = require('../index');



const obtenerPropiedades = async (req, res) =>{
    const pool = await getConection.conector();
    const result = await pool.request().query('SELECT * FROM propiedad');
    // console.log(result.recordset);
    res.send(result.recordset);
}

exports.obtenerPropiedades = obtenerPropiedades;