
//DESIGN BUSCADOR
import {proteinass} from "../data/objetosProteinas.js";
import {carbohidratoss} from "../data/objetoCarbohidrato.js";
import {lipidoss} from "../data/objetoLipidos.js";
import {vitaminass} from "../data/objetosVitaminas.js";


let bd="Proteinas";

let formulario = document.querySelector('#formulario');
let boton = document.querySelector('#bt');
let resultado = document.querySelector('#resultados');
let baseDeDatos = document.querySelector('#opciones');
let ventana = document.querySelector('#vtEmergente');


export function seleccionarBd(){
    bd = document.querySelector('#opciones').value;
    formulario.value = "";
}

baseDeDatos.addEventListener('click',seleccionarBd);


export let filtrar = txtIng =>{
  
    //Valida si el usuario presiona la tecla ESCAPE
    if(txtIng.key === "Escape"){
        formulario.value='';
        resultado.innerHTML='';
    }

    resultado.innerHTML = '';
    let texto = formulario.value.toLowerCase();


    //PANTALLA EMERGENTE
    function pantalla(arti2,base){
        
        if(base === 'Proteinas'){
            for(let i=0;i<proteinass.length;i++){
                if((arti2 === proteinass[i].titulo)){
              
                  ventana.style.display = "flex";
                  resultado.style.display = "none";
                    
                  ventana.innerHTML = 
         
                '<div class="contenido_emergente">'+
                    '<div class="imgVentana">'+
                        '<img src="'+proteinass[i].img+'">'+
                    '</div>'+
                    '<div class="emergente_Description">'+
                        '<h2>'+proteinass[i].titulo+'</h2>'+
                        '<br>'+
                        '<p>Porcion: '+proteinass[i].porcion+proteinass[i].medPorcion+'</p>'+
                        '<p>Energía: '+proteinass[i].Energía+proteinass[i].medEnergia+'</p>'+
                        '<p>Calorías: '+proteinass[i].calorias+proteinass[i].medCaloria+'</p>'+
                        '<p>Proteínas: '+proteinass[i].Proteinas+proteinass[i].medProteina+'</p>'+
                        '<p>Carbohidratos: '+proteinass[i].carbohidratos+proteinass[i].medCarbohidratos+'</p>'+
                        '<p>Lipidos: '+proteinass[i].lipidos+proteinass[i].medLipidos+'</p>'+
                    '</div>'+
                    '<div class="btCloseEmergente" id="btClose">'+
                        '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAArJJREFUWEfdmOFVFUEMhS8ViBUIFaAVKBUgFQgVqBWoFSgVgBUoFSAVABUAHWAFej7PxBOzmZ28x/54x/mz5+3OJHdu7iSZt6UNG1sbhkf/DaDnkt5I4rndnpB9LemhPb+250pBWJWhj5LeNhAVR4D7IulTZTJzqoBeS/osaadqOMy7k/Re0vfR+gogWPkQDN034z8k4YxQMQghoF9JYhPPwjpszbI1AnTWtGJ2AYJR3lfGUZvvgbH2uLd4DlBk5lwSDtDFKgPRA+LALYIl7E9GDxB0f3OzOTGAecyIbB9mmuoBQhdGM8wAcImBqI0pfOxGoxkgHyo0g1BjmBAuBudGNofwse5JWzgJXQYI57YA8UUBA/Ci0d0Tp2lmP0mOhP60AcLXU7+rCAhnV20C7MS8w2++s1NGdmK8VnD4ImHTS4LvljYmiZGsSiZmnEh6l8QkitODit96h6HrJzJEonvZQKSnwDFDLbMBEGz5d3Mn05/iy5ZI/9iKgKBur3n5h8oCU37KKE14aeATXymgX87qKIubhjwrvBuBMRepr+h0CUCzpcFtuARoqZCNQPmQ3bh+aqKhdUVNmBhR6L08VRb1Osfea2YuJXjRl4+9pzKrNSRGwmqZPBOwB/WzhSOWmXJiZBeV0kFoKZS9DgBQhIVG7W8WbhT50gFgy/rpseelL67shByxZHG9dSBKxRVQnlKYIGsvMXz7kdXKbpMfG7TRMa6AfVSDFkPHb3bHMV6nhaXd8E3eyi2sL5o+txBKNGZ5Z8QMAub65IU7W1oq9Sq7BgEMxjhtaMFfg2h97RoU+6kuM73i2tsxdJPM4j1rxJB9BzS91SIXRe8UtjBsiXEEiDzDRtIrT7a4ErJsHRkdfdifDdZDUSjtzwZOVUyKow2U7/ZDQ0tNWJehpfxP7GwcoN8luaol9D/n8AAAAABJRU5ErkJggg=="/>'+
                    '</div>'+
                    
                '</div>';
                  

                  }    
                }

        }else if(base === 'Carbohidratos'){
            for(let i=0;i<carbohidratoss.length;i++){
                if((arti2 === carbohidratoss[i].titulo)){
                 
                  ventana.style.display = "flex";
                  resultado.style.display = "none";
                    
                  ventana.innerHTML = 
         
                '<div class="contenido_emergente">'+
                    '<div class="imgVentana">'+
                        '<img src="'+carbohidratoss[i].img+'">'+
                    '</div>'+
                    '<div class="emergente_Description">'+
                        '<h2>'+carbohidratoss[i].titulo+'</h2>'+
                        '<br>'+
                        '<p>Porcion: '+carbohidratoss[i].porcion+carbohidratoss[i].medPorcion+'</p>'+
                        '<p>Energía: '+carbohidratoss[i].Energía+carbohidratoss[i].medEnergia+'</p>'+
                        '<p>Calorías: '+carbohidratoss[i].calorias+carbohidratoss[i].medCaloria+'</p>'+
                        '<p>Proteínas: '+carbohidratoss[i].Proteinas+carbohidratoss[i].medProteina+'</p>'+
                        '<p>Carbohidratos: '+carbohidratoss[i].carbohidratos+carbohidratoss[i].medCarbohidratos+'</p>'+
                        '<p>Lipidos: '+carbohidratoss[i].lipidos+carbohidratoss[i].medLipidos+'</p>'+
                    '</div>'+
                    '<div class="btCloseEmergente" id="btClose">'+
                        '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAArJJREFUWEfdmOFVFUEMhS8ViBUIFaAVKBUgFQgVqBWoFSgVgBUoFSAVABUAHWAFej7PxBOzmZ28x/54x/mz5+3OJHdu7iSZt6UNG1sbhkf/DaDnkt5I4rndnpB9LemhPb+250pBWJWhj5LeNhAVR4D7IulTZTJzqoBeS/osaadqOMy7k/Re0vfR+gogWPkQDN034z8k4YxQMQghoF9JYhPPwjpszbI1AnTWtGJ2AYJR3lfGUZvvgbH2uLd4DlBk5lwSDtDFKgPRA+LALYIl7E9GDxB0f3OzOTGAecyIbB9mmuoBQhdGM8wAcImBqI0pfOxGoxkgHyo0g1BjmBAuBudGNofwse5JWzgJXQYI57YA8UUBA/Ci0d0Tp2lmP0mOhP60AcLXU7+rCAhnV20C7MS8w2++s1NGdmK8VnD4ImHTS4LvljYmiZGsSiZmnEh6l8QkitODit96h6HrJzJEonvZQKSnwDFDLbMBEGz5d3Mn05/iy5ZI/9iKgKBur3n5h8oCU37KKE14aeATXymgX87qKIubhjwrvBuBMRepr+h0CUCzpcFtuARoqZCNQPmQ3bh+aqKhdUVNmBhR6L08VRb1Osfea2YuJXjRl4+9pzKrNSRGwmqZPBOwB/WzhSOWmXJiZBeV0kFoKZS9DgBQhIVG7W8WbhT50gFgy/rpseelL67shByxZHG9dSBKxRVQnlKYIGsvMXz7kdXKbpMfG7TRMa6AfVSDFkPHb3bHMV6nhaXd8E3eyi2sL5o+txBKNGZ5Z8QMAub65IU7W1oq9Sq7BgEMxjhtaMFfg2h97RoU+6kuM73i2tsxdJPM4j1rxJB9BzS91SIXRe8UtjBsiXEEiDzDRtIrT7a4ErJsHRkdfdifDdZDUSjtzwZOVUyKow2U7/ZDQ0tNWJehpfxP7GwcoN8luaol9D/n8AAAAABJRU5ErkJggg=="/>'+
                    '</div>'+
                    
                '</div>';
                  

                  }    
                }
        }else if(base === 'Lipidos'){
            for(let i=0;i<lipidoss.length;i++){
                if((arti2 === lipidoss[i].titulo)){
              
                  ventana.style.display = "flex";
                  resultado.style.display = "none";
                    
                  ventana.innerHTML = 
         
                '<div class="contenido_emergente">'+
                    '<div class="imgVentana">'+
                        '<img src="'+lipidoss[i].img+'">'+
                    '</div>'+
                    '<div class="emergente_Description">'+
                        '<h2>'+lipidoss[i].titulo+'</h2>'+
                        '<br>'+
                        '<p>Porcion: '+lipidoss[i].porcion+lipidoss[i].medPorcion+'</p>'+
                        '<p>Energía: '+lipidoss[i].Energía+lipidoss[i].medEnergia+'</p>'+
                        '<p>Calorías: '+lipidoss[i].calorias+lipidoss[i].medCaloria+'</p>'+
                        '<p>Proteínas: '+lipidoss[i].Proteinas+lipidoss[i].medProteina+'</p>'+
                        '<p>Carbohidratos: '+lipidoss[i].carbohidratos+lipidoss[i].medCarbohidratos+'</p>'+
                        '<p>Lipidos: '+lipidoss[i].lipidos+lipidoss[i].medLipidos+'</p>'+
                    '</div>'+
                    '<div class="btCloseEmergente" id="btClose">'+
                        '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAArJJREFUWEfdmOFVFUEMhS8ViBUIFaAVKBUgFQgVqBWoFSgVgBUoFSAVABUAHWAFej7PxBOzmZ28x/54x/mz5+3OJHdu7iSZt6UNG1sbhkf/DaDnkt5I4rndnpB9LemhPb+250pBWJWhj5LeNhAVR4D7IulTZTJzqoBeS/osaadqOMy7k/Re0vfR+gogWPkQDN034z8k4YxQMQghoF9JYhPPwjpszbI1AnTWtGJ2AYJR3lfGUZvvgbH2uLd4DlBk5lwSDtDFKgPRA+LALYIl7E9GDxB0f3OzOTGAecyIbB9mmuoBQhdGM8wAcImBqI0pfOxGoxkgHyo0g1BjmBAuBudGNofwse5JWzgJXQYI57YA8UUBA/Ci0d0Tp2lmP0mOhP60AcLXU7+rCAhnV20C7MS8w2++s1NGdmK8VnD4ImHTS4LvljYmiZGsSiZmnEh6l8QkitODit96h6HrJzJEonvZQKSnwDFDLbMBEGz5d3Mn05/iy5ZI/9iKgKBur3n5h8oCU37KKE14aeATXymgX87qKIubhjwrvBuBMRepr+h0CUCzpcFtuARoqZCNQPmQ3bh+aqKhdUVNmBhR6L08VRb1Osfea2YuJXjRl4+9pzKrNSRGwmqZPBOwB/WzhSOWmXJiZBeV0kFoKZS9DgBQhIVG7W8WbhT50gFgy/rpseelL67shByxZHG9dSBKxRVQnlKYIGsvMXz7kdXKbpMfG7TRMa6AfVSDFkPHb3bHMV6nhaXd8E3eyi2sL5o+txBKNGZ5Z8QMAub65IU7W1oq9Sq7BgEMxjhtaMFfg2h97RoU+6kuM73i2tsxdJPM4j1rxJB9BzS91SIXRe8UtjBsiXEEiDzDRtIrT7a4ErJsHRkdfdifDdZDUSjtzwZOVUyKow2U7/ZDQ0tNWJehpfxP7GwcoN8luaol9D/n8AAAAABJRU5ErkJggg=="/>'+
                    '</div>'+
                    
                '</div>';
                  

                  }    
             }
        }else if(base === 'Vitaminas'){
            for(let i=0;i<vitaminass.length;i++){
                if((arti2 === vitaminass[i].titulo)){

                  ventana.style.display = "flex";
                  resultado.style.display = "none";
                    
                  ventana.innerHTML = 
         
                '<div class="contenido_emergente">'+
                    '<div class="imgVentana">'+
                        '<img src="'+vitaminass[i].img+'">'+
                    '</div>'+
                    '<div class="emergente_Description">'+
                        '<h2>'+vitaminass[i].titulo+'</h2>'+
                        '<br>'+
                        '<p>Porcion: '+vitaminass[i].porcion+vitaminass[i].medPorcion+'</p>'+
                        '<p>Energía: '+vitaminass[i].Energía+vitaminass[i].medEnergia+'</p>'+
                        '<p>Calorías: '+vitaminass[i].calorias+vitaminass[i].medCaloria+'</p>'+
                        '<p>Proteínas: '+vitaminass[i].Proteinas+vitaminass[i].medProteina+'</p>'+
                        '<p>Carbohidratos: '+vitaminass[i].carbohidratos+vitaminass[i].medCarbohidratos+'</p>'+
                        '<p>Lipidos: '+vitaminass[i].lipidos+vitaminass[i].medLipidos+'</p>'+
                    '</div>'+
                    '<div class="btCloseEmergente" id="btClose">'+
                        '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAArJJREFUWEfdmOFVFUEMhS8ViBUIFaAVKBUgFQgVqBWoFSgVgBUoFSAVABUAHWAFej7PxBOzmZ28x/54x/mz5+3OJHdu7iSZt6UNG1sbhkf/DaDnkt5I4rndnpB9LemhPb+250pBWJWhj5LeNhAVR4D7IulTZTJzqoBeS/osaadqOMy7k/Re0vfR+gogWPkQDN034z8k4YxQMQghoF9JYhPPwjpszbI1AnTWtGJ2AYJR3lfGUZvvgbH2uLd4DlBk5lwSDtDFKgPRA+LALYIl7E9GDxB0f3OzOTGAecyIbB9mmuoBQhdGM8wAcImBqI0pfOxGoxkgHyo0g1BjmBAuBudGNofwse5JWzgJXQYI57YA8UUBA/Ci0d0Tp2lmP0mOhP60AcLXU7+rCAhnV20C7MS8w2++s1NGdmK8VnD4ImHTS4LvljYmiZGsSiZmnEh6l8QkitODit96h6HrJzJEonvZQKSnwDFDLbMBEGz5d3Mn05/iy5ZI/9iKgKBur3n5h8oCU37KKE14aeATXymgX87qKIubhjwrvBuBMRepr+h0CUCzpcFtuARoqZCNQPmQ3bh+aqKhdUVNmBhR6L08VRb1Osfea2YuJXjRl4+9pzKrNSRGwmqZPBOwB/WzhSOWmXJiZBeV0kFoKZS9DgBQhIVG7W8WbhT50gFgy/rpseelL67shByxZHG9dSBKxRVQnlKYIGsvMXz7kdXKbpMfG7TRMa6AfVSDFkPHb3bHMV6nhaXd8E3eyi2sL5o+txBKNGZ5Z8QMAub65IU7W1oq9Sq7BgEMxjhtaMFfg2h97RoU+6kuM73i2tsxdJPM4j1rxJB9BzS91SIXRe8UtjBsiXEEiDzDRtIrT7a4ErJsHRkdfdifDdZDUSjtzwZOVUyKow2U7/ZDQ0tNWJehpfxP7GwcoN8luaol9D/n8AAAAABJRU5ErkJggg=="/>'+
                    '</div>'+
                    
                '</div>';
                  

                  }    
             }
        }


        //ACTIVAR Y DESACTIVAR
        var activarse = document.getElementById("btClose");

        //FUNCIÓN PARA ABRIR Y CERRAR LA VENTANA
        function ActivarDesactivar() {    
                
            var explorer = document.getElementById("vtEmergente");
            
            console.log("valor x",explorer);

            //Activa y desactiva la ventana
            if (explorer.style.display === "none") {
                explorer.style.display = "block";
                
            } else {
                explorer.style.display = "none";
            }

        }

        /* EVENTO */
        activarse.addEventListener('click', ActivarDesactivar);
    
    }


    //BUSQUEDA POR BASE DE DATOS
    if(bd === 'Proteinas'){
        for(let articulo of proteinass){
            let nombre = articulo.titulo.toLowerCase();
            if(nombre.indexOf(texto) !== -1){
                
                let caja = document.createElement("div");
                caja.classList.add("contenedor");

                caja.innerHTML = 
                '<div id="elemento" class="sugAliment">'+
                    '<img class="imgBusqueda" src="'+articulo.img+'">'+
                    '<h3>'+articulo.titulo+'</h3>'+
                '</div>';

                resultado.appendChild(caja);
           
                //FUNCION PARA MOSTRAR Y OCULTAR LA BUSQUEDA
                resultado.style.display = "block";
                if(formulario.value === ""){
                    resultado.style.display = "none";
                }
            }
        }
    
        if(resultado.innerHTML === ''){
            resultado.innerHTML = 
            
            '<h3 class="aviso">PRODUCTO NO ENCONTRADO</h3>'

        }
    }else if(bd === 'Carbohidratos'){
        for(let articulo of carbohidratoss){
            let nombre = articulo.titulo.toLowerCase();
            if(nombre.indexOf(texto) !== -1){
                
                let caja = document.createElement("div");
                caja.classList.add("contenedor");
                
                caja.innerHTML = 
                '<div id="elemento" class="sugAliment">'+
                    '<img class="imgBusqueda" src="'+articulo.img+'">'+
                    '<h3>'+articulo.titulo+'</h3>'+
                '</div>';

                resultado.appendChild(caja);
           
                //FUNCION PARA MOSTRAR Y OCULTAR LA BUSQUEDA
                resultado.style.display = "block";
                if(formulario.value === ""){
                    resultado.style.display = "none";
                }
            }
        }
    
        if(resultado.innerHTML === ''){
            resultado.innerHTML = 
            
            '<h3 class="aviso">PRODUCTO NO ENCONTRADO</h3>'

        }
    }else if(bd === 'Lipidos'){
        for(let articulo of lipidoss){
            let nombre = articulo.titulo.toLowerCase();
            if(nombre.indexOf(texto) !== -1){
                
                let caja = document.createElement("div");
                caja.classList.add("contenedor");

                caja.innerHTML = 
                '<div id="elemento" class="sugAliment">'+
                    '<img class="imgBusqueda" src="'+articulo.img+'">'+
                    '<h3>'+articulo.titulo+'</h3>'+
                '</div>';

                resultado.appendChild(caja);
           
                //FUNCION PARA MOSTRAR Y OCULTAR LA BUSQUEDA
                resultado.style.display = "block";
                if(formulario.value === ""){
                    resultado.style.display = "none";
                }
            }
        }
    
        if(resultado.innerHTML === ''){
            resultado.innerHTML = 
            
            '<h3 class="aviso">PRODUCTO NO ENCONTRADO</h3>'

        }
    }else if(bd === 'Vitaminas'){
        for(let articulo of vitaminass){
            let nombre = articulo.titulo.toLowerCase();
            if(nombre.indexOf(texto) !== -1){
                
                let caja = document.createElement("div");
                caja.classList.add("contenedor");

                caja.innerHTML = 
                '<div id="elemento" class="sugAliment">'+
                    '<img class="imgBusqueda" src="'+articulo.img+'">'+
                    '<h3>'+articulo.titulo+'</h3>'+
                '</div>';

                resultado.appendChild(caja);
           
                //FUNCION PARA MOSTRAR Y OCULTAR LA BUSQUEDA
                resultado.style.display = "block";
                if(formulario.value === ""){
                    resultado.style.display = "none";
                }
            }
        }
    
        if(resultado.innerHTML === ''){
            resultado.innerHTML = 
            
            '<h3 class="aviso">PRODUCTO NO ENCONTRADO</h3>'

        }
    }

    //DESPLIEGUE VENTANA EMERGENTE
    resultado.addEventListener('click', (e) => {
        console.log(e);

        let arti = e.target.innerText;
    
        pantalla(arti,bd);        

    });
    
}


boton.addEventListener('click',filtrar);

formulario.addEventListener('keyup',filtrar);
