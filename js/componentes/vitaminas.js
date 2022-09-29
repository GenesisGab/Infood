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

        /* NOMBRE: */
        '<section>'+
            
        '</section>'+

        /* NOMBRE: */
        '<section>'+

        '</section>'+
            
        /* KIMBERLY:  */
        '<section>'+
        '<div class="padreTexcarbo">'+
        '<div class="imgvitaminasText">'+
                    '<img src="./img/Rectangle 49.png">'+
                '</div>'+
                '<div>'+

        '<p >'
        'Las vitaminas son parte vital de una dieta saludable. Se ha determinado para casi todas ellas la cantidad diaria recomendada, es decir, la cantidad que la mayoría de las personas sanas necesitan tomar cada día para mantenerse saludables. También se ha fijado el límite superior '
        'de seguridad (cantidad máxima que se puede ingerir) de algunas de ellas. Si se consume una cantidad mayor, aumenta el riesgo de que se produzca un efecto perjudicial.'

        'Por otro lado, consumir poca cantidad de una vitamina '
        'puede causar un trastorno alimenticio, aunque la probabilidad '
        'de desarrollar una carencia vitamínica es baja si se tiene una '
        'alimentación variada. La falta de vitamina D es una excepción. La deficiencia '
        'de vitamina D es frecuente entre ciertos grupos de personas, incluso si se '
        'alimentan de forma adecuada. En el caso de otras vitaminas, solo hay déficit '
        'si se sigue una dieta restrictiva que no contenga la cantidad suficiente de una '
        'vitamina en particular.'
       '</p>'+
        
       '</div>'+

        '<img>'+
        
        '</img>'+
        '</section>';
    }

}

/* EVENTO */
activarse.addEventListener('click', ActivarDesactivar4);