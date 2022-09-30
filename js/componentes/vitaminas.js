var activarse = document.getElementById("tarjeta3");

//FUNCIÓN PARA ABRIR Y CERRAR LA VENTANA
export function ActivarDesactivar4() {    
    
    var explorer = document.getElementById("menu");
    
    console.log("valor x",explorer);

    //Activa y desactiva la ventana
    if (explorer.style.display === "none") {
        explorer.style.display = "block";
        
    } else {
        explorer.style.display = "none";
        document.getElementById("proteinas").innerHTML=
        
        /*ELIMINAR CUANDO SE VAYA A TRABAJAR :> */
        '<div class="avisoImg">'+
                '<h2>¡Vaya! parece que aún no hay nada por acá</h2>'+
        '</div>'+

        /* NOMBRE: GÉNESIS - SECCION TABLA*/
        '<section>'+
            
        '</section>'+

        /* NOMBRE:  - SECCION VIDEO Y GRÁFICA*/
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
                    '<h3>Video Funciones de la proteina en el organismo</h3>'+
                '</div>'+
        
                '<video class="vdProteinas" width="784" height="458" controls>'+
                    '<source src="./img/Infood Carbohidratos .mp4" type="video/mp4">'+
                    'Tu navegador no es compatible con videos HTML5'+
                '</video>'+
            '</div>'+
        '</section>'+
            
        /* NOMBRE:  KIMBERLY - SECCIÓN INFORMACIÓN*/
        '<section>'+
            
        '</section>';
    }

}

/* EVENTO */
activarse.addEventListener('click', ActivarDesactivar4);
