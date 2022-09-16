export function menu (){
    let root = document.querySelector("#root");
  
   //CREACION DE LOS DIV PARA EL PANEL
    root.innerHTML = 
    '<div id="headerBanner">'+
        '<img class="lineas" src="./img/zyro-image.png">'+
    '</div>'+

        '<header>'+
            '<div class="logoHeader">'+
                '<img src="./img/logo.png">'+
            '</div>'+

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
