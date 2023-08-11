const { TYPES } = require('mssql');
var getConection = require('../index');

const obtenerUsuarios = async (req, res) =>{
    const pool = await getConection.conector();
    const result = await pool.request().query('SELECT * FROM usuarios');
    // console.log(result.recordset);
    res.send(result.recordset);
}

exports.obtenerUsuarios = obtenerUsuarios;

const insertarUsuario = async (req,res) =>{
    const {nombre, apellido, correo, contrasenia}=req.body;
    const pool = await getConection.conector();
    const result = await pool
    .request()
    .input('nombre', TYPES.VarChar, nombre)
    .input('apellido', TYPES.VarChar, apellido)
    .input('correo', TYPES.VarChar, correo)
    .input('contrasenia', TYPES.VarChar, contrasenia)
    .query('INSERT INTO usuarios (nombre, apellido, correo, contrasenia) VALUES (@nombre, @apellido, @correo, @contrasenia)');
//    console.log('Usuario creado exitosamente');
   res.send('usuario creado');
}
exports.insertarUsuario = insertarUsuario;

