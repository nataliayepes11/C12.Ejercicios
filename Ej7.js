/* Ejercicio 7: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos. 
Luego, escribe un algoritmo para sumar todos los números en la matriz.
*/ 

let matriz = [
[2, 5, 8, 45, 69],
[15, 58, 29, 78, 36],
[2, 4, 6, 8, 10],
[11, 33, 55, 77, 99],
[22, 44, 66, 88, 1]
];

let suma = 0;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        suma += matriz[i][j];
    }
}

console.log("Todos los números de la matríz suman: " + suma);