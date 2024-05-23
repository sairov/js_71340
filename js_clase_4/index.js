// funciones

// function saludar(nombre) {
//   console.log('Hola  ' + nombre);
// }

// saludar("pepa");

// function sumar(a, b) {

//  return a + b;
// }

// let resultado = sumar(10,7);
// console.log(resultado);
// console.log(resultado * 20);

// function saludar(nombre) { // declarada
//   console.log("Hola " + nombre);
// }

// let saludar = function (nombre) { // expresada
//   console.log("Hola " + nombre);
// }

// let saludar = (nombre) => console.log("Hola " + nombre);


// saludar("pepe");


// function suma(a, b) {
//   return a + b;
// }

// let suma = function (a, b) {
//   return a + b;
// }

let sumaTotal = (a, b) => a + b;

/**
 * La funcion calcularIVA toma un valor por parámetro y lo devuelve con el IVA
 * @param {number} a
 * @returns {number} Precio + IVA
 */

let calcularIVA = (a) => "El total con IVA es: $" + ((a * 0.21) + a);


let resultado = sumaTotal(200, 350);

console.log(calcularIVA(resultado));


let cantidad = prompt("Cuantos items quieres agregar: ");
let total = 0;

function pedirItem() {
  let item = prompt('Ingrese el valor del item 1: ');
  if (item < 0) {
    console.log("Ingrese un importe mayor 0");
  }
  tomar += item;
}

for (let i = 0; i <= cantidad; i++) {
  pedirItem();
}

alert(total);

