//Ejercicio 1

function obtenerTop3(precios) {
    let primerprecio = 0;
    let segundoprecio = 0;
    let tercerprecio = 0;
    let cantidadElementos = precios.length;

    for (let i = 0; i < cantidadElementos; i++) {
        let Precioactual = precios[i];
        
        if (Precioactual > primerprecio) {
            tercerprecio = segundoprecio;
            segundoprecio = primerprecio;
            primerprecio = Precioactual;
        }
        else if (Precioactual > segundoprecio) {
            tercerprecio = segundoprecio;
            segundoprecio = Precioactual;
        }           
        else if (Precioactual > tercerprecio) {
            tercerprecio = Precioactual;
        }           
    
    }


    let podioPrecios = [primerprecio, segundoprecio, tercerprecio];
    
    let limite = Math.min(cantidadElementos, 3);
    
    return podioPrecios.slice(0, limite); 
}


// Prueba de la finción
let precios = [10, 5, 20, 15, 8];
let top3 = obtenerTop3(precios);
console.log(top3);  
