"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length > 2) {
    let menores = [];
    let mayores = [];
    let pivot = array.shift();
    for (let i = 0; i < array.length; i++) {
      if (array[i] <= pivot) {
        menores.push(array[i]);
      } else {
        mayores.push(array[i]);
      }
    }
    return [...quickSort(menores), pivot, ...quickSort(mayores)];
  } else if (array.length === 2) {
    if (array[0] > array[1]) array.reverse();
    return array;
  } else if (array.length < 2) {
    return array;
  }
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  return  mergeMS(splitMS(array));
}
function splitMS(array) {
  if (array.length > 2) {
    let arrLeft = array.slice(0, Math.floor(array.length / 2));
    let arrRight = array.slice(Math.floor(array.length / 2), array.length);
    return [splitMS(arrLeft), splitMS(arrRight)];
  } else {
    if (array[0] > array[1]) array.reverse();
    return array;
  }
}
function mergeMS(array) {
if (typeof(array[0][0])==='array'){
 for (let i = 0; i < array.length; i++) {
  return mergeMS(array[i]);
 }
}else{
  for (let i = 0; i < array[0].length; i++) {
    for (let j = 0; j < array[1].length; j++) {
      if (array[0][i]<array[1][j]){

      }
      
    }
  }

}

}
let arrtest=[4,5,8,6,9,2,1,7,3,25,45,45,86,54,12]
console.log(splitMS(arrtest))
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
