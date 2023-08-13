let nomvehiculo= localStorage.getItem("vehiculo");
//console.log(nomvehiculo);
let idPropiedadFactura = localStorage.getItem("propiedad");
let hhh=  JSON.parse(idPropiedadFactura);
console.log(hhh);


const renderizaTargetaFactura= () =>{  
    document.getElementById("Factura").innerHTML= "";
   
        document.getElementById("Factura").innerHTML = 
        `  <img src="${hhh.urlImagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${hhh.nombre}</h5>
          <p class="card-text">S${hhh.descripcion}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Auto:no </li>
          <li class="list-group-item">Comida : no</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
          <a >Total:</a>
          <a > ${hhh.precioPorNoche}</a>
        </div>     
        `
    
}
renderizaTargetaFactura();
