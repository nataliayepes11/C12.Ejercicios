// Ejercicio 1: While
// Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número negativo. 
// Luego, imprime la suma de todos los números ingresados.

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingresá un número (negativo para terminar): "));
let suma = 0;

while (numero >= 0) {
    // sumo el número
    suma += numero;  
    numero = parseInt(prompt("Ingresá otro número (negativo para terminar): "));
}
console.log("La suma total es: " + suma);