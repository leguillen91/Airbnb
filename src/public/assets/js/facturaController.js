let nomvehiculo= localStorage.getItem("vehiculo");
//console.log(nomvehiculo);
let idPropiedadFactura = localStorage.getItem("propiedad");
console.log(localStorage.getItem("propiedad"));

const obtenerPropiedades = async () => {
	const respuesta = await fetch("http://localhost:3001/propiedad", {
		method: "get",
	});
	propiedades = await respuesta.json();
	console.log("propiedades", propiedades[1]);
	//renderizarPropiedades();
   
};
obtenerPropiedades();