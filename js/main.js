/* CONEXIONES */

import { menu } from "./componentes/menu.js";
import { cuadrosBromat } from "./componentes/bromatologia.js";
import { piramide } from "./componentes/piramide.js";
import { estadistica } from "./componentes/estadistica.js";

// import { footer } from "./componentes/footer.js";

/* DESPLIEGUE DE DATOS BROMATOLOGÍA */
import { item } from "./componentes/bromatologia.js";
import {bromatologia} from "./data/bromatologia.js";

let root = document.querySelector("#broma");


function cargarGaleria(){

    let galeria = document.querySelector("#galeria");

    bromatologia.forEach(function(elemento,indice){

        let div = document.createElement("div");
        div.setAttribute("class","item");
        div.innerHTML = item(indice);

        galeria.appendChild(div);
    })

}

cargarGaleria();



var activarse = document.getElementById("flechaH");

//FUNCIÓN PARA ABRIR Y CERRAR LA VENTANA
function ActivarDesactivar() {    
    
    var explorer = document.getElementById("menu");
    
    console.log("valor x",explorer);

    //Activa y desactiva la ventana
    if (explorer.style.display === "none") {
        explorer.style.display = "block";
        
    } else {
        explorer.style.display = "none";
    }

}

/* EVENTO */
activarse.addEventListener('click', ActivarDesactivar);