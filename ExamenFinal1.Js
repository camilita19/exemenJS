const alumnos = [
    {
      id: 0,
      nombre: "Leandro",
      apellido: "Borrelli",
      legajo: 20210308,
      notas: [],
    },
    {
      id: 1,
      nombre: "Esteban",
      apellido: "Piazza",
      legajo: 20210211,
      notas: [],
    },
    {
      id: 2,
      nombre: "Martin",
      apellido: "Cejas",
      legajo: 20210218,
      notas: [],
    },
    {
      id: 3,
      nombre: "Karina",
      apellido: "Borgna",
      legajo: 20210516,
      notas: [],
    },
    {
      id: 5,
      nombre: "Javier",
      apellido: "Riera",
      legajo: 20220125,
      notas: [],
    },
  ];

  // ¿Qué tipo de dato es?
  "a = un objeto literal"

  // ¿Cuáles son las claves que puedes identificar?
     "conjunto de propiedades que tiene llaves,los valores son separados por dos puntos, se separan por comas "

  function ordenandoLegajo(alumnos){
     for (let i = 0; i <alumnos.length; i++) {
         for (let j = 0; j < alumnos.length -1 ; j++) {
             if (alumnos[j].legajo < alumnos[j+1].legajo) {
                 
                let temporalLegajo = alumnos[j];
                alumnos[j] = alumnos [j+1];
                alumnos[j+1] = temporalLegajo;
             }
             
         }
         
     }
     return alumnos;
  }
// let ordenarFinal = ordenandoLegajo(alumnos)
//  console.log(ordenarFinal);


                                //  ejercicio 2


 let alumno ={
 
     id: 5,
     nombre: "lucas",
     apellido: "estrada",
    legajo: 20220125,
    notas: [10,6,8,7,9],


    NotasLucas: function() {
       
     let promedioSuma = 0;
    for(let i = 0; i< this.notas.length; i++){
           promedioSuma = promedioSuma + this.notas[i];
     } 

    return promedioSuma /this.notas.length;
   }
  }
  //  let resultadoNotas = alumno.NotasLucas()
  //  console.log(resultadoNotas)



 function NotasAscendente(alumno) {
    for (let i = 0; i < alumno.notas.length; i++) {

      for (let j = 0; j < alumno.notas.length - 1; j++) {

        if (alumno.notas[j] > alumno.notas[j + 1]) {
          let ordenNotas = alumno.notas[j];
          alumno.notas[j] = alumno.notas[j + 1];
          alumno.notas[j + 1] = ordenNotas;
        }
      }
    }
    return alumno;
  }
  // let resultadoascendente = NotasAscendente(alumno)
  //  console.log(resultadoascendente);



let matriz = [
              [-3,-4,-5],
              [-6,-7,-8],
              [-9,-1,-2],

            ];

 function sumarMatriz(matriz){

    let sumar = 0;
    for (let i = 0; i < matriz.length; i++) {
        
      for (let j = 0; j < matriz[i].length; j++) 
           
        if( matriz[i][j] %5 ===0){
          sumar += matriz[i][j]
      
    }
    return sumar;
}
 
 }
//  let sumaTotal = sumarMatriz(matriz)
// console.log(sumaTotal)


function esPar(matriz){
  
  let sumando= 0;
  for (let i = 0; i < matriz.length; i++) {
      
    for (let j = 0; j < matriz[i].length; j++) {
      sumando += matriz[i][j]
      
      } 

      }
      if(sumando%2 ===0){
        return true;
    }else{
      return false;
    }
    
  }
  let resultadoPar = esPar(matriz)
    console.log(resultadoPar)
  
   
