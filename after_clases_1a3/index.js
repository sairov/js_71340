// CAJERO AUTOMÁTICO

/**
 * 1. Ver saldo
 * 2. Ingresar dinero
 * 3. Retirar parcialmente dinero
 * 4. Retirar todo el dinero
 * 0. Opción de salida
 */

let saldo = 0;

let option;

while (option != 0) {
  option = prompt(`
    Ingrese una de las siguientes opciones:
      * 1. Ver saldo
      * 2. Ingresar dinero
      * 3. Retirar parcialmente dinero
      * 4. Retirar todo el dinero
      * 0. Opción de salida
  `);

  // switch (option) {
  //   case "1":
  //       alert(saldo);
  //     break;
  //   case "2":
  //     const moneyIn = Number(prompt('Cuanto dinero desea ingresar'));
  //     saldo += moneyIn;
  //     alert('Dinero ingresado con éxito, su nuevo saldo es: ' + saldo);
  //     break;
  //   case "3":
  //     const moneyOutPartial = Number(prompt('Cuanto dinero desea retirar'));
  //     saldo -= moneyOutPartial;
  //     alert('Dinero retirado con éxito, su nuevo saldo es: ' + saldo);
  //     break;
  //   case "4":
  //     saldo = 0;
  //     alert('Dinero retirado con éxito, su nuevo saldo es: ' + saldo);
  //     break;
  //   case "0":
  //     alert('Gracias, vuelva prontos!');
  //     break;
  //   default:
  //     alert('Ingrese una opción válida');
  //     break;
  // }
  if (option == 1) {
    alert(saldo);
  } else if (option == 2) {
    const moneyIn = Number(prompt('Cuanto dinero desea ingresar'));
    saldo += moneyIn;
    alert('Dinero ingresado con éxito, su nuevo saldo es: ' + saldo);
  } else if (option == 3) {
    const moneyOutPartial = Number(prompt('Cuanto dinero desea retirar'));
    saldo -= moneyOutPartial;
    alert('Dinero retirado con éxito, su nuevo saldo es: ' + saldo);
  } else if (option == 4) {
    saldo = 0;
    alert('Dinero retirado con éxito, su nuevo saldo es: ' + saldo);
  } else if (option == 0) {
    alert("Gracias, vuelvas prontos!");
  } else {
    alert("El valor ingresa no corresponde a una opción válida");
  }
}