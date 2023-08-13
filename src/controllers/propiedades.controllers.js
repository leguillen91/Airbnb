const { TYPES } = require('mssql');
var getConection = require('../index');



const obtenerPropiedades = async (req, res) =>{
    const pool = await getConection.conector();
    const result = await pool.request().query('select prd.*, c.nombre as city, dp.nombre as departamento, p.nombre as pais from propiedad as prd join direcciones as d on prd.idDireccion = d.id join ciudad as c on d.idCiudad = c.id join departamento as dp on c.idDepartamento = dp.id join pais as p on dp.idPais = p.id ');
    // console.log(result.recordset);
    res.send(result.recordset);
}

exports.obtenerPropiedades = obtenerPropiedades;