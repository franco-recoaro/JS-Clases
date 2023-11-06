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

SHOW TABLES; //DESCRIBE servicios; ME DA INFORMACIÓN DE LA TABLA

YA SABEMOS CREAR BASE DE DATOS Y TABLAS, VAMOS A VER
LAS OPERACIONES QUE PODEMOS HACER CON LOS DATOS DE LAS TABLAS



/*************************************************CRUD*************************************************************

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
LOS REGISTROS QUE TENEMOS NO TIENEN DESCRIPCIÓN

************************MODIFICAR COLUMNA*************************

ALTER TABLE servicios CHANGE descripcion nuevonombre VARCHAR(50) NOT NULL; 
//PODEMOS CAMBIAR EL NOMBRE Y LA EXTENSION SOLAMENTE
            
EL TIPO DE DATO NO LO PUEDO CAMBIAR
SI ERA UN TIPO VARCHAR, NO LO PUEDO CAMBIAR A UN TIPO INT

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

*******************************SELECCIONAR DATOS ENTRE DOS VALORES*************************

SELECT * FROM servicios WHERE precio BETWEEN 10 AND 16; //INLCUIDOS

*******************************FUNCIONES AGREGADORAS*******************************

*****************CONTADOR****************

SELECT COUNT (id), fecha
FROM reservas
GROUP BY fecha DESC;

//ME CONTARÁ TODOS LOS ID QUE TENGAN LA MISMA FECHA Y ME LOS ORDENARÁ DE MAYOR A MENOR


*****************SUMA********************

SELECT SUM(precio) AS totalServicios FROM servicios; 
//totalServicios ES UN ALIAS QUE USAMOS DE MANERA VIRTUAL
//SE CREA EN ESE MOMENTO PARA MOSTRARLO Y NADA MÁS, PERO NO EXISTE EN NUESTRA BASE DE DATOS


*****************MÍNIMO/MÁXIMO***************

SELECT MIN(precio) AS precioMenor FROM servicios;
SELECT MAX(precio) AS precioMayor FROM servicios;


*********COMO BUSCAR EN UNA BASE DE DATOS*********

SELECT * FROM servicios WHERE nombre LIKE "Corte%";

    Corte%      INICIA CON CORTE 
    %Corte      FINALIZA CON CORTE
    %Corte%     CONTIENE CORTE, DA IGUAL QUE ESTÉ AL INICIO, AL FINAL O EN MEDIO

*****************CONCATENAR COLUMNAS (UNIR)*****************

SELECT CONCAT(nombre," ",apellidos) AS nombreCompleto FROM clientes;
//ME CREA DE NUEVO UN ALIAS VIRTUAL

SELECT * FROM clientes
WHERE CONCAT(nombre," ",apellidos) LIKE "%Juan Bartolo%";

SELECT nombre, apellidos, CONCAT(nombre," ",apellidos) as nombreCompleto FROM clientes;
//ME AÑADE UNA COLUMNA NUEVA CON LA CONCATENACIÓN, PERO ES VIRTUAL
//SIEMPRE QUE CREO UN ALIAS ES VIRTUAL, NO SE ALMACENA EN MI TABLA

*********MUTIPLES CONDICIONES*********

SELECT * FROM reservas WHERE id IN(1,3,4);
//CON EL IN LE DAMOS MÚLTIPLES VALORES

SELECT * FROM reservas WHERE fecha="2023-03-29" AND id>3;
//EL OPERADOR AND ME PERMITE APLICAR MÚLTIPLES CONDICIONES


******************************************************************************************************************
    REGLAS DE NORMALIZACION
    OPTIMIZAR BASE DE DATOS EN FUNCION A UNAS REGLAS YA DEFINIDAS

        HAY QUE APLICARLAS EN ORDEN

        1NF. CADA COLUMNA SOLO UN VALOR
        2NF. RELACION ENTRE COLUMNAS. LLAVES PRIMARIA MISMO TIPO DATO QUE LA FORANEA
        3NF. LOS DATOS QUE NO FORMAN PARTE DE LA LLAVE PRIMARIA. CREAR TABLAS PARA EVITAR REGISTROS DUPLICADOS

        Primera forma normal
            -Elimine los grupos repetidos de las tablas individuales.
            -Cree una tabla independiente para cada conjunto de datos relacionados.
            -Identifique cada conjunto de datos relacionados con una clave principal.
        Segunda forma normal
            -Cree tablas independientes para conjuntos de valores que se apliquen a varios registros.
            -Relacione estas tablas con una clave externa.
        Tercera forma normal
            -Elimine los campos que no dependan de la clave.

        EXISTE 5, PERO LAS 3 PRIMERAS SON LAS MAS IMPORTANTES


        DENORMALIZACION
            SE PUEDEN ROMPER EN ALGUN MOMENTOS LAS REGLAS DE NORMALIZACION
            PERO NO QUIERE DECIR QUE POR ELLO ESTÉ MAL LA BASE DE DATOS


    CARDINALIDAD Y DIAGRAMAS ER (ENTIDAD RELACION)
        ME PERMITEN VER DE MANERA VISUAL CUAL ES SU RELACION

        PONER DIAPOSITIVA27

        CARDINALIDAD, NUMERO MAXIMO DE VECES QUE UNA TABLA SE RELACIONA CON OTRA
            UNO A MUCHOS
            UNO A UNO
            MUCHOS A UNO

        !!!!!!!!!!!!!!!!
        EJERCICIO
        HACER EL DIAGRAMA ER DE LA BASE DE DATOS DE AEROPUERTO



        VAMOS A EMPEZAR A UNIR TABLAS, JOIN

        PARTIMOS DE LAS TABLAS RESERVAS Y CLIENTES

                SELECT * FROM reservas 
                INNER JOIN clientes ON clientes.id = reservas.idCliente;

                INNER JOIN SOLO ME MUESTRA CUANDO TENGAMOS VALORES
                LEFT JOIN PRIMERO CONSULTA citas Y AÑADE VALORES A LAS QUE TENGA
                INNER Y LEFT TIENEN EL MISMO RESULTADO

                RIGHT JOIN PRIMERO CONSULTA clientes Y AÑADE VALORES A LAS QUE TENGA



                UNIR DOS O MAS TABLAS CON EL JOIN

                SELECT * FROM reservas 
                LEFT JOIN reservas ON reservas.idCliente = clientes.id
                LEFT JOIN servicios ON servicios.idServicio = reservas.idServicio;

                MULTIPLES JOIN
                HACER UN JOIN A UNA TABLA QUE YA TIENE UN JOIN


        






*/