// Ejercicio 4: Ciclo For - Array
//Crear un programa que permita registrar las notas de varios estudiantes usando arrays y mostrarlas por pantalla:

const prompt = require('prompt-sync')();

// 1. Crear un array para almacenar las notas.
let notas = [];

// 2. Define un array vacío llamado notas donde almacenaremos las notas de los estudiantes.
let totalEstudiantes = 11; 
// titulito bonito
console.log("Veamos las notas de tus " + totalEstudiantes + " estudiantes.");
// 4. Usa un bucle for para solicitar las notas y asignarlas directamente a posiciones específicas del array notas.
for (let i = 0; i < totalEstudiantes; i++) {
// 3. Pide al usuario que ingrese las notas de varios estudiantes una por una utilizando el método prompt    
  notas[i] = parseFloat(prompt("Ingresá la nota del estudiante " + (i + 1) + ": "));
}
// titulito bonito
console.log("--- Notas Ingresadas ---");
// 5. Imprime en consola las notas ingresadas usando el array notas. 
console.log(notas);