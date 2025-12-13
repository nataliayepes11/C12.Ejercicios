/* Ejercicio 9: Última aparición de un modelo de auto
Se está realizando el desarrollo de una aplicación para control de gastos. 
Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al fi nalizar la jornada.
Para simplifi car, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fi la representa una semana y cada columna un día. 
Es decir, fi la 0, semana 1, fi la 1, semana 2, etc. Columna 0, día 1, columna 1, día 2, etcétera.
a) Lo que nos solicitan es dar el total de gastos en una semana. 
Recordemos que cada fi la representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fi la 1 de la matriz. 
Recordar que las matrices comienzan siempre en posición 0.
b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, 
por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las fi las, ya que las columnas también comienzan en 0.
c) Por último, es necesario tener el total de gastos realizados en el mes.
✔ Pregunta para pensar, ¿es lo mismo recorrer por fi las o por columnas para resolver este último punto?
d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
✔ Posibles matrices para comprobar los resultados.
VER MATRIZ EN LA HOJA
*/ 

const prompt = require('prompt-sync')();