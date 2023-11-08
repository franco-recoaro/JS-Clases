/*******************************BASE DE DATOS*********************************/
//ORGANIZA EL CONTENIDO EN FORMATO DE TABLAS
//SINTAXIS BÁSICA DE CONSULTA DE BASE DE DATOS


/*
ABRIMOS POWERSHELL, QUE SERÁ LA TERMINAL QUE USAREMOS
PARA LA CONSULTA DE LA BASE DE DATOS

EL PRIMER COMANDO QUE ME PERMITE INICIAR SESION MYSQL
ES OBLIGATORIO EL ; AL FINAL ES EL QUE FINALIZA LA ORDEN

    mysql -u root -p;

    PASSWORD: Fullstack En mac nada

PARA VER LAS BASES DE DATOS

    SHOW DATABASES;

LO HABITUAL ES ESCRIBIR EL CODIGO EN MAYUSCULAS

EL ; FINAL ES NECESARIO, HASTA QUE NO LO PONGAMOS NO 
SABRÁ CUAL ES EL FINAL DE LA SENTENCIA


CREAR UNA NUEVA BASE DE DATOS

    CREATE DATABASE peluqueria;
    SHOW DATABASES;

USAR UNA BASE DE DATOS

    USE peluqueria;

PARA MOSTRAR LAS TABLAS

    SHOW TABLES;


/*******************************CREAR UNA NUEVA TABLA***********************************

CREATE TABLE servicios(      //ES CONVENIENTE ABRIR PARENTESIS Y DETALLAR CADA UNO DE LOS ITEMS DE LA BASE ORDENADAMENTE

id INT(11) NOT NULL AUTO_INCREMENT,       
//ID MAXIMO 11 CARACTERES - NOT NULL: NO PUEDE ESTAR VACIO - AUTO_INCREMENTE: QUE VAYA AUMENTANDO MEDIANTE SE VAYAN CREANDO
nombre VARCHAR(60), 
//HASTA 60 CARACTERES SI SE PASA LO CORTA Y COGE LOS 6O PRIMEROS
precio DECIMAL(5,2), 
//5 DIGITOS Y DESPUES DE LA COMA SOLO 2 (5,2) 100.00
PRIMARY KEY (id) 
//NOMBRAMOS CUAL VA A SER LA PRIMARY KEY QUE ES NUESTRO ID
);

DEBEN TENER UN IDENTIFICADOR UNICO (ID)
DEBEMOS INDICARLE EL TIPO DE DATO
EL TIPO DE DATO QUE VAYA A USAR LO CONSULTO

SHOW TABLES; 

DESCRIBE servicios;   //ME DA INFORMACIÓN DE LA TABLA

YA SABEMOS CREAR BASE DE DATOS Y TABLAS, VAMOS A VER
LAS OPERACIONES QUE PODEMOS HACER CON LOS DATOS DE LAS TABLAS


*************************************************CRUD*************************************************************

CREATE, READ, UPDATE,DELETE

****************************** CREATE *************************

INSERTAR REGISTROS

INSERT INTO servicios (nombre,precio) //EL id SE AUTOINCREMENTA, NO HAY QUE PASARLO
VALUES ("Corte de Cabello de Adulto",15);

INSERT INTO servicios (nombre,precio)
VALUES ("Corte de Cabello Niño",12),("Corte de Barba",8) //PARA AGREGAR MÁS DE UN REGISTRO A LA VEZ 
        

****************************** READ ********************************

SELECCIONAMOS REGISTROS

SELECT * FROM servicios; - * //PARA SELECCIONAR TODAS LAS COLUMNAS

SI SOLO QUIERO SELECCIONAR UNA COLUMNA
SELECT nombre FROM servicios;

SELECT nombre,precio FROM servicios;

COMO ORDENADOR UNA CONSULTA
SELECT id,nombre,precio FROM servicios ORDER BY precio ASC; //ASC/DESC

PODEMOS LIMITAR LA SELECCION
SELECT * FROM servicios LIMIT 3;

SELECCION QUE CUMPLA UNA CONDICION
SELECT * FROM servicios WHERE id=2; //SE PUEDEN DAR OTRAS CONDICIONES

        = IGUAL QUE
        < MENOR QUE
        > MAYOR QUE
        <= MENOR IGUAL QUE
        >= MAYOR IGUAL QUE
        != DISTINTO QUE


****************************** UPDATE ************************************

ACTUALIZAR REGISTROS
VAMOS A VARIAR EL PRECIO DEL Corte de Cabelle Hombre a 20€

UPDATE servicios SET precio=20 WHERE id=1; // ACTUALIZO LOS CAMPOS QUE QUIERA HAY QUE INDICAR SIEMPRE CON EL WHERE QUE REGISTRO ACTUALIZAMOS

MOSTRAR LA TABLA PARA VER LA ACTUALIZACION



****************************** DELETE ************************************

ELIMINAR REGISTROS
DELETE FROM servicios WHERE id=1; //IMPORTANTE DECIRLE CON EL WHERE QUE REGISTRO VAMOS A BORRAR

MOSTRAR TABLA
SELECT * FROM servicios; //SI AÑADO UN SERVICIO, CONTINUA POR EL ULTIMO, NO ME RELLENA LOS REGISTROS VACIOS


/**************************************************************************************************************************  

*******************COMO MODIFICAR LAS TABLAS BASE DE DATOS************************
    
DESCRIBE servicios;

***************************AGREGAR COLUMNA*********************

ALTER TABLE servicios ADD descripción VARCHAR(100) NOT NULL;

SELECT * FROM servicios;
//LOS REGISTROS QUE TENEMOS NO TIENEN DESCRIPCIÓN

************************MODIFICAR COLUMNA*************************

ALTER TABLE servicios CHANGE descripcion nuevonombre VARCHAR(50) NOT NULL; 
//PODEMOS CAMBIAR EL NOMBRE Y LA EXTENSION SOLAMENTE
            
//EL TIPO DE DATO NO LO PUEDO CAMBIAR
//SI ERA UN TIPO VARCHAR, NO LO PUEDO CAMBIAR A UN TIPO INT

DESCRIBE servicios;

************************BORRAR COLUMNA*************************

ALTER TABLE servicios DROP COLUMN borrar

//ELIMINAR TABLAS COMPLETAS DE MI BASE DE DATOS
//MOSTRAMOS PRIMERO LAS TABLAS

SHOW TABLES;
    
************************BORRAR TABLAS************************

DROP TABLE tiempos;

//ME VA A EJECUTAR LA SENTENCIA, NO ME VA A PREGUNTAR SI ESTOY SEGURO NI NADA
//ES UN COMANDO MUY CRITICO

**********************************************************************************************************************
EJERCICIO
CREAMOS UNA NUEVA TABLA reservas - COLUMNAS (id, idcliente, hora, fecha, idservicio) CREAR AL MENOS 5 INSTANCIAS 


CREATE TABLE reservas (
    id INT(11) NOT NULL AUTO_INCREMENT,
    idclientes INT(11) NOT NULL,
    idservicios INT(11) NOT NULL,
    hora TIME DEFAULT NULL, // SI NO SE PASA NINGUN VALOR TOMA LA HORA DEL REGISTRO
    fecha DATE DEFAULT NULL, // IGUAL QUE LA HORA
    idservicio VARCHAR(255) NOT NULL,
    PRIMARY KEY(idreservas),
    FOREIGN KEY (idservicios) REFERENCES servicios(id),
    FOREIGN KEY (idclientes) REFERENCES clientes(id)
);


**************************************ORDENAR CONSULTA*************************************

SELECT * FROM servicios WHERE precio>12 ORDER BY precio;

//PARA ORDENAR SE COLOCA SIEMPRE ORDER BY y la funcionalidad

//EJERCICIO 1: MOSTRAR LOS ALUMNOS QUE CUMPLEN AÑOS EN DICIEMBRE

SELECT * FROM alumnos WHERE MONTH(fechanacimiento) = 12 ORDER BY fechanacimiento ASC;

WHERE MONTH(fechanacimiento) = 12 //ES LA RESTRICCION QUE SE COLOCA PARA QUE SOLAMENTE APAREZCAN LOS ALUMNOS QUE NACIERON EN DICIEMBRE
ORDER BY fechanacimiento  //NOMBRO NUEVAMENTE LA COLUMNA QUE QUIERO ORDENAR DE FORMA ASCENDENTE
//CADA VEZ QUE COLOQUE UNA ORDEN, CASI SIEMPRE SE DEBE RENOMBRAR LA COLUMNA A MODIFICAR.


*******************************SELECCIONAR DATOS ENTRE DOS VALORES*************************

SELECT * FROM servicios WHERE precio BETWEEN 10 AND 16; //INCLUIDOS

//EJERCICIO 2 MOSTRAR LOS ALBUMNOS QUE NACIONERON ENTRE 2002 Y 2003

SELECT * FROM alumnos WHERE YEAR(fechanacimiento) BETWEEN 2002 AND 2003;



***************************************************FUNCIONES AGREGADORAS***************************************************

ME DEVUELVE RESULTADOS DE MIS TABLAS Y ME PERMITE REALIZAR UNA OPERACION
CADA VEZ QUE UTILIZO UNA FUNCION SE COLOCA ENTRE PARENTESIS LA COLUMNA A OPERAR

*************************CONTADOR************************

ME DEVUELVE TODOS LOS REGISTROS QUE TENGAN UNA CONDICION Y ME LOS CUENTA

SELECT COUNT (id), fecha
FROM reservas
GROUP BY fecha DESC;

//ME CONTARÁ TODOS LOS ID QUE TENGAN LA MISMA FECHA Y ME LOS ORDENARÁ DE MAYOR A MENOR

//EJERCICIO 3: CONTAR EL NUMERO DE ALUMNOS QUE HAY POR AÑO

1) SELECT YEAR(fechanacimiento), 2) COUNT(id) FROM alumnos 3) GROUP BY YEAR(fechanacimiento) 4) ORDER BY YEAR(fechanacimiento
) DESC;

1RO SELECCIONO SOLAMENTE LOS AÑOS DE LA COLUMNA FECHANACIMIENTO - EN VEZ DE ANTES QUE SELECCIONABAMOS *(ALL)
2DO REALIZO EL CONTADOR DE LOS ID DE LOS ALUMNOS EN LA TABLA ALUMNOS PARA SABER LA CANTIDAD DE ALUMNOS EN CADA GRUPO
3RO LOS AGRUPO DEPENDIENDO EL AÑO DE NACIMIENTO DE CADA ALUMNO NOMBRANDO YEAR(Y AQUI LA COLUMNA DE FECHAS)
4TO ORDENO LOS AÑOS DE NACIMIENTO POR ORDEN DESCENDIENTE NOMBRANDO YEAR(Y AQUI LA COLUMNA DE FECHAS)

*****************************SUMA********************************

SELECT SUM(precio) AS totalServicios FROM servicios; 
//totalServicios ES UNA VARIABLE QUE USAMOS DE MANERA VIRTUAL
//SE CREA EN ESE MOMENTO PARA MOSTRARLO Y NADA MÁS, PERO NO EXISTE EN NUESTRA BASE DE DATOS


*************************MÍNIMO/MÁXIMO***************************

SELECT MIN(precio) AS precioMenor FROM servicios;
SELECT MAX(precio) AS precioMayor FROM servicios;


*****************COMO BUSCAR EN UNA BASE DE DATOS*****************

SELECT * FROM servicios WHERE nombre LIKE "Corte%";

    Corte%      INICIA CON CORTE 
    %Corte      FINALIZA CON CORTE
    %Corte%     CONTIENE CORTE, DA IGUAL QUE ESTÉ AL INICIO, AL FINAL O EN MEDIO

//SQL NO DISTINGUE DE MAYUSCULAS Y MINISCULAS
//RECORDAR QUE LOS CARACTERES BUSCADOS SIEMPRE VAN ENTRE COMILLADO ""

//EJERCICIO 4: MOSTRAR LOS PROFESORES QUE SON LICENCIADOS - LICENCIADAS - AMBOS

SELECT * FROM profesores WHERE titulacion LIKE "licenciado%";
SELECT * FROM profesores WHERE titulacion LIKE "licenciada%";
SELECT * FROM profesores WHERE titulacion LIKE "licenciad%";

//EJERCICIO 5: MOSTRAR LOS PROFESORES QUE DEN PSICOLOGIA Y BIOLOGIA

SELECT * FROM profesores WHERE titulacion LIKE "%logía"; 

*********************CONCATENAR COLUMNAS (UNIR)***********************

SELECT CONCAT(nombre," ",apellidos) AS nombreCompleto FROM alumnos;
//ME CREA DE NUEVO UNA VARIABLE VIRTUAL PARA ALMACENAR LOS DATOS OBTENIDOS QUE NO SE PUEDE REUTILIZAR


SELECT * FROM alumnos
WHERE CONCAT(nombre," ",apellidos) LIKE "%Juan Bartolo%";

//SELECCIONO TODO LOS ALUMNOS DE LA TABLA ALUMNOS
//CUANDO CONCATENANDO NOMBRE, ESPACIO Y APELLIDO SEA IGUAL A JUAN BERTOLO, IMPRIMA LA PANTALLA


SELECT nombre, apellidos, CONCAT(nombre," ",apellidos) as nombreCompleto FROM alumnos;

//ME AÑADE UNA COLUMNA NUEVA CON LA CONCATENACIÓN, PERO ES VIRTUAL
//SIEMPRE QUE CREO UN ALIAS ES VIRTUAL, NO SE ALMACENA EN MI TABLA

**************************MUTIPLES CONDICIONES**************************

SELECT * FROM alumnos WHERE id IN(1,3,4);
//CON EL IN LE DAMOS MÚLTIPLES VALORES

SELECT * FROM alumnos WHERE fecha="2023-03-29" AND id>3;
//EL OPERADOR AND ME PERMITE APLICAR MÚLTIPLES CONDICIONES

//EJERCICIO 6: SELECCIONAR LOS ALUMNOS QUE SON DEL 2002 Y QUE SON DEL CURSO ID 10
SELECT * FROM alumnos WHERE YEAR(fechanacimiento)=2002 and idcurso=10;

//EJERCICIO 7: SELECCIONAR LOS ALUMNOS QUE TIENEN CURSO ID 10, 8 Y 7
SELECT * FROM alumnos WHERE YEAR(fechanacimiento)=2002 and idcurso IN(10,8,7);

******************************************************************************************************************
****************************REGLAS DE NORMALIZACION****************************

OPTIMIZAR BASE DE DATOS EN FUNCION A UNAS REGLAS YA DEFINIDAS

HAY QUE APLICARLAS EN ORDEN

1NF - CADA COLUMNA SOLO UN VALOR
2NF - RELACION ENTRE COLUMNAS. LLAVES PRIMARIA MISMO TIPO DATO QUE LA FORANEA
3NF - LOS DATOS QUE NO FORMAN PARTE DE LA LLAVE PRIMARIA. CREAR TABLAS PARA EVITAR REGISTROS DUPLICADOS

Primera forma normal
-Elimine los grupos repetidos de las tablas individuales.
-Cree una tabla independiente para cada conjunto de datos relacionados.
-Identifique cada conjunto de datos relacionados con una clave principal(PRIMARY KEY).

Segunda forma normal
-Cree tablas independientes para conjuntos de valores que se apliquen a varios registros.
-Relacione estas tablas con una clave externa (FOREIGN KEY)

Tercera forma normal
-Elimine los campos que no dependan de la clave.

EXISTE 5, PERO LAS 3 PRIMERAS SON LAS MAS IMPORTANTES

DENORMALIZACION
SE PUEDEN ROMPER EN ALGUN MOMENTOS LAS REGLAS DE NORMALIZACION
PERO NO QUIERE DECIR QUE POR ELLO ESTÉ MAL LA BASE DE DATOS

CARDINALIDAD Y DIAGRAMAS ER (ENTIDAD RELACION)
ME PERMITEN VER DE MANERA VISUAL CUAL ES SU RELACION

CARDINALIDAD
NUMERO MAXIMO DE VECES QUE UNA TABLA SE RELACIONA CON OTRA
UNO A MUCHOS
UNO A UNO
MUCHOS A UNO


************************************************************************************************************


***********************************JOIN = UNIR TABLAS***************************************
UNIMOS ALUMNOS Y CADA CURSO CON SU ALUMNO CORRESPONDIENTE

SELECT * FROM alumnos INNER JOIN cursos ON cursos.id = alumnos.idcurso; 
//INNER JOIN = UNIR 
//DE LA TABLA CURSOS
//ON = DONDE
//EL curso.id Y QUE SE UNA (=) A alumnos.idcurso;


INNER JOIN SOLO ME MUESTRA CUANDO TENGAMOS VALORES
SELECT * FROM alumnos LEFT JOIN cursos ON cursos.id = alumnos.idcurso;
LEFT JOIN PRIMERO CONSULTA alumnos Y AÑADE VALORES A LAS QUE TENGA
INNER Y LEFT TIENEN EL MISMO RESULTADO

SELECT * FROM alumnos RIGHT JOIN cursos ON cursos.id = alumnos.idcurso; Y AÑADE VALORES A LAS QUE TENGA



UNIR DOS O MAS TABLAS CON EL JOIN

 SELECT * FROM alumnos INNER JOIN cursos ON cursos.id = alumnos.idcurso
    -> INNER JOIN profesores ON profesores.id = cursos.idtutor;

MULTIPLES JOIN
HACER UN JOIN A UNA TABLA QUE YA TIENE UN JOIN

SELECT alumnos.nombre AS nombreAlumno, profesores.nombre AS nombreProfe FROM alumnos INNER JOIN cursos ON cursos.id = alumnos.idcurso
-> INNER JOIN profesores ON profesores.id = cursos.idtutor;

***************************************************************************************************************

EJERCICIO 8:A QUE HORA TIENE CLASE CADA ALUMNO, NOMBRE Y APELLIDOS DEL ALUMNO Y DE LA HORA Y DIA DE LA SEMANA 

 SELECT alumnos.nombre AS alumnoNombre, alumnos.apellidos AS alumnoApellido, horarios.hora AS horaClase, horarios.diasemana AS diaSemana FROM alumnos
-> INNER JOIN cursos ON alumnos.idcurso = cursos.id 
-> INNER JOIN asignaturas ON asignaturas.idcurso = cursos.id
-> INNER JOIN horarios ON horarios.idasignatura = asignaturas.id;

//COMIENZO NOMBRANDO LOS DATOS DE LA TABLA ALUMNOS Y HORARIOS, DANDOLE UNA VARIABLE DIGITAL
//COMIENZO A UNIR LAS TABLAS COMENZANDO DESDE ALUMNOS, INNER JOIN LA TABLA "cursos" DONDE(ON) alumnos.idcurso COINCIDE CON EL curso.id QUE ES LO QUE COMPARTE
//A ESA TABLA LE AGREGO LA TABLA (INNERJOIN) QUE COMPARTE INFORMACION QUE ES asignaturas. DONDE(ON) asignaturas.idcurso COINCIDE CON asignaturas.id
//POR ULTIMO GRACIAS A ASIGNATURAS PUEDO LLEGAR A LA TABLA horarios, AGREGO CON INNER JOIN la tabla horarios DONDE (ON) horarios.idasignatura COINCIDA CON = asignaturas.id;


//EJERCICIO 9: HACER EL DIAGRAMA ER DE LA BASE DE DATOS DE AEROPUERTO


*/