function calcularFactura(precios, cupon, envio){
    let subtotal = 0;
    let descuento = 0;
    let costofinal = 0;

    for (let i=0 ; i < precios.length; i++){
        subtotal = subtotal + precios[i];
    }

    let descuentoCupon = 0;
    let costoEnvio = 0;

    if (cupon === "DESC10"){
        descuentoCupon = subtotal * 0.10;
    }
     else if (cupon === "DESC20" && subtotal >= 200000){
        descuentoCupon = subtotal * 0.20;
    }                   
     else if (cupon === "FREESHIP"){
        descuentoCupon = 0;
     }
        
     let baseIva = subtotal - descuentoCupon;
        let iva = Math.round(baseIva * 0.19);
        let total = subtotal - descuentoCupon + iva;

        console.log("SUBTOTAL", subtotal);
    console.log("DESCUENTO", descuentoCupon);
    console.log("IVA", iva);
    console.log("TOTAL", total);


}


console.log("--- PRUEBA 1: Cupón DESC20 (Debe aplicar porque es > 200k) ---");

calcularFactura([150000, 100000], "DESC20", 15000);