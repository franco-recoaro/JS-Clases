/*EJERCICIO : CREAR UNA PANTALLA EMERGENTE QUE PIDA INFORMACION SOBRE TU NOMBRE - AÑADIR ESTE NOMBRE AL TITULO H1 QUE TENIAMOS CREADO AYER

let nombre = prompt("Dinos tu nombre");

let titulo = document.querySelector("h1")

titulo.textContent = nombre;

/***********************************************EVENTOS*************************************************************/
//ME PERMITEN TENER UNA WEB MÁS DINÁMICA CUANDO ALGUIEN VISITA UNA WEB, SURGEN MUCHOS EVENTOS SCROLL, BOTON ENVIAR FORMULARIO, CLICKS
//HAY EVENTOS QUE LOS GENERA EL USUARIO Y HAY OTROS QUE SE GENERAN AUTOMATICAMENTE


/******************EVENTO LOAD*****************/

window.addEventListener("load", function () {
    console.log("se ha cargado html, css, js")
});

//AÑADIMOS EVENTOS CON ADDEVENTLISTENER - window ES UNA PALABRA RESERVADA - SE REFIERE A LA VENTANA
//DESPUES LLAMAMOS AL CALLBACK, TAMBIEN PUEDEN SER FUNCIONES A PARTE
//LOAD ESPERA A QUE EL HTML, CSS, JS Y LOS ARCHIVOS QUE DEPENDEN DEL HTML ESTEN LISTOS


/************EVENTO DOMCONTENTLOAD***********/

document.addEventListener("DOMContentLoaded", function () {
    console.log("Se ha cargado el HTML");
});
//DOMCONTENTLOADED ESPERA QUE SE CARGUE UNICAMENTE EL HTML, EL RESTO NO LE IMPORTA


/************EVENTO SCROLL***********/
window.addEventListener("scroll", function () {
    console.log("Scrolling...")
});

console.log(4);

/************EVENTO CLICK************/
const botonNotificacion = document.querySelector("#boton"); //HEMOS SELECCIONADO YA EL ELEMENTO

botonNotificacion.addEventListener("click", function (evento) {
    console.log(evento); //ME MUESTRA INFORMACIÓN DEL EVENTO
    evento.preventDefault(); //PARA EVITAR QUE EN LOS FORMULARIOS ME RECARGUE LA PÁGINA SOLA SUELE USARSE EN FORMULARIOS
    console.log("Mostrando Notificación...");
})

//EJERCICIO 2: CREAR UN FORMULARIO DE CONTACTO EN HTML CON NOMBRE - CORREO - MENSAJE - BOTON ENVIAR


/*********************EVENTOS CON EL TECLADO - EVENTOS EN LOS INPUTS Y TEXTAREA********************/


/************************EVENTO CHANGE**********************/
let nombreFormulario = document.querySelector("#nombre");

nombreFormulario.addEventListener("change", function () {
    console.log("se ha completado el nombre");
})
//EVENTO CHANGE SE EJECUTA CUANDO SALIMOS DEL AREA DEL TEXTO 


/************************EVENTO INPUT**********************/

nombreFormulario.addEventListener("input", function (e) {
    console.log(e.target.value);
    nombre = e.target.value;
    actualizarParrafo();
    leertexto(e);
})

//ESTE EVENTO ES A TIEMPO REAL
//ME MUESTRA POR PANTALLA EN EL DATA LA INFORMACIÓN
//EN UN INPUT LA INFORMACIÓN SE ALMACENA EN EL VALUE - PARA ACCEDER DEBO INGRESAR CON SINTAXIS DE PUNTO DESDE EL PARAMETRO

//EJERCICIO 4: CREAR EL EVENTO DE INPUT EN CORREO Y MENSAJE - DEBAJO DEL FORMULARIO CREAR UN ELEMENTO TIPO PARRAFO QUE DIGA ESTA ES LA WEB DE ... CON CORREO .... Y SU PROPUESTA ES ....

let correoSolicitado = document.querySelector("#email");
let mensajeSolicitado = document.querySelector("#mensaje");
let correo, mensaje;

correoSolicitado.addEventListener("input", (e) => {
    console.log(e.target.value);
    correo = e.target.value;
    actualizarParrafo();
    leertexto(e);
});

mensajeSolicitado.addEventListener("input", (e) => {
    console.log(e.target.value);
    mensaje = e.target.value;
    actualizarParrafo();
    leertexto(e);
});

let parrafo = document.querySelector("#parrafoTexto")

function actualizarParrafo() {
    parrafo.textContent = `Esta es la página web de Franco, con correo ${correo} y su propuesta es ${mensaje}`;
};

//EJERCICIO CREAR OBJETO DATOS CON PROPIEDADES: NOMBRE - EMAIL - MENSAJE

let datos = {
    nombre,
    email,
    mensaje
};

function leertexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

//FUNCION GENERICA PARA ALMACENAR DATOS DE UN FORMULARIO EN UN OBJETO 

//LOS VALORES DE CADA FORMULARIO(VALUE) SE ALOJARAN EN EL OBJETO DATOS

//LA CLAVE DE ESTA FUNCION SE ENCUENTRA EN LAS LLAVES [e.target.id] YA QUE SI NO COINCIDE EL ID DEL FORMULARIO CON EL NOMBRE DE LA PROPIEDAD, NO PUEDE SER ALMACENADA EN ESA PROPIEDAD.

//IMPORTANTE QUE SE LLAME EL ID COMO LA PROPIEDAD DEL OBJETO

//EL CONSOLE LOG MOSTRARAR EL OBJETO ACTUALIZANDOSE MIENTRAS LLENEMOS EL FORMULARIO


/************************EVENTO INPUT**********************/

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault(); 
    console.log("Enviando Formulario...")
});

//SUBMIT PARA FORMULARIOS, ESTÁ ASOCIADO AL FORMULARIO EN GENERAL
//CLICK PARA OTROS BOTONES

//preventDefault() PREVIENE EL SALTO DE LINEA AL CLICKEAR EN UN BOTON

