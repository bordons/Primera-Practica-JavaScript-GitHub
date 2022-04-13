// Validacion de edad
let welcome = parseInt(prompt("Hola bienvenido a mi primera practica. Debes ser mayor de edad para poder jugar. Por favor ingresa tu edad"));
if (welcome >= 18){
    alert("Comenzemos a jugar");
}
else{
    alert("Vuelva en unos años");
}
// Funcion Boton
function alerta() 
{
// Constantes de la casa
const ventanas = 4;
const puertas = 1;
const colorPuerta = "Marron";
const techo = "Negro";
const paredIzq = "Azul";
const paredDer = "Rojo";
const chimenea = "Marron";
const diaTiempo = "Soleado";

// Preguntas
let preguntaVentana = parseInt(prompt("Cuantas ventanas tiene la casa?"));
if (preguntaVentana == 4){
    alert("Excelente sumas 2 punto por contestar bien.");
}
else{
    alert("Te equivocaste. No sumas puntos.");
}
let preguntaPuertas = parseInt(prompt("Cuantas puertas tiene la casa?"));
if (preguntaPuertas != 1){
    alert("Parece que no sabemos distinguir las puertas, burro.");
} else{
    alert("Excelente sumas 1 punto porque tampoco es tan dificil saber cuantas puertas hay.");
}
// Aca quiero agregar mas preguntas y ademas poner un contador que me diga cuantas preguntas respondio correctamente para sacar un puntaje. 
// Pero no se como hacerlo y por falta de tiempo no llegue a averiguar. Peero seguire buscando.
}
