/***************************DOM: INTERACCION CON JS Y HTML*****************************************/

//COMO SELECCIONAR CODIGO HTML, 3 FORMAS
//QUERYSELECTOR - QUERYSELECTORALL - GETELEMENTBYID
//TODOS INICIAN CON DOCUMENT

/*****************************QUERYSELECTOR*******************************/

//RETORNA UNO O NINGUN ELEMENTO - MUY SIMILARES A LOS QUE TENEMOS EN CSS 
//CLASES CON . - ID CON #
//DOCUMENT HACE REFERENCIA A TODO EL DOCUMENTO HTML

//EJERICIO 1: CREAR UNA SECCIÓN, CON UN H1, UNA IMAGEN DE FONDO, UN BOTÓN Y  UN DIV CON TRES ENLACES CON CLASE enlace Y EL DIV CON LA CLASE navPrincipal
//DARLE A LA SECCIÓN LA CLASE seccionPrincipal y DARLE AL BOTÓN UN ID botonPrincipal

const heading = document.querySelector("h1") //Llamo al elemento h1, tambien podria haber puesto (".seccionPrincipal h1")
console.log(heading);

const botonPrincipal = document.querySelector("#botonPrincipal")
console.log(botonPrincipal);

/***********MODIFICAR ELEMENTOS DE HTML YA CREADOS DESDE JS*************/

heading.textContent = "Nuevo Titulo por text.content" //LA PROPIEDAD TEXT.CONTENT MODIFICO EL CONTENIDO DEL ELEMENTO


/******************PARA AÑADIR Y ELIMINAR CLASES HACEMOS USO DE .classlist ******************/

//CUANDO HACEMOS USO DE CLASSLIST NO TENEMOS QUE PONER EL . EN LA CLASE - YA LE ESTAMOS DICIENDO QUE ES UNA CLASE

heading.classList.add("NuevaClaseDesdJS"); //AÑADIR

heading.classList.remove("NuevaClaseDesdJS"); //ELIMINAR


/*****************SELECCIONAR ENLACES****************/

const enlacesJS = document.querySelector("div a")
console.log(enlacesJS);
//EL PROBLEMA ES QUE ME MUESTRA EL PRIMER ELEMENTO "a" Y NO TODOS LOS QUE CONTIENEN EL DIV




/********************QUERYSELECTORALL*********************/

const todosEnlaces = document.querySelectorAll("div a"); //SELECCIONO EL DIV TAMBIEN PARA QUE NO SE MUESTRE EL BOTON Y SOLO LOS "a" DENTRO DEL DIV
console.log(todosEnlaces);

//ME LO MUESTRA EN UN NODELIST - PARA ACCEDER A CADA ELEMENTO LO HACEMOS AL IGUAL QUE LOS ARRAYS YA QUE LO INTERPRETA ASI.
console.log(todosEnlaces[0]);

//OTRA PROPIEDAD QUE PODEMOS MODIFICAR ES .href
todosEnlaces[0].href="https://google.com";


//EJERCICIO 2: MODIFICAR EL CONTENIDO Y EL HREF DEL SEGUNDO ENLACE UNICAMENTE CON QUERYSELECTORALL - PONER CONTENIDO MODIFICADO CON QUERYSELECTORALL. Y LLEVAR A OTRO ENLACE EXTERNO

todosEnlaces[1].textContent = "Hola como estas"
todosEnlaces[1].href="https://github.com/JosemanuelBS/FULLSTACKMADRID/blob/main/proyectojavascript/js/12-dom.js"
console.log(todosEnlaces[1]);


/******************************** GETELEMENTBYID ****************************/
//SELECCIONA SOLO LOS ELEMENTOS QUE CONTENGA UN ID

const botonJS = document.getElementById("botonPrincipal");
console.log(botonJS);

/******************************** GETELEMENTBYCLASS ****************************/
//SELECCIONA SOLO LOS ELEMENTOS QUE CONTENGA UNA CLASS

const seccionPrincipal = document.getElementsByClassName("seccionPrincipal");
console.log(seccionPrincipal);



/****************************************COMO CREAR ELEMENTOS EN HTML DESDE JS**********************************************/

const nuevoEnlace = document.createElement("A");

//NOS PERMITE CREAR CODIGO HTML JAVASCRIPT RECOMIENDA USAR MAYUSCULAS CUANDO USAMOS CREATE DIV, A , P, IMG

//AGREGAR HREF

nuevoEnlace.href = "#";

//AGREGAR TEXTO

nuevoEnlace.textContent = "Nuevo Enlace";

//AGREGAR CLASE

nuevoEnlace.classList.add("enlace"); //LE AÑADO LA CLASE DE INFORMATE

console.log(nuevoEnlace)

/***************AGREGAR AL DOCUMENTO Y AL ELEMENTO QUE QUIERO***********/

const navPrincipal = document.querySelector(".navPrincipal")
navPrincipal.appendChild(nuevoEnlace); //navPrincipal es el elemento principal de html y quiero que se añada ahi dentro.


//EJERCICIO 3: CREAR UN ENLACE QUE SE LLAME, ejercicioEnlace Y CON EL MISMO ESTILO.

const enlaceEJ = document.createElement("A");
enlaceEJ.href = "#"
enlaceEJ.textContent = "EJERCICIO NUEVO ENLACE"
enlaceEJ.classList.add("enlace")

navPrincipal.appendChild(enlaceEJ)
console.log(enlaceEJ);

//EJERCICIO 4