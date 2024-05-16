
// let edad = 17;

// if (edad < 18) {
//   console.log("Lo sentimos debes ser mayor de 18 para ingresar.");
// } else {
//   console.log("Pudiste ingresar, yay!");
// }

// console.log("Fuera del IF");

// TERMÓMETRO


const temperature = prompt('Ingrese la temperatura actual: ');

if (temperature < 7) {
  console.log("Hace "+temperature+"°, está helado");
} else if (temperature >= 8 && temperature < 12) {
  console.log("Hace "+temperature+"°, está fresquito");
} else if (temperature >= 13 && temperature < 22) {
  console.log("Hace "+temperature+"°, está templado");
} else if (temperature >= 23 && temperature < 30) {
  console.log("Hace "+temperature+"°, hace calor");
} else {
  console.log("Hace "+temperature+"°, hace mucho calor");
}
