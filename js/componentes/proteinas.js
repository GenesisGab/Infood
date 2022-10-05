var activarse = document.getElementById("tarjeta0");
var activarseEN = document.querySelector('#proteinass');

//FUNCIÓN PARA ABRIR Y CERRAR LA VENTANA
export function ActivarDesactivar() {    
    
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
                '<li><a class="hijoOption">Menú</a>'+
                    '<ul class="subnav">'+
                        '<li><a class="hijoSUbb" id="proteinass">Proteínas</a></li>'+
                        '<li><a class="hijoSUbb" id="carbohidratoss">Carbohidratos</a></li>'+
                        '<li><a class="hijoSUbb" id="lipidoss">Lípidos</a></li>'+
                        '<li><a class="hijoSUbb" id="vitaminass">Vitaminas</a></li>'+
                    '</ul>'+
                '</li>'+
                '<li ><a id="infoodNutri" class="hijoOption">Infood Nutri</a></li>'+
                '<li><a class="hijoOption">Planes</a></li>'+
            '</ul>'+
        '</nav>'+
     '</header>'+
        
        /* KIMBERLY */
       '<section id="cuadrosBroma">'+
            '<h1 class="tituloProteina">PROTEÍNAS</h1>'+
            '<div class="padreProte" id="padreEsquemas"></div>'+
        '</section>'+

        /* GENESIS */
        '<section>'+
            /* etiquetas para la estadistica */
            '<div class="estadisticaProte">'+
                '<h1 class="TituloContenido">Contenido de proteínas</h1>'+
                '<div class="hijoimg">'+
                    '<img class="graficProt" src="./img/graficaProte.svg">'+
                '</div>'+
                '<div class="abajoGrafic">'+
                    '<h3>Alimento <br>Porcion</h3>'+
                    '<img src="./img/proteinas/graphics.png">'+
                '</div>'+
            '</div>'+

            /* etiquetas para el video */
            '<div class="padreProteinas">'+
                '<div class="subVdProteina">'+
                    '<h3>Video Funciones de la proteina en el organismo</h3>'+
                '</div>'+
                
                '<video class="vdProteinas" width="784" height="458" controls>'+
                '<source src="./img/carbohidratos/Infood Proteínas .mp4" type="video/mp4">'+
                    'Tu navegador no es compatible con videos HTML5'+
                '</video>'+
            '</div>'+
        '</section>'+
            
        /*  */
        '<section>'+
            '<div class="padreTexProt">'+
                '<div class="imgProteText">'+
                    '<img src="./img/carnesimg.png">'+
                '</div>'+
                '<div>'+
                    '<p>Las proteínas están formadas por muchos bloques de construcción, conocidos como aminoácidos. Nuestro cuerpo necesita proteínas en la dieta para suministrar aminoácidos para el crecimiento y mantenimiento de nuestras células y tejidos. Nuestro requerimiento de proteínas en la dieta cambia a lo largo de la vida. Las proteínas están formadas por muchos bloques de construcción, conocidos como aminoácidos. Nuestro cuerpo necesita proteínas en la dieta para suministrar aminoácidos para el crecimiento y mantenimiento de nuestras células y tejidos. Nuestro requerimiento de proteínas en la dieta cambia a lo largo de la vida.'+
                    'Las proteínas están formadas por muchos bloques de construcción, conocidos como aminoácidos. Nuestro cuerpo necesita proteínas en la dieta para suministrar aminoácidos para el crecimiento y mantenimiento de nuestras células y tejidos. Nuestro requerimiento de proteínas en la dieta cambia a lo largo de la vida.'+
                    'Las proteínas están formadas por muchos bloques de construcción, conocidos como aminoácidos. Nuestro cuerpo necesita proteínas en la dieta para suministrar aminoácidos para el crecimiento y mantenimiento de nuestras células y tejidos. Nuestro requerimiento de proteínas en la dieta cambia a lo largo de la vida.</p>'+
                '</div>'+
            '</div>'+
        '</section>';
    }

}

/* EVENTO */
activarse.addEventListener('click', ActivarDesactivar);
activarseEN.addEventListener('click',ActivarDesactivar);


/**************MOSTRAR DATA DE PROTEÍNAS***************/

import {proteinass} from "../data/objetosProteinas.js";

let bt_userCredit2 = document.querySelector('#tarjeta0');
let bt_userMenu = document.querySelector('#proteinass');
export function crearCarts(){

    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padreEsquemas");

    proteinass.forEach(function(user1){
        // console.log("Nombre: ", user1.user_id);

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
bt_userMenu.addEventListener('click',crearCarts);