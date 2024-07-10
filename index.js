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

//document.write("Hola estoy en HTML");
/*
&& || ! == ===

i++ i--

suma = suma +5;
suma += 5;

+=
-=
*=
/=
%=
*/
//Estructuras de control
/*
let nota = 8;
if(nota >= 7){
    console.log("la nota es aprobada");
}
else{
    console.log("La nota es desaprobada");
}

if(nota >= 7){
    console.log("la nota es aprobada");
}
else if (nota >= 4){
    console.log("va a final");
}
else{
    console.log("La nota es desaprobada");
}


//ternario

let calificacion = nota >= 7 ? "aprobado" : "desaprobado";


//Switch

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
        calificacion = "calificacion es invalida";
        break;
}


//Bucles

i=0;
for(i = 0; i<=5; i++){
    console.log("valor de i: ", i);
}

while(i <= 5){
    console.log("valor de i: ", i);
    i++;
}

//funciones

//declaracion

function saludo(parametro, parametroDos, nota){
    let promedio = parametro + nota;
    console.log("Hola como estas? " + parametro);
}

function saludoDos(parametro, parametroDos, nota){
   return  parametro + nota;
}

//llamado

saludo("Gisela", 5, nota);


function tablaMultiplicar(tabla, hasta){
    for(i = 1; i <= hasta; i++){
        console.log(tabla + " x " + i + " = ", tabla*i);
    }
}

tablaMultiplicar(5, 8);
tablaMultiplicar(6, 10);

//return

let notaDos = 10;

function sumar(nota, notaDos){
    return nota + notaDos;
}

sumar(nota, notaDos);

//parametro definido

function sumar(nota, notaDos = 7){
    return nota + notaDos;
}

sumar(nota);


// funcion en variable

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
    /* sentencias
       producto = nota * notaDos;
       clg
       return producto;
     return nota * notaDos;
}

sumatoriaCuatro(nota, notaDos);

// simplificacion del arrow

let funcionAnonima = function(nota){
    return nota + 100;
}

//Primera simplificacion

//(nota) => {return nota+100};

//segunda simplificacion

//(nota) => nota+100;

//tercera simplificacion

nota => nota+100;

// callback

function saludar(nombre){
    console.log("hola " + nombre);
    document.write(nombre);
    document.write(`<h1> hola ${nombre} </h1>`);
}

function bienvenidaUsu(callback){
    let nombre = prompt("ingrese su nombre:");
    callback(nombre);
}

bienvenidaUsu(saludar);

//Objetos

let miAuto = {
    marca: "fiat",
    tipo: "familiar",
    modelo: 2019
}

console.log(miAuto.tipo.length);

document.write(miAuto.tipo.indexOf("i", 5));

console.log(miAuto.tipo.substring(0, 4));

//miAuto.modelo.sqrt(2);

//pow(2, 10);

//Array

const miArray = ["a", 2, "hola"];

miArray[1];

miArray[1] = "b";

miArray.push("gise", 10, 20, "Pablo");

console.log(miArray.length);

console.log(miArray);

//Recorrido de un array

for( let variable in miArray){
    console.log(miArray[variable]);
}

for( let variable of miArray){
    console.log(miArray[variable]);
}

// ForEach y Map

const numeros = [5, 3, 1, 6, 4, 2];

numeros.forEach(numero => {
    console.log(numero);
})

numeros.forEach(numero => console.log(numero));

console.log(numeros.sort());

//Map

const num = numeros.map(nums => {
    return nums*2;
});

console.log(num.sort());

const pares = miArray.filter(par => par*2 >= 50);

const find = miArray.find(encontrar => encontrar === 50);


//DOM

const ul = document.getElementById("lista");

const h3 = document.getElementsByClassName("titulo");

document.getElementsByTagName("div");

document.getElementsByName("formulario");


document.querySelector("div");
document.querySelector(".titulo");
document.querySelector("#lista");

document.querySelectorAll("div");

const btn = document.createElement("button");
btn.innerHTML = "Boton enviar";
document.body.appendChild(btn);

// crear lista en ul

//const numeros = [5, 3, 1, 6, 4, 2];
//const ul = document.getElementById("lista");

numeros.forEach(numeroLista => {

    const li = document.createElement("li");
    li.textContent = numeroLista;
    ul.appendChild(li);
});


//Eventos 

//nodo.addEventListener("tipo de evento", callback);

const btn = document.querySelector("button");

//rgb( , , );

function random(number){
    return Math.floor(Math.random()*(number + 1));
}

btn.addEventListener("click", ()=>{
    const color = `rgb( ${random(255)}, ${random(255)} , ${random(255)})`;
    document.body.style.backgroundColor = color;
});


const inputEntrada = document.querySelector("#texto");
const textoContenedor = document.querySelector("#pantalla");

inputEntrada.addEventListener("keydown", (e)=>(textoContenedor.textContent = `Usted escribio: "${e.key}"`));
//Target.value
*/
// asincronismo

const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const contenedor = document.getElementById("contenedor");

let pagina = 1;

btnAnterior.addEventListener("click", ()=>{
    if(pagina > 1){
        pagina -= 1;
    }
    cargarPeliculas();
});

btnSiguiente.addEventListener("click", ()=>{
    if(pagina < 1000){
        pagina += 1;
    }
    cargarPeliculas();
});

const cargarPeliculas = async()=>{
    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=${pagina}`);
        console.log(respuesta);

        if(respuesta.status === 200){
            const datos = await respuesta.json();
            console.log(datos);

            let peliculas = [];

            datos.results.forEach(pelicula => {
                peliculas += `
                <div class="card pelicula" style="width: 20rem;">
                    <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top" alt="pelicula">
                    <div class="card-body">
                        <h5 class="card-title titulos">${pelicula.title}</h5>
                        <p class="card-text descripcion"> ${pelicula.overview} </p>
                    </div>  
                </div>
            `;

            });

            contenedor.innerHTML = peliculas;
        }
    }

    catch(error){
        console.log(error.message);
    }
}


cargarPeliculas();