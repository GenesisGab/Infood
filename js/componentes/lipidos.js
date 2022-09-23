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
                '<img class="lineas" src="./img/banerBlanco.png">'+
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