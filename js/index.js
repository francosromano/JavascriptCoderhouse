alert("¡Hola! Completá los datos para ingresar")

/********************* Alert de ingreso (Variables + constantes + Do..While + Condicionales) ************************ */

const COMISION = "49810"
let ingreso
let continuar

do {
    ingreso = prompt("Número de comisión");

    if (ingreso == COMISION)
        alert("Bienvenido Milton Salazar!")

    else {
        alert("Número de comisión incorrecto");

        continuar = prompt("¿Desea seguir intentando?").toLowerCase()

        if (continuar === "no")
            alert("¡En otra ocasión lo intentaremos!")
    }
}
while (continuar === "si")


/*********************************  Calculadora  (Funciones + Switch) ************************************/

function sumar() {
    const NUMERO_A =parseInt(prompt("Ingrese el primer número para sumar"));
    const NUMERO_B = parseInt(prompt("Ingrese el segundo número para sumar"));
    const RESULTADO = NUMERO_A + NUMERO_B
    console.log("El resultado de " + NUMERO_A + " + " + NUMERO_B + " es " + RESULTADO)
}

function restar() {
    const NUMERO_A = parseInt(prompt("Ingrese el primer número para restar"));
    const NUMERO_B = parseInt(prompt("Ingrese el segundo número para restar"));
    const RESULTADO = NUMERO_A - NUMERO_B
    alert(NUMERO_A + " - " + NUMERO_B + " = " + RESULTADO)
    console.log("El resultado de " + NUMERO_A + " - " + NUMERO_B + " es " + RESULTADO)
}

function multiplicar() {
    const NUMERO_A = parseInt(prompt("Ingrese el primer número para multiplicar"));
    const NUMERO_B = parseInt(prompt("Ingrese el segundo número para multiplicar"));
    const RESULTADO = NUMERO_A * NUMERO_B
    alert(NUMERO_A + " x " + NUMERO_B + " = " + RESULTADO)
    console.log("El resultado de " + NUMERO_A + " x " + NUMERO_B + " es " + RESULTADO)
}

function dividir() {
    const NUMERO_A = parseInt(prompt("Ingrese el primer número para dividir"));
    const NUMERO_B = parseInt(prompt("Ingrese el segundo número para dividir"));
    const RESULTADO = NUMERO_A / NUMERO_B
    alert(NUMERO_A + " / " + NUMERO_B + " = " + RESULTADO)
    console.log("El resultado de " + NUMERO_A + " / " + NUMERO_B + " es " + RESULTADO)
}

function IVA() {
    const NUMERO_A = parseFloat(prompt("Ingrese el precio para calcular IVA (21%)"))
    const RESULTADO = NUMERO_A * 1.21
    alert("El precio con IVA es de $" + RESULTADO)
    console.log("El resultado del calculo del IVA es de "+ RESULTADO)
}

function descuento() {
    const NUMERO_A = parseFloat(prompt("Ingrese el precio para calcular el descuento (15%)"))
    const RESULTADO = NUMERO_A - (NUMERO_A * 0.15)
    alert("El precio con descuento es de $" + RESULTADO)
    console.log("El resultado del calculo del descuento es de "+ RESULTADO)
}

let opcion = parseInt(prompt("¿Qué operación quiere realizar? \n 1-Suma \n 2-Resta \n 3-Multiplicación \n 4-División \n 5-Calcular IVA (21%) \n 6-Calcular descuento (15%) \n 7-Salir "))

while (opcion !== 7) {
    switch (opcion) {
        case 1:
            sumar()
            break;
        case 2:
            restar()
            break;
        case 3:
            multiplicar()
            break;
        case 4:
            dividir()
            break;
        case 5:
            IVA()
            break;
        case 6:
            descuento()
            break;
        default:
            alert("Opción incorrecta")
            break;
    }

    opcion = parseInt(prompt("¿Qué operación quiere realizar? \n 1- Suma \n 2-Resta \n 3-Multiplicación \n 4-División \n 5-Calcular IVA (21%) \n 6-Calcular descuento (15%) \n 7-Salir "))

}

if (opcion == 7) {
    alert("Muchas gracias por participar")
}

alert("En el caso de haber realizado alguna operación, los resultados quedaron grabados en la consola.")
alert("¡Hasta la próxima!")

