/* Ejercicio 5: Uso de Arrays y Condicionales
(Pueden desglosar en pasos el código si eso les facilita su desarrollo)
*/ 

const prompt = require('prompt-sync')();
// Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. 
let nombres = [];
console.log("Ingresá 5 nombres para la lista")
//y verifica si ese nombre se encuentra en el array. 
for (let i = 0; i < 5; i++) {
        nombres[i] = prompt("Nombre " + (i + 1) + ": ").toLowerCase(); 
}
// Luego, solicita al usuario ingresar un nombre
let nombreBuscado = prompt("¿Qué nombre querés buscar?: ").toLowerCase();
let encontrado = false; 

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === nombreBuscado) {
        encontrado = true; 
        break; 
    }
}
if (encontrado) { 
    console.log("Sí!! " + nombreBuscado + " está en la lista.");
} else {
    console.log("No... " + nombreBuscado + " no se encuentra en nuestra lista.");
}
