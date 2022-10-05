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
                '<li><a href="./index.html" class="hijoOption" id="inicio">Inicio</a></li>'+
                '<li><a href="#galeria" class="hijoOption">Menú</a>'+
                    '<ul class="subnav">'+
                        '<li><a class="hijoSUbb" id="proteinass">Proteínas</a></li>'+
                        '<li><a class="hijoSUbb" id="carbohidratoss">Carbohidratos</a></li>'+
                        '<li><a class="hijoSUbb" id="lipidoss">Lípidos</a></li>'+
                        '<li><a class="hijoSUbb" id="vitaminass">Vitaminas</a></li>'+
                    '</ul>'+
                '</li>'+
                '<li><a id="infoodNutri" href="./infoodNutri.html" class="hijoOption">Infood Nutri</a></li>'+
                '<li><a class="hijoOption">Temas</a>'+
                    '<ul class="subnav">'+
                        // '<li><a href="#broma" class="hijoSUbb">Bromatología</a></li>'+
                        '<li><a a" href="./index.html#broma" class="hijoSUbb">Bromatología</a></li>'+
                        
                        '<li><a a" href="./index.html#piramide" class="hijoSUbb">Pirámide</a></li>'+
                        '<li><a a" href="./index.html#estadisticaGraphic" class="hijoSUbb">Gráfica</a></li>'+
                    '</ul>'+
                '</li>'+
            '</ul>'+
        '</nav>'+
    '</header>'+
    
    `<div id="vtEmergente">
    </div>

    <div class="buscador">
        <div class="cuadro" >
            <div class="btBuscar">
                <div class="inputBuscar">
                    <div id="bt">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAh1JREFUWEftl40thEEQht+rgBKoABWgAlSADqgAFaACVIAKUAEqQAdUQJ5kJ5ms/XZn73LnJDfJl1zu25197p2fnRtpzmw0Zzz610ArknYkbUni83pS90XSu6RHSffp89jCRxTi8BNJB8FTriWdjQvWAtqVdCVpOQhjyz4lHUq669xXzSEUAcbbkyQUIEw8GKHjYf1mth4o1odtSCGUuXVeXiUdpTypOSe/LiStuUV7PUqVgMiZZxcmYDiIMESM8JLgBsW+1ej+EhAS76eTe2EMOIe6iRZFDoQ6b06G7UCYhlRD1Qf3EpVoD1XLgciT87SDBMbpJEboLNGPU351AVGmND+su0IKJ/lKpWlSLF1AlLIl44Yr7Zafofe0AwoEwzc+u4C+3epW02z5tvddPvNDuzYHicznV6Tj50DTDFmoSHKgaSb1Zer2XTnky56SpQ9NYhOX/bQaI/mD7+b107o6yClUajrKZOTqoEvbEMd8dBqReuhyBWTJ9Y8eqBzmI4GFflR0/ACQ1k9O1IyrhqvHlGEthcIIErJa8ysNaAAxDTAF+AGN7s76obuPPVxFTWt1Y+4enFn4mg7TAsIEsN2LfB2CagHhiOogIW1GqkFRTUyMPOSMn61CUBEgAwAMxexvEGECwOZrZh0A8uTtguoBioartC4MNSsgC5cPezGnZgmUQxUHwFkDGZS1j1/h/Qugai4ugFqlulCopdAPAal3JSpnRUAAAAAASUVORK5CYII="/>
                    </div>
                    <label>
                        <input id="formulario" class="bt_out" placeholder="Escribe aqui para buscar" type="text">
                    </label>
                </div>

            <div class="select">
<!--
                <div class="cuadroFlecha">
                        <img class="flecahSelect" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAQpJREFUWEftls0RAUEQhb89kQVZcJQBokAUiAJRIANHsiALTlSr2cvWju7ZH0VVu3b362/fzryV8WO/7Md4cCDtjbhD7pDmgFb3M+QOaQ5o9b87QyvtiSrUn8A6NmdxaAvMKiwuGxGtxSctC5DMH4BxTSjRmGoaVqAucAIGmmCkfgZGwEObtwKJTj9A9TTRQv0aYG6WuRQg0RsGqI5FHLgHmIuxv9IftAmwNy6Q3qOx992W6lCuPQc2yiLp2aXA1AGSWcmoZWSh1KJZ08S1j2mUZZSaNW0CFTPKlDVtA+UZJZ8EU9a0DZRnlACZsuYbQKmXKdpf9do3BlAUciDNWnfIHdIc0Op+hjSHXqEBHiWT3C6YAAAAAElFTkSuQmCC"/>
                </div>
-->
                    <select class="bt_opciones" id="opciones">
                        <option>Proteinas</option>
                        <option>Carbohidratos</option>
                        <option>Lipidos</option>
                        <option>Vitaminas</option>
                    </select>
                </div>
            </div>
            
            <div class="btBuscar2" id="resultados">
            </div>
        </div>

    </div>`+


    '<section id="menu"></section>';
       
}
menu();
