export function menu (){
    let root = document.querySelector("#root");
  
   //CREACION DE LOS DIV PARA EL PANEL
    root.innerHTML = 
    '<div id="headerBanner">'+
            '<img class="lineas" src="./img/lineas.png">'+
    '</div>'+

        '<header>'+
            '<div class="logoHeader">'+
                '<img src="./img/logo.png">'+
            '</div>'+

        '<nav class="navbar">'+
            '<ul class="nav">'+
                '<li><a class="hijoOption">Menú</a></li>'+
                '<li><a class="hijoOption">Menú</a></li>'+
                '<li><a class="hijoOption">Menú</a></li>'+
                '<li><a class="hijoOption">Menú</a></li>'+
            '</ul>'+
        '</nav>'+

            '<div class="flecha">'+
                '<a><img class="imgFlecha"></a>'+
                '<a><img class="imgFlecha"></a>'+
                '<a><img class="imgFlecha"></a>'+
                '<a><img id="flechaH" class="imgFlecha" src="./img/flecha.png"></a>'+
            '</div>'+
            
          '</header>'+
    '<section id="menu"></section>';
       
}
menu();
