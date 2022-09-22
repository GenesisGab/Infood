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
        
        /*ELIMINAR CUANDO SE VAYA A TRABAJAR :> */
        '<div class="avisoImg">'+
                '<h2>¡Vaya! parece que aún no hay nada por acá</h2>'+
        '</div>'+

        /* NOMBRE: */
        '<section>'+
            
        '</section>'+

        /* NOMBRE: */
        '<section>'+

        '</section>'+
            
        /* Kimberly:  */
        '<section>'+

        '<div class="padreTexcarbo">'+
        '<div class="imgcarboText">'+
                    '<img src="./img/carbohidratos.png">'+
                '</div>'+
                '<div>'+

        '<p >'
        'Las proteínas están formadas por muchos bloques de construcción, conocidos como aminoácidos. Nuestro cuerpo necesita proteínas en'
        'la dieta para suministrar aminoácidos para el crecimiento y mantenimiento de nuestras células y tejidos. Nuestro '
        'requerimiento de proteínas en la dieta cambia a lo largo de la vida. Las proteínas están formadas por muchos bloques'
        'de construcción, conocidos como aminoácidos. Nuestro cuerpo necesita proteínas en la dieta para suministrar aminoácidos para el crecimiento y mantenimiento '
        'de nuestras células y tejidos. Nuestro requerimiento de proteínas en la dieta cambia a lo largo de la vida. Las proteínas están formadas por muchos bloques de' 
        'construcción, conocidos como aminoácidos. Nuestro cuerpo necesita proteínas en la dieta para suministrar'
        'aminoácidos para el crecimiento y mantenimiento de nuestras'
        'células y tejidos. Nuestro requerimiento de proteínas en la dieta cambia a lo largo de la vida.'
        'Las proteínas están formadas por muchos bloques de construcción, conocidos como aminoácidos. Nuestro cuerpo'
       'necesita proteínas en la dieta para suministrar aminoácidos para el crecimiento y mantenimiento de nuestras células y tejidos. Nuestro requerimiento de proteínas en la dieta cambia a lo largo'
       'de la vida'
       '</p>'+
        
       '</div>'+

        '<img>'+
        
        '</img>'+
        '</section>';
    }

}

/* EVENTO */
activarse.addEventListener('click', ActivarDesactivar2);