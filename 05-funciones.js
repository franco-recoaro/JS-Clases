//FUNCION: SERIE DE INSTRUCCIONES QUE REALIZAN UN FUNCIONAMIENTO EN ESPECIAL
//SON REUTILIZABLES

/*TRES FORMAS DE CREAR FUNCIONES:
1- DECLARACION DE LA FUNCION
2 -EXPRESION DE LA FUNCION
3-IIFE

/******************** 1-DECLARACION DE LA FUNCION *********************/
//PRIMERO CREAMOS LA FUNCION Y SEGUNDO LA LLAMAMOS

function sumar(n1,n2){ // ARGUMENTO DE LA FUNCION - SE COLOCAN PARA UTILIZARLOS DENTRO DEL CUERPO DE LA FUNCION
console.log(n1 + n2); //CUERPO DE LA FUNCION
};

sumar(10,20) // PARA QUE SE EJECUTE LA FUNCION, HAY QUE LLAMARLA.


/******************** 2-EXPRESION DE LA FUNCION *********************/
//A DIFERENCIA DE LA DECLARACION, EN ESTA LA LLAMAMOS PRIMERO ANTES DE CREARLA
//POR ESO SI LLAMAMOS A LA FUNCIÓN ANTES DE LA CREACIÓN NO FUNCIONA

let sumar2 = function (n1,n2){
    console.log(n1+n2); //CUERPO DE LA FUNCION
};

sumar2(3,9); //LA REALIDAD ES QUE LO ASIMILA MAS A UNA VARIABLE QUE A UNA FUNCION


/******************** 3-EXPRESION DE LA FUNCION *********************/
//NO HAY QUE LLAMAR A LA FUNCION, SE LLAMA ELLA MISMA

(function () /*ARGUMENTOS DE ENTRADA*/ {
    console.log("Esto es una funcion") //CUERPO DE LA FUNCION
})(); //LOS PARENTESIS DEL FINAL, HACEN QUE SE LLAME A SI MISMA


//**********************************************************************************************************************//
/*

PRIMERO -> CREAMOS
SEGUNDO -> LLAMAMOS
 
JAVASCRIPT SE EJECUTA EN DOS ETAPAS
1- PRIMERA ETAPA, LEE LA CREACION DE FUNCIONES. SE REGISTRAN LAS FUNCIONES. ETAPA DE CREACION
2- SEGUNDA ETAPA, LEE LA LLAMADA. SE REGISTRAN LAS LLAMADAS, ETAPA DE EJECUCIÓN.
 
*/
/***********************************************************************************************************************/


/*****************DIFERENCIA ENTRE METODO Y FUNCION - ACABAN SIENDO PRACTICAMENTE LO MISMO****************/
//ES MAS EL CONTEXTO EN EL QUE SE UTILIZAN

const numero1 = "20";
const numero2 = 20;

console.log(parseInt(numero1)); // parseInt() ES UNA FUNCION PARA PASAR STRING A TIPO NUMBER
console.log(typeof(parseInt(numero1))); // TYPEOF PARA SABER QUE TIPO DE VARIABLE ES "NUMERO2"
console.log(numero2.toString()); // .toString() ES UN MÉTODO

//NOMBRE DE FUNCION SEGUIDO DE PARENTESIS === FUNCIONES
//NOMBRE DE LA VARIABLE SEGUIDO DE PUNTO Y FUNCION PREEESTABLECIDA === METODOS - SIEMPRE LIGADO A LA VARIABLE

/***********************************************************************************************************************/
//EJERCICIO 1

function paleta(color){
    console.log(`MUESTRA DE COLOR: ${color}`); //UTILIZO TEMPLATE STRING 
}

paleta("rojo");

/*EJERCICIO 2 
//CREAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTOS
IMPORTE, DESCUENTO
 
Y ME MUESTRE POR PANTALLA EL DESCUENTO TOTAL
Y EL PRECIO FINAL
 
LLAMAR VARIAS VECES A LA FUNCIÓN CON DISTINTOS VALORES */

function precioFinal(importe,descuento){
    let calculoDescuento = (importe*descuento)/100;
    console.log(`Descuento es de: ${calculoDescuento} - precio final es: ${importe-calculoDescuento}`);
}

precioFinal(200,20)

/*EJERCICIO 3 
CREAR UNA FUNCION QUE CUENTE LOS CARACTERES DE UN TUIT
*/

function cuentaCaracteres(twit){
    console.log("EL CONTEO DE CARACTERES ES DE", twit.length)
}

cuentaCaracteres("Me llamo Franco");

/*EJERCICIO 4 
CREAR UNA FUNCION QUE DADO UN TEXTO Y UNA PALABRA, ME DIGA SI LA PALABRA ESTA CONTENIDA EN EL TEXTO*/


function buscador(texto,palabra){
    console.log ("Esta la palabra texto?", texto.includes(palabra))
};

buscador("Se encuentra la palabra texto?","texto")

/*EJERCICIO 5 
CREAR UNA FUNCION QUE DADO AÑADA UN ELEMENTO AL FINAL A UN ARRAY PREVIAMENTE DEFINIDO
MOSTRARLO POR CONSOLA Y RECIBE COMO ARGUMENTO DE ENTRADA EL ELEMENTO - LA FUNCION SE LLAMA AÑADIR
*/


let frutas=["pera", "kiwi"]
// EN ESTE CASO LA FUNCION SOLO FUNCIONARIA PARA EL ARRAY "FRUTAS"

function añadir(producto){
    frutas.push(producto)
}
añadir("manzanas");
console.log(frutas)

//EN ESTE CASO SERIA PARA UTILIZARLA GENERAL EN TODOS LOS ARRAYS

function agregarCarro(array,articulos){
    array.push(articulos)
    console.log(array)
}

agregarCarro(frutas,"frutillas");

/*EJERCICIO 6 
CREAR UNA FUNCION QUE ME RESTE DOS VALORES DADOS
*/

function resta(n1,n2){
    console.log("La resta da :" ,n1-n2);
}

resta(10,5);

/**************************************************************************************/

//FUNCIONES QUE RETORNAN VALORES - PARA DESPUES DARLE VALOR Y REUTILIZARLA

function multiplicar(x,y){
return x*y; //AQUI NO MUESTRA NADA POR PANTALLA COMO CONSOLE.LOG, CUANDO LLAME ESTA FUNCION VA A DEVOLVER EL VALOR DE x*y
}

let resultadoMultiplicar=multiplicar(2,3) //ALOJAMOS LA FUNCION EN UNA VARIABLE Y LE DAMOS VALOR A LOS PARAMETROS QUE QUISIERAMOS
                                        //ESTA MISMA VARIABLE VA A TENER EL VALOR QUE APLIQUEMOS EN LOS PARAMETROS
console.log(resultadoMultiplicar);

/************************/

//FUNCION PARA CARRITO DE COMPRAS

let totalCarrito=0;

function agregarCarrito (importe){
    totalCarrito=totalCarrito+importe;
}

agregarCarrito(80)
agregarCarrito(20)
agregarCarrito(10)

console.log(totalCarrito);

//MISMA FUNCION PERO CON RETURN

function carrito(importe){
    return total=+importe
}

carrito(200);
carrito(100);
carrito(500);

console.log(total);

//EJERCICIO 7
//REALIZAR UNA FUNCION QUE CALCULES DESCUENTO QUE SE INDIQUE LOS PRODUCTOS ANTERIORES UNO A UNO Y LOS SUME

let descuento=0.2;
let totalAhorro=0;

function sumaDescuento(productos){
return totalAhorro+=(productos*descuento);
}

sumaDescuento(200); // 20% de 200 = 40
sumaDescuento(100); // 20% de 100 = 20
sumaDescuento(700); // 20% de 700 = 140

console.log("El total de ahorro es :", totalAhorro); 

/*******************EJEMPLO DE RETURN ***********************/

let triplicar = function(x){
    return x*3;
}

let resultadoTriplicar = triplicar(6) //CREAMOS LA VARIABLE resultadoTriplicar PARA ALOJAR EL VALOR DE LA FUNCION triplicar() y
                                      // Y PODER REUTILIZAR LA VARIABLE CON EL VALOR DETERMINADO

console.log(resultadoTriplicar); //ESTO ES EL TIPO DE FUNCION COMO EXPRESION DE LA FUNCION

//O SI NO QUEREMOS ALOJARLA EN UNA VARIABLE, ES LO MISMO QUE HACER
console.log(triplicar(6));


//***********************************************************************************************************/
//****************METODOS DE PROPIEDAD*****************/

//SON FUNCIONES CON LA SINTAXIS DE METODO
//VAMOS A CREAR UN REPRODUCTOR MUSICAL

const reproductor = { //ES UN OBJETO DE FUNCIONES = SUS PROPIEDADES SON FUNCIONES = SERIA LO MISMO DE HACER FUNCION POR FUNCION
reproducir : function(nc){
    console.log(`Reproduciendo Cancion con ID: ${nc}`)
},

pausar: function(){
    console.log("PAUSANDO CANCION...");
},

crearPlaylist: function(nombre){
    console.log(`Creando Playlist: ${nombre}`)
}
}

reproductor.reproducir(17);
reproductor.crearPlaylist("rock")

//AGREGAR UNA FUNCION NUEVA COMO PROPIEDAD AL OBJETO YA CREADO "REPRODUCTOR"

reproductor.borrarCancion=function(id){;
    console.log(`Borrando cancion con ID: ${id}`)
}

reproductor.borrarCancion(13);


/***********************************************************************************************************************************/
/**************************FUNCIONES FLECHA**************************/

//OTRA ALTERNATIVA PARA CREAR FUNCIONES
//PARA CONVERTIR UNA FUNCION EN FLECHA, ES COLOCAR ENTRE LOS PARENTESIS Y LAS LLAVES UNA FLECHA
//SINTAXIS MAS CORTA

let dividirFlecha = x => x/3; //SI SOLO TENEMOS UN SOLO ARGUMENTO SIN INICIALIZAR, DESAPARECEN       
// TAMBIEN ELIMINAMOS LA PALABRA FUNCTION - TAMBIEN DESAPARECE EL RETURN - SI TENEMOS UNA SOLA LINEA DE CUERPO DESAPARECEN LAS LLAVES


let triplicarFlecha = (numero=1) => numero*numero*numero; //EN ESTE CASO, NO PUDIMOS ELIMINAR LOS PARENTESIS YA QUE EL ARGUMENTO ESTA INICIALIZADO


//EJERCICIO 8 -CREAMOS NUEVO ARROW FUNCTION, aprendiendo, QUE  DEVUELVA UN NUMERO +7 Y LO ALMACENE EN UNA VARIABLE resultadoAprendiendo

let aprendiendo = x => x+=7;
let resultadoAprendiendo=aprendiendo(10);
console.log(resultadoAprendiendo);


