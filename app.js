//quiero tener una lista de compras
// hay smirnoff, baileys, gancia, fernet, campari
//primero quiero que me pregunte que cosas quiero
//que vaya sumando el total
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
    }
}

const descuentoRealizado = (total) => total * 0.80


let saldoActual = 0
let masCosas= 1
let precio = 0 
let saldoNuevo = 0

while (masCosas== 1) {
    let opcion = prompt("Elija que quiere comprar, seleccione con un numero lo que desee:\n1. Smirnoff $300\n2. Baileys $1000\n3. Gancia $500\n4. Fernet $700\n5. Campari $400")
    saldoActual= sumarAlCarrito(opcion, saldoActual)
    alert("Su saldo actual es de " + saldoActual)


    masCosas= Number(prompt("Quieres mas cosas? \n 1 si quiere mas \n 2 si no quiere mas"))
}

alert("El precio total de todos sus productos es de " + saldoActual)

let descuento = prompt("Introduzca un codigo de descuento si tiene disponible.\n (El codigo para el descuento es 4679 je)")

if(descuento == "4679"){
    alert("Se le ha realizado un 20% de descuento sobre su compra, el precio a pagar es de $"+ descuentoRealizado(saldoActual))
}
else{
    alert("El codigo de descuento que ha ingresado es invalido. Total a pagar: $"+ saldoActual)
}

alert("Gracias por comprar con nosotros!")



/* 
alert(prompt("Quiere comprar algo?"))

switch(siOno){
    case "si":

} */