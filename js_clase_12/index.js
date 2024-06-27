// OPERADORES AVANZADOS

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let temperatura = 16;

// if (temperatura > 30) {
//   console.log("Día caluroso");
// } else {
//   console.log("Día agradable");
// }


// temperatura > 30 ? console.log("Día caluroso") : console.log("Día agradable");

// let edad = 15;
// let permiso;

// if (edad > 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// let permiso = (edad > 18) ? 'si' : 'no';

// permiso == 'si' ? console.log("Puedes ingresar") : console.log("No tienes edad suficiente");


// let usuario = {
//   user: 'pepe',
//   pass: 'pepe123',
//   nombre: "Pepe Grillo"
// }

// // JSON.parse(localStorage.getItem('user'))[0] == usuario.user
// // &&  JSON.parse(localStorage.getItem('user'))[1] == usuario.pass
// // && console.log("Usuario logueado con éxito");


// let nombre = usuario.nombre || 'Nombre no disponible';

// console.log(nombre);

// let carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];

// carrito.forEach(element => {
//   console.log(element);
// });

// console.log(carrito);

// let usuario = null;

// console.log(usuario.nombre || 'No se puede recuperar el nombre');
// console.log(usuario?.nombre || 'No se puede recuperar el nombre o usuario es nulo');


// const hero = {
//   alias: "Hulk",
//   name: "Bruce",
//   lastname: "Banner",
//   age: 42,
//   address: {
//     universe: 'Marvel',
//     country: 'USA'
//   }
// };

// const hero_1 = {
//   alias: "Batman",
//   name: "Bruce",
//   lastname: "Wayne",
//   age: 42,
//   address: {
//     universe: 'DC',
//     country: 'USA'
//   }
// };

// const name = hero.name;
// const lastname = hero.lastname;

// const { alias: hulk_alias, name: hulk_name, lastname: hulk_lastname, age: hulk_age } = hero;
// const { alias: batman_alias, name: batman_name, lastname: batman_lastname, age: batman_age } = hero_1;

// console.log(alias);
// console.log(name);
// console.log(lastname);
// console.log(age);

// console.log(universe);


// const heroes = [
//   {
//     alias: "Hulk",
//     name: "Bruce",
//     lastname: "Banner",
//     age: 42,
//     address: {
//       universe: 'Marvel',
//       country: 'USA'
//     }
//   },
//   {
//     alias: "Batman",
//     name: "Bruce",
//     lastname: "Wayne",
//     age: 42,
//     address: {
//       universe: 'DC',
//       country: 'USA'
//     }
//   },
//   {
//     alias: "Iroman",
//     name: "Tony",
//     lastname: "Stark",
//     age: 42,
//     address: {
//       universe: 'Marvel',
//       country: 'USA'
//     }
//   }
// ]

// const heros_container = document.querySelector('#heros')

// heroes.forEach(({ alias, address: { universe }}) => {
//   const hero_card = document.createElement('article');

//   hero_card.innerHTML = `
//     <h2>${alias}</h2>
//     <p>${universe}</p>
//   `;

//   heros_container.appendChild(hero_card);
// })


// function mostrarHeroe({ name, alias }) {

//   console.log(name);
//   console.log(alias);
// }

// mostrarHeroe(heroes[2]);

// window.addEventListener('mousemove', ({x, y}) => {
//   console.log(x);
//   console.log(y);
// })

// const frutas = ['pera', 'manzana', 'frutilla'];

// const [a, b, c] = frutas;

// console.log(b);

// const [ hulk, , ironman ] = heroes;

// console.log(hulk);
// // console.log(batman);
// console.log(ironman);

// const cantidad = 0;

// const hayStock = heroes[0]?.address?.universe ?? 'Universo desconocido';

// console.log(hayStock);

