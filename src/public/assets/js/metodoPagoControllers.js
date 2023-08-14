
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
    document.getElementById('metodoActual').innerHTML=`<option selected >Selecciona el Metodo</option>`;
    for (let i = 0; i < metodosdePago.length; i++) {
        document.getElementById('metodoActual').innerHTML+=
    ` <option "value="${i+1}">${metodosdePago[i].nombre}</option>`

    }
   
}

function mostrarTarjetas() {

    document.getElementById('contenedor-principal').style.display='block';
    
}

// var selectElemen = document.getElementById("metodoActual");
// var selecValue = selectElemen.value;
document.getElementById("metodoActual").addEventListener("change", function() {
    var selectElement = document.getElementById("metodoActual");
    var selectedValue = selectElement.value;
    //var selectedText = selectElement.options[selectElement.selectedIndex].text;
  
    //console.log("Opción seleccionada: " + selectedText + " (Valor: " + selectedValue + ")");
    console.log(selectedValue);
  });
// const obtenerMetddd = (o) => {
//     valormett = document.querySelector( `#password `).value
//     console.log(valormett);
// };


var checkbox1 = document.getElementById("flexCheckDefault");
var checkbox2 = document.getElementById("flexCheckChecked");

checkbox1.addEventListener("change", function() {
  if (checkbox1.checked) {
    checkbox2.checked = false;
    console.log("50% de la reserva");

    document.getElementById('tao').innerHTML=`Total a Pagar es: 50`; 
  }
});

checkbox2.addEventListener("change", function() {
  if (checkbox2.checked) {
    checkbox1.checked = false;
    console.log("total de la reserva");
    document.getElementById('tao').innerHTML=`Total a Pagar es: 100`; 
  }
});
