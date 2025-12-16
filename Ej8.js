/* Ejercicio 8: Rojo y Verde
Para este ejercicio vamos a generar dos funciones:
IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el método “push” en los Arrays. 
¡Este método lo veremos en las próximas clases, pero si desean pueden investigarlo para resolver este desafío!
VER MATRIZ EN LA HOJA
*/ 

let matriz = [];
let contador = 1; 

for (let i = 0; i < 10; i++) {
    
    let fila = []; 
    
    for (let j = 0; j < 10; j++) {
        
        fila.push(contador); 
        
        contador++;
    }
    
    matriz.push(fila); 
}
// a) Una va a sumar los valores en la diagonal marcada en rojo.
function sumarRojo(matriz) {
    let suma = 0; 

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            
            if (i === j) {
                suma += matriz[i][j]; 
            }
        }
    }
    return suma; 
}
//b) La otra va a marcar los valores de la diagonal marcada en verde.
function sumarVerde(matriz) {
    let suma = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            
            if (i + j === matriz.length - 1) {
                suma += matriz[i][j]; 
            }
        }
    }
    return suma;
}
// Ambas funciones deben devolver un resultado único. Rojo: 505 Verde 505
console.log("Suma Diagonal Roja: " + sumarRojo(matriz));  
console.log("Suma Diagonal Verde: " + sumarVerde(matriz)); 