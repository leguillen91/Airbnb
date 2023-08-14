

veheiculos=[];
let nomCliente= localStorage.getItem("email");


const renderizaNombreUser= () =>{  

    document.getElementById("nombreUsee").innerHTML= ""; 
    document.getElementById("nombreUsee").innerHTML += 
        `
       ${ nomCliente}
        `
}
renderizaNombreUser();
console.log(localStorage.getItem("propiedad"));
const obtenerVehiculos = async () => {
	const respuesta = await fetch("http://localhost:3001/vehiculos", {
		method: "get",
	});
	vehiculos = await respuesta.json();
    veheiculoSeleccionado=vehiculos;
	console.log("vehiculos", vehiculos);
    renderizaVehiculos();
};



const renderizaVehiculos= () =>{  

    document.getElementById("idparaRendVehi").innerHTML= "";
    for( i=0; i<vehiculos.length;i++){
        document.getElementById("idparaRendVehi").innerHTML += 
        `
        <div  class="col-md-3 border-primary">
        <div class="card mb-4">
          <img src="${vehiculos[i].urlImagen}" class="imgCar" alt="Vehicle 1">
          <div class="card-body">
            <h5 value="${vehiculos[i].idModelo}" class="card-title text-black">${vehiculos[i].marca} ${vehiculos[i].modelo}</h5>
            <p class="card-text text-black">${vehiculos[i].tipoVehiculo}</p>
            <p class="card-text text-black">Precio por día: L.${vehiculos[i].precioDia}</p>
            <button onclick="agregarVehiculo(${vehiculos[i].id})" type="button" class="btn btn-primary">Agregar</button>
          </div>
        </div>
    </div>
        `

    }

}
obtenerVehiculos();


const pasarFactura=(m)=>{
    //propiedades[o].id;
    localStorage.setItem("vehiculo", vehiculos[m]);
   // window.location.href = "factura.html";
};




const obtenerMarca = async () => {
	const respuesta = await fetch("http://localhost:3001/vehiculos/marca", {
		method: "get",
	});
	marca = await respuesta.json();
	console.log("marca", marca);
    //renderizaVehiculos();
};

obtenerMarca();

const obtenerModelo = async () => {
	const respuesta = await fetch("http://localhost:3001/vehiculos/modelo", {
		method: "get",
	});
	modelo = await respuesta.json();
	console.log("marca", modelo);
    //renderizaVehiculos();
};

obtenerModelo();

const obtenerTipoVe = async () => {
	const respuesta = await fetch("http://localhost:3001/vehiculos/modelo", {
		method: "get",
	});
	tipoVeh = await respuesta.json();
	console.log("marca", tipoVeh );
    //renderizaVehiculos();
};

obtenerTipoVe();


  




