let clientes2 = [];


const obtenerValores = () => {
    let nombre 		=   document.querySelector('#nombre').value;
    let apellido 	=   document.querySelector('#apellido').value;
    let correo 		=   document.querySelector('#correo').value;
    let contraseña 	=   document.querySelector('#password').value;
    // console.log(document.querySelector('#nombre').value);
    if ((nombre != "")&&(apellido != "")&&(correo != "")&&(contraseña != "")){
        crearCliente(nombre, apellido, correo, contraseña);
        // window.location.href = "restaurantes2.html";
    }else{
        console.log('Uno de los datos no ha sido llenado');
    }
}

const crearCliente = async (nombre, apellido, correo, contraseña) => {
	const respuesta = await fetch(`http://localhost:2023/clientes`,
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
                contraseña: contraseña 
			}),
		}
	);
	const resJSON = await respuesta.json();
	console.log('Respuesta de agregar un cliente',resJSON);
	obtenerClientes3();
};



const obtenerClientes3 = async () => {
	const respuesta = await fetch("http://localhost:2023/clientes", {
		method: "get",
	});
	clientes2 = await respuesta.json();
	console.log("clientes", clientes2);
	comparar();
};


const comparar=()=>{
	clientes2.forEach(element => {
        if((element.correo == document.querySelector('#correo').value)&&(element.contraseña == document.querySelector('#password').value)){
            // console.log('usuario aceptado');
            localStorage.setItem("cliente", element._id);
            window.location.href = "restaurantes2.html";
            // console.log('usuario aceptado');
        }
    });
    // console.log(clientes[0].correo)
}
