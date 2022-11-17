"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //declaro el caso BASE o corte que es si es menor a 2
  if (array.length > 2) {
    //declaro arrays para ordenar y el pivot
    let menores = [];
    let mayores = [];
    // QUITO!! el primer elemento del array y lo uso como pivot
    let pivot = array.shift();
    //recorro el array comparando cone l pivot y los guardo en sus respectivos arrays
    for (let i = 0; i < array.length; i++) {
      if (array[i] <= pivot) {
        menores.push(array[i]);
      } else {
        mayores.push(array[i]);
      }
    }
    //terminada la separacion en menores y mayores retorno haciendo un merge de los menores -- pivot -- mayores
    //llamo a recursividad para ir reduciendo los arrays y ordenandolos
    return [...quickSort(menores), pivot, ...quickSort(mayores)];
  } else if (array.length === 2) {
    //si el array es tiene longitud de 2 lo ordeno de ser necesario
    if (array[0] > array[1]) array.reverse();
    //y retorno el array ordenado
    return array;
  } else if (array.length < 2) {
    //si el array es menor a 2 quiere decir que termino de descomponer los arrays
    //entonces termino la recursividad y devuelvo el array
    return array;
  }
}

function mergeSort(arr) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // caso base de corte cuendo el array es 1, pasa esto si el largo del array es mayor a 1
  if (arr.length <= 1) return arr;

  //como la longitud del array es mayor a uno se puede dividir
  //lo dividimos en dos arrays y llamamos a esta misma funcion (recursividad)
  // para cada una de las mitades asi se divide hasta que salte el caso base
  let left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  let right = mergeSort(arr.slice(Math.floor(arr.length / 2)));
  //terminada la recursividad de "division" de los arrays llamo a merge
  return merge(left, right);
}

function merge(left, right) {
  //declaro un array donde voy guardando
  let arrOrdenado = [];
  
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      arrOrdenado.push(left.shift());
    } else {
      arrOrdenado.push(right.shift());
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...arrOrdenado, ...left, ...right];
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
