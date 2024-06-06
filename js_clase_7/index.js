// HIGHER ORDER FUNCTIONS I (HOF)

// function sumarRango(from, to) {
//   let total = 0;

//   for (let i = from; i <= to; i++) {
//     total += i;
//     console.log(`I: ${i} -- Total: ${total}`);
//   }
// }

// sumarRango(10, 20);

// let frutas = ['tomate', 'frutilla', 'mango', 'ananá/piña', 'uva', 'banana'];
// let heroes = ['hulk', 'ironman', 'captain america', 'superman'];
// let resultado = frutas.slice(2, 5);

// console.log(frutas);
// console.log(resultado);

// let from = 2;
// let to = 5;

// function sliceManual(from, to, array, action) {
//   let resultado = [];

//   for (let i = 0; i < array.length; i++) {
//       if (i >= from && i < to) {
//         resultado[resultado.length] = array[i];
//       }
//   }

//    action(resultado);
// }

// function imprimirDocumento(result) {
//    document.write(result)
// };

// sliceManual(1, 4, frutas, console.log);
// sliceManual(0, 2, heroes, alert);
// sliceManual(1, 5, frutas, imprimirDocumento);


// let valorASerMedido = 100;

// function esMayorQue(valor) {
//   return (otroValor) => otroValor > valor;
// }

// let esMayorQue200 = esMayorQue(200); // (otroValor) => otroValor > 200;
// let esMayorQue50 = esMayorQue(50);

// console.log(esMayorQue200(valorASerMedido));
// console.log(esMayorQue50(valorASerMedido));

// let frutas = ['tomate', 'frutilla', 'mango', 'ananá/piña', 'uva', 'banana'];

// function porCadaUno(arr, fn){
//   // for (let i = 0; i < arr.length; i++) {
//   //   fn(arr[i])
//   // }

//   for (const el of arr) {
//     fn(el)
//   }
// }

// porCadaUno(frutas, console.log);

// frutas.forEach((value) => console.log(value));


// let precios = [100, 357, 228, 1020, 559, 201];

// porCadaUno(precios, (precio) => console.log(precio + (precio * 0.21)));

// // console.log('tomate')
// // console.log('frutilla')
// // console.log('mango')


// function porCadaUnoEnUnNuevoArray(arr, fn){
//   // for (let i = 0; i < arr.length; i++) {
//   //   fn(arr[i])
//   // }
//   let nuevoArray = [];

//   for (const el of arr) {
//     nuevoArray.push(fn(el));
//   }

//   return nuevoArray;
// }


// let precios = [100, 357, 228, 1020, 559, 201];

// function adicionarIVA(value) {
//   return(value + (value * 0.21));
// }

// let resultado = porCadaUnoEnUnNuevoArray(precios, adicionarIVA);

// console.log(resultado);



// let frutas = ['tomate', 'frutilla', 'mango', 'ananá/piña', 'uva', 'banana'];
// frutas.forEach((value) => console.log(value));

// let precios = [100, 357, 228, 1020, 559, 201];
// precios.forEach((precio, index) => index + ": " + precio * 1.21);

// let preciosConIVA = precios.map((precio) => precio * 1.21);

// let mayoresA500 = preciosConIVA.filter((precio) => precio > 500);

// console.log(mayoresA500);

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

// const resultadoFind = employees.find((empleado) => empleado.name === 'homer');
// const resultadoFilter = employees.filter((empleado) => empleado.sector === 7);

// const tenemosPelados = employees.some((empleado) => empleado.bald === true);
// console.log(tenemosPelados);


let ventas = [100, 357, 228, 1020, 559, 201];

let total = ventas.reduce((valorAnterior, valorActual) => valorAnterior + valorActual);

console.log(total);

let frutas = ['tomate', 'frutilla', 'mango', 'ananá/piña', 'uva', 'banana'];

let ordenado = ventas.sort((a, b) => a - b);

console.log(ordenado);