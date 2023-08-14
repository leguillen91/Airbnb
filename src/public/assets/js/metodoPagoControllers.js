
var metodos='';


const obtenerMetodoPago = async () => {
	const respuesta = await fetch("http://localhost:3001/metodoPago", {
		method: "get",
	});
	metodosdePago = await respuesta.json();
    console.log("Metodos de Pago", metodosdePago);
    listaMetodosPago();
};

obtenerMetodoPago();


function listaMetodosPago() {
    document.getElementById('metodoActual').innerHTML=`<option selected>Selecciona el Metodo</option>`;
    for (let i = 0; i < metodosdePago.length; i++) {
        document.getElementById('metodoActual').innerHTML+=
    ` <option value="${i+1}">${metodosdePago[i].nombre}</option>`
    
    }
    
}