// // DOM

// // document.body.childNodes[2] = "HOLA A TODOS DESDE UN NODO";

// const title = document.getElementById('title');

// const items = document.getElementsByClassName('item');

// for (item of items) {
//   console.log(item);
// }

// title.innerText = "Reemplazo con este HTML"
// title.innerHTML = "<span>Reemplazo con este HTML</span>"
// title.className = 'claseNueva pepe otraClase';

// console.log(title);


// const newNode = document.createElement('section');
// // const newArticle = document.createElement('article');
// // const newParagraph = document.createElement('p');

// // newParagraph.innerText = "Hola desde un nuevo nodo incómodo de crear";
// // newArticle.append(newParagraph);
// // newNode.append(newArticle);

// newNode.innerHTML = "<article><p>Hola desde un nuevo nodo</p></article>";

// document.body.append(newNode);

// const input = document.getElementById('text');

// console.log(input.value);


// const simspons = [
//   {name: "Homero", age: 40},
//   {name: "Marge", age: 38},
//   {name: "Marge", age: 38},
//   {name: "Marge", age: 38},
//   {name: "Marge", age: 38},
//   {name: "Marge", age: 38},
//   {name: "Marge", age: 38},
//   {name: "Marge", age: 38},
//   {name: "Marge", age: 38},
//   {name: "Marge", age: 38},
//   {name: "Marge", age: 38},
// ];

// const list = document.getElementById('characters');

// for (character of simspons) {
//   const item = document.createElement('li');
//   item.style.listStyle = 'none';
//   item.innerHTML = `<div>
//     <p class="character">
//       nombre: ${character.name}
//     </p>
//     <p class="character">
//       edad: ${character.age}
//     </p>
//   </div>`;
//   list.append(item);
// }

// document.body.append(list);

// document.querySelector('#charactes .pepe')
// document.querySelectorAll('#charactes .pepe')

const characters = [];
let opt;

while (opt != 0) {
 const character = prompt("ingrese un nuevo personaje o presione 0 para salir");
 if (character != 0) {
  characters.push(character);
 } else {
  opt = 0;
  console.log("Veamos los resultados\n---------------------------");
 }
}

characters.forEach((character) => console.log(character));