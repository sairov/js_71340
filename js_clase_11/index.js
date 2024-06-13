// LOCALSTORAGE


// sessionStorage.setItem('nombre', 'pepe');
// sessionStorage.setItem('edad', 30);

// localStorage.setItem('heroes', ['hulk', 'ironman', 'superman']);
// localStorage.setItem('pepe', {name: "pepe", lastname: "grillo"});

// let personaje = {
//   nombre: localStorage.getItem('nombre'),
//   edad: localStorage.getItem('edad')
// }

// console.log("Desde el sessionStorage: ", personaje);

// const heroes = localStorage.getItem('heroes')

// console.log(heroes.split(','));


// console.log(localStorage.getItem('pepe'));

// console.log(localStorage.length); // 5

// for (let i = 0; i < localStorage.length; i++){
//   let data = localStorage.key(i);
//   console.log(localStorage.getItem(data));
// }

// localStorage.removeItem('pepe');

// localStorage.clear();

// const items = [
//   {
//     id: 1,
//     name: "Arroz",
//     price: 120,
//     stock: 15
//   },
//   {
//     id: 2,
//     name: "Leche",
//     price: 150,
//     stock: 7
//   }
// ];


// for (item of items) {
//   localStorage.setItem(item.id, JSON.stringify(item));
// }

// let newItems = [];

// for (let i = 1; i <= localStorage.length; i++) {

//   newItems.push(JSON.parse(localStorage.getItem(i)));
// }

// console.log(newItems);

// if (localStorage.getItem('mode') == null){
//   const mode = prompt('Elige modo light o dark');

//   localStorage.setItem('mode', mode);

//   document.body.className = mode;
// } else {
//   document.body.className = localStorage.getItem('mode');
// }



const items = [
  {
    id: 1,
    name: "Arroz",
    price: 120,
    stock: 15
  },
  {
    id: 2,
    name: "Leche",
    price: 150,
    stock: 7
  }
];

const cart = JSON.parse(localStorage.getItem('cart'));

console.log(cart);

const cartContainer = document.querySelector('#cart');

cart.forEach(item => {
const itemContainer = document.createElement('div');
itemContainer.innerHTML = `
    <span>${item.id}</span>
    <h3>${item.name}</h3>
    <p>${item.price}</p>
    <p>${item.stock}</p>
`;
  cartContainer.appendChild(itemContainer);
});

