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