/* EJERCICIO!!!!!!!!!!

CREAR 3 VARIABLES

PASO1:
VARIABLEA = "varA"
VARIABLEB = "varB"
VARIABLEC = "varC"

PASO2:
CREAR OBJETO EJERCICIO6 VACIO

PASO3:
VAMOS A CREAR PROPIEDADES A ESE OBJETO A PARTIR DE LAS VARIABLES

PASO4:
MOSTRAMOS POR PANTALLA EL OBJETO
*/

let variableA = "varA"
let variableB = "varB"
let variableC = "varC"

let ejercicio6 = {

}

ejercicio6.variableA = variableA;
ejercicio6.variableB = variableB;
ejercicio6.variableC= variableC;

console.log(ejercicio6);






//***************************************************ARRAYS*************************************************************//

//SIRVEN PARA AGRUPAR ELEMENTOS(VALORES) DEL MISMO TIPO O RELACIONADOS

const numeros = [10, 20, 30, 40, 50];
console.log("MI PRIMER ARRAY", numeros);
console.table(numeros);

//FORMA ALTERNATIVA DE CREAR ARRAY - MENOS UTILIZADA

const meses = new Array("Enero", "Febrero", "Marzo");
console.table(meses);

//DENTRO DE UN ARRAY SE PUEDEN COLOCAR DISTINTOS TIPOS DE DATOS (NUMBER, BOOLEAN)

const mezclaDatos = ["Hola", 10, true, null, [1, 2, 3]];
console.table(mezclaDatos);





//--------------------------------COMO ACCEDER A LOS VALORES DEL ARRAY----------------------------------//


//EN LOS ARRAYS HACEMOS USO DE LOS ÍNDICES, EN LA MAYORÍA DE LENGUAJE DE PROGRAMACION - EL INDICE EMPIEZA EN 0

console.log("ACCEDIENDO A LOS VALORES DEL ARRAY CON EL INDICE", numeros[2]); 

//DAMOS UN INDICE QUE NO ESTÁ EN EL ARRAY - VA A FIGURAR ERROR
console.log("INDICE QUE NO ESTÁ EN EL ARRAY ", numeros[200]);





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//------------------EJERCICIO 1 -----------------
//MOSTRAR SOLO LOS DIAS LUNES Y JUEVES EN EL ARRAY diaSemana
let diaSemana=["Lunes","Martes","Miercoles","Jueves","Viernes"];

console.log("SOLO LOS DIAS: ", diaSemana[0] ,"y" ,diaSemana[2]);

// ------------EJERCICIO 2----------------------
// 1 CREAR UN OBJETO CON PROPIEDADES DE TIPO STRING, NUMBER Y BOOLEAN
// 2 AÑADIR UNA PROPIEDAD TIPO ARRAY CON LOS DÍAS DEL FIN DE SEMANA, finSemana
// 3 CREAR UN DESTRUCTURING CON CADA UNA DE LAS PROPIEDADES

//PUNTO 1
let camiseta = {
    marca: "Nike",
    talla: 10,
    disponibilidad: true
};

//PUNTO 2
camiseta.finSemana=["Sabado","Domingo"];
console.log(camiseta);

//PUNTO 3
let {marca,talla,disponibilidad,finSemana} = camiseta;
console.log("Resultado ejercicio2: ", marca,talla,disponibilidad,finSemana);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//------------------------------------------------METODOS ARRAY----------------------------------------------------------//

//METHODO LENGHT - PERMITE SABER LA LONGITUD DEL ARRAY - nombreArray.lenght

console.log("LONGITUD DEL ARRAY", diaSemana.length);

//METODO forEach(POR CADA)
//ITERADORES DE LOS ARRAYS, LO VEREMOS MÁS ADELANTE EN DETALLE
//EL OBJETIVO ES PODER ACCEDER A CADA ELEMENTO DEL ARRAY

diaSemana.forEach(function(dia){
    console.log(dia);
})

//FOREACH, POR CADA UNO DE ELLOS - RECORRE LOS ELEMENTOS DE UN ARRAY





//------------------------------METODOS DE ELIMINAR/MODIFICAR/AÑADIR ELEMENTOS A LOS ARRAYS----------------------------------//


//----------------------METODOS DE MODIFICAR---------------------//

// SI NO EXISTE ESE INDICE ME LO AGREGARÁ, PERO ESTA FORMA NO ES MUY USADA, PUES DEBEMOS SABER LA EXTENSIÓN DEL ARREGLO
numeros[5] = 60;

//SI ESTE INDICE EXISTE, NOS MODIFICA EL VALOR
numeros[2] = 120; 
console.log(numeros);

//------------------------METODOS DE AÑADIR ---------------------//

//METODO PUSH - AÑADE UN ELEMENTO AL FINAL DEL ARRAY - NO NECESITAMOS SABER LA DIMENSIÓN DEL ARREGLO

numeros.push(70); // AÑADE 70 AL FINAL DEL ARRAY
numeros.push(80, 90, 100) // PUEDES AÑADIR TANTOS VALORES COMO DESEES

// NO ES BUENA PRACTICA MODIFICAR LOS ARRAYS ORIGINALES

numeros.unshift(-10, 129020, -30); // AÑADE ELEMENTOS AL INICIO


// ----------- METODOS PARA ELIMINAR ELEMENTOS DE UN ARRAY ----------//

//METODO POP - ME ELIMINA EL ULTIMO ELEMENTO DEL ARRAY
numeros.pop();

//METODO SHIFT - ELIMINA EL PRIMER ELEMENTO
numeros.shift();
console.table(numeros);

// METODO splice(Y,X) - ELIMINA X ELIMENTOS A PARTIR DEL Y
numeros.splice(2, 3); // (INDICE, VALORES A ELIMINAR - EN ESTE CASO ELIMINA DOS VALORES A PARTIR DE LA POSICION 2)


//--------------- METODO PARA COPIAR Y CREAR OTRO ARRAY ------------//

//METODO REST-SPREAD OPERATOR 
//LAS DESVENTAJAS ES QUE ESTAMOS MODIFICANDO EL ARRAY ORIGINAL - PARA EVITAR ESO, CREAMOS UN ARRAY NUEVO 
const nuevoArreglo = [...numeros,1540];
console.table(nuevoArreglo);



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//----------EJERCICIO 3--------------
/* CREAR UN ARRAY QUE SE LLAME ESTACIONES 
1)INICIALIZAMOS CON VERANO SOLAMENTE
2)DESPUÉS AÑADIR PRIMAVERA EN SU LUGAR CORRESPONDIENTE IDEM AÑADIR OTOÑO, INVIERNO
3)PRIMAVERA, VERANO, OTOÑO, INVIERNO
4)MOSTRAMOS POR PANTALLA */


let estaciones = ["Verano"];
estaciones.unshift("Primavera");
estaciones.push("Otoño","Invierno")
console.log(estaciones);

/*/-------------EJERCICIO 4----------------
1)CREAR UN ARRAY CARRITO
2)// CON 4 OBJETOS EN SU INTERIOR
3)// CON PROPIEDADES NOMBRE Y PRECIO
4)// ASIGNAR VALORES QUE QUERAIS
5)// MOSTRAR POR PANTALLA */

let carrito = [
    {
        Nombre: "Nike",
        precio: 10
    },
   {
        Nombre:"Levis",
        precio: 15
    },
    {
        Nombre: "Supreme",
        precio: 10
    },
    {
        Nombre: "Adidas",
        precio: 12
    }
]
console.table(carrito);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//-------------------- METODO DE BUSQUEDA EN EL ARRAY --------------/

//METODO INCLUDES
//SE UTILIZA PARA BUSCAR LA INFORMACION SI ESTÁ EN EL ARRAY PLANO (SE LEE TODO EN UNA LINEA), DEVUELVE UN VALOR BOOLEANO (TRUE O FALSE)

let resultado;

resultado = meses.includes("Mayo")
console.log("USO DE INCLUDES PARA BUSCAR EN EL ARRAY PLANO", resultado);

//METODO SOME - IDEAL PARA BUSCAR DENTRO DE OBJETOS SI SE ENCUENTRA LA PROPIEDAD

resultado = carrito.some(function (producto) {
    return producto.nombre === "Tablet" //ME DEVOLVERÁ TRUE/FALSE
});

console.log("RESULTADO DE FUNCION SOME IDEAL", resultado);


//METODO REDUCE - COMO SABER EL TOTAL DEL CARRITO - 
//REDUCE VA RECORRIENDO EL ARRAY Y VA RETORNANDO EN UNA VARIABLE LA SUMA DE LOS VALORES


resultado = carrito.reduce(function (total, producto) { // PARA ITERAR
    // TOTAL Y PRODUCTO SON LOS PARAMETROS DE LA FUNCION
    return total + producto.precio
}, 0); // EL VALOR DONDE INICIA
console.log("USO DE REDUCE", resultado);



// METODO FILTER, PARA FILTRAR - EL MÁS UTILIZADO

resultado = carrito.filter(function (producto) {
    return producto.precio < 400
});
console.log("USO DE FILTER", resultado);


//-------------------- COMPARADORES ------------------------
// === ESTRICTAMENTE IGUALES
// == NO NECESARIAMENTE ESTRICTAMENTE Franco = franco
// !== DIFERENTES
// < MENOR QUE
// <= MENOR IGUAL
// > MAYOR QUE
// >= MAYOR IGUAL


