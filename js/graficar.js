import { bdEstadisticas } from "./data/bdEstadisticas.js";

let datos;
let nombreAlimento;

export function graficarPie(codigo){

  for (let i=0;i<bdEstadisticas.length;i++){
    if(codigo===bdEstadisticas[i].ID){
           
      nombreAlimento = bdEstadisticas[i].Alimento
      datos = [
        bdEstadisticas[i].Kcal,
        bdEstadisticas[i].Cal,
        bdEstadisticas[i].Proteína,
        bdEstadisticas[i].Lípidos,
        bdEstadisticas[i].Carbohidratos,
        bdEstadisticas[i].Vitamina_C,
        bdEstadisticas[i].Vitamina_A,
        bdEstadisticas[i].Vitamina_B6,
        bdEstadisticas[i].Vitamina_B12,
      ]
    }

  }

  console.log("DATOS ",datos);

let miCanvas = document.getElementById("MiGrafica").getContext("2d");

var chart = new Chart(miCanvas,{
  
  type:"pie",
  
  data:{
    labels:["Kcal %","Cal %","Proteina %","Lipidos %","Carbohidratos %","Vitamina C %","Vicamina A %","Vitamina B6 %","Vitamina B12 %"],
    datasets:[
    {
      label: "Mi grafica de Alimentos",
      backgroundColor: [
        "#41984F",
        "#477344",
        "#639448",
        "#90C770",
        "#F2F1DF",
        "#194B2F",
        "#A2D05F",
        "#263D29",
        "#309A32"
      ],
      borderColor: "#113a1f",
      data: datos,

    },
    ]
  },options:
  
  {
    title: {
      display: true,
      text: nombreAlimento,
      fontSize: 20,
      fontColor: '#263D29',
    },
    
    legend: {
      display: true,
      labels: {
        fontColor: '#0B1D11',
        // fontSize: 11,
      },
      position: 'top'
      }
  
  }
})

}