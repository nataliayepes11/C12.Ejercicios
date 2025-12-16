/* Ejercicio 9: Última aparición de un modelo de auto
Se está realizando el desarrollo de una aplicación para control de gastos. 
Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. 
Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0, día 1, columna 1, día 2, etcétera.
VER MATRIZ EN LA HOJA
*/ 

const prompt = require('prompt-sync')();

let gastos = [
    [1135, 2500, 900, 1600, 2800, 650, 1100], 
    [1750, 1890, 1900, 1300, 898, 1750, 2800], 
    [1700, 1150, 1690, 1900, 1770, 500, 2560], 
    [800, 1250, 1430, 2100, 1980, 1270, 950]   
];

//a) Lo que nos solicitan es dar el total de gastos en una semana. 
// Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. 
// Recordar que las matrices comienzan siempre en posición 0.
console.log("--- Consultar Gastos por SEMANA ---");

let semanaConsultada = parseInt(prompt("Elegí el número de SEMANA para ver gastos (1-4): ")) - 1;

let totalSemana = 0; 

for (let j = 0; j < 7; j++) {
    totalSemana += gastos[semanaConsultada][j];
}
console.log("El total de gastos de la SEMANA " + (semanaConsultada + 1) + " es: $" + totalSemana);

// b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, 
// por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
console.log("--- Consultar Gastos por DÍA ---");

let diaConsultado = parseInt(prompt("Elegí el número de DÍA para ver gastos (1-7): ")) - 1;

let totalDia = 0;

for (let i = 0; i < 4; i++) {
    totalDia += gastos[i][diaConsultado];
}
console.log("El total de gastos del DÍA " + (diaConsultado + 1) + " es: $" + totalDia);

// c) Por último, es necesario tener el total de gastos realizados en el mes.
// ✔ Pregunta para pensar, ¿es lo mismo recorrer por fi las o por columnas para resolver este último punto?
console.log("--- Gasto Total del MES ---");

let totalMes = 0;

for (let i = 0; i < gastos.length; i++) { 
    for (let j = 0; j < gastos[i].length; j++) { 
        totalMes += gastos[i][j]; 
    }
}
console.log("El gasto total del MES fue: $" + totalMes);

console.log("--- Estadísticas: RECORDS de Gastos ---");

let maxGastoSemana = 0;
let semanaMasGastadora = 0;

for (let i = 0; i < gastos.length; i++) {
    
    let sumaFilaActual = 0;
    for (let j = 0; j < 7; j++) {
        sumaFilaActual += gastos[i][j];
    }
    
    if (sumaFilaActual > maxGastoSemana) {
        maxGastoSemana = sumaFilaActual; 
        semanaMasGastadora = i + 1;
    }
}
console.log("La SEMANA con más gastos fue la Semana " + semanaMasGastadora + " con $" + maxGastoSemana);

// d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
// ✔ Posibles matrices para comprobar los resultados.
let maxGastoDia = 0;
let diaMasGastador = 0;

for (let j = 0; j < 7; j++) { 
    
    let sumaColumnaActual = 0;
    
    for (let i = 0; i < 4; i++) { 
        sumaColumnaActual += gastos[i][j];
    }

    if (sumaColumnaActual > maxGastoDia) {
        maxGastoDia = sumaColumnaActual;
        diaMasGastador = j + 1; 
    }
}
console.log("El DÍA con más gastos globales fue el Día " + diaMasGastador + " con $" + maxGastoDia);