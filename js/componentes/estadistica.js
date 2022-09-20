export function estadistica (){
let root = document.querySelector("#estadistica");
  
   //CREACION DE LOS DIV PARA EL PANEL
    root.innerHTML = 
    '<div class="Grafica">'+
            '<div class="padreGrafica" data-aos="fade-up" data-aos-duration="1000">'+
                '<div class="hijoGrafica">'+
                    '<h2>Gráfica</h2>'+
                    '<img src="./img/grafica.png">'+
                '</div>'+
                '<div class="textoGrafica">'+
                    '<p class="parrafoGrafica">Es una referencia gráfica de la cantidad de los diferentes grupos de alimentos que debemos consumir diariamente para mantenernos saludables. En nutrición la pirámide alimenticia es una referencia a la proporción que nuestro cuerpo necesita para mantener una dieta sana y balanceada. Se recomienda la ingesta diaria de 55% de carbohidratos, 30% de grasas y 15% de proteínas, vitaminas, minerales y fibras.'+
                        'La pirámide alimenticia es solo una referencia gráfica ya que las cantidades ideales de consumo dependen de la edad, el peso, la altura, la contextura y actividad física ejercida por cada individuo.</p>'+
                '</div>'+
            '</div>'+
      '</div>';   
}
estadistica();