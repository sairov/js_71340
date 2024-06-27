// OPERADORES AVANZADOS II

const frutas = ['pera', 'manzana', 'frutilla'];

// console.log(...frutas);
// console.log("pera", "manzana", "frutilla");

// function spreadFunc(x) {
//   console.log(x);
// }

// spreadFunc(frutas);
// spreadFunc(...frutas);
// spreadFunc("manzana", "pera", "frutilla");

const precios_descartables = [100, 1200, 755, 17.25, 248];
const precios_comestibles = [255, 128, 436, 86, 950];

// const precios = precios_descartables.concat(precios_comestibles);
// const precios = [...precios_descartables, ...precios_comestibles];

// console.log(precios);
// const masAlto = Math.max(...precios);

// console.log(masAlto);

// console.log({...precios});

const heroes = [
  {
    alias: "Hulk",
    name: "Bruce",
    lastname: "Banner",
    age: 42,
    address: {
      universe: 'Marvel',
      country: 'USA'
    }
  },
  {
    alias: "Batman",
    name: "Bruce",
    lastname: "Wayne",
    age: 42,
    address: {
      universe: 'DC',
      country: 'USA'
    }
  },
  {
    alias: "Iroman",
    name: "Tony",
    lastname: "Stark",
    age: 42,
    address: {
      universe: 'Marvel',
      country: 'USA'
    }
  }
];

// heroes.forEach((hero, index) => {
//   heroes[index] = {
//     ...hero,
//     power: 150
//    }
// });

// console.log(heroes);

// heroes[0].power = 150;

// console.log(heroes);


// const hulk = {
//   alias: "Hulk",
//   name: "Bruce",
//   lastname: "Banner",
//   age: 42,
//   address: {
//     universe: 'Marvel',
//     country: 'USA'
//   }
// };

// const hulk_state = {
//   ...hulk,
//   name: "Pepe",
//   power: 150
// }

// console.log(hulk_state);

let numbers = [10, 7, 25 ,34];

function pepe(params) {

  const sum = params.reduce((acc, act) => acc + act);

  console.log(sum);
}


pepe(10, 7, 25 ,34, 100, 234, 78);

