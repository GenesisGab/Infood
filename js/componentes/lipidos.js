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
        '<section>'+
            '<h1 class="tituloProteina">LIPIDOS</h1>'+
            '<div class="padreProte" id="padreEsquemas"></div>'+
        '</section>'+

        /* NOMBRE:  - SECCION VIDEO Y GRÁFICA*/
        '<section>'+
            /* etiquetas para la estadistica */
            '<div class="estadisticaProte">'+
                '<h1 class="TituloContenido">Contenido de Lipidos</h1>'+
                '<div class="hijoimg">'+
                    '<img class="graficProt" src="./img/lipidos/grafica/graficaLipidos.png">'+
                '</div>'+
                '<div class="abajoGrafic">'+
                    '<h3>Alimento <br>Porcion</h3>'+
                    '<img src="./img/proteinas/graphics.png">'+
                '</div>'+
            '</div>'+

            /* etiquetas para el video */
            '<div class="padreProteinas">'+
                '<div class="subVdProteina">'+
                    '<h3>Video Funciones de los lipidos en el organismo</h3>'+
                '</div>'+
                
                '<video class="vdProteinas" width="784" height="458" controls>'+
                '<source src="./img/lipidos/Lípidos Infood.mp4" type="video/mp4">'+
                    'Tu navegador no es compatible con videos HTML5'+
                '</video>'+
            '</div>'+
        '</section>'+
            
        /* NOMBRE:  KIMBERLY - SECCIÓN INFORMACIÓN*/
        '<section>'+
            '<div class="padreTexProt">'+
                '<div class="imgProteText">'+
                    '<img src="./img/lipidos/bnLipidos.png">'+
                '</div>'+
                '<div>'+
                    '<p>Dentro de los nutrientes que aportan energía están los lípidos, conocidos normalmente como grasas.'+
                    '<br>'+
                    '<br>'+
                    'En los alimentos nos encontramos con tres tipos distintos de lípidos: grasas y aceites, fosfolipidos y colesterol. Cada uno tiene unas funciones distintas en el organismo, pero todos tienen unas características comunes:'+
                    '<br>'+
                    '<br>'+
                    'Ser altamente energéticos (1 gramo de lípidos aporta 9 Kilocalorías).'+
                    '<br>Ser insolubles en el agua.'+
                    'Ser solubles en disolventes orgánicos como éter y cloroformo.'+
                    'Sus funciones fundamentales en el organismo las podemos agrupar en:'+
                    '<br>'+
                    '<br>'+
                    'Función energética y específicamente de energía de reserva. Parte fundamental de la membrana celular y responsable en parte de sus múltiples funciones.'+
                    '<br>Aporte de ácidos grasos esenciales.'+
                    '<br>Efecto ahorrador de la utilización de las proteínas como fuente de energía.'+
                    '<br>Absorción de vitaminas liposolubles.</p>'+
                '</div>'+
            '</div>'+
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
