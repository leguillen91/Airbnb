let usuarios2 = [];


const obtenerValores = () => {
    let nombre 			=   document.querySelector('#nombre').value;
    let apellido 		=   document.querySelector('#apellido').value;
    let correo 			=   document.querySelector('#correo').value;
    let contrasenia 	=   document.querySelector('#password').value;
    // console.log(document.querySelector('#nombre').value);
    if ((nombre != "")&&(apellido != "")&&(correo != "")&&(contrasenia != "")){
        crearUsuario(nombre, apellido, correo, contrasenia);
        // window.location.href = "restaurantes2.html";
    }else{
        console.log('Uno de los datos no ha sido llenado');
    }
}

const crearUsuario = async (nombre, apellido, correo, contrasenia) => {
	const respuesta = await fetch(`http://localhost:3001/usuarios`,
		{
			method: "post",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				nombre: nombre,
				apellido: apellido,
				correo: correo,
                contrasenia: contrasenia 
			}),
		}
	);
	// console.log('usuario insertado exitosa mente');
	// const resJSON = await respuesta.json();
	// console.log('Respuesta de agregar un cliente',resJSON);
	console.log('usuario insertado exitosa mente');
	obtenerUsuarios3();
};



const obtenerUsuarios3 = async () => {
	const respuesta = await fetch("http://localhost:3001/usuarios", {
		method: "get",
	});
	usuarios2 = await respuesta.json();
	console.log("usuarios", usuarios2);
	comparar();
};


const comparar=()=>{
	usuarios2.forEach(element => {
        if((element.correo == document.querySelector('#correo').value)&&(element.contraseña == document.querySelector('#password').value)){
            // console.log('usuario aceptado');
            localStorage.setItem("usuario", element._id);
            // window.location.href = "restaurantes2.html";
            // console.log('usuario aceptado');
        }
    });
    // console.log(clientes[0].correo)
}