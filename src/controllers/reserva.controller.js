const { TYPES } = require('mssql');
var getConection = require('../index');

const insertarRerserva = async (req,res) =>{
    const {fechaCheckIn, 
        fechaCheckOut, 
        cantidadPersonas,
        idPropiedad,
        idHuesped}=req.body;
    const pool = await getConection.conector();
    const result = await pool
    .request()
    .input('fechaCheckIn', TYPES.Date, fechaCheckIn)
    .input('fechaCheckOut', TYPES.Date, fechaCheckOut)
    .input('numeroHuespedes', TYPES.Int, cantidadPersonas)
    .input('idPropiedad', TYPES.Int, idPropiedad)
    .input('idHuesped', TYPES.Int, idHuesped)
    .query(`INSERT INTO reserva(
        fechaCheckIn, fechaCheckOut, numeroHuespedes, idPropiedad, idHuesped
    )
    values(
        @fechaCheckIn, @fechaCheckOut, @numeroHuespedes, @idPropiedad, @idHuesped
    )`
    );
    res.send('reserva insertado');
}

exports.insertarRerserva = insertarRerserva