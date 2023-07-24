const express = require('express');
const sql = require('mssql');
const cors=require('cors');
const bodyParser= require('body-parser');
const puerto=3001;


const app = express();

//mildrewers
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req, res) => {
    res.send('Probando backend de Airbnb');
});

app.listen(puerto, () => {
	console.log(`Servidor Levantado en https://localhost:${puerto}`);
});


