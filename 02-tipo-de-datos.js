//VARIABLES STRING

const producto1 = "Ajedrez";
const producto2 = String ("Dooble");
const producto3 = new String("UNO");

console.log("Juego 1:", producto1);
console.log("Juego 2:", producto2);
console.log("Juego 3:", producto3);

console.log("Juego 1:", typeof producto1);
console.log("Juego 2:", typeof producto2);
console.log("Juego 3:", typeof producto3);

let numero100 = false;
let numero200 = "200";

console.log("numero:", numero100);
console.log("numero:", numero200);

console.log("METODO LENGH",producto1.length);
console.log("METODO INDEXOF", producto1.indexOf("Ajedrez"));
console.log("METODO INCLUDES", producto1.includes("Ajedrez"))

let ejString1
let ejString2
let ejString3

ejString1="Franco";
ejString2="Luis";
ejString3="Recoaro";

console.log("Nombre:", ejString1.length);
console.log("Segundo Nombre:", ejString2.indexOf("Luis"))
console.log("Apellido:", ejString3.includes("Recoaro"))


//NUMBER

let numero1 = 100;
let numero2 = 200.25;
let numero3 = "200";
let numero4 = 2/3;

console.log("NUMERO 1:", typeof numero1);
console.log("NUMERO 2:", typeof numero2);
console.log("NUMERO 3:", typeof numero3);
console.log("NUMERO 4:", typeof numero4);

console.log("SUMA NUMERO 1 Y NUMERO 2", numero1 + numero2);
console.log("RESTA NUMERO 1 Y NUMERO 2:", numero1 - numero2);
console.log("MULTIPLICACION NUMERO 1 Y NUMERO 2:", numero1 * numero2);
console.log("DIVISION NUMERO 1 Y NUMERO 2:", numero1 / numero2);

let resultado=Math.round(Math.random()*30);

console.log("TU DADO HA SALIDO:", resultado);

let diametro=5;
let area=Math.PI*Math.pow(diametro/2,2);

console.log("el diametro es", area);


/* METODOS MATH MAS USADOS 

    Math.PI; PARA MOSTRAR EL NUMERO PI

    Math.round(2.5); PARA REDONDEAR

    Math.ceil(2.1); REDONDEA HACIA ARRIBA

    Math.floor(2.9); REDONDEA HACIA ABAJO

    Math.sqrt(144); RAIZ CUADRADA

    Math.pow(x,2); ELEVA AL CUADRADO X

    Math.abs(-200); MUESTRA EL VALOR ABSOLUTO

    Math.min(2,3,1,0); ME DA EL VALOR MENOR

    Math.max(2,3,1,0); ME DA EL VALOR MAYOR
    
    COMBINACIONES DE LAS ANTERIORES

    */

/* EJERCICIO DADO */

let dado=Math.round(Math.random()*5+1)

console.log("Tu dado ha salido", dado);

/* EJERCICIO ORDEN */

let resultadoOrden= 20 + 30 * 2;
console.log(resultadoOrden);

let resultadoOrden2 = (20+30)*2;
console.log(resultadoOrden2);

/*EJERCICIO DESCUENTO*/

let prenda1 = 120;
let prenda2 = 85;
let prenda3 = 24;
let descuento = 40;
let importe= prenda1+prenda2+prenda3;
let ahorro = importe*descuento / 100;
let total = importe - ahorro;


console.log("El precio final es de: ", importe,"€");

console.log("El descuento de la compra total es: ", ahorro,"€");

console.log("El importe final con descuento es :", total,"€")

//CRECIENTE Y DECRECIENTE//

let meGusta=0;

meGusta++; //INCREMENTA EL VALOR EN 1 DE MEGUSTA // ES IGUAL A QUE DIGA meGusta=meGusta+1;

meGusta+=14; // ES IGUAL A QUE DIGA meGusta=meGusta+14;

meGusta-=6; // ES IGUAL QUE DIGA meGusta que estaba en 14 menos los 6 de drececiente = Valor de meGusta 9

console.log("USO DE INCREMENTOS, ME GUSTA:", meGusta)

//COMO CONCATENAR MAS PROFESIONALMENTE "TEMPLATE STRING"

let nombre = "Franco Recoaro"

let email = "flrecoaro@gmail.com"

console.log(`ESTE ES EL NOMBRE: ${nombre} Y EL MAIL: ${email}`);