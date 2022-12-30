//quiero tener una lista de compras
// hay smirnoff, baileys, gancia, fernet, campari
//primero quiero que me pregunte que cosas quiero
//que vaya sumando el total
//que me pregunte si quiero seguir comprando cada vez que elijo algo
//que me pregunte si tengo un codigo de descuento
//luego que me pregunte si quiero hacer un envio
//y luego que me diga el total de todo



function sumarPrecio(saldoAnterior, saldoAñadir){
    return saldoAnterior += saldoAñadir
}

function sumarAlCarrito (num, saldoActual){
    switch(num){
        case "1":
            precio = 300
            return sumarPrecio(saldoActual,precio)
        case "2":
            precio = 1000
            return sumarPrecio(saldoActual,precio)

        case "3":
            precio = 500
            return sumarPrecio(saldoActual,precio)

        case "4":
            precio = 700
            return sumarPrecio(saldoActual,precio)

        case "5":
            precio = 400
            return sumarPrecio(saldoActual,precio)
        
        default:
            alert("No se ha agregado ningun producto debido a que la opcion que ha elegido es invalida.\nRecuerde que debe que usar numeros entre el 1 y el 5")
            return (saldoActual) 
    }
}


const descuentoRealizado = (total) => total * 0.80

function sigueComprando(){
    opcion= Number(prompt("Desea seguir comprando? \nEscriba 1 si desea seguir comprando. \nY 2 si no desea seguir comprando."))
    while(typeof opcion != "number"){
        opcion = ("La opcion no es valida, vuelva a intentarlo.\nRecuerde escribir 1 si desea seguir comprando y 2 si no desea ningun otro producto")
    }
    return opcion
}


let saldoActual = 0
let masCosas= 1
let precio = 0 
let saldoNuevo = 0


alert("Bienvenido a la tienda DrunkDwarf de bebidas alcoholicas.")

while (masCosas== 1) {
    let opcion = prompt("Elija que quiere comprar, seleccione con un numero lo que desee:\n1. Smirnoff $300\n2. Baileys $1000\n3. Gancia $500\n4. Fernet $700\n5. Campari $400")
    saldoActual= sumarAlCarrito(opcion, saldoActual)
    alert("El precio total en su carro de compras es de $" + saldoActual)
    masCosas= sigueComprando()
    

}

alert("El precio total de todos sus productos es de $" + saldoActual)

let descuento = prompt("Introduzca un codigo de descuento si tiene disponible.\n (El codigo para el descuento es 4679 je)")

if(descuento == "4679"){
    alert("Se le ha realizado un 20% de descuento sobre su compra, el precio final a pagar es de $"+ descuentoRealizado(saldoActual))
}
else{
    alert("El codigo de descuento que ha ingresado es invalido. Total a pagar: $"+ saldoActual)
}

alert("Gracias por comprar con nosotros!")