//EJERCICIO 1: función que invierta una cadena. F: INVERTIR - P: CADENA

function invertir(cadena) {
    let separarCadena = cadena.split("");
    let invirtirCadena = separarCadena.reverse("");
    let resultadoCadena = invirtirCadena.join("")
    return resultadoCadena
}

let resultadoInvertir = invertir("Franco")
console.log(resultadoInvertir);



let cadenaF = ""
function invertir2(cadena) {
    let cadenaFinal = "";
    for (let i = cadena.length - 1; i >= 0; i--) { //INDICO QUE EL INDICE COMIENCE EN EL ULTIMO CARACTER YA QUE LE DOY .LENGTH-1
                                                // i-- INDICA QUE VAYA DE FORMA DECRECIENTE, YA QUE COMIENZA EN EL ULTIMO INDICE
        // CUANDO EL INDICE SEA MENOR A 0 SE TERMINA Y DEJA DE CONTAR CARACTERES
        cadenaF += cadena[i]; //INDICA QUE CADA VEZ QUE RECORRA EL ARRAY, VAYA CONCATENANDO LOS CARACTERES EN LA VARIABLE "cadenaFinal"

    }
    return cadenaF    //HAGO QUE LA FUNCION RETORNE EL VALOR FINAL DE LA VARIABLE CADENAFINAL
}
console.log(invertir2("Hola"));

//EJERCICIO 2: función que concatene dos cadenas. F: CONCATENAR - P: CADENA1, CADENA2

function concatenar(cadena1, cadena2) {
    return cadena1 + " " + cadena2
}
let resultadoConcatenar = concatenar("Hola me llamo Franco", "y vivo en madrid")
console.log(resultadoConcatenar);


//EJERCICIO 3: función que determine si una cadena contiene una letra. - F: CONTIENE - P: CADENA, LETRA

function contiene(cadena, letra) {

    return cadena.includes(letra)
}
console.log(contiene("Hola Franco", "k"));

//EJERCICIO 4: función que encuentre el número más grande en un array. - F: MAXNUM - P: ARRAY
arrayNum = [1, 2, 3, 4, 5, 6]

function maxNum(array) {
    let maximoArray = array[0]; // Empieza asumiendo que el primer elemento es el máximo
    for (let i = 0; i < array.length; i++) { // Empieza desde el segundo elemento

        if (array[i] > maximoArray){
            maximoArray = array[i]; //Solo se actualizará la variable "maximoArray" si en el recorrido del array pasado por parametro
        }                           //encuentra un numero mayor ya al almacenado en la nueva variable


    }
    return maximoArray;
}

const maximo = maxNum(arrayNum);
console.log("El número más alto en el array es: " + maximo);

//EJERCICIO 5: función que encuentre el número más pequeño en un array. - F: MINNUM - P: ARRAY
function minNum(array) {
    let minimoArray = array[0]; // Empieza asumiendo que el primer elemento es el máximo
    for (let i = 1; i > array.length; i++) { // Empieza desde el segundo elemento para comparar con el primero en el IF
        if (array[i] < minimoArray) { // En cada iteración del bucle, se compara el elemento actual con minimoArray 

            minimoArray = array[i]; // Y se actualiza Array si el elemento actual es menor.
        }
    }
    return minimoArray;
}
const minimo = minNum(arrayNum);
console.log("El número más bajo en el array es: " + minimo);

//EJERCICIO 6: función que cuente la cantidad de elementos booleanos verdadero/falso en un array. F: NUMBOOLEANOS - P: ARRAY, VALOR

let arrayBoleanos = [true, true, false, false, false]

function numBoleanos(array, valor) {
    let contador = 0; // Inicializamos un contador para contar el número de veces que aparece el valor
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valor) {
            contador++; // Si el valor en la posición actual del array [i] es igual al valor (valor) dado, incrementamos el contador
        }               // para que siga recorriendo el array buscando boleanos dada la condicion
    }
    if (valor === true) {
        console.log(`Hay ${contador} true(s) en tu oración.`);
    } else {
        console.log(`Hay ${contador} false(s) en tu oración.`);
    }
}
numBoleanos(arrayBoleanos, true); // Contar la cantidad de true
numBoleanos(arrayBoleanos, false); // Contar la cantidad de false

//EJERCICIO 7: función que determine si todos los elementos de un array son números. - F: ARRAYNUMEROS - P: ARRAY

let arrayNumeros = [1, 2, 3, 4, 5, 6]
let contadorNum = [];

function soloNumeros(array) {
    for (i = 0; i < array.length; i++) // VA ARRAY.LENGTH - 1 PORQUE NECESITAMOS QUE CUENTE TODAS LAS POSICIONES DEL ARRAY 
        // YA QUE COMIENZA EN 0 Y VA A CONTAR SOLO HASTA LA POSICION 5
        if (typeof array[i] === "number") {
            contadorNum.push(array[i]) // EL [i] INDICA QUE VAYA DEVOLVIENDO EL ELEMENTO QUE SE ENCUENTRA EN ESE INDICE RECORRIDO
        }
    if (contadorNum.length === array.length) {
        console.log("Todos son numeros");
    } else {
        console.log("Hay caracteres");
    }
}
soloNumeros(arrayNumeros);


//EJERCICIO 8: función que genere un número aleatorio entre N1 y N2. - F: NUMALEATORIO - P: N1,N2

function numAleatorio(n1, n2) {
    // Generar un número aleatorio entre n1 y n2 (incluyendo n1 y n2)
    return Math.floor(Math.random() * (n2 - n1 + 1) + n1);
}

let valorAleatorio = numAleatorio(20, 99);
console.log(valorAleatorio);

//EJERCICIO 9: función que calcule el área de un triángulo con base y altura como parámetros. Area=base*altura/2 - F: AREATRIAGULO - P: BASE,ALTURA

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.log(areaTriangulo(10,5));

// EJERCICIO 10: función que convierta grados Celsius a Fahrenheit. - F: GRADOS - P: CELSIUS

function grados(celcius) {
    return (celcius * 9 / 5) + 32;
}

console.log(grados(20));


//EJERCICIO 11: función que determine si un año es bisiesto. - F: BISIESTO - P: DIAS
function bisiesto(dias) {
    if (dias === 365) {
        console.log("El año no es bisiesto");
    } else {
        console.log("El año es bisiesto");
    }
}

bisiesto(366)


//EJERCICIO 12: función que cuente la cantidad de vocales en una cadena. - F: VOCALES - P: TEXTO
let vocales = (texto) => {
    let contador = 0; //CREAMOS EL CONTADOR PARA ALMACENAR EL DATO POR CADA VOCAL QUE HAYA EN LA CADENA
    for (let i = 0; i < texto.length; i++) { //CUANDO "texto.length" sea mas grande que el indice que frene el bucle
        let caracter = texto[i];

        if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
            contador++; //CADA VEZ QUE VEA UNA VOCAL, HACEMOS QUE SE SUME AL CONTADOR CON "contador++"
        }
    }
    return contador; //RETORNAMOS EL VALOR FINAL DE CONTADOR 
};

console.log(vocales("Hola"));

//EJERCICIO 13: función que cuente la cantidad de palabras en una cadena. - F: PALABRAS - P: TEXTO

let palabras = (texto) => {
    let contador = 1; //CREAMOS EL CONTADOR PARA ALMACENAR EL DATO POR CADA VOCAL QUE HAYA EN LA CADENA
    //EN ESTE CASO COMIENZA EN 1 YA QUE SINO NO CUENTA LA PRIMERA PALABRA PORQUE NO HAY UN ESPACIO

    for (let i = 0; i < texto.length; i++) { //CUANDO "texto.length" sea mas grande que el indice que frene el bucle
        let palabra = texto[i];

        if (palabra === " ") {
            contador++; //CADA VEZ QUE VEA UN ESPACIO, HACEMOS QUE SE SUME AL CONTADOR CON "contador++"
        }
    }
    return contador; //RETORNAMOS EL VALOR FINAL DE CONTADOR 
};

console.log(palabras("Hola como estas"));


//EJERCICIO 14: función que elimine los elementos duplicados de un array. - F: ELIMINADUPLICADOS - P: ARRAY

let arrayDuplicado = ["casa", "hogar", "casa", "cuarto", "cocina"];
let arraySinDuplicados = [];

let eliminaDuplicados = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (arraySinDuplicados.indexOf(array[i])) { // SI EN EL RECORRIDO SE ENCUENTRA UNA PALABRA IGUAL EN (array[i]) 
            arraySinDuplicados.push(array[i]); // SE ALMACENA EN "arraySinDuplicados" con push (array[i])
        }
    }
    if (arraySinDuplicados.length === array.length) {
        console.log("No hay palabras repetidas");
    } else {
        console.log("Palabras duplicadas eliminadas:", arraySinDuplicados);
    }
}

eliminaDuplicados(arrayDuplicado);

let arrayConDup = [1, 2, 6, 1, 2, 5, 9, 33, 33];

function eliminarDuplicados(array) {
    let arraySinDup = [...new Set(array)]; //CREAMOS UNA VARIABLE PARA EL NUEVO ARRAY SIN DUPLICADOS (EL SET NO ACEPTA ELEMENTOS DUPLICADOS EN UN ARRAY)
    return arraySinDup;                    //RETORNAMOS EL VALOR DEL NUEVO ARRAY CREADO CON SET
}

console.log(eliminarDuplicados(arrayConDup));

//EJERCICIO 15: función que ordene un array de números de forma ascendente. - F: ORDENARARRAY - P: ARRAY

let arraySinOrdenar = [1,4,3,7,9,5];

function ordenarArray(array){
    let arrayOrdenado= array.sort(function(a,b){return a-b}) // {return a-b} FORMA PREDETERMINADA PARA QUE CUENTE LOS VALORES DE FORMA ASCENDENTE
    return arrayOrdenado                                     // {return b-a} FORMA PREDETERMINADA PARA QUE CUENTE LOS VALORES DE FORMA DESCENDENTE
}
console.log(ordenarArray(arraySinOrdenar));

//EJERCICIO 16: función que muestre la tabla de multiplicar de un numero. F: TABLAMULTIPLICAR - A: NUMERO

function tablaMultiplicar(numero){
for(i=0; i<=10; i++){
   let tablaNumero = numero*i;
   console.log(`${numero} x ${i} = ${tablaNumero}`);
}
}
tablaMultiplicar(2);


//EJERCICIO 17: función que tome un número del 1 al 12 y devuelva el nombre del mes correspondiente utilizando una declaración switch
//F: NOMBREMES - P: NUMMES

function nombreMes(numMes){
    switch(numMes){
        case 1: console.log("Es enero");
        break;
        case 2: console.log("Es Febrero");
        break;
        case 3: console.log("Es Marzo");
        break;
        case 4: console.log("Es Abril");
        break;
        case 5: console.log("Es Mayo");
        break;
        case 6: console.log("Es Junio");
        break;
        case 7: console.log("Es Julio");
        break;
        case 8: console.log("Es Agosto");
        break;
        case 9: console.log("Es Septiembre");
        break;
        case 10: console.log("Es Octubre");
        break;
        case 11: console.log("Es Noviembre");
        break;
        case 12: console.log("Es Diciembre");
        break;
        default: console.log("No has dicho ningun mes");
        break;
    }
}
nombreMes(2)

//EJERCICIO 18: función que determine si una contraseña es segura basándose en longitud>8, mayúsculas y minusculas números
//F: CONTRASEÑASEGURA - P: CONTRASEÑA

function contraseñaSegura(contraseña){
    if (contraseña.length >= 8 &&
        contraseña.match(/[A-Z]/) &&
             contraseña.match(/[a-z]/) &&
                 contraseña.match(/\d/)) {
                    console.log("Tu contraseña ha sido correctamente ingresada");
                }else{
    console.log("Debes colocar correctamente los requisitos de la contraseña");
}}

contraseñaSegura("F")


//EJERCICIO 19: función que tome una cadena y reemplace todas las letras 'LETRA1' por 'LETRA2'. F: REEMPLAZAR - P: LETRA1, LETRA2

function reemplazar(cadena, letra1, letra2) {
    let nuevaCadena = "";
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === letra1) { //EL [i] INDICA QUE POR CADA ELEMENTO QUE RECORRA EL INDICE , ESTE COMPARE SI LA LETRA INDICADA EN "letra1" ESTÉ EN EL TEXTO DADO A "cadena"
            nuevaCadena += letra2; //SI ESTA CONDICION lo reemplazamos por letra2 en nuevaCadena.
        } else {
            nuevaCadena += cadena[i]; //Si el carácter no es igual a letra1, simplemente lo agregamos a nuevaCadena.

        }
    }
    return nuevaCadena; //Finalmente, la función devuelve la nuevaCadena resultante con todas las sustituciones.

}

let cadenaOriginal = "Esto es un ejemplo de reemplazo de letras";
let cadenaModificada = reemplazar(cadenaOriginal, "e", "a");
console.log(cadenaModificada);