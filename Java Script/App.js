
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


// let tabla = prompt("Agrega un número para multiplicar");

//     for (let i = 1; i <= 10; i++) {
//         console.log(`${tabla} * ${i} = ${tabla * i}`);
//     }

// // Decremento
// for(let j = 20; j>=1; j-2){
//     console.log(j)
// }

// Mas ejercicios de FOR

// 1

// let n = parseInt(prompt("introduce un numero positivo"))
// let sum =0

// for(let i=1; i <=n; i++) {

//     sum +=n

// }    

// console.log(`La suma de los numeros del 1 al ${n} es: ${sum} `)

// 2

// let tabla = parseInt(prompt("Agrega un número para multiplicar"));

//     for (let i = 1; i <= 10; i++) {
//     for(let j = 1; j<= 10; j++ ){
//     console.log(`${i} * ${j} = ${i * j}`)
    
// }
// console.log(" ")
// }

// 3

// let sum = 0;   

// for (let i = 1; i <= 199; i += 2) {  
//     sum += i; 
// }  

// console.log(`La suma de los números impares del 1 al 99 es: ${sum}`); 

// // let n=1;
// // let sum = 0

// // while(n>0){
// // n = parseInt(prompt("Ingrese un numeros positivos para sumarlos y finalice para obtener el resultado digitando un numero negativo"))

// // if(n>0){
// // sum+=n}
// // }

// console.log(`lo que suman los numeros ingresados es:${(sum)}`)

// Desarollar menu de Opciones


let Estado= true;
let coseno, seno, raiz, numero;

// opciones realizar un calculo matematico
// 1. realizar
// 2. Seno
// 3. Coseno

// while(Estado){

//     menu = (parseInt(prompt(`SELECCIONE UN OPCION \n 1. Raiz \n 2. Seno \n 3. Coseno \n 4. Salir`)));
    
//     switch(menu){
    
//       case 1: alert("Selecciono Raiz");
    
//       numero = (parseInt(prompt(`INGRESE EL NUMERO PARA CALCULAR LA RAIZ`)));
       
//       raiz = Math.sqrt(numero);
    
//       alert(`LA RAIZ DE ${numero} ES: ${raiz}`);
    
//       break;
//     case 2 : alert("Selecciono Seno N1");
    
//       numero = (prompt(`INGRESE EL NUMERO PARA CALCULAR EL SENO`));
       
//       seno = Math.sin(numero);
    
//       alert(`EL SENO DE ${numero} ES: ${seno}`);
    
//       break;
    
//       case 3 : alert("Selecciono Coseno N1");
    
//       numero = (prompt(`INGRESE EL NUMERO PARA CALCULAR EL COSENO`));
       
//       coseno = Math.sin(numero);
    
//       alert(`EL COSENO DE ${numero} ES: ${coseno}`);
    
//       break;
    
//       case 4: alert("SALIENDO....")
//       estado = falso;
//       break;
//     default:
//         alert("LA OPCION NO EXISTE");
    
 
//     }
//     }


// //   let numeroAleatorio = Math.floor(Math.random() * 50) + 1;

// //  while (true) {
// //   let N = prompt("Adivina el número entre 1 y 50, Buena suerte:");
  
// //   if (isNaN(N)) {
// //     alert("Ingrese un número válido")
// //   }

// //   if (N < 1 ||  N > 50) {
// //     alert("Ingrese un número entre 1 y 50")
// //   }
  
// //   if (N = numeroAleatorio) {
// //     alert("Adivinaste!");
// //     break;

// //   } 
  
// //   if (N < numeroAleatorio) {
// //     alert("No, el número es mayor");
// //   } 
  
// //   else {
// //     alert("No, el número es menor");
// //   }
// // }
