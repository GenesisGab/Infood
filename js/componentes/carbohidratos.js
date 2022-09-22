var activarse = document.getElementById("tarjeta1");

//FUNCIÓN PARA ABRIR Y CERRAR LA VENTANA
export function ActivarDesactivar2() {    
    
    var explorer = document.getElementById("menu");
    
    console.log("valor x",explorer);

    //Activa y desactiva la ventana
    if (explorer.style.display === "none") {
        explorer.style.display = "block";
        
    } else {
        explorer.style.display = "none";
        document.getElementById("proteinas").innerHTML=

        /* NOMBRE: GÉNESIS - SECCION TABLA*/
        '<section>'+
            '<h1 class="tituloProteina">CARBOHIDRATOS</h1>'+
            '<div class="padreProte" id="padreEsquemas"></div>'+
        '</section>'+

        /* NOMBRE: NATALI - SECCION VIDEO Y GRÁFICA*/
        '<section>'+

        '</section>'+
            
        /* NOMBRE:  KIMBERLY - SECCIÓN INFORMACIÓN*/
        '<section>'+
            
        '</section>';
    }

}

/* EVENTO */
activarse.addEventListener('click', ActivarDesactivar2);



/**************MOSTRAR DATA DE PROTEÍNAS***************/

import {carbohidratoss} from "../data/objetoCarbohidrato.js"

let bt_userCredit2 = document.querySelector('#tarjeta1');
export function crearCarts(){

    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padreEsquemas");

    carbohidratoss.forEach(function(user1){
        console.log("Nombre: ", user1.user_id);

        let cuadros = document.createElement("div");

        cuadros.innerHTML =
            '<div class="hijoProte">'+
                '<div class="cajaProte"><h2>'+user1.titulo+'</h2></div>'+
                '<div class="subHijoProte">'+
                    '<div><img class="imgProteina" src="'+user1.img+'"></div>'+
                    '<p> Porción: '+user1.porcion+'</p>'+
                    '<p> Energía: '+user1.Energía+'</p>'+
                    '<p> Calorías: '+user1.calorias+'</p>'+
                    '<p> Proteínas: '+user1.porcion+'</p>'+
                    '<p> Carbohidratos: '+user1.carbohidratos+'</p>'+
                    '<p> Lípidos: '+user1.lipidos+'</p>'+
                    '<div class="imgGrafics"><img src="'+user1.grafica+'"></div>'+
                '</div>'+
            '</div>';  

        root.appendChild(cuadros);
    })
};

bt_userCredit2.addEventListener('click',crearCarts);//<--Este
