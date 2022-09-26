var activarse = document.getElementById("tarjeta2");

//FUNCIÓN PARA ABRIR Y CERRAR LA VENTANA
export function ActivarDesactivar3() {    
    
    var explorer = document.getElementById("root");
    
    console.log("valor x",explorer);

    //Activa y desactiva la ventana
    if (explorer.style.display === "none") {
        explorer.style.display = "block";
        
    } else {
        explorer.style.display = "none";
        document.getElementById("proteinas").innerHTML=
        
        '<div id="headerBanner">'+
            '<img class="lineas" src="./img/bannerBlanco.png">'+
            '<div class="tituloBanner"><h1>INFOOD</h1></div>'+
        '</div>'+

        '<div class="logoHeader">'+
            '<img src="./img/logo.png">'+
        '</div>'+
        '<header>'+
            '<nav class="navbar">'+
                '<ul class="nav">'+
                    '<li><a href="" class="hijoOption" id="inicio">Inicio</a></li>'+
                    '<li><a class="hijoOption">Menú</a></li>'+
                    '<li><a class="hijoOption">Dietas</a></li>'+
                    '<li><a class="hijoOption">Planes</a></li>'+
                '</ul>'+
            '</nav>'+
        '</header>'+

        /* NOMBRE: GÉNESIS - SECCION TABLA*/
        '<section>'+
            '<h1 class="tituloProteina">LIPIDOS</h1>'+
            '<div class="padreProte" id="padreEsquemas"></div>'+
        '</section>'+

        /* NOMBRE:  - SECCION VIDEO Y GRÁFICA*/
        '<section>'+

        '</section>'+
            
        /* NOMBRE:  KIMBERLY - SECCIÓN INFORMACIÓN*/
        '<section>'+
            
        '</section>';
    }

}

/* EVENTO */
activarse.addEventListener('click', ActivarDesactivar3);

/**************MOSTRAR DATA DE LIPIDOS***************/

import {lipidoss} from "../data/objetoLipidos.js";
let bt_userCredit2 = document.querySelector('#tarjeta2');
export function crearCarts(){

    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padreEsquemas");

    lipidoss.forEach(function(user1){
        console.log("Nombre: ", user1.user_id);

        let cuadros = document.createElement("div");

        cuadros.innerHTML =
            '<div class="hijoProte">'+
                '<div class="cajaProte"><h2>'+user1.titulo+'</h2></div>'+
                '<div class="subHijoProte">'+
                    '<div><img class="imgProteina" src="'+user1.img+'"></div>'+
                    '<p> Porción: '+user1.porcion+user1.medPorcion+'</p>'+
                    '<p> Energía: '+user1.Energía+user1.medEnergia+'</p>'+
                    '<p> Calorías: '+user1.calorias+user1.medCaloria+'</p>'+
                    '<p> Proteínas: '+user1.Proteinas+user1.medProteina+'</p>'+
                    '<p> Carbohidratos: '+user1.carbohidratos+user1.medCarbohidratos+'</p>'+
                    '<p> Lípidos: '+user1.lipidos+user1.medLipidos+'</p>'+
                    '<div class="imgGrafics"><img src="'+user1.grafica+'"></div>'+
                '</div>'+
            '</div>';  

        root.appendChild(cuadros);
    })
};

bt_userCredit2.addEventListener('click',crearCarts);//<--Este
