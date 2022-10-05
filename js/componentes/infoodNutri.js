export function estructura(){
    let root = document.querySelector("#calculadorInfood");
      
       //CREACION DE LOS DIV PARA EL PANEL
        root.innerHTML = 

        '<div id="headerBanner">'+
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
                    '<li><a a" href="./index.html#galeria" class="hijoOption">Menú</a>'+
                        '<ul class="subnav">'+
                            '<li><a class="hijoSUbb" a" href="./index.html#cuadrosBroma">Proteínas</a></li>'+
                            '<li><a class="hijoSUbb" id="carbohidratoss">Carbohidratos</a></li>'+
                            '<li><a class="hijoSUbb" id="lipidoss">Lípidos</a></li>'+
                            '<li><a class="hijoSUbb" id="vitaminass">Vitaminas</a></li>'+
                        '</ul>'+
                    '</li>'+
                    '<li><a id="infoodNutri" href="./infoodNutri.html" class="hijoOption">Infood Nutri</a></li>'+
                    '<li><a class="hijoOption">Temas</a>'+
                        '<ul class="subnav">'+
                            '<li><a a" href="./index.html#broma" class="hijoSUbb">Bromatología</a></li>'+                        
                            '<li><a a" href="./index.html#piramide" class="hijoSUbb">Pirámide</a></li>'+
                            '<li><a a" href="./index.html#estadisticaGraphic" class="hijoSUbb">Gráfica</a></li>'+
                        '</ul>'+
                    '</li>'+
                '</ul>'+
            '</nav>'+
        '</header>'+

        '<div class="padreAlimentos">'+

        '<div class="titleNutri">'+
            '<h1>Infood Nutri</h1>'+
            '<p>Consulta cuantos carbohidratos, lipidos, proteínas, o vitaminas contiene tu plato de comida</p>'+
        '</div>'+

            '<div class="selectAliment" id="selectAliment">'+
                '<div class="cajaAliment"><h2>Alimentos</h2></div>'+
                '<input id="inputAlimento" class="inputAliment" placeholder="Escribe para buscar" type="text">'+
                '<div id="resultado"></div>'+  
                '<div class="titleResultado"><h2>Resultados</h2></div>'+
            '</div>'+
            
            '<div class="porcentajeAlimentos" id="tablaAliment">'+
                
                '<div class="sons">'+
                    '<div class="secondSon"><h3>Kcal (%)</h3></div>'+
                    '<div><h3>Cal (%)</h3></div>'+
                    '<div class="secondSon"><h3>Proteína (%)</h3></div>'+
                    '<div><h3>Lipídos(%)</h3></div>'+
                    '<div class="secondSon"><h3>Carbohidratos (%)</h3></div>'+
                    '<div><h3>Vitamina C (%)</h3></div>'+
                    '<div class="secondSon"><h3>Vitamina A (%)</h3></div>'+
                    '<div><h3>Vitamina B6</h3></div>'+
                    '<div class="secondSon"><h3>Vitamina B12</h3></div>'+
                '</div>'+

                '<div class="sons2">'+
                    '<div class="secondSon"></div>'+
                    '<div></div>'+
                    '<div class="secondSon"></div>'+
                    '<div></div>'+
                    '<div class="secondSon"></div>'+
                    '<div></div>'+
                    '<div class="secondSon"></div>'+
                    '<div></div>'+
                    '<div class="secondSon"></div>'+
                '</div>'+
                '<div class="title2"><h1>Resultados</h1></div>'+
                '<div class="graficaAliment" id="graphicAliment"></div>'+

            '</div>'+

        '</div>';
}
    
estructura();


export function footer (){
        let root = document.querySelector("#footer");
    
        root.innerHTML = 
    
        /*PRIMERA SECCIÓN INTEGRANTES */
       
        '<section class="integrantes">'+
           '<div class="caja1">'+
                '<h1>Comunicadores graficos</h1>'+
                '<p>Marilis Abigail <br> Escobar Estrada</p>'+
                '<p>Adriana Alejandra <br> Velásquez Anleú</p>'+
            '</div>'+
            
            '<div class="caja1" id="biologos">'+
                '<h1>Biólogos</h1>'+
                '<p>Joseline Johanna <br> Quisque Rustrián</p>'+
                '<p>María de los Angeles <br> Del Cid García</p>'+
            '</div>'+
            
            '<div class="caja1">'+
                '<h1>Desarrolladores</h1>'+
                '<p>Génesis Gabriel <br> Subuyuj Ramírez</p>'+
                '<p>Kimberly Estephania <br> Hernández Ortiz</p>'+
                '<p>Natali Daniela <br> Marroquín Garrido</p>'+
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



//DESIGN BUSCADOR
import { bdEstadisticas } from "../data/bdEstadisticas.js";
import { graficarPie } from "../graficar.js";

let formulario1 = document.querySelector('#inputAlimento');
let resultado1 = document.querySelector('#resultado');
let tabla = document.querySelector('#tablaAliment');


export let filtrar1 = txtIng1 =>{
  
    //Valida si el usuario presiona la tecla ESCAPE
    if(txtIng1.key === "Escape"){
        formulario1.value='';
        resultado1.innerHTML='';
    }

    resultado1.innerHTML = '';
    let texto = formulario1.value.toLowerCase();


    //BUSQUEDA POR BASE DE DATOS
   
        for(let articulo of bdEstadisticas){
            let nombre = articulo.Alimento.toLowerCase();
            
            if(nombre.indexOf(texto) !== -1){
                
                let caja = document.createElement("div");
                caja.classList.add("contenedor");

                caja.innerHTML = 
                '<div id="elemento" class="alimentSug">'+
                    '<h3>'+articulo.Alimento+'</h3>'+
                '</div>';

                resultado1.appendChild(caja);
           
                //FUNCION PARA MOSTRAR Y OCULTAR LA BUSQUEDA
                resultado1.style.display = "block";
                if(formulario1.value === ""){
                    resultado1.style.display = "none";
                    
                }
            }
        
    
        if(resultado1.innerHTML === ''){
            resultado1.innerHTML = 
            
            '<h3 class="aviso">PRODUCTO NO ENCONTRADO</h3>'

        }
        
    }
    
    let codId;
    
    function infoNutri(alimento){
        console.log("ALIMENTO ",alimento)

        for(let i=0;i<bdEstadisticas.length; i++){
            if(alimento === bdEstadisticas[i].Alimento){
                console.log(bdEstadisticas[i].Kcal);
                
                codId = bdEstadisticas[i].ID;
   
                tabla.innerHTML = 

            '<div class="sons">'+
                    '<div class="secondSon"><h3>Kcal (%)</h3></div>'+
                    '<div><h3>Cal (%)</h3></div>'+
                    '<div class="secondSon"><h3>Proteína (%)</h3></div>'+
                    '<div><h3>Lipídos(%)</h3></div>'+
                    '<div class="secondSon"><h3>Carbohidratos (%)</h3></div>'+
                    '<div><h3>Vitamina C (%)</h3></div>'+
                    '<div class="secondSon"><h3>Vitamina A (%)</h3></div>'+
                    '<div><h3>Vitamina B6</h3></div>'+
                    '<div class="secondSon"><h3>Vitamina B12</h3></div>'+
                '</div>'+

                '<div class="sons2">'+
                    '<div class="secondSon"><h3>'+bdEstadisticas[i].Kcal+'</h3></div>'+
                    '<div><h3>'+bdEstadisticas[i].Cal+'</h3></div>'+
                    '<div class="secondSon"><h3>'+bdEstadisticas[i].Proteína+'</h3></div>'+
                    '<div><h3>'+bdEstadisticas[i].Lípidos+'</h3></div>'+
                    '<div class="secondSon"><h3>'+bdEstadisticas[i].Carbohidratos+'</h3></div>'+
                    '<div><h3>'+bdEstadisticas[i].Vitamina_C+'</h3></div>'+
                    '<div class="secondSon"><h3>'+bdEstadisticas[i].Vitamina_A+'</h3></div>'+
                    '<div><h3>'+bdEstadisticas[i].Vitamina_B6+'</h3></div>'+
                    '<div class="secondSon"><h3>'+bdEstadisticas[i].Vitamina_B12+'</h3></div>'+
                '</div>'+
            
            '<div class="graficaAliment" id="graphicAliment">'+
            // ' <canvas class="designGraphic" id="MiGrafica" style="width: 100%; max-width: 500px;"></canvas>'+
            // ' <canvas class="designGraphic" id="MiGrafica" style="width: 100%; max-width: 50rem; height: 100%; max-height: 30rem; min-width: 2rem; min-height: 1.4rem";></canvas>'+
            ' <canvas class="designGraphic" id="MiGrafica"></canvas>'+

            '</div>';
                
            }
        }
        
        graficarPie(codId);
    }

    //DESPLIEGUE VENTANA EMERGENTE
    resultado1.addEventListener('click', (e) => {
        
        

        console.log(e);


        let arti = e.target.innerText;
    
        console.log("MOSTRAR DATOS",arti);      

        

        formulario1.value='';
        resultado1.innerHTML='';
        resultado1.style.display = "block";
            if(formulario1.value === ""){
                resultado1.style.display = "none";
            }
        infoNutri(arti);
    });


    
}


document.addEventListener('keyup',filtrar1);

