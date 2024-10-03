
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


// let Estado= true;
// let coseno, seno, raiz, numero;

// opciones realizar un calculo matematico
// 1. raiz
// 2. Seno
// 3. Coseno

// while(Estado){

// //     menu = (parseInt(prompt(`SELECCIONE UN OPCION \n 1. Raiz \n 2. Seno \n 3. Coseno \n 4. Salir`)));
    
// //     switch(menu){
    
// //       case 1: alert("Selecciono Raiz");
    
// //       numero = (parseInt(prompt(`INGRESE EL NUMERO PARA CALCULAR LA RAIZ`)));
       
// //       raiz = Math.sqrt(numero);
    
// //       alert(`LA RAIZ DE ${numero} ES: ${raiz}`);
    
// //       break;
// //     case 2 : alert("Selecciono Seno N1");
    
// //       numero = (prompt(`INGRESE EL NUMERO PARA CALCULAR EL SENO`));
       
// //       seno = Math.sin(numero);
    
// //       alert(`EL SENO DE ${numero} ES: ${seno}`);
    
// //       break;
    
// //       case 3 : alert("Selecciono Coseno N1");
    
// //       numero = (prompt(`INGRESE EL NUMERO PARA CALCULAR EL COSENO`));
       
// //       coseno = Math.sin(numero);
    
// //       alert(`EL COSENO DE ${numero} ES: ${coseno}`);
    
// //       break;
    
// //       case 4: alert("SALIENDO....")
// //       estado = falso;
// //       break;
// //     default:
// //         alert("LA OPCION NO EXISTE");
    
 
// //     }
// //     }


// // //   let numeroAleatorio = Math.floor(Math.random() * 50) + 1;

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

// let ac, acu, at;

// let r, lado, b , h;

// const (pi) = 3.1416;

// let opcion;

// let (estado) = true;

// do{

//   opcion = parseInt(prompt(`1. Area Circulo \n 2. Area del Cuadrado \n 3. Area del Triangulo \n 4. Salir`));
  

//   switch(opcion){


//     case 1: alert("Area del circulo");
//     // A = pi * r*r
//     r = parseFloat(prompt("Ingrese el valor del radio"));

//     ac = pi * (r*r);

//     alert(`El area del circulo es: ${ac}`);

//     break;
    
// case 2: alert("Area del cuadrado");

//    // A = lado * lado

//    lado = parseFloat(prompt("Ingrese el valor del lado"));

//    acu = (lado*lado);

//    alert(`El area del cuadrado es: ${acu}`);

//     break;

//     case 3: alert("Area del triangulo");

//     // A = B*H/2

//     b = parseFloat(prompt("Ingrese el valor de la base"));
//     h = parseFloat(prompt("Ingrese el valor de la altura"));

//     at = (b*h)/2;

//     alert(`El area del triangulo es: ${at}`);

//     break;
// case 4:
//       alert("SALIENDO.....");
//       estado = false;

//     break;

//     default: 
//     alert("Opcion no valida");


//   }

// while(estado);


// let a

// let KF, b

// let FC, c

// let FK, d

// let CK, e

// let CF, f


// let status = true;
// let opcion;


// do{

//   opcion = parseInt(prompt(` 1. Kelvin a Celsius \n 2. Kelvin a Fahrenheit \n 3. Fahrenheit a Celsius \n 4. Fahrenheit a Kelvin \n 5. Celsius a Kelvin \n 6. Celsius a Fahrenheit \n 7. Salir `));
  

//   switch(opcion){


//     case 1: alert("Kelvin a Celsius");
//     // C=K-273.15
//     a = parseFloat(prompt("Ingrese el valor en Kelvin"));

//     alert(`La conversion es igual a: ${KC(a)} Grados Celsius`);

//     break;

// case 2: alert("Kelvin a Fahrenheit");

//    // F= (9*(K-273.15)/5)+32

//    b = parseFloat(prompt("Ingrese el valor en Kelvin"));

//    alert(`La conversion es igual a: ${KF(b)} Grados Fahrenheit`);

//     break;

//     case 3: alert("Fahrenheit a celsius");

//     // C= (5*(F-32))/9

//     c = parseFloat(prompt("Ingrese el valor en Fahrenheit"));

//     alert(`La conversion es igual a: ${FC(c)} Grados Fahrenheit`);

//     break;

//     case 4: alert("Fahrenheit a Kelvin");

//     // K= ((5*(F-32))/9)+273.15

//     d = parseFloat(prompt("Ingrese el valor en Fahrenheit"));

//     alert(`La conversion es igual a: ${FK(d)} Grados Kelvin`);

//     break;

//     case 5: alert("Celsius a Kelvin");

//     // K= C+273.15

//     e = parseFloat(prompt("Ingrese el valor en Celsius"));

//     alert(`La conversion es igual a: ${CK(e)} Grados Kelvin`);

//     break;

//     case 6: alert("Celsius a Fahrenheit");

//     // F= (9*C)/5)+32

//     f = parseFloat(prompt("Ingrese el valor en Celsius"));

//     alert(`La conversion es igual a: ${CF(f)} Grados Fahrenheit`);

//     break;
    
// case 7:
//       alert("SALIENDO.....");
//       estado = false;

//     break;

//     default: 
//     alert("Opcion no valida")}}


// while(estado);

// function KC (a){
//     return a-273.15 
// }

// function KF (b) {
// return (9*(b-273.15)/5)+32;
// }

// function FC (c) {
//     return (5*(C-32))/9
//     }

// function FC (d) {
//     return ((5*(d-32))/9)+273.15
//     }

// function CK (e) {
//     return e+273.15
//     }

// function CF (f) {
//     return ((9*f)/5)+32
//     }

// EJERCICIO DE PRACTICA

// Dibujar un triángulo rectángulo con asteriscos. El usuario
// tecleará un valor entero, el script escribirá con asteriscos
// tantas líneas como diga ese número. Cada línea estará formada
// por una serie de asteriscos tan larga como diga el número de
// línea en el que está.
// Para separar una linea de la siguiente en console o en alert
// debes usar "\n". En este ejercicio usa console.log.


// let N = parseInt(prompt("Bienvenidos a esta interacción, para continuar digita un número para crear el triángulo en *"));

// for (let i = 1; i <= N; i++) {

// for (let j = 1; j <= i; j++) {

// triangulo += "*".repeat(i) + "\n"; ; 
// }
// }

// console.log(triangulo); 

// 2.>

// Crea un script que pida al usuario una contraseña. Si coincide con la clave definida
// en el script le devolverá el siguiente mensaje "Acceso concedido" de lo contrario le
// devolverá el mensaje "Acceso Denegado" . Si falla tres veces se visualizará el
// mensaje "Alerta, intruso tratando de acceder…"

// let password = "246810";
// let intentos = 3

// while (true) {
// let N = parseInt(prompt("Ingrese su clave, recuerde que son numeros dentro del 1 al 10, siendo estos numeros en escala de 2 en dos"));
  
// if (isNaN(N)) {
// alert("Ingrese un número válido"); continue
//  }

//  if (N === password) {
// alert("Acceso concedido");
// break;

// } 
  
// else {intentos

//   if (intentos > 0) {
//       alert(`Clave incorrecta. Tienes ${intentos} intento(s) más.`);
//   } 
  
//   else {
//       alert("Acceso denegado.");
//       alert("Alerta, intruso tratando de acceder…");
//       break;
//   }
// }
// }

// Funciones en JS

// Ejemplo 1 

// saludar("Diana Arias")
// function saludar (nombre){
//     alert(`Hola ${nombre}`);
// }

// Ejemplo 2

// console.log(raiz(18));

// function raiz(numero){

// return Math.sqrt(numero);

// }

// Ejemplo 3

// function exponente (base, cuadrado){
//     return Math.pow(base,cuadrado);
// }

// console.log(`EL CUADRADO ES: ${exponente(12, 6)}`);


// // Ejercicio de Arreglos

// // 1

// // let numeros = [12, 23, 18, 16, 19];
// // let sum1 = 0; 
// // let sum2 = 0; 

// // for (let i = 0; i < numeros.length; i++) {
// //   if (numeros[i] % 2 !== 0) { 
// //     sum1 += numeros[i]; 

// //   } 
  
// //   else {
// //     sum2 += numeros[i]; 
// //     }
// // }

// // console.log(`La suma de los números impares es: ${sum1}`);
// // console.log(`La suma de los números pares es: ${sum2}`);

// // 2

// // let numeros = [12, 23, 18, 16, 19];
// // let min = numeros [0]
// // let max = numeros [0]

// // for (let i = 0; i < numeros.length; i++) {
  
// //   if (numeros[i] < min) {
// //    min = numeros[i];
// // }

// // if (numeros[i] > max) {
// //   max = numeros[i]; 
// // }

// // }

// // console.log(`El número mínimo es: ${min}`);
// // console.log(`El número máximo es: ${max}`);
  

// // 3
// // let ale = Math.floor(Math.random() * 10) + 1
// // // let na = new Array (ale)

// // // for (let i = 0; i < na.length; i++) {

// // // na[i] = Math.floor(Math.random() * 100) + 1; 
// // // }


// // // console.log(`Generé ${ale} números aleatorios dentro de un rango de 100, estos son: ${na}`);


// // let tamanio = parseInt(prompt("Ingrese la cantidad de estudiantes"));
// // let calificaciones = new Array(tamanio);
// // // let sum = 0
// // let max = 0
// // //let cont = 0;

// // for (let i = 0; i < calificaciones.length; i++){

// //     calificaciones[i] = parseFloat(prompt("Ingrese las notas"));

// //     // sum += calificaciones[i]

// //     if (calificaciones[i] > max) {
// //     max = calificaciones[i]; 
// //     }
      
// //     }
      

// // for(let i = 0; i < calificaciones.length; i++){
// //     // cont++;
// // console.log(`Calificacion ${i+1} :  ${calificaciones[i]}`);
// // }

// // // console.log(`La suma de la calificacion es: ${sum}`)
// // // console.log(`El promedio de las calificaciones es: ${(sum/tamanio)}`)


// //     console.log(`La calificacion mas alta es: ${max}`);

// // Objetos calve - Valor

// let carro1 = {
//     marca: "Ford",
//     modelo: "Fiesta",
//     color: "Rojo",
//     anio: "2018",
//     placa: "ABC123"
// }

// let carro2 = {
//     marca: "Renault",
//     modelo: "Logan",
//     color: "Azul",
//     anio: "2019",
//     placa: "XYZ321",
//     acelerar(){
//         return "El carro 2 esta acelerando";
//     }
// }

// console.log("Datos carro 1 " , carro1 );
// console.log("Datos carro 2 " , carro2 );


// console.log(`LA MARCA DEL VEHICULO 1 ES: ${carro1.marca} `)
// console.log(`LA PLACA DEL VEHICULO 2 ES: ${carro2.placa}`)
// console.log(`LA PLACA DEL VEHICULO 2 ES: ${carro2.placa} `)



// carro1.marca = "Toyota";
// carro1.color = "Gris";

// console.log("lOS DATOS DEL VECHICULO 1 SON: " , carro1);


// console.log(carro2.acelerar());

// class Persona{

//     constructor(nombre, edad){

//         this._nombre = nombre;
//         this._edad = edad;

//     }


//     get nombre(){
//         return this._nombre;
//     }

//     set nombre(nombre){
//         this._nombre = this.nombre;
//     }

//     get edad(){
//         return this._edad;
//     }

//     set edad(edad){
//         this._edad = this.edad;
//     }


//     saludar(){
//         console.log(`Hola soy ${this._nombre} Y TENGO ${this._edad} años`);
//     }


// }
// const per1  = new Persona("Juan", 25);

// per1.saludar();

// const per2 = new Persona("Andres", 28);


// per1.nombre = "Lorena";


// per2.edad = 45;


// per1.saludar();

// per2.saludar();

// EJEMPLO 2

// class Libro {
//     constructor (titulo,autor,paginas){

//     this._titulo = titulo;
//     this._autor = autor;
//     this.paginas = paginas;
//     }

// get titulo(){
//             return this._titulo;
//         }
    
//         set titulo(titulo){
//             this._titulo = this.titulo;
//         }
    
//         get autor(){
//             return this._autor;
//         }
    
//         set autor(autor){
//             this._autor = this.autor;
//         }

//         get paginas(){
//             return this._paginas;
//         }
    
//         set paginas(paginas){
//             this._paginas = this.paginas;
//         }
    
    
//         mostarInfo(){

//             console.log(`El titulo del libro es: ${this._titulo} el autor es: ${this._autor} y tiene ${this._paginas} Paginas`);
        
//         }
// }


// const l1 = new Libro("El relato de un naufrado", "Pepito", "230");
// const l2 = new Libro("EL principito", "Jorge", "180");
// const l3 = new Libro("EL Programador", "Lucia", "430");

// console.log(l1.titulo)
// console.log(l2.titulo)
// console.log(l3.titulo)
// l1.autor = "Carlos";
// l2.autor = "Pablo";
// l3.autor = "Ana";

// l1.mostarInfo()
// l2.mostarInfo()
// l3.mostarInfo()


// class Producto{

//     constructor(nombre,precio,cantidad){

//         this._nombre = nombre;
//         this._precio = precio;
//         this._cantidad = cantidad
//     }


//     get nombre(){
//         return this._nombre;
//     }

//     set nombre(nombre){
//         this._nombre = nombre;
//     }

//     get precio(){
//         return this._precio;
//     }

//     set precio(precio){
//         this._precio = precio;
//     }

//     get cantidad(){
//         return this._cantidad;
//     }

//     set cantidad(cantidad){
//         this._cantidad = cantidad; 
//     }


//     mostrarNombreProducto(){
//         console.log(`El nombre del producto es: ${this._nombre}, el precio es: ${this._precio} y la cantidad es: ${this._cantidad}`);
//     }


//     valorTotal(){
      
//         return this._precio * this._cantidad;
//     }


//     modificarCantidad(nuevoCantidad){

//         this._cantidad = nuevoCantidad;

//         console.log(`La nueva cantidad es: ${this._cantidad}`)

//     }

//     anadirStock(nuevoCantidad){

//         return this._cantidad += nuevoCantidad;
//     }

//     venderStock(nuevoCantidad){
//         this._cantidad -= nuevoCantidad;
//     }


//     operacion(){

//         let nCantidad = parseFloat(prompt('Ingrese la nueva cantidad'));

//          let op = parseInt(prompt("Ingrese que tipo de operacion desea realizar 1. Añadir 2. Restar"));

//          if(op===1){
//             console.log(prod3.anadirStock(nCantidad));
    
//         }else{

//          console.log(prod3.venderStock(nCantidad));
//         }
//     }


//      static crearProducto(){
//         let productos; 
//         let precios; 
//         let cantidades; 
        
               
//         productos = prompt('Ingrese el nombre del producto');
//         precios = parseFloat(prompt('Ingrese el precio del producto'));
//         cantidades = parseFloat(prompt('Ingrese la cantidad del producto'));

//         return new Producto(productos, precios, cantidades);
//     }

    

// }


// const prod1 = new Producto("Mouse", 45000, 5);
// const prod2 = new Producto("Monitor", 1450000, 3);

// const prod3 = Producto.crearProducto();

// prod1.mostrarNombreProducto();
// prod2.mostrarNombreProducto();
// prod3.mostrarNombreProducto();

// console.log(` El valor del producto 1 es: ${prod1.valorTotal()}`);
// console.log(` El valor del producto 2 es: ${prod2.valorTotal()}`);
// console.log(` El valor del producto 3 es: ${prod3.valorTotal()}`);


// prod3.operacion();


// prod1.modificarCantidad(8);
// prod2.modificarCantidad(6);
// //prod3.modificarCantidad(nCantidad);


// prod1.mostrarNombreProducto();
// prod2.mostrarNombreProducto();
// prod3.mostrarNombreProducto();

// console.log(` El valor del producto 1 es: ${prod1.valorTotal()}`);
// console.log(` El valor del producto 2 es: ${prod2.valorTotal()}`);
// console.log(` El valor del producto 3 es: ${prod3.valorTotal()}`);





// Crea una clase Termostato que tenga los atributos temperatura y estado (encendido o apagado).
//  Debe tener métodos para subir la temperatura, bajar la temperatura, encender y apagar el termostato, y mostrar el estado actual.

class Termostato{

    constructor(estado, temperatura){

        this._estado = estado;
        this._temperatura = temperatura;
    
    }


    get estado(){
        return this._estado;
    }

    set estado(estado){
        this._estado = estado;
    }

    get temperatura(){
        return this._temperatura;
    }

    set temperatura(temperatura){
        this._temperatura = temperatura;
    }

    encender() {
        this._estado = 'encendido';
    }

    apagar() {
        this._estado = 'apagado';
    }

    aumentarTemperatura(grados) {
        if (this._estado === 'encendido') {
            this._temperatura += grados;
        }
    }

    disminuirTemperatura(grados) {
        if (this._estado === 'encendido') {
            this._temperatura -=grados;
        }
    }

    mostrarEstado() {
        return `El Estado actual es: ${this._estado}, la Temperatura es: ${this._temperatura}`;
    }

    
    static crear(temperaturaAnterior) {
        const estadosPosibles = ['encendido', 'apagado'];
        const estadoAleatorio = estadosPosibles[Math.floor(Math.random() * estadosPosibles.length)];
        
        const temperatura = temperaturaAnterior;

        if (prompt('¿Desea cambiar la temperatura? (si/no)').toLowerCase() === 'si') {
            temperatura = parseFloat(prompt('Ingrese la nueva temperatura'));
        }

        return new Termostato(estadoAleatorio, temperatura);
    }
}

// Generar una temperatura inicial aleatoria
const temperaturaInicial = Math.floor(Math.random() * 31); 
let newTermostato = new Termostato('apagado', temperaturaInicial); // Inicializar el termostato en apagado

while (true) {
    console.log(newTermostato.mostrarEstado());

    // Opción para encender o apagar el termostato
    const cambiarEstado = prompt('¿Desea cambiar el estado del termostato? (si/no)');

    if (cambiarEstado.toLowerCase() === 'si') {
        const seleccionEstado = prompt('Seleccione 1 para apagar o 2 para encender el termostato');
       
    if (seleccionEstado === '1') {
            newTermostato.apagar();
        } else if (seleccionEstado === '2') {
            newTermostato.encender();
        } else {
            console.log('Selección no válida, no se cambió el estado.');
        }
    }

    const ajustarTemperatura = prompt('¿Desea aumentar o disminuir la temperatura? (aumentar/disminuir)');
    if (ajustarTemperatura.toLowerCase() === 'aumentar') {
        const gradosAumento = parseFloat(prompt('¿Cuántos grados desea aumentar?'));
        newTermostato.aumentarTemperatura(gradosAumento);
    } else if (ajustarTemperatura.toLowerCase() === 'disminuir') {
        const gradosDisminucion = parseFloat(prompt('¿Cuántos grados desea disminuir?'));
        newTermostato.disminuirTemperatura(gradosDisminucion);
    } else {
        console.log('Opción no válida para ajustar la temperatura.');
    }

    // continuar??
    if (prompt('¿Desea continuar con otro usuario? (si/no)').toLowerCase() !== 'si') {
        break; 
    }
}

console.log('Estado final del termostato:');
console.log(newTermostato.mostrarEstado());