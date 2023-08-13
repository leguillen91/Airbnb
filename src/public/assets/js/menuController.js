

const reservarVehiculos=()=>{
    window.location.href = "vehiculos.html";
};


const renderizarPropiedad = async () => {
	const respuesta = await fetch("http://localhost:3001/propiedad", {
		method: "get",
	});
	propiedades = await respuesta.json();
	console.log("propiedades", propiedades);
	
};

renderizarPropiedad();
