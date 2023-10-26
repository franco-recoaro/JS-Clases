/************************************PROGRAMACION ORIENTADA A OBJETOS************************************************************/

//OBJECT LITERAL, MANUAL

const producto = {
    nombre: "tablet",
    precio: 500
};

/***************************************************OBJECT CONSTRUCTOR*************************************************************** */
// SINTAXIS MUY SIMILAR A UNA FUNCION
// CREAMOS UNA CLASE, QUE ES UN CONTENEDOR DE DATOS
// OBJETIVO: CREAR OBJETOS DE MANERA MÁS DINAMICA
// UNA CLASE ME VA SERVIR PARA ALMACENAR LOS DATOS QUE VA A TENER UN OBJETO EN ESPECIFICO

/*************************************************************/


//PALABRA RESERVADA FUNCION - LAS CLASES SIEMPRE EMPIEZAN CON MAYUSCULA
//ABRO Y CIERRO PARENTESIS - ABRO Y CIERRO LLAVES
//EN ARGUMENTOS VAN LOS NOMBRES DE LAS PROPIEDADES Y DESPUES AL RENOMBRAR LA FUNCION, EN ARGUMENTOS VAN LOS VALORES DE LAS PROPIEDADES
//QUE YO QUIERA COLOCAR

function ProductoClase(nombre, precio, disponibilidad = false, categoria = "play") {
    //THIS."PROPIEDAD" = VALOR (ARGUMENTO QUE SE COLOCARA DENTRO DE LA FUNCION)
    this.nombreObjeto = nombre;
    this.precioObjeto = precio; // LE PUEDO DAR EL NOMBRE QUE QUIERA, SE LE SUELE DAR EL MISMO
    this.categoria = categoria;
    this.disponibilidad = disponibilidad
};

//CREAMOS UNA INSTANCIA
//INSTANCIA = LLAMADO DE LA FUNCION

const producto2 = new ProductoClase("Monitor curvo", 800, true, "tech"); //LLAMAMOS UNA VARIABLE PARA ALMACENAR EL OBJETO CREADO
const producto3 = new ProductoClase("PC", 1800);
const producto4 = new ProductoClase("Reloj", 800);
console.log(producto2);
console.log(producto3);
console.log(producto4);

// EJERCICIO 1: CREAR UN OBJETO CON OBJECT CONSTRUCTOR LLAMADO FECHA CON PROPIEDADES, AÑO, MES, DÍA DAR 4 VALORES DISTINTOS

function FechaCalendario(año, mes, dia) {
    this.numeroAño = año;
    this.numeroMes = mes;
    this.numeroDia = dia;
}

const fecha1 = new FechaCalendario(2023, 10, 14);
const fecha2 = new FechaCalendario(2022, 11, 15);
const fecha3 = new FechaCalendario(2021, 12, 16);
const fecha4 = new FechaCalendario(2020, 1, 17);

console.log(fecha1);
console.log(fecha2);
console.log(fecha3);
console.log(fecha4);

//*************************PROTOTYPES***********************/
//ME PERMITE CREAR FUNCIONES DENTRO DE UN OBJETO, QUE SOLO SE UTILIZAN EN UN OBJETO ESPECIFICO
//NO SE UTILIZA MUCHO, VEREMOS LUEGO LA ALTERNATIVA CON LAS CLASES
//FORMATEAR EN PROGRAMACION SIGNIFICA EXPLICAR DETALLADAMENTE ALGO

ProductoClase.prototype.formatearProducto = function () {
    return (`El producto ${this.nombreObjeto} tiene un precio de ${this.precioObjeto} €`);
};

const producto5 = new ProductoClase("Monitor redondo", 100);
const producto6 = new ProductoClase("Monitor LED", 900);
const producto7 = new ProductoClase("Monitor SMART", 500);

console.log(producto5.formatearProducto());
console.log(producto6.formatearProducto());
console.log(producto7.formatearProducto());

/************************************************************************************************************************/
/************************************************CLASS*******************************************/

class ProductoClase2 { //SE COLOCA EL NOMBRE DE LA CLASE QUE SE VA A UTILIZAR PARA CREAR EL CONSTRUCTOR
    constructor(nombre, precio) { //COMO CONSTRUCTOR ES UNA FUNCION SE LE COLOCAN LOS ARGUMENTOS QUE UTILIZAREMOS PARA CREAR LAS PROPIEDADES DEL OBJETO Y DARLE VALOR
        this.nombreObjeto2 = nombre; //COLOCO EL NOMBRE LA PROPIEDAD Y LE DOY COMO VALOR LOS ARGUMENTOS QUE VOY A COLOCAR POSTERIORMENTE
        this.precioObjeto2 = precio;
    }

    formatearProducto2() { //LA VIRTUD DE ESTA FORMA ES PODER CREAR FUNCIONES DENTRO DEL MISMO CONSTRUCTOR
        return (`El producto ${this.nombreObjeto2} tiene un precio de ${this.precioObjeto2} €`);
    }

    descuento() {
        return (`El precio con descuento es: ${this.precioObjeto2 - (this.precioObjeto2 * 20 / 100)}`)
    }
}

//INSTANCIA

const producto8 = new ProductoClase2("TV nueva", 678);
console.log(producto8);
console.log(producto8.formatearProducto2());

//EJERCICIO 2: AÑADIR UN NUEVO METODO QUE ME CALCULE EL PRECIO CON UN 20% DESCUENTO
console.log(producto8.descuento());

//***************************************HERENCIA**********************************************//
//EJERCICIO 3: CREAR UN OBJECT CONSTRUCTOR Libro CON PROPIEDADES nombre,precio,isbn HACIENDO USO DEL CONSTRUCTOR Y GENERAR UNA INSTANCIA

class libro {
    constructor(nombre, precio, isbn) {
        this.nombreLibro = nombre;
        this.precioLibro = precio;
        this.numeroIsbn = isbn;
    }
}

const libro1 = new libro("Harry Potter", 200, 12345);
console.log(libro1);



class Biblioteca extends libro { //LA CLASE BIBLIOTECA HEREDA DE LIBRO LAS PROPIEDADES DE LIBRO //EXNTENDS: Heredar

    constructor(nombre, precio, isbn, categoria) { //UTILIZAMOS LA PALABRA CONSTRUCTOR Y LOS ARGUMENTOS A COLOCAR POSTERIORMENTE

        super(nombre, precio, isbn); //DEFINIMOS LA PLABRA RESERVADA "super" Y ENTRE PARENTESIS COLOCAMOS TODAS LAS PROPIEDADES QUE QUEREMOS HEREDAR DE LA CLASE "libro"

        this.categoria = categoria; //DENTRO DEL CONSTRUCTOR COLOCAMOS LA PROPIEDAD A AGREGAR Y CON SU VALOR COMO LO HACIAMOS ANTERIORMENTE
    }
    formatearProducto3() {
        return (`El producto ${this.nombre} pertenece a la categoria ${this.categoria}`);
    }
};

const libro2 = new Biblioteca("El Señor de los Anillos", 200, 1234443, "Fantastic");
console.log(libro2);
console.log(libro2.formatearProducto3());

//EJERCICIO 4: CREAR UN OBJECT CONSTRUCTOR COCHE CON PROPIEDADES MARCA, AÑOCOMPRA, MOTOR, MATRICULA
//UNA FUNCION METODO QUE ME DIGA EL NUMERO DE AÑOS QUE TIENE EL COCHE
//CREAR DOS INSTANCIA, UNA PARA TU COCHE Y OTRO EL DE TU PADRE

class coche {
    constructor(marca, año, motor, matricula) {
        this.marcaAuto = marca;
        this.añoAuto = año;
        this.motorAuto = motor;
        this.matriculaAuto = matricula;
    }
    añosAuto() {
        let añoActual = new Date().getFullYear()
        let añosAuto = añoActual - this.añoAuto
        return (`El auto tiene ${añosAuto} años`)

    }
}

const cocheHijo = new coche("Peugeot", 2018, "V8", 3587117);
console.log(cocheHijo.añosAuto());
const cochePadre = new coche("Fiat", 2023, "V8", 3587117);
console.log(cochePadre.añosAuto());


//EJERCICIO 5: CREAR OTRO CONSTRUCTOR DE OBJETOS LLAMADO ITV QUE HEREDE DE LA CLASE COCHE AÑO, MATRICULA Y AÑOITV
//Y ME DE UN METODO CON EL TIEMPO QUE ME FALTA PARA LA PROXIMA ITV

class ITV extends coche {
    constructor(año,matricula,añoITV) {
        super(undefined, año, undefined, matricula);
        this.añoITV = añoITV;
    }

    calcularITV() {
        let añoActual = new Date().getFullYear()
        if (this.añoITV < añoActual) {
            return (`Tu coche debe hacer la ITV este año`)
        } else {
            return ("No debes hacer la ITV");
        }
    };
    edadCoche(){super.edadCoche()} //Forma de heredar un metodo (funcion) creada en el anterior constructor
};

const coche2 = new ITV(2015, 11254, 2021);
console.log(coche2);
console.log(coche2.calcularITV());

