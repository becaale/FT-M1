"use strict";

const { queue } = require("@11ty/eleventy-cache-assets");

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia: retun  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 
            n     7  6  5  4  3  2  1  0

Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if (n < 0 || n === 1 || n === 0) return 1;
  return n * nFactorial(n - 1);



}


function nFibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return nFibonacci(n - 1) + nFibonacci(n - 2)
  }
 
  /* 
  let fibo = [];
  for (let i = 0; i <= n; i++) {
    if (i < 2) {
      fibo[i] = i;
    } else {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
  }
  return fibo[n]; */
}
/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.q = [];
  this.enqueue = function (arg) {
    this.q.push(arg);
  };
  this.dequeue = function () {
    return this.q.shift();
  };
  this.size = function () {
    return this.q.length;
  };
  /*  class fifo {
    constructor() {
      this.q = [];
    }
    enqueue(arg) {
      this.q.push(arg);
    }
    dequeue() {
      return this.q.shift();
    }
    size() {
      return this.q.length;
    }
  }

  return fifo;
 */
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
