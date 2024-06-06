// Crea un algoritmo que reciba 1 número y devuelva todos los numeros hasta ese valor multiplicados por 10

// const cantidad = prompt('Ingrese la cantidad');

// for (let i=0;i <= cantidad;i++) {
//   console.log(i * 10);
// }

// TURNERO

// for (let i = 0; i < 5; i++) {
//   let nombre = prompt("Ingrese su nombre: ");

//   if (nombre == "") {
//       console.log("No ingresaste ningún nombre, no repartiré más números.");
//       i= i - 1;
//       continue;
//   }
//   console.log("Hola, " + nombre + " usted tiene asignado el número " + i);
// }


// WHILE -> MIENTRAS

// let condition = true;

// while (condition) {
//   console.log("La condición es verdadera");
//   condition = 10 == 20;
// }

// let option;

// let saldo = 10;

// while (option != 0) {
//   option = prompt("Ingrese una opción: \n 1. Ver saldo \n 2. Extraer saldo \n 3. Ingresar saldo \n 0. Salir");

//   if (option == 1) {
//     alert("Tu saldo es: $ " + saldo + ".-");
//   } else if (option == 2) {
//     saldo = 0;
//     alert("Has retirado tu saldo.");
//   } else if (option == 3) {
//     let monto = Number(prompt("Cuanto deseas ingresar"));
//     saldo = saldo + monto;
//     alert("Has ingresado " +monto+".-, tu saldo es: "+ saldo + ".-");
//   } else if (option == 0) {
//     alert("Gracias, vuelvas prontos!");
//   } else {
//     alert("El valor ingresa no corresponde a una opción válida");
//   }
// }


// DO WHILE

// let option;
// let saldo = 10;

// do {
//   option = prompt("Ingrese una opción: \n 1. Ver saldo \n 2. Extraer saldo \n 3. Ingresar saldo \n 0. Salir");

//   if (option == 1) {
//     alert("Tu saldo es: $ " + saldo + ".-");
//   } else if (option == 2) {
//     saldo = 0;
//     alert("Has retirado tu saldo.");
//   } else if (option == 3) {
//     let monto = Number(prompt("Cuanto deseas ingresar"));
//     saldo = saldo + monto;
//     alert("Has ingresado " +monto+".-, tu saldo es: "+ saldo + ".-");
//   } else if (option == 0) {
//     alert("Gracias, vuelvas prontos!");
//   } else {
//     alert("El valor ingresa no corresponde a una opción válida");
//   }
// } while (option != 0);


// SWITCH

// Detector de fauna

let option;

while (option != 0) {
  let animal = prompt("Ingrese el animal que desea conocer su sonido o para salir ingrese la palabra salir");

  switch (animal) {
    case 'perro':
      console.log("El 🐕 hace Guau Guau!");
      break;
    case 'gato':
      console.log("El 🐈 hace Miau Miau!");
      break;
    case 'loro':
      console.log("El 🦜 imita nuestros sonidos!");
      break;
    case 'caballo':
      console.log("El 🐎 relincha!");
      break;
    case 'salir':
      console.log("Espero que lo hayas disfrutado, nos vemos la próxima!");
      option = 0;
      break;
    default:
      console.log("No conozco el sonido de ese animal o el valor ingresado no es un animal.");
    break;
  }
}