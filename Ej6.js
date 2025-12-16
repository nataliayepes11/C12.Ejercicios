/* Ejercicio 6: Iguales a 10 pero menores de 1000
Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000.
VER MATRIZ EN LA HOJA
*/ 

let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 1000, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
    ];

let sumaCondicional = 0;
   for (let i =0; i < matriz.length; i++) {
   for (let j =0; j < matriz.length; j++) {
let valorActual = matriz[i][j];
   if (valorActual >= 10 && valorActual < 1000) {

   sumaCondicional += valorActual;
}
}
}    

console.log("La suma de los valores >= 10 y < 1000 es: " + sumaCondicional);
