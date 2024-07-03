console.log("Hola JS desde hoja externa");

// comentarios en linea
/* comentarios de bloque 

let nombre = "Gise";
console.log(nombre);

let saludo = true, numero ="10", numeroDos = 5;
var nombreDos = "Perez";

nombre = "Flores";
console.log(nombre);
console.log(nombre + saludo);

let cadena = new String("hola");

let objeto = {
    nombre: "Gise",
    edad: 43,
    cargo: "docente",
    hijos: true,
    trabajo: ["unlam", "utn", "codo a codo", "tecnicatura de software"]
}

console.log(objeto.trabajo[2]);
console.log({objeto});

console.log(typeof cadena);

let num = 4;
let num2 = new Number(4);
console.log(typeof num2);
console.log({num});

const PI = 3.141825;
console.log(PI*2*numeroDos);

alert("vas a ser bloqueado");
let edad = parseInt(prompt("Ingrese su edad"));
console.log(edad*3);

*/

//Pasar a contenido al HTMl

document.write("Hola estoy en HTML");
/*
&& || ! == ===

i++

suma = suma + 5
suma += 5
+=
-=
*=
*/

//Estructuras de control

if(nota >= 7){
    console.log("la nota es aprobada");
}
else{
    console.log("la nota es desaprobada");
}


if(nota >= 7){
    console.log("la nota es aprobada");
}
else if(nota >= 4){
    console.log("van a final");
}
else {
    console.log("desaprobados");
}

// tenornario

let calificacion = nota > 7 ? "aprobado" : "desaprobado";

// Switch

switch(nota){
    case 10:
        calificacion = "sobresaliente";
        break;
    case 9:
    case 8:
    case 7:
        calificacion = "Buen examen";
        break;
    default:
        calificacion = "calificacion invalida";
        break;
}

// bucles

i=0;
while(i < 5){
    console.log("valor de i: ", i);
    i++;
}

for (i =0; i<5; i++){
    console.log("Valores de i: ", i);
}

// Funciones

//declaracion

function saludo(parametro, parametroDos, nota) {
    let promedio = parametroDos + nota;
    console.log("Hola como estas?" + parametro);
}

//llamado
saludo("Gisela", 5, nota);


function tablaMultiplicar(tabla, hasta){
    for(let i = 1; i <= hasta; i++){
        console.log(tabla + " x " + i + " = ", tabla*i);
    }
}

tablaMultiplicar(5, 8);
tablaMultiplicar(6, 10);


function tablaMultiplicar(tabla, hasta = 6){
    for(let i = 1; i <= hasta; i++){
        console.log(tabla + " x " + i + " = ", tabla*i);
    }
}

tablaMultiplicar(5);

//return
let nota = 5;
let notaDos = 10;

function sumar(nota, notaDos){
    return nota +notaDos;
}

let resultado = sumar(nota, notaDos);
console.log(resultado);

// funcion este en una varibale

let sumatoria = function(nota, notaDos){
    return nota + notaDos;
}

sumatoria(nota, notaDos);

//Arrow function

let sumatoriaDos = nota => nota*2;

sumatoriaDos(nota);

let sumatoriaTres = (nota, notaDos) => nota + notaDos;

sumatoriaTres(nota, notaDos);

let sumatoriaCuatro = (nota, notaDos) => {
    /*producto = nota * notaDos;
    return producto;*/

    return nota * notaDos;
}

sumatoriaCuatro(nota, notaDos);

//simplificacion del arrow

function (a) {
    return a + 100;
}

//Primera simplificacion
(a) => { return a + 100};

//Segunda simplificacion
(a) => a + 100;

//Tercera simplificacion
a => a + 100;

//callback

function saludar(nombre){
    console.log("hola " + nombre);
}

function bienvenidaUsu(callback){
    let nombre = prompt("Ingrese su nombre:");
    callback(nombre);
}

bienvenidaUsu(saludar);

//objeto

let miAuto = {
    marca: "Fiat",
    tipo: "familiar",
    modelo: 2019
}

console.log(miAuto.tipo.length);

document.write(miAuto.tipo.indexOf("i", 5));

console.log(miAuto.tipo.substring(2, 4));

let usuario = "Fulano";

document.write(`<h1> Bienvenido ${usuario}</h1>`);

miAuto.modelo.sqrt(2);

pow(2, 10); //1024


//Array

const miArray = ["a", 2, "hola"];

miArray[1];

miArray.push("gise");

console.log(miArray);

for (let variable in miArray){
    console.log(miArray[variable]);
}

for (let variable of miArray){
    console.log(miArray[variable]);
}

// forEach y Map

const numeros = [1, 2, 3, 4, 5, 6];

const sumaValores = 0;

numeros.forEach( numero => {
    console.log(numero);
}
);

numeros.forEach( numero => console.log(numero));


for (let i = 0; i < numeros.length; i++){
        console.log(numeros[i]);
}

//Map

const num = numeros.map(pepe => {
    return pepe*2;
});

const pares = miArray.filter( par => par*2 >= 50);

const find = pares.find( encontrar => encontrar === 5);

//DOM

const ul = document.getElementById("lista");

const h3 = document.getElementsByClassName("titulo");

document.getElementsByTagName("li");

document.getElementsByName("formulario");

document.querySelector("div");
document.querySelector(".fondo");
document.querySelector("#lista");

document.querySelectorAll("div");

const btn = document.createElement("button");
btn.innerHTML = "Esto es un boton JS";
document.body.appendChild(btn);

