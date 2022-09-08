export function menu (){
    let root = document.querySelector("#root");
  
   //CREACION DE LOS DIV PARA EL PANEL
    root.innerHTML = 
    '<div id="headerBanner">'+
            '<img class="lineas" src="./img/INFOOD BN 1.png">'+
    '</div>'+

        '<header>'+
            '<div class="logoHeader">'+
                '<img src="./img/logo.png">'+
            '</div>'+
    '<nav class="navbar">'+

    '<ul class="nav">'+
        '<li><a class="hijoOption">Inicio</a></li>'+
        '<li><a class="hijoOption">Menú</a></li>'+
        '<li><a class="hijoOption">Dietas</a></li>'+
        '<li><a class="hijoOption">Planes</a></li>'+
    '</ul>'+

    '</nav>'+
           

            // '<div class="flecha" id="flechas">'+
            //     '<a><img class="imgFlecha"></a>'+
            //     '<a><img class="imgFlecha"></a>'+
            //     '<a><img class="imgFlecha"></a>'+
            //     '<a><img id="flechaH" class="imgFlecha" src="./img/flecha.png"></a>'+
            // '</div>'+
            
          '</header>'+
          '<section id="menu"></section>';
       
}
menu();
