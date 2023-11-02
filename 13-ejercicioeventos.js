//EJERCICIO 5: CREAR UN ARCHIVO.JSON 

const cartasCurso = document.querySelector("#cartasCurso");        

async function obtenerDatos() {

    const resultado = await fetch("tucarreradigital.json"); //VOY A TENER RESPUESTA TIPO JSON // TIPO DE CONSULTA ESTANDAR // SE ACCEDE SIEMEPRE ASI

    const datos = await resultado.json(); //datos pasa a alojar la respuesta positiva de la interaccion con la base datos, que es un array de objetos del empleados.json.

    const { tucarreradigital } = datos; //DESTRUCTURING PARA CREAR VARIABLES A PARTIR DE LAS PROPIEDADES // 
    //PARA HACERLO DEBO COLOCAR EL NOMBRE DEL JSON ENTRE LLAVES PARA TOMAR LAS PROPIEDADES QUE TIENE DENTRO

    console.log(tucarreradigital); //EMPLEADOS PASA A ALOJAR LA RESPUESTA POSITIVA DE LA INTERACCION DE LA INTERACCION CON LA BASE DE DATOS, QUE ES UN ARRAY DE OBJETOS DEL EMPLEADOS.JSON 

    tucarreradigital.forEach(datosCursos => {
        const divPrincipal = document.createElement("div");
        divPrincipal.classList.add("divPrincipal")

        const tituloCarta = document.createElement("p");
        tituloCarta.textContent = datosCursos.zonas;
        tituloCarta.classList.add("parrafoPrincipal")
  
        const tituloZonas = document.createElement("p");
        tituloZonas.textContent = datosCursos.ciudades;
        tituloZonas.classList.add("parrafoSecundario");
  
        const enlaceZonas = document.createElement("a");
        enlaceZonas.textContent = datosCursos.enlaceZonas;
        enlaceZonas.href = datosCursos.enlaceZonas; 
        enlaceZonas.classList.add("enlaceZonas")
  
        const enlaceCurso = document.createElement("a");
        enlaceCurso.textContent = datosCursos.enlaceCursos;
        enlaceCurso.href = datosCursos.enlaceCursos; 
        enlaceCurso.classList.add("enlaceCurso")
        
        cartasCurso.appendChild(divPrincipal);
        divPrincipal.appendChild(tituloCarta)
        divPrincipal.appendChild(tituloZonas);
        divPrincipal.appendChild(enlaceZonas);
        divPrincipal.appendChild(enlaceCurso);
      });
    }
  
  
  obtenerDatos();
  
  
  
  
  
  
  
  
  