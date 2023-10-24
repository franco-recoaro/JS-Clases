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

//MANERA DE RECORRER UN CARRITO

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}
/***********************************************************************************************************************************/
// FOREACH Y MAP - MÉTODOS EXCLUSIVOS PARA ARREGLOS



/********************************FOR EACH*****************************/
//SE UTILIZA PARA RECORRER UN ARRAY Y MOSTRAR EL RESULTADO POR PANTALLA
//SOLO SE PUEDEN EJECUTAR EN ARREGLOS, UNA VEZ POR CADA ELEMENTO DEL ARRAY

carrito.forEach(function (producto) {
    console.log(carrito, carrito.nombre, carrito.precio);
})

/*FOR EACH EN FUNCION FLECHA*/

carrito.forEach(producto => console.log(producto, producto.nombre));



/*****************************MAP****************************/
// ES IGUAL QUE EL FOREACH, LA DIFERENCIA ES QUE MAP SE USA PARA CREAR NUEVOS ARRAY Y EL FOREACH PARA MOSTRAR POR PANTALLA */
//CREA UN NUEVO ARRAY CON LAS PROPIEDADES DADAS DENTRO DE LA FUNCION

const arrayMap = carrito.map(producto => producto.nombre);

console.log(arrayMap);

/*************************THIS**************************/
//NOS PERMITE REFERIRME A CUALQUIER PROPIEDAD DENTRO DEL OBJETO
//NO SE PUEDE UTILIZAR FUNCION FLECHA CON EL THIS

let reserva = {
    nombre: "Franco",
    apellido: "Recoaro",
    total: 300,
    pagado: true
}

console.log(reserva.nombre);

//EN ESTE CASO CREAMOS LA PROPIEDAD INFORMACION QUE VA A TENER COMO VALOR UNA FUNCION QUE IMPRIMA POR PANTALLA TODAS LAS PROPIEDADES DEL OBJETO
reserva.informacion = function(){
return (`El socio ${this.nombre} ${this.apellido} tiene una reserva con un total de ${this.total}. Se encuentra pagado? ${this.pagado}`)
};

console.log(reserva.informacion()); //EN ESTE CASO, INFORMACION PASARIA A SER PROPIEDAD Y EL VALOR SERIA LA FUNCION

//EJERCICIO CREAR UN OBJETO LLAMDO FECHA CON PROPIEDADES, AÑO, MES, DIA Y FALTANTES CON UNA FUNCION EN SU INTERIOR QUE ME DIGA
//CUANTOS DIAS QUEDAN PARA ACABAR EL MES SI OCTUBRE TIENE 31

let fecha = {
    año : 2023,
    mes : 10,
    dia : 24,
    faltantes : function(){
       return (`Quedan ${31-this.dia} para acabar el mes`)
    }
}

console.log(fecha.faltantes());