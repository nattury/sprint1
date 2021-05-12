
let cantidad = 0;
let descuento = 0;
let total = 0;

function verificarDato() {
    cantidad = document.getElementById("cantidadCompus").value;
    if (isNaN(cantidad)) {
        alert("😳 Ups... " + cantidad + " no es un número.");
    } else {
        if (cantidad < 1) {
            alert("😳 El número mínimo es 1, ingrese de nuevo");
        } else {
            if (cantidad % 1 == 0) {
                return orden();
            } else {
                alert("😳 Por favor solo ingrese números enteros");
            }
        }
    }

}


const orden = () => {
    const compra = cantidad * 820000;
    if (compra >= 1640000 && compra <= 3280000) {
        descuento = compra * 0.15;
        total = compra - descuento;
        document.getElementById("valorCompra").value = compra;
        document.getElementById("valorDescuento").value = descuento;
        document.getElementById("totalPagar").value = total;
        document.getElementById("descuentoFinal").innerHTML = " Su descuento fue del 15%";
        console.log("descuento 15%");
    } else {
        if (compra > 3280000 && compra <= 6560000) {
            let descuento = compra * 0.25;
            total = compra - descuento;
            document.getElementById("valorCompra").value = compra;
            document.getElementById("valorDescuento").value = descuento;
            document.getElementById("totalPagar").value = total;
            document.getElementById("descuentoFinal").innerHTML = "Su descuento fue del 25%";
        } else {
            if (compra > 6560000 && compra <= 9840000) {
                descuento = compra * 0.35;
                total = compra - descuento;
                document.getElementById("valorCompra").value = compra;
                document.getElementById("valorDescuento").value = descuento;
                document.getElementById("totalPagar").value = total;
                document.getElementById("descuentoFinal").innerHTML = "Su descuento fue del 35%";
            } else {
                document.getElementById("valorCompra").value = compra;
                document.getElementById("valorDescuento").value = 0;
                document.getElementById("totalPagar").value = compra;
                document.getElementById("descuentoFinal").innerHTML = "Lo sentimos, su compra no tiene descuento";
            }
        }
    }
}


// const orden = () => {
//     const compra = cantidad * 820000;
//     const total = compra - descuento;
//     let compraValue = document.getElementById("valorCompra").value = compra;
//     let totalValue = document.getElementById("totalPagar").value = total;
//     if (compra >= 1640000 && compra <= 3280000) {
//         descuento = compra * 0.15;
//         document.getElementById("valorDescuento").value = descuento;
//         document.getElementById("descuentoFinal").innerHTML = " Su descuento fue del 15%";
//         console.log("descuento 15%");
//     } else {
//         if (compra > 3280000 && compra <= 6560000) {
//             descuento = compra * 0.25;
//             document.getElementById("valorDescuento").value = descuento;
//             document.getElementById("descuentoFinal").innerHTML = "Su descuento fue del 25%";
//         } else {
//             if (compra > 6560000 && compra <= 9840000) {
//                 descuento = compra * 0.35;
//                 document.getElementById("valorDescuento").value = descuento;
//                 document.getElementById("descuentoFinal").innerHTML = "Su descuento fue del 35%";
//             } else {
//                 document.getElementById("valorDescuento").value = 0;
//                 document.getElementById("descuentoFinal").innerHTML = "Lo sentimos, su compra no tiene descuento";
//             }
//         }
//     }
// }

// return;

