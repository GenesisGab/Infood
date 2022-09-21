var activarse = document.getElementById("tarjeta2");

//FUNCIÓN PARA ABRIR Y CERRAR LA VENTANA
export function ActivarDesactivar3() {    
    
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

        '</section>'+
            
        /* NOMBRE:  KIMBERLY - SECCIÓN INFORMACIÓN*/
        '<section>'+
            
        '</section>';
    }

}

/* EVENTO */
activarse.addEventListener('click', ActivarDesactivar3);