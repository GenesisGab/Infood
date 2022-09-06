import { bromatologia } from "../data/bromatologia.js";

export function cuadrosBromat (){
    let root = document.querySelector("#menu");
  
   //CREACION DE LOS DIV PARA EL PANEL
    root.innerHTML = 
    '<div class="bromatologia" id="broma">'+
            '<h1 class="text">Bromatología</h1>'+
            '<p>La palabra proviene etimológicamente del griego donde ¨broma¨ significa ¨alimento¨ y ¨bromatos¨ ¨del alimento¨. La bromatología es una parte de la ciencia que estudia en profundidad todo lo relativo a los alimentos en cuanto a su composición, nutrientes y otras sustancias, características fisicoquímicas, cualidades organolépticas caracteríticas y comportamiento en cuanto a producción, manipulación, elaboración, conservación e incluso en cuanto a aspectos sanitarios. El conocimiento que proporciona la bromatología es imprescindible para el desarrollo de aspectos como la nutrición. </p>'+
    '</div>'+
    '<div id="galeria"></div>'+
    '<section id="piramide"></section>';
    
       
}
cuadrosBromat();

export function item(el_producto){
let contenido =
    '<div class="cj_img">' +
        '<img src="'+ bromatologia[el_producto].img +'">'+
    '</div>'+
    '<h2 class="titulo">'+ bromatologia[el_producto].titulo + '</h2>'+
    '<p class="descripcion">'+ bromatologia[el_producto].descripcion +'</p>';

return contenido;
}

