// Ejercicio 2: Do While
// Escribe un programa que solicite al usuario ingresar una contraseña. 
// Si la contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la correcta. La contraseña correcta es "1234".



const prompt = require('prompt-sync')();

const CLAVE_CORRECTA = "1234";
let claveUsuario;

do {
  claveUsuario = prompt("Ingrese su contraseña: ");
} while (claveUsuario !== CLAVE_CORRECTA);

console.log("Contraseña correcta");
