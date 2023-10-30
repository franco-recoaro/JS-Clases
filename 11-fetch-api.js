/***************************FETCH API *****************************************/

//VAMOS SIMULAR UNA PEQUEÑA BASE DE DATOS (BASE DE DATOS: CONTENEDOR DE TABLAS).
//JAVASCRIPT NECESITA DE UN LENGUAJE DE BACK QUE LE DE UNA RESPUESTA A UNA CONSULTA DE LA BASE DE DATOS.
//EN EL FORMATO .JSON SON OBLIGATORIAS LAS COMILLAS DOBLES.
//LOS ARCHIVOS .JSON SON CONTENEDORES DE OBJETOS QUE CONTIENEN ARRAYS DE OBJETOS DENTRO.

function obtenerEmpleados(){
    fetch ("empleados.json") //fetch (URL con la API)
    .then (resultado => {
        return resultado.json() //VOY A TENER RESPUESTA TIPO JSON // TIPO DE CONSULTA ESTANDAR // SE ACCEDE SIEMEPRE ASI
    })
    .then(datos =>{ //DATOS ES EL PARAMETRO QUE ALOJA LA RESPUESTA POSITIVA DE LA CONSULTA A LA BASE DE DATOS 
                    //EN ESTE CASO PASA A SER EL ARRAY DE OBJETOS

        const {empleados} = datos; //DESTRUCTURING PARA CREAR VARIABLES A PARTIR DE LAS PROPIEDADES

        console.log(empleados); //EMPLEADOS PASA A ALOJAR LA RESPUESTA POSITIVA DE LA INTERACCION DE LA INTERACCION CON LA BASE DE DATOS, QUE ES UN ARRAY DE OBJETOS DEL EMPLEADOS.JSON 

        empleados.forEach(empleado => { //FOR EACH PARA RECORRER LOS OBJETOS TRAIDOS
            console.log(empleado.id)
            console.log(empleado.nombre)
            console.log(empleado.puesto)
            console.log(empleado);
    });
})
};

obtenerEmpleados();

/***********************************************************************/
//OTRA FORMA DE HACERLO CON ASYN/AWAIT

async function obtenerEmpleados2() {

    const resultado = await fetch("empleados.json"); //VOY A TENER RESPUESTA TIPO JSON // TIPO DE CONSULTA ESTANDAR // SE ACCEDE SIEMEPRE ASI

    const datos = await resultado.json(); //datos pasa a alojar la respuesta positiva de la interaccion con la base datos, que es un array de objetos del empleados.json.

    const {empleados} = datos; //DESTRUCTURING PARA CREAR VARIABLES A PARTIR DE LAS PROPIEDADES // 
    //PARA HACERLO DEBO COLOCAR EL NOMBRE DEL JSON ENTRE LLAVES PARA TOMAR LAS PROPIEDADES QUE TIENE DENTRO

    console.log(empleados); //EMPLEADOS PASA A ALOJAR LA RESPUESTA POSITIVA DE LA INTERACCION DE LA INTERACCION CON LA BASE DE DATOS, QUE ES UN ARRAY DE OBJETOS DEL EMPLEADOS.JSON 

    empleados.forEach(datosEmpleados => {
        console.log(datosEmpleados.id);
        console.log(datosEmpleados.nombre);
        console.log(datosEmpleados.puesto);
    });

};

obtenerEmpleados2();


