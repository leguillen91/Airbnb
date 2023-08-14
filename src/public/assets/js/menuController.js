
let idCliente= localStorage.getItem("cliente");
let nomCliente= localStorage.getItem("email");
var inputFI;
var inputFf;

const reservarVehiculos=(o)=>{
    //propiedades[o].id;
    localStorage.setItem("propiedad", JSON.stringify(propiedades[o]));
    window.location.href = "vehiculos.html";
};

const renderizaNombreUser= () =>{  

    document.getElementById("nombreUser").innerHTML= ""; 
    document.getElementById("nombreUser").innerHTML += 
        `
       ${ nomCliente}
        `
}
renderizaNombreUser();


const obtenerPropiedades = async () => {
	const respuesta = await fetch("http://localhost:3001/propiedad", {
		method: "get",
	});
	propiedades = await respuesta.json();
	console.log("propiedades", propiedades);
	renderizarPropiedades();
   
};


// renderizarPropiedad();
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
                <h5 class="card-title">${propiedades[i].city}</h5>
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
              <button value="${i}"  id="idmod" type="button" class="btn btn-primary" data-bs-toggle="modal" onclick="renderizaCasasModal(${i})" data-bs-target="#exampleModal">
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


const renderizaCasasModal= (k) =>{  
//`modal${k}`
    

    document.getElementById("exampleModal").innerHTML= "";
    var p= document.getElementById("idmod").value;
        document.getElementById("exampleModal").innerHTML= 
        `
        <div  class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${propiedades[k].nombre}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="img-calendario">
              <img  id="lolo${k}"src="${propiedades[k].urlImagen}" class="card-img-top imgModal" alt="...">
              <div>
                <div class="img-calendario">
                  <div>
                      <label for="">Fecha inicio</label>
                      <input id="Finicio" type="date" class="input-calendario" onchange="calcularPresioEstadia()">
                  </div>
                  <div>
                    <label for="">Fecha fin</label>
                    <input disabled id="Ffinal" type="date" class="input-calendario" onchange="calcularPresioEstadia()">
                  </div>
                </div>
                <div>
                  <label for="">Cantidad de Personas</label>
                  <input type="number" class="input-calendario">
                </div>
              </div>
            </div>
            <div> ${propiedades[k].descripcion}</div>
            <div> Ubicada en: ${propiedades[k].colonia}, ${propiedades[k].calle}, numero de casa ${propiedades[k].numCasa} </div>
            <div> Cuenta con ${propiedades[k].numeroCamas} camas, y parqueo para ${propiedades[k].capacidadParqueo} vehiculos </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCalendario">
                reservar
            </button>
          </div>
        </div>
      </div>
   
        `

        inputFI = document.getElementById('Finicio');
        inputFf = document.getElementById('Ffinal');
        var fRestricion = new Date();
        fRestricion.setDate(fRestricion.getDate() - 1);
        inputFI.setAttribute("min", fRestricion.toISOString().split('T')[0]);
}

const calcularPresioEstadia = () =>{
  let Finicio = document.getElementById('Finicio').value;
  let Ffinal = document.getElementById('Ffinal').value;
  if (Finicio != '' && Ffinal == ''){
    inputFf.removeAttribute('disabled');
    Ffinal = Finicio;
    inputFf.setAttribute("min", Finicio)
    // console.log(Finicio)
  }
  // console.log(Ffinal)
  if (Ffinal > Finicio){
    let nuevoFinicio = new Date(Finicio);
    let nuevoFfinal = new Date(Ffinal);
    let difmilisegundos = Math.abs(nuevoFinicio - nuevoFfinal);
    let milisegundosDia = 24 * 60* 60* 1000;
    let difDias = (difmilisegundos/milisegundosDia) + 1;
    // console.log(difDias);
  }else{
    console.log('No puedes ingresar fecha final antes que la fecha inicio')
  }
}


{/* <button type="button" class="btn btn-primary" onclick="reservarVehiculos(${k})">alquilar Vehiculo</button> */}

