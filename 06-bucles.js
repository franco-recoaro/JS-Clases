/*******************BUCLES E ITERADORES************************/
//TENEMOS 3: FOR - WHILE Y DO WHILE
//TRES FORMAS DE HACERE LO MISMO

/****************************FOR***************************/

//IRÁ EJECUTANDO EL CÓDIGO SIEMPRE QUE SE CUMPLE LA CONDICION

for (let i = 0; i <= 3; i++) {
    //PRIMERA PARTE: i === ÍNDICE, SUELE EMPEZAR POR 0, PUES SE USA MUCHO PARA RECORRER ARREGLOS
    //SEGUNDA PARTE: i<=3 SERÁ LA CONDICIÓN. SE EJECUTA MIENTRAS SE CUMPLE QUE I ES MENOR O IGUAL A 3
    //TERCERA PARTE: i++ ACTUALIZADOR
    console.log(i); //CUERPO DE LA FUNCION
}

//EJERCICIO: MOSTRAR DEL 100 AL 200 POR PANTALLA

for(let i = 100; i<=200; i++){
    console.log(i)
}

//EJERCICIO 2: MOSTRAR NUMEROS DEL 2 AL 49, SOLO LOS PARES

for(let i=0; i<50; i+=2){ //HACEMOS QUE EL ACTUALIZADOR SUME DE A 2 (i+=2) AL INDICE CADA VEZ QUE RECORRE EL BUCLE
    console.log(i);
};

//EJERCICIO 3: MOSTRAR EN ORDEN DESCENDENTE DEL 100 HASTA EL 0, PERO DE 5 EN 5 INCLUIDOS AMBOS

for(let i=100; i>=0; i-=5){
    console.log(i)
};

/*

EXPLICACION SINTAXIS RECORRIDO

i++ => i = i+1
i+=3 => i = i+3
i-- => i = i-1

*/

//EJERCICIO 4: MOSTRAR DEL 1 AL 20 TODOS LOS NUMEROS PARES
//NOTA: i%2===0 ME DA LA CONDICION DE PAR

for(let i=1; i<=20 ; i++){ //SI LA CONDICION DEL BUCLE NO SE DA, SE TERMINA - SIN IMPORTAR EL IF DENTRO
    if(i % 2 === 0){ //CONDICION PREDETERMINADA PARA BUSCAR NUMEROS PAR DENTRO DE UN BUCLE
        console.log(i); //SI CUMPLEN LA FUNCION DE PARES SE MUESTRAN EN CONSOLA
    }
};


//EJERCICIO 5: CREAR ARRAY PLANO

let array = [10,20,30,40,50];

for(i=0; i<array.length; i++){ 
    console.log(array[i]); //DEBEMOS COLOCAR EL NOMBRE DEL ARRAY Y ENTRE LLAVES COLOCAR EL INDICE A RECORRER EL MISMO
}

//EJERCICIO 6: MOSTRAR CADA OBJETO Y DESPUES LA PROPIEDAD NOMBRE

let carrito = [
    {
        nombre: "TV",
        precio: 750
    },
    {
        nombre: "Tablet",
        precio: 350
    },
    {
        nombre: "Movil",
        precio: 550
    },
    {
        nombre: "PC",
        precio: 1750
    }
];

for (i=0 ; i<carrito.length ; i++){
    console.log(carrito[i]);  //DEBEMOS COLOCAR EL NOMBRE DEL ARRAY Y ENTRE LLAVES COLOCAR EL INDICE A RECORRER EL MISMO
    console.log(carrito[i].nombre); //AQUI DEBE RECORRER EL CARRITO NUEVAMENTE PARA SABER LOS NOMBRES DE CADA OBJETO
}

/*********************************************************************************************************************************/

/*********************WHILE*******************/
//MUY SIMILAR AL FOR, SINTAXIS UN POCO DIFERENTE
//SE EJECTUA MIENTRAS UNA CONDICION SEA EVALUADA COMO VERDADERA

let l=0; //EL INDICE ESTA AFUERA

while(i<100){ /*DENTRO DE LOS PARENTESIS VA LA CONDICION*/
console.log(i); i++; //DENTRO DE CORCHETES VA EL CUERPO Y DESPUES DEL CUERPO VA EL ACTUALIZADOR
}

/*********************************************************************************************************************************/

/*********************DO WHILE*******************/
//EL INDICE SE DECLARA FUERA DEL BUCLE
//EMPEZAMOS CON LA PALABRA RESERVADA DO
//EL DO WHILE ASEGURA QUE UNA VEZ SE REPRODUZCA EL BUCLE AUNQUE NO CUMPLA LA FUNCION

let j = 0; //EL INDICE ESTA FUERA

do{ //COLOCAMOS LA PALABRA DO Y ABRIMOS LLAVEES
console.log(j); //EN EL CUERPO COLOCAMOS LO QUE QUEREMOS QUE HACER Y EL ACTUALIZADOR
j++; //ACTUALIZADOR
}while(j<10); //COMO LA CONDICION ESTA AL FINAL, DEBE RECORRER SI O SI EL BUCLE Y POR ESO SIEMPRE OBLIGATORIAMENTE LO RECORRE

/*

for(let i=0; i<10; i++)             ///////FOR
{
    console.log(i)
}


let i=0;                            ///////WHILE
while(i<10){
    console.log(i);
    i++;
}


let i=0;                            ////////DO WHILE
do{
    console.log(i);
    i++;
}while(i<10)

*/

//EJERCICIO 7: MOSTRAR DEL 1 AL 20 TODOS LOS NUMEROS PARES CON WHILE
//NOTA: i%2===0 ME DA LA CONDICION DE PAR

let f = 1;

while(f<=20){
    if(f % 2 === 0){
        console.log(f);
    }; f++;
}

//EJERCICIO 8: CREAR UNA FUNCION QUE DADO UN ARGUMENTO ME DIGA SI ES *POSITIVO *ES NEGATIVO O *ES 0

function unNumero(numero){
    if(numero>0){
        console.log("Has dado un numero positivo");
    }else if(numero<0){
    console.log("Has dado un numero negativo");
    }else{
        console.log("Has dado 0");
    }
}

unNumero();

//EJERCICIO 9: CREAR UNA FUNCION QUEE DADO UN ARGUMENTO, ME DE UNA CUENTA ATRAS DE LOS NUMEROS

function regresion(x){
    for(i=x;i>=0;i--){ //EN EL INDICE LE DAMOS COMO VALOR EL ARGUMENTO A COLOCAR EN LA FUNCION
                        //LA VARIABLE "I" DEBE SER MAYOR A 0
        console.log(i); //COLOCAMOS "I" PARA SABER LOS NUMEROS QUE VA RECORRIENDO LA VARIABLE EN EL BUCLE SOBRE EL ARGUMENTO QUE
                        //DAMOS EN LA FUNCION
    }
}
regresion(2);

//EJERCICIO 10: CREAR UNA FUNCION QUE DADO UN ARGUMENTO DE ENTRADA N° ME DE LA SUMA DE TODOS LOS NUMEROS ENTRE O Y N°

let acumulacion = 0;

function sumaTotal(n){
    for(i=n; i>=0; i--){ //IGUALAMOS EL INDICE QUE SEA IGUAL AL NUMERO QUE LE DEMOS NOSOTROS A LA FUNCION
        acumulacion=acumulacion+i; //NOMBRAMOS LA VARIABLE "acumulacion" Y LA IGUALAMOS A ACUMULACION +i - ESTO ES PARA QUE ACUMULE 
                                   //LOS NUMEROS QUE VA RECORRIENDO EL BUCLE EN REGRESION POR LOS (--)
    }
    console.log(acumulacion); //ESTO ES IGUAL A 5+4+3+2+1
}

sumaTotal(5);

//EJERCICIO 11: FUNCION QUE DADO UN ARGUMENTO ME CALCULE LA MEDIA DE LA SUMA DE TODOS LOS VALORES CON WHILE

let m = 0; //SE INICIA EL INDICE FUERA PORQUE ES WHILE
let acumulacion2 = 0; // CREEAMOS VARIABLE PARA QUE ALOJE EL RECORRIDO DEL BUCLE

function media (n){
    while(m <= n){

        acumulacion2=acumulacion2+m; // M INDICA EL INDICE Y VA SUMANDOSE A LA VARIABLE "acumulacion2"

        m++} //INDICA QUE EL INDICE VAYA SUBIENDO DE A UNO.

    console.log(acumulacion2/n+1); //DIVIDIMOS LA ACUMULACION DEL BUCLE POR EL NUMERO QUE DIMOS COMO ARGUMENTO 
                                   //Y COLOCAMOS +1 PARA QUE CUENTE EL 0 COMO VALOR.
}
media(18); //TENEMOS 19 VALORES PORQUE SE CUENTA EL 0