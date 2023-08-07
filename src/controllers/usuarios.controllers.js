var getConection = require('../index');

const obtenerUsuarios = async (req, res) =>{
    const pool = await getConection.conector();
    const result = await pool.request().query('SELECT * FROM usuarios');
    console.log(result.recordset);
    res.send(result.recordset);
}

exports.obtenerUsuarios = obtenerUsuarios;