
// Comentario de una linea

/**
 * Comentario multilinea
 */

console.log("Hola Mundo");


// Variables

let numero1 = 45;
let numero2 = 39;
let suma, resta, multiplicacion;


const pi = 3.14156;

let estado = true;

let numero3=78;

let direccion = "CALLE 11 # 40-69";


numero3 = 125;


console.log(numero1);
console.log(numero2);
console.log(pi);
console.log(estado);
console.log(numero3);
console.log(direccion);


suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;


console.log(suma)

// Concatenar valores

console.log('EL PRIMER VALOR ES: ' + numero1);
console.log('EL SEGUNDO VALOR ES: ' + numero2);
console.log('LA SUMA DE ' + numero1 + ' Y ' + numero2 +' ES: ' + suma);
console.log('LA SUMA DE ' , numero1 , ' Y ' , numero2 ,' ES: ' , suma);

// Literal Template
console.log(`LA SUMA DE ${numero1} Y ${numero2} ES: ${suma}`);
console.log(`LA RESTA DE ${numero1} Y ${numero2} ES: ${resta}`);
console.log(`LA MULTIPLICACION DE ${numero1} Y ${numero2} ES: ${multiplicacion}`);

let edad = 18;
if(edad >=18){
    console.log("ES MAYOR DE EDAD");
}else{
    console.log("ES MENOR DE DAD");
}


// Operador Ternario solo una condicion para evalaur
let res = (edad>=18)?"Es mayor de edad":"Es menor de edad"; console.log(res)

// Para el operador if las dos funciones deben ser verdaderas, caso contario al l que solo con una 
// funcion puede desarollarse.

// Estructura del Switch Case 

let dia =2; /*Variable*/

switch(dia) {
case 1: console.log("Imprimir Lunes")
break;

case 2: console.log("Imprimir Martes")
break;

case 3: console.log("Imprimir Miercoles")
break;

case 7: console.log("Dia no existe")
break;

}

let operador ="+"
switch(operador) {

case"+":("Sumar")
break;

case"*":("No es suma, se multiplicara")
break;

case"/":("se divide")
break;

default: console.log("Operador n existe");

}


// CONVERTIDOR

// // Tasas de cambio
// const TASA_EURO = 4728;
// const TASA_DOLAR = 4293;
// const TASA_LIBRA = 5601;

// // Solicitar la cantidad a convertir
// let cantidad = prompt("Digite la cantidad a convertir:");


//     //  opciones de conversión
//     let opcion = prompt("Seleccione la moneda a la que quiere convertir:\n1. Euro (EUR)\n2. Dólar (USD)\n3. Libra esterlina (GBP)");


//     switch (opcion) {
//     case "1":
//     let euros = cantidad / TASA_EURO;
//     console.log(cantidad + " =" + euros / " euros.");
//     break;

//     case "2":
//     let dolares = cantidad / TASA_DOLAR;
//     console.log(cant,idad + "=" + dolares / " dólares.");
//     break;

//     case "3":
//     let libras = cantidad / TASA_LIBRA;
//     console.log(cantidad + "=" + libras / " libras esterlinas.");
//     break;

//     default:
//     console.log("Opción inválida.");
//     break;
//     }

// Estructuras repetitivas (FOR)

// Incremento,


let tabla = prompt("Agrega un número para multiplicar");

    for (let i = 1; i <= 10; i++) {
        console.log(`${tabla} * ${i} = ${tabla * i}`);
    }

// // Decremento
// for(let j = 20; j>=1; j-2){
//     console.log(j)
// }

