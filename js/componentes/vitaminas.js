var activarse = document.getElementById("tarjeta3");

//FUNCIÓN PARA ABRIR Y CERRAR LA VENTANA
export function ActivarDesactivar4() {    
    
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

        /* NOMBRE: GÉNESIS - SECCION TABLA*/
        '<section>'+
            '<h1 class="tituloProteina">VITAMINAS</h1>'+
            '<div class="padreProte" id="padreEsquemas"></div>'+
        '</section>'+

        /* NOMBRE:  - SECCION VIDEO Y GRÁFICA*/
        '<section>'+
             /* etiquetas para la estadistica */
            '<div class="estadisticaProte">'+
                '<h1 class="TituloContenido">Contenido de Vitaminas</h1>'+
                '<div class="hijoimg">'+
                    '<img class="graficProt" src="./img/vitaminas/graficas/graficaVitaminas.png">'+
                '</div>'+
                '<div class="abajoGrafic">'+
                    '<h3>Alimento <br>Porcion</h3>'+
                    '<img src="./img/proteinas/graphics.png">'+
                '</div>'+
            '</div>'+

            /* etiquetas para el video */
            '<div class="padreProteinas">'+
                '<div class="subVdProteina">'+
                    '<h3>Video Funciones de las Vitaminas</h3>'+
                '</div>'+
                
                '<video class="vdProteinas" width="784" height="458" controls>'+
                '<source src="./img/vitaminas/Vitaminas Infood.mp4" type="video/mp4">'+
                    'Tu navegador no es compatible con videos HTML5'+
                '</video>'+
            '</div>'+
        '</section>'+
            
        /* NOMBRE:  KIMBERLY - SECCIÓN INFORMACIÓN*/
        '<section>'+
            '<div class="padreTexProt">'+
                '<div class="imgProteText">'+
                    '<img src="./img/vitaminas/bnVitaminas.png">'+
                '</div>'+
                '<div>'+
                    '<p>Las vitaminas son parte vital de una dieta saludable. Se ha determinado para casi todas ellas la cantidad diaria recomendada, es decir, la cantidad que la mayoría de las personas sanas necesitan tomar cada día para mantenerse saludables. También se ha fijado el límite superior de seguridad (cantidad máxima que se puede ingerir) de algunas de ellas. Si se consume una cantidad mayor, aumenta el riesgo de que se produzca un efecto perjudicial.'+
                    '<br>'+
                    '<br>Por otro lado, consumir poca cantidad de una vitamina puede causar un trastorno alimenticio, aunque la probabilidad de desarrollar una carencia vitamínica es baja si se tiene una alimentación variada. La falta de vitamina D es una excepción. La deficiencia de vitamina D es frecuente entre ciertos grupos de personas, incluso si se alimentan de forma adecuada. En el caso de otras vitaminas, solo hay déficit si se sigue una dieta restrictiva que no contenga la cantidad suficiente de una vitamina en particular.</p>'+
                '</div>'+
            '</div>'+
        '</section>';
    }

}

/* EVENTO */
activarse.addEventListener('click', ActivarDesactivar4);


/**************MOSTRAR DATA DE VITAMINAS***************/

import {vitaminass} from "../data/objetosVitaminas.js";
let bt_userCredit2 = document.querySelector('#tarjeta3');
export function crearCarts(){

    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padreEsquemas");

    vitaminass.forEach(function(user1){
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