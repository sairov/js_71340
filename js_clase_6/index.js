// ARRAYS

// let simpsons = ['homero', 'marge', 'lisa','maggie', 'bart', 'abraham'];

// let homero = ['homero', 'simpson', 40, true, 'calle falsa 123', 7, 'G' ];

// let employee_1 = {
//   id: 758,
//   name: 'homero',
//   lastname: 'simpson',
//   age: 40,
//   bald: true,
//   address: 'Av. siempreviva 742',
//   sector: 7,
//   section: 'G'
// }

// console.log(simpsons.length);

// for (let i = 0; i < simpsons.length;i++) {
//   console.log((i+1) + ". " + simpsons[i]);
// }

// AGREGAR

// simpsons[simpsons.length] = 'Bob Patiño'; // forma antigua, no recomendable
// simpsons[simpsons.length] = 'Ayudante de santa'; // forma antigua, no recomendable

// simpsons.push('Bob Patiño'); // agrega al final  // MUTABLE
// simpsons.unshift('Ayudante de santa'); // agrega al principio  // MUTABLE

// console.log(simpsons);

// QUITAR

// simpsons.shift(); // remueve el primero  // MUTABLE
// simpsons.pop(); // remueve el último  // MUTABLE

// console.log(simpsons);

// SPLICE

// simpsons.splice(0, 3); // MUTABLE

// const cantidad = Number(prompt('Cuantos elementos desea eliminar: '));
// const desde = Number(prompt('Ingrese 0 para eliminar desde el principio o el índice desde el cual desea borrar la cantidad elegida: '));

// const rest = simpsons.splice(desde, cantidad);

// for(let i = 0; i < rest.length; i++) {
//   console.log("Valor eliminado: " + rest[i]);
// }

// for(element of rest) {
//   console.log("Valor eliminado: " + rest[i]);
// }

// console.log(simpsons);

// JOIN

// let resultado = simpsons.join('\n'); // INMUTABLE

// console.log(simpsons);
// console.log(resultado);

// CONCAT

// let frutas = ['tomate', 'frutilla', 'mango', 'ananá/piña'];
// let verduras = ['acelga', 'espinaca', 'batata', 'papa', 'zapallo'];

// let inventario = verduras.concat(frutas);

// console.log(frutas);
// console.log(verduras);
// console.log(inventario);

// // SLICE

// let verduras = ['acelga', 'espinaca', 'batata', 'papa', 'zapallo'];

// let resultado = verduras.slice(1, 2);

// console.log(resultado);
// console.log(verduras);

// // INDEXOF

// console.log(verduras.indexOf('espinaca'));


// let asistentes = [];

// let cantidad = 5;

// do {
//     let nombre = prompt('Ingrese un nuevo nombre: ');
//     asistentes.push(nombre);
//     console.log(asistentes);
// } while (asistentes.length != cantidad)

// console.log(asistentes.join('\n'));


// let employee_1 = {
  // id: 758,
  // name: 'homero',
  // lastname: 'simpson',
  // age: 40,
  // bald: true,
  // address: 'Av. siempreviva 742',
  // sector: 7,
  // section: 'G'
// }

// let employee_2 = {
//   id: 433,
//   name: 'Lenny',
//   lastname: 'Leonard',
//   age: 37,
//   bald: false,
//   address: '-',
//   sector: 7,
//   section: 'G'
// }

// let employee_3 = {
//   id: 433,
//   name: 'Carl',
//   lastname: 'Carlson',
//   age: 38,
//   bald: false,
//   address: '-',
//   sector: 7,
//   section: 'G'
// }

// const employees = [employee_1, employee_2, employee_3];
// const employees = [
//   {
//     id: 758,
//     name: 'homero',
//     lastname: 'simpson',
//     age: 40,
//     bald: true,
//     address: 'Av. siempreviva 742',
//     sector: 7,
//     section: 'G'
//   },
//   {
//     id: 433,
//     name: 'Lenny',
//     lastname: 'Leonard',
//     age: 37,
//     bald: false,
//     address: '-',
//     sector: 7,
//     section: 'G'
//   },
//   {
//     id: 432,
//     name: 'Carl',
//     lastname: 'Carlson',
//     age: 38,
//     bald: false,
//     address: '-',
//     sector: 7,
//     section: 'G'
//   }
// ];

// function addEmployee(id, name, lastname, age, bald, address, sector, section) {
//   const newEmployee = {
//     id: id,
//     name: name,
//     lastname: lastname,
//     age: age,
//     bald: bald,
//     address: address,
//     sector: sector,
//     section: section
//   }

//   employees.push(newEmployee);
// }

// console.log(employees);

// addEmployee(1, 'Montgomery', 'Burns', 10000, true, '-', 1, 'A');

// console.log(employees);

// for (empleado of employees) {
//   console.log(empleado.name + " " + empleado.lastname);
// }

// let frutas = ['tomate', 'frutilla', 'mango', 'ananá/piña'];

// frutas.push('uva');
// frutas.unshift('banana');


// ARRAY METHODS - MUTABLES/INMUTABLES

// for (fruta of frutas) {
//   console.log(fruta);
// }