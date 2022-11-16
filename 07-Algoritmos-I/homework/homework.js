"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  const arrPrimos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101];
  let arrFact = [1];
  let i = 0;

  while (num!==1) {
    if (num % arrPrimos[i] === 0) {
      arrFact.push(arrPrimos[i]);
      num = num / arrPrimos[i];
    } else {
      i++;
    }
  }
  return arrFact;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  let changed = true;
  while (changed === true) {
    changed = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        changed = true;
        //[array[i]+array[i+1]]=[array[i+1]+array[i]]
      }
    }
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    for (let h = i; h >= 0; h--) {
      if (array[h] < array[h - 1]) {
        let temp = array[h - 1];
        array[h - 1] = array[h];
        array[h] = temp;
      } else {
        break;
      }
    }
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let menor = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[menor]) {
        menor = j;
      }
    }
    if (i !== menor) {
      let temp = array[menor];
      array[menor] = array[i];
      array[i] = temp;
    }
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
