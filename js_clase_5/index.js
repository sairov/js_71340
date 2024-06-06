// OBJETOS

/**
 *  Entidad Producto
 *  @param {string} id
 *  @param {string} nombre
 *  @param {number} stock
 *  @param {number} precio
 */

// function Producto(cod, name, quantity, price) {
//       let id = cod;
//       let nombre = name;
//       let stock = quantity;
//       let precio = price;

//       return {
//         id,
//         nombre,
//         stock,
//         precio
//       }
// }

function Producto(id, nombre, stock, precio) {
    this.id = id;
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;

    this.sumarIVA = function (porcentaje) {
      return this.precio + (this.precio * porcentaje);
    }
}

const producto_1 = new Producto('ABC001', 'Arroz', 20, 120);
const producto_2 = new Producto('ABC002', 'Leche', 7, 140);

console.log(producto_1.sumarIVA(0.21));
console.log(producto_2.sumarIVA(0.1));

const producto_1_literal = {
  id: '001ABC',
  nombre: 'Arroz',
  stock: 20,
  precio: 120,
};

let producto_2_literal = {
  id: '002ABC',
  nombre: 'Leche',
  stock: 7,
  precio: 140
}


// const cantidadVentas = prompt('Cuantas unidades de arroz se vendieron');

// if (cantidadVentas > 0) {
//   producto_1.stock -= cantidadVentas;
// }

// console.log(producto_1);

// function devolverPropiedad(propiedad, objeto) {
//   return objeto[propiedad];
// }

// console.log(devolverPropiedad('nombre', producto_1));
// console.log(devolverPropiedad('id', producto_1));

// Objetos en JS


// Objeto Literal

const hero = {
  name: "Bruce",
  lastname: "Banner",
  alias: "Hulk",
  age: 40
}

hero.alias // Hulk
hero["age"] // 40

hero.hair = "Black";

hero.sayHi();

// function Hero(name, lastname, alias, age) {
//   this.name = name;
//   this.lastname = lastname;
//   this.alias = alias;
//   this.age = age;
//   this.vitality = 100;


//   this.changeVitality = function(power) {
    // this.vitality += power;
    // if (this.vitality <= 0) {
    //   console.log("Game Over");
    // }
//   }

//   this.sayHi = function() {
//     console.log("Hola, mi nombre es: " + this.name + " " + this.lastname + "pero es secreto, así que puede llamarme: " + this.alias);
//   }
// }

// class Hero {
//   constructor(name, lastname, alias, age) {
//     this.name = name;
//     this.lastname = lastname;
//     this.alias = alias;
//     this.age = age;
//     this.vitality = 100;
//   }

//   changeVitality(power) {
//     this.vitality += power;
//     if (this.vitality <= 0) {
//       console.log("Game Over");
//     }
//   }

//   sayHi() {
//   console.log("Hola, mi nombre es: " + this.name + " " + this.lastname + "pero es secreto, así que puede llamarme: " + this.alias);
//   }
// }

// const hero_1 = new Hero('Bruce', 'Diaz', 'Batman', 46);
// const hero_2 = new Hero('Tony', 'Stark', 'Ironman', 43);


// hero_1.sayHi();

// hero_1.changeVitality(+45);
// console.log(hero_1.vitality);

// hero_1.sayHi();
// hero_2.sayHi();

// for (value in hero) {
//   console.log(hero[value]);
// }

class Persona {
  constructor(username, lastname, age) {
    this.username = username;
    this.lastname = lastname;
    this.age = age;
  }

  sayHi() {
      console.log('Hola amigo, me llamo: ' + this.username + ', y tu?');
  }
}

const hero = {
  name: 'Bruce',
  lastname: 'Banner',
  alias: 'Hulk'
}

console.log(typeof Persona);
console.log(typeof hero);

// function User(username, password) {
//   this.username = username;
//   this.password = password;

// }

// const user = new Persona('pepe123', 'pepe123', 20);

// user.sayHi();

// class Estudiante extends Persona {
//   constructor(curso) {
//     super(username, lastname, age);
//     this.curso = curso;
//   }
// }

// class Docente extends Persona {
//   constructor(curso) {
//     super(username, lastname, age);
//     this.curso = curso;
//   }
// }

// const newEstudiante = new Estudiante('pepe', 'grillo', 22, 'Javascript');
