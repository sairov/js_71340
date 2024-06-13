// EVENTOS

const button = document.getElementById('btn');
const title = document.getElementById('title');
const party = document.getElementById('fiesta');
const invitado = document.getElementById('name');
const dance = document.getElementById('dance');
const form = document.getElementById('form');


// document.addEventListener('click', (e) => console.log(e.x, e.y));
// document.addEventListener('scroll', (e) => console.log(e));

// localStorage.setItem('prueba', 'dato desde otro file')

const nombre = localStorage.getItem('nombre');
console.log("Nombre desde el otro file: ", nombre);

const data = [];

button.addEventListener('click', () => {
  const person = document.createElement('p');
  person.innerText = invitado.value;
  data.push(invitado.value);
  party.appendChild(person);
  invitado.value = '';
  invitado.focus();

  console.log(data);
});


dance.addEventListener('click', () => {
  party.innerHTML = '';
})



// function bailar(persona) {
//   console.log(persona + " está bailando");
// }

// function lalo() {
//   console.log("Lalo está bailando");
// }


// button.onclick = () => pepe();



// dance.addEventListener('click', () => {

//   const items = document.querySelectorAll('p');
//   items.forEach((item) => {
//     item.className = 'dance';
//   })
// })


// function createListener(el, event) {
//   el.addEventListener(event, () => bailar('LALA'));
// }

// createListener(button, 'click');
// createListener(title, 'mouseover');



// button.addEventListener('mousedown', () => console.log("Tienes presionado el botón del click"))
// button.addEventListener('mouseup', () => console.log("Has soltado el botón del click"))
// button.addEventListener('click', () => console.log("Clikeaste el elemento"))

// dance.addEventListener('mouseover', () => console.log('Ingresaste al elemento'));
// dance.addEventListener('mouseout', () => console.log('Saliste del elemento'));
// dance.addEventListener('mousemove', () => console.log('Saliste del elemento'));

// invitado.addEventListener('keydown', () => console.log('Ouch, tienes una tecla presioanda'));
// invitado.addEventListener('keyup', () => console.log('Gracias por soltar la tecla'));
// invitado.addEventListener('change', () => console.log('El valor está cambiando'));
// invitado.addEventListener('input', () => console.log(invitado.value));

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log('Enviaste la data');
// });

// const video = document.getElementById('vid');

// dance.addEventListener('click', () => video.play());
// video.addEventListener('play', () => console.log('El video ha comenzado'));


