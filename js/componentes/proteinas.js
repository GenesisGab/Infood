var activarse = document.getElementById("tarjeta0");

//FUNCIÓN PARA ABRIR Y CERRAR LA VENTANA
export function ActivarDesactivar() {    
    
    var explorer = document.getElementById("menu");
    
    console.log("valor x",explorer);

    //Activa y desactiva la ventana
    if (explorer.style.display === "none") {
        explorer.style.display = "block";
        
    } else {
        explorer.style.display = "none";
        document.getElementById("proteinas").innerHTML=
            
        /* KIMBERLY */
        '<section>'+
            
        '</section>'+

        /* GENESIS */
        '<section>'+
            '<div class="padreProteinas">'+
                '<div class="subVdProteina">'+
                    '<h3>Video Funciones de la proteina en el organismo</h3>'+
                '</div>'+
                
                '<video class="vdProteinas" width="784" height="458" controls>'+
                    // '<source src="./img/Portada.mp4" type="video/mp4">'+
                    'Tu navegador no es compatible con videos HTML5'+
                '</video>'+
            '</div>'+
        '</section>'+
            
        /* NATALI */
        '<section>'+
            
        '</section>';
    }

}

/* EVENTO */
activarse.addEventListener('click', ActivarDesactivar);