export function piramide (){
let root = document.querySelector("#piramide");
  
   //CREACION DE LOS DIV PARA EL PANEL
    root.innerHTML = 
    '<div class="boxPadre">'+
    '<div class="piramides" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">'+
            '<img class="imgPiramide" src="./img/piramide2sin.png">'+
        '</div>'+
        '<div class="contenidoPiramide">'+
            '<h2 class="tituloPiramide">Pirámide de los alimentos</h2>'+
            '<p class="textoPiramide">La pirámide alimenticia es la base sobre la que se tiene que asentar una dieta sana y equilibrada.. Su importancia es enorme, ya que no sólo nos señala qué alimentos son los más indicados para nutrirnos correctamente, sino que, además, nos da las pautas sobre cuántas veces debemos comer algunos alimentos cada semana. </p>'+
        '</div>'+
    '</div>'+
    '<section class="d" id="estadistica"></section>';
}
piramide();