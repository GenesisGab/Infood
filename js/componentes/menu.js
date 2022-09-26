export function menu (){
    let root = document.querySelector("#root");
  
   //CREACION DE LOS DIV PARA EL PANEL
    root.innerHTML = 
    '<div id="headerBanner">'+
        // '<img class="lineas" src="./img/bannerBlanco.png">'+
        '<img class="lineas" src="./img/bani.png">'+

        '<div class="tituloBanner"><h1>INFOOD</h1></div>'+
    '</div>'+

        
        '<div class="logoHeader">'+
            '<img src="./img/logo.png">'+
        '</div>'+

        '<header>'+
            '<nav class="navbar">'+
                '<ul class="nav">'+
                    '<li><a href="" class="hijoOption">Inicio</a></li>'+
                    '<li><a class="hijoOption">Menú</a></li>'+
                    '<li><a class="hijoOption">Dietas</a></li>'+
                    '<li><a class="hijoOption">Planes</a></li>'+
                '</ul>'+
            '</nav>'+
        '</header>'+
        
    '<section id="menu"></section>';
       
}
menu();
