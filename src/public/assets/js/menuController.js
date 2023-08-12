

const reservarVehiculos=()=>{
    window.location.href = "vehiculos.html";
};


const obtenerPropiedades = async () => {
	const respuesta = await fetch("http://localhost:3001/propiedad", {
		method: "get",
	});
	propiedades = await respuesta.json();
	console.log("propiedades", propiedades);
	renderizarPropiedades();
};

obtenerPropiedades();

 const renderizarPropiedades= () =>{  

   document.getElementById("idRendCasa").innerHTML= "";
   for( i=0; i<propiedades.length ;i++){
      document.getElementById("idRendCasa").innerHTML += 
        `
        
        <div class="col-3 casa"><!-- -Esto es lo que se va a reenderizar----------------- -->
        <div class="card">
          <img src="${propiedades[i].urlImagen}" class="imgCar" alt="...">
          <div class="tarjeta" class="card-body">
            <div class="info">
                <i class="fa-solid fa-location-dot"></i>
                <h5 class="card-title">Tegucigalpa, Honduras</h5>
            </div>
            <div class="info">
                <i class="fa-solid fa-money-bill"></i>
                <p class="p-card card-text">${propiedades[i].precioPorNoche} $</p>
            </div>
            <div class="info">
                <i class="fa-solid fa-bed"></i>
                <p class="p-card card-text"> Numero de habitaciones: ${propiedades[i].numeroHabitaciones}</p>
            </div>
            <div>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <div class="boton">
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                ver casa
              </button>
              <!-- <a href="factura.html" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
        </div>
      </div>
         `

    }

}
