export function footer (){
    let root = document.querySelector("#footer");

    root.innerHTML = 

    /*PRIMERA SECCIÓN INTEGRANTES */
   
    '<section class="integrantes" data-aos="flip-left">'+
       '<div class="caja1">'+
            '<h1>Comunicadores graficos</h1>'+
            '<p>Adriana Alejandra <br> Velásquez Anleú</p>'+
            '<p>Marilis Abigail <br> Escobar Estrada</p>'+
        '</div>'+
        
        '<div class="caja1" id="biologos">'+
            '<h1>Biólogos</h1>'+
            '<p>Joseline Johanna <br> Quisque Rustrián</p>'+
            '<p>María de los Angeles <br> Del Cid García</p>'+
        '</div>'+
        
        '<div class="caja1">'+
            '<h1>Desarrolladores</h1>'+
            '<p>Kimberly Estephania <br> Hernández Ortiz</p>'+
            '<p>Natali Daniela <br> Marroqin Garrido</p>'+
            '<p>Génesis Gabriel <br> Subuyuj Ramírez</p>'+
        '</div>'+
    '</section>'+

    /*SEGUNDA SECCION INFORMACION EXTRA */
    '<section class="infoInfood">'+

    '</section>';
}
footer();
