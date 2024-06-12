console.log("Hola JS desde hoja externa");

// comentarios en linea
/* comentarios de bloque */

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

