/***********JAVASCRIPT SI HAY UN ERROR EN UNA LINEA DE CODIGO ME PARALIZAEL CODIGO COMPLETO*******/

//TRY CATCH
        
const numero1 = 20;
const numero3 = 40;

console.log(numero1); // SE MUESTRA POR CONSOLA, OK
//console.log(numero2); // NO SE MUESTRA POR CONSOLA, DA FALLO
console.log(numero3); // NO LA MUESTRA, ESTABA PARALIZADO EL CODIGO POR EL ERROR ANTERIOR

//PARA QUE LO INTENTE IGUALMENTE, NOSOTROS UTILIZAMOS TRY CATCH

console.log(numero1);

try { // TRY = INTENTA ESTO
    console.log(numero2)
} catch (error) { //ERROR ES UN ARGUMENTO PREDETERMINADO
    console.log("tienes un error en console log 2") // SI NO PUEDES ME DEVUELVES ESTO
}

console.log(numero3)

//SOLO SE UTILIZA EN SITUACIONES CRÍTICAS, POR EJEMEPLO CONEXIONES CRÍTICAS A BASE DE DATOS. 
//NO ES UNA BUENA PRÁCTICA ABUSAR DEL TRY CATCH

/******************************************************************************************************************/

/********************************PROMISES****************************************/
//REFLEJA UN VALOR QUE ESTARÁ DISPONIBLE AHORA, EN UN FUTURO O NUNCA. TRES INSTANCIAS

const autenticado = true;

const usuarioAutenticado = new Promise( (resolve, reject) => { //ES UNA FUNCION FLECHA

// RESOLVE Y REJECT SE PASAN AUTOMATICAMENTE CON EL PROMISE - VALORES PREDETERMINADOS
// RESOLVE = FUNCION QUE SE EJECUTA CUANDO EL PROMISE SE CUMPLE
// REJECT = SI NO SE CUMPLE


    if (autenticado) {
        resolve("usuario Autenticado"); // EL PROMISE SE CUMPLE
    } else {
        reject("No se puedo iniciar sesion"); // EL PROMISE NO SE CUMPLE
    }
});

console.log(usuarioAutenticado);

/*******************EN LOS PROMISES EXISTEN 3 VALORES************/

//PENDING: EL PROMISE NO SE HA CUMPLIDO PERO TAMPOCO SE HA RECHAZADO, ESTÁ EN ESPERA
//FULFILLER: EL PROMISE SE HA CUMPLIDO
//REJECT: SE HA RECHAZADO O NO SE PUDO CUMPLIR


//MANERA DE ACCEDER A LA PROMESA SI SE CUMPLE O NO
//SINTAXIS: NOMBRE DE LA PROMESA Y "." 
//.then = PARA ACCEDER DIRECTAMENTE AL RESOLVE
//.catch = PARA ACCEDER DIRECTAMENTE AL REJECT

usuarioAutenticado
    .then(function (x) { // SE EJECUTA CUANDO EL PROMISE SE CUMPLE
        console.log(x)   // YA CUMPLIDA LA PROMESA PODEMOS DARLE OTRA FUNCIONALIDAD CON EL THEN
    })
    .catch(function (y) { // SE EJECUTA CUANDO EL PROMISE NO SE CUMPLE
        console.log(y)
    })


//.then SIGNIFICA QUE CUANDO SE CUMPLE LA PROMESA SE DEBE EJECUTAR
//.catch SIGNIFICA QUE CUANDO NO SE CUMPLE LA PROMESA SE DEBE EJECUTAR

/********************************************************************************************************/
//EJERCICIO 1: CREAR BOTON EN HTML CON id boton VER NOTIFICACION - NOTIFICACIONES API CON JAVASCRIPT
/*
const boton = document.querySelector("#boton");

boton.addEventListener("click", () => {
    console.log("DISTE CLICK");
    Notification.requestPermission() // "Notification" es una palabra reservada para enviar una notificacion al usuario en la web y ".requestPermission()" es una promesa predeterminada - solicita permiso en la web al usuario

    .then(resultado => console.log(`El resultado es ${resultado}`)); // SOLICITAR PERMISO DE NOTIFICACIONES
});


if (Notification.permission == "granted") { //SI EL RESULTADO DE LA PROMESA ES === "granted" (Significa aceptada)

    new Notification("Esta es una notificacion", { 
        icon: "ico-centro.png",
        body: "Notificación Tu Carrera Digital" //new Notification y colocamos ("titulo", icon:"", body:"texto notificacion")
    })

}

/*********************************************************************************************************************/
/***************************************ASYNC / AWAIT*************************************** */

/* 
SI ENTRAN DOS PERSONAS A UN RESTAURANTE. UNA PIDE UN VASO DE AGUA, OTRA UN MENÚ
NO ESPERAMOS A QUE ESTÉ LISTO EL MENU PARA SERVIRLE A LA OTRA PERSONA EL VASO DE AGUA

LO MISMO PASA EN JAVASCRIPT, SI HAGO UNA CONSULTA A LA BASE DE DATOS
LISTADO ULTIMOS 10000 CLIENTES ME VA A LLEVAR UN TIEMPO, PERO ME IRA MOSTRANDO
EL RESTO DEL SITIO WEB

SI NECESITO ESPERAR A UNA FUNCIÓN PARA PODER EJECUTAR OTRA
HAGO USO DE ASYNC AWAIT
*/


//VAMOS A CREAR FUNCIONES QUE SIMULEN LA CONSULTA A LA BASE DE DATOS, PARA OBTENER UNA RESPUESTA

/*RECIBEN DOS PARAMETROS (FUNCION Y EL TIEMPO DE EJECUCION)
setTimeout( () => { console.log("Set time out actuando")}, 3000) ////UNA VEZ PASADO 3 SEGUNDOS ME EJECUTA EL CUERPO DE LA FUNCION (setTimeout = EJECUTA) // MILISEGUNDOS

setInterval( () => {console.log("Set interval actuando")}, 4000) //ME EJECUTA EL CUERPO DE LA FUNCION CADA CIERTO INTERVALO (setInterval = REPITE) // MILISEGUNDOS

/********************************FUNCIONES ASINCRONAS***********************************/

function descargarNuevosClientes() { //VAMOS A CONTEMPLAR UNICAMENTE EL CASO DE EXITO (RESOLVE), PARA FACILITAR EL EJEMPLO

    return new Promise(resolve => {
        console.log("Descargando clientes... espere...")

        setTimeout(() => { //PARA SIMULAR EL TIEMPO DE LA RESPUESTA A LA DESCARGA DE LA BASE DE DATOS
            resolve("Los Clientes fueron descargados")
        }, 5000)
    });
}

// HEMOS CREADO UN PROMISE, COMO HACEMOS USO DEL ASYN/AWAIT?

async function app() { // FUNCIÓN QUE ES ASÍNCRONA (async)

    const resultadoAsync = await descargarNuevosClientes(); //LA FUNCION ESPERA A LA FUNCION descargarNuevosClientes HAYA FINALIZADO

    console.log(resultadoAsync)
    console.log("ESTE CODIGO SI SE BLOQUEA")
    

} 
//ESTE CODIGO SE EJECUTA EN SEGUNDO PLANO Y NO PARALIZA AL RESTO PUESTO QUE ESTA ES UNA CONSULTA CRITICA, SERÍA RECOMENDABLE INCLUIRLO DENTRO DE UN TRY CATCH

app(); //LLAMAMOS A LA FUNCION PARA QUE SE EJECUTE SIEMPRE Y CUANDO LA ANTERIOR FUNCION "descargarNuevosClientes" SE EJECUTE PRIMERO

//EJERCICIO 4: CREAR UNA FUNCION QUE ME DESCARGUE LOS PEDIDOS, Y ME DE UNA RESPUESTA A LOS 3 SEGUNDOS

function descargaPedidos(){
    return new Promise( ()  =>{
     console.log("Descargando pedidos.....espere");   
     
     setTimeout(() => { //PARA SIMULAR EL TIEMPO DE LA RESPUESTA A LA DESCARGA DE LA BASE DE DATOS
        console.log("Los pedidos fueron descargados")
    }, 3000)
    })
}
//DONDE COLOCAMOS LOS CONSOLE LOG PODEMOS PONER LO QUE QUERRAMOS, OTRA FUNCION, UN CONDICIONAL, ETC

descargaPedidos();
