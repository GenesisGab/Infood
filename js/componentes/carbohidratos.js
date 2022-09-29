var activarse = document.getElementById("tarjeta1");

//FUNCIÓN PARA ABRIR Y CERRAR LA VENTANA
export function ActivarDesactivar2() {    
    
    var explorer = document.getElementById("root");
    
    console.log("valor x",explorer);

    //Activa y desactiva la ventana
    if (explorer.style.display === "none") {
        explorer.style.display = "block";
        
    } else {
        explorer.style.display = "none";
        document.getElementById("proteinas").innerHTML=

        '<div id="headerBanner">'+
                '<img class="lineas" src="./img/bani.png">'+
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
        '<section id="cuadrosBroma">'+
            '<h1 class="tituloProteina">CARBOHIDRATOS</h1>'+
            '<div class="padreProte" id="padreEsquemas"></div>'+
        '</section>'+

        /* NOMBRE: NATALI - SECCION VIDEO Y GRÁFICA*/
        '<section>'+

            '<div class="estadisticaProte">'+
            '<h1 class="TituloContenido">Contenido de carbohidratos</h1>'+
            '<div class="hijoimg">'+
                '<img class="graficProt" src="./img/graficaCarbohidrato.png">'+
            '</div>'+
            '<div class="abajoGrafic">'+
                '<h3>Alimento <br>Porcion</h3>'+
                '<img src="./img/carboAliment.png">'+
            '</div>'+
        '</div>'+

        /* SECCION DEL VIDEO */
            '<div class="padreProteinas">'+

                '<div class="subVdProteina">'+
                    '<h3>Video Funciones de los Carbohidratos</h3>'+
                '</div>'+
        
                '<video class="vdProteinas" width="784" height="458" controls>'+
                    '<source src="./img/carbohidratos/Infood Carbohidratos .mp4" type="video/mp4">'+
                    'Tu navegador no es compatible con videos HTML5'+
                '</video>'+
            '</div>'+
            
        '</section>'+

        /* NOMBRE:  KIMBERLY - SECCIÓN INFORMACIÓN*/
        '<section>'+
         '<div class="padreTexProt">'+
                '<div class="imgProteText">'+
                    '<img src="./img/imgCarbo.png">'+
                '</div>'+
                '<div>'+
                    '<p>Los carbohidratos son un tipo de macronutriente que se encuentra en muchos alimentos y bebidas. La mayoría de los carbohidratos se encuentran naturalmente en alimentos de origen vegetal, como los granos. Los fabricantes de alimentos también agregan carbohidratos a los alimentos procesados en forma de almidón o azúcar agregada.'+
                    '<br>'+
                    '<br>Algunas fuentes comunes de carbohidratos naturales son las siguientes:'+
                    '<br>'+
                    '<br>Frutas Verduras <br> Leche <br> Frutos secos <br> Granos <br> Semillas <br> Frijoles (alubias, porotos) <br> guisantes (arvejas, chícharos) <br> lentejas'+
                    '<br>'+
                    '<br> No consumir suficientes carbohidratos puede causar problemas. Sin combustible suficiente, el cuerpo no recibe energía. </p>'+
                '</div>'+
            '</div>'+
        '</section>';
    }

}

/* EVENTO */
activarse.addEventListener('click', ActivarDesactivar2);


/**************MOSTRAR DATA DE CARBOHIDRATOS***************/

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
