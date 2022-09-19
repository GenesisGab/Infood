export function footer (){
    let root = document.querySelector("#footer");

    root.innerHTML = 

    /*PRIMERA SECCIÓN INTEGRANTES */
   
    '<section class="integrantes">'+
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

    '<div class="ventana" id="vent">'+
'<h1 class="ventana_titulo">INFOOD</h1></div>'+

    '<div class="padreFooter">'+
    '<div class="ventana_fondo">'+
    '<img  class="ventana_img" src="./img/alimentos.png">'+
        '<h1 class="ventana_titulo5">ALGO IMPORTANTE</h1>'+
        '<p class="ventana_parrafo">Cuando los alimentos no son manipulados adecuadamente, pueden contaminarse y transmitir microorganismos, como bacterias, hongos y parásitos. Es igualmente importante evitar la compra y consumo de alimentos en establecimientos que no cumplan con las normas básicas de higiene.</p>'+
    '</div>'+

    '<div class="ventana_titulo3">'+
        '<h2>Recuerda que...</h2>'+
        '<p>La bromatología se ocupa, por tanto, de investigar la composición química, las calorías, los nutrientes, las propiedades físicas y la toxicología de los alimentos, entre otras propiedades. La importancia de la bromatología radica en tres aspectos principales: económicos, higiénicos y legislativos. La bromatología, como rama de la nutrición, se'+ 
        'encarga de estudiar científicamente los alimentos, desde un aspecto integral que abarca el análisis químico, físico, nutritivo, e higiénico, entre otros.'+  
        '</p>'+
    '</div>'+
    '</div>'+

    '</section>';
}
footer();
