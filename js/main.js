/* CONEXIONES */

import { menu } from "./componentes/menu.js";
import { cuadrosBromat } from "./componentes/bromatologia.js";
import { piramide } from "./componentes/piramide.js";

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