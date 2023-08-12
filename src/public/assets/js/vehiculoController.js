vahiculos=[];

const obtenerVehiculos = async () => {
	const respuesta = await fetch("http://localhost:3001/vehiculos", {
		method: "get",
	});
	vehiculos = await respuesta.json();
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
          <img src="${vehiculos[i].urlImagen}" class="card-img-top" alt="Vehicle 1">
          <div class="card-body">
            <h5 class="card-title text-black">KIA Morning</h5>
            <p class="card-text text-black">4 cilindros, motor 1.0 económico Manual</p>
            <p class="card-text text-black">Precio por día: L.${vehiculos[i].precioDia}</p>
            <button type="button" class="btn btn-primary">Agregar</button>
          </div>
        </div>
    </div>
        `

    }

}
obtenerVehiculos();
