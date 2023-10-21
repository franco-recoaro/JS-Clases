/***************************************COMPARADORES/CONDICIONALES************************************/

/* COMPARADORES - CONDICIONALES */

/*********************************** IF ***************************************/

let numeroFR = "900"; // UN SOLO IGUAL ASIGNAMOS VALOR A UNA VARIABLE
if (numeroFR === 900) {  // DOS O TRES IGUALES COMPARAN
    console.log("Tu numero es 900");
} else {  //SIEMPRE QUE NO SE EJECUTE EL IF, VA A EJECUTAR EL ELSE
    console.log("Tu numero no es 900");
}

/*EJERCICIO 1: CREAR UNA ESTRUCTURA DE CONTROL QUE COMPRUEBE SI EL PIN ES CORRECTO */

let pinCorrecto = 1234;
if (pinCorrecto === 1234) {
    console.log("Tu PIN es correcto, puede ingresar");
} else {
    console.log("Tu PIN es incorrecto, tienes 2 intentos");
};

/*EJERCICIO 2: CREAR UNA ESTRUCTURA DE CONTROL QUE COMPRUEBE SI PUEDO RETIRAR 100 DE MI DINERO*/

let saldo = 200;
if (saldo >= 200) {
    console.log("Puedes retirar el dinero");
} else {
    console.log("No tienes dinero suficiente");
};

if (pinCorrecto === 1234) {
    console.log("Puedes ingresar");
    if (saldo >= 200) {
        console.log("Saldo suficiente");
    } else {
        console.log("Saldo insuficiente");
    }
} else {
    console.log("PIN incorrecto");
}



function cajero(pin,cantidad){    
    if (pin === 1234) {
        console.log("Puedes ingresar");
        if (saldo>=cantidad) {
            console.log("Saldo suficiente");
        } else {
            console.log("Saldo insuficiente");
        }
    } else {
        console.log("PIN incorrecto");
    }
}

cajero(1234,100);




/****************************************ELSE IF******************************************************/
//PARA HACER MULTIPLES COMPARACIONES

let rol = "Editor";

if(rol === "Administrador"){
console.log("Acceso a todo el sistema");
}else if (rol === "Editor"){ //SI NO SE CUMPLE EL IF, PERO SE CUMPLE EL ELSE IF
    console.log("Solo puedees editar, pero no crear");
}else if(rol === "Gestor"){
console.log("Tu eres el gestor, puedes gestionar la web");
}else{ //SI NO SE CUMPLE NADA DE LO ANTERIOR
    console.log("No tienes acceso")
};

//EJERCICIO
// CREAR UNA ESTRUCTURA DE CONTROL QUE COMPARE EN QUE ESTACIÓN DEL AÑO ESTAMOS Y ME DIGA CUAL ES LA SIGUIENTE. PRIMAVERA-VERANO-OTOÑO-INVIERNO

let estacionActual = "Otoño"

if(estacionActual==="Otoño"){
    console.log("Usted esta en Otoño y la siguiente estacion es Invierno");
}else if(estacionActual==="Invierno"){
    console.log("Es invierno y la proxima estacion primavera");
}else if(estacionActual==="Primavera"){
    console.log("Es primavera y la proxima estacion es Verano");
}else if(estacionActual==="Verano"){
    console.log("Es verano y la proxima estacion es Otoño");
}else{
    console.log("No has dicho una estacion");
}

//CREAR UNA ESTRUCTURA DE CONTROL QUE ME DIGA SI LA NOTA DE UN EXAMEN ES SOBRESALIENTE (10-9) - NOTABLE (8-7) - SUFICIENTE (6-5) - SUSPENSO (-5)

let notaExamen = 8;

if(notaExamen>=9){
    console.log("Felicitaciones tu nota ha sido Sobresaliente");
}else if(notaExamen>=7 || notaExamen<9){
    console.log("Tu nota ha sido NOTABLE");
}else if(notaExamen>=5 || notaExamen<7){
    console.log("Tu nota ha sido SUFICIENTE")
}else{
    console.log("Tu nota ha SUSPENDIDO");
}




/**************************SWITCH *********************/
//PARA HACER MULTIPLES COMPARACIONES Y OPTIMIZAR EL USO DE TANTO ELSE IF
//FUNCIONAN CON CASE - NECESITA UN BRAKE PARA FINALIZAR CADA CASE - DEFAULT ME MUESTRA EL CASO POR DEFECTO

let metodoPago = "Tarjeta"
switch(metodoPago){

    case "Tarjeta": console.log("Pagaste con tarjeta"); //CASO NUMERO 1
    break; //SI SE DA LA CONDICION, SE TERMINA EL SWITCH

    case "Bizum": console.log("Pagaste con Bizum"); //CASO NUMERO 2
    break;

    case "Efectivo": console.log("Pagaste en efectivo"); //CASO NUMERO 3
    break;

    default: console.log("Pendiente de pago"); //SI NO SE CUMPLE NADA DE LO ANTERIOR
    break; //TAMBIEN NECESITA UN BREAK
}

console.log("Ha pagado con ", metodoPago)

 

// EJERCICIO 3 CREAR UNA ESTRUCTURA DE CONTROL QUE ME COMPARE SI UN NÚMERO AL MULTIPLICARLO POR SI MISMO ES MENOR QUE 100. 
//SI ES MENOR QUE 200, Y SI NO CUMPLE LAS ANTERIORES

let numeroE3 = 6;

if(numeroE3*numeroE3 < 100){
console.log("Tu numero es menor a 100");
}else if(numeroE3*numeroE3 < 200){
    console.log("Tu numero es menor a 200");
}else{
    console.log("Tu numero superan los 100 y 200");
}

//PASAMOS LA CONDICION A UNA FUNCION

function multiplo(x){
    if(x*x < 100){
        console.log("Tu numero es menor a 100");
        }else if(x*x < 200){
            console.log("Tu numero es menor a 200");
        }else{
            console.log("Tu numero superan los 100 y 200");
        }
}

multiplo(5);

//PROMPT ES PARA STRING - PARSEINT ES PARA PASAR STRING A NUMEROS ENTEROS

//EJERCICIO 4 CREA UNA ESTRUCTURA DE CONTROL CON SWITCH QUE ME COMPARE SI UN NUMERO +10 ES: =9 - =12 - =15 =100 
//COGER LA INFO DESDE UN PROMPT

let numeroSolicitado = parseInt(prompt("Por favor indica el numero que quieres verificar", "Escribe aqui"));

switch (numeroSolicitado+10){
    case 9: console.log("Tu numero es igual a 9");
    break;
    case 12: console.log("Tu numero es igual a 12");
    break;
    case 15: console.log("Tu numero es igual a 15");
    break;
    case 100: console.log("Tu numero es igual a 100");
    default: console.log("Tu numero no es igual a ninguno");
    break;
}
