
// const mathi = {
//   PI: 3.141592653589793,
//   E: 2.718281828459045,
//   LN10: 2.302585092994046,
//   pow: (n, e) => {
//     let result = n;
//     for (let i = 1; i < e; i++) {
//       result *= n;
//     }
//     return result;
//   }
// }

// class Mathi {
//   constructor() {
//     this.PI= 3.141592653589793;
//     this.E= 2.718281828459045;
//     this.LN10 = 2.302585092994046;
//   }
//   pow(n, e) {
//     let result = n;
//     for (let i = 1; i < e; i++) {
//       result *= n;
//     }
//     return result;
//   }
// }

// const herramientasMatematicas = new Mathi();

// herramientasMatematicas.

// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.LN10);
// console.log(Math.pow(10, 3));

// let ventas = [10, 20, 17, 32, 524, 200];

// console.log(Math.max(...ventas));
// console.log(Math.min(...ventas));

// let value = 248.37;

// console.log(Math.ceil(value));
// console.log(Math.floor(value));
// console.log(Math.round(value));

// let number = 144;

// console.log(Math.sqrt(number));

// console.log(Math.round(Math.random() * 100));
// console.log(Math.round(Math.random() * 100));
// console.log(Math.round(Math.random() * 100));
// console.log(Math.round(Math.random() * 100));
// console.log(Math.round(Math.random() * 100));
// console.log(Math.round(Math.random() * 100));


// let newValue = 100.20123867416;

// console.log(newValue.toFixed(4));


// const fechaConNumbers = new Date(2025, 4, 18, 12, 44, 56);
// const fechaConString = new Date("May 18, 2025 12:44:56");

// // console.log(fechaConNumbers);
// // console.log(fechaConString);

// const hoy = new Date("May 18, 2025 12:44:56");

// console.log(hoy.toLocaleString('ko-KR', { timeZone: 'America/Monterrey' }));

let inicio = new Date();

for (let i = 0; i < 5000; i++) {
  console.log('Haciendo tiempo');
}

let fin = new Date();
console.log(inicio.getTime());
console.log(fin.getTime());
console.log('El procesó tardó: ' + (fin - inicio));