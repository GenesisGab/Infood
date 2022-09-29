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
        '<div class="padreTexcarbo">'+
        '<div class="imglipidosText">'+
                    '<img src="./img/lipidos.png">'+
                '</div>'+
                '<div>'+

        '<p >'
        'Dentro de los nutrientes que aportan energía están los lípidos, conocidos normalmente como grasas.'

        'En los alimentos nos encontramos con tres tipos distintos de lípidos: grasas y aceites, fosfolipidos y colesterol. Cada uno tiene unas funciones distintas en el organismo, pero todos tienen unas características comunes:'
        
        'Ser altamente energéticos (1 gramo de lípidos aporta 9 Kilocalorías).'
        'Ser insolubles en el agua.'
        'Ser solubles en disolventes orgánicos como éter y cloroformo.'
        'Sus funciones fundamentales en el organismo las podemos agrupar en:'
        
        'Función energética y específicamente de energía de reserva.'
        'Parte fundamental de la membrana celular y responsable en parte de sus múltiples funciones.'
        'Aporte de ácidos grasos esenciales.'
        'Efecto ahorrador de la utilización de las proteínas como fuente de energía.'
        'Absorción de vitaminas liposolubles.'
       '</p>'+
        
       '</div>'+

        '<img>'+
        
        '</img>'+
        '</section>';
    }

}

/* EVENTO */
activarse.addEventListener('click', ActivarDesactivar3);