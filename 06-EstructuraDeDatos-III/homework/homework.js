"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.left = null;
  this.right = null;
  this.value = value;
}

BinarySearchTree.prototype.size = function () {
  let count = 0;
  if (this.left !== null) {
    count += this.left.size();
  }
  if (this.right !== null) {
    count += this.right.size();
  }
  return 1 + count;

  /* let left = 0;
  let right = 0;
  if (this.left !== null) {
    left = this.left.size();
  }
  if (this.right !== null) {
    right = this.right.size();
  }
  return 1 + left + right; */
};

BinarySearchTree.prototype.insert = function (value) {
  if (this.value > value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) {
    return true;
  }

  if (this.value < value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }

  if (this.value > value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }

  return false;

  /*   let left = false;
  let right = false;
  let nodo = false;

  if (this.left !== null && this.value > value) {
    left = this.left.contains(value);
  }

  if (this.right !== null && this.value < value) {
    right = this.right.contains(value);
  }

  if (this.value === value) {
    nodo = true;
  }

  return nodo || left || right;  */
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  /* 
  'in-order' left - root - right
  'pre-order' root - left - right
  'post-order' left - right - root
  */

  if (order === "pre-order") cb(this.value);

  if (this.left !== null) this.left.depthFirstForEach(cb, order);

  if (order !== "pre-order" && order !== "post-order") cb(this.value);

  if (this.right !== null) this.right.depthFirstForEach(cb, order);

  if (order === "post-order") cb(this.value);
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, fifo = []) {
  cb(this.value);

  if (this.left !== null) fifo.push(this.left);
  if (this.right !== null) fifo.push(this.right);

  if (fifo.length > 0) fifo.shift().breadthFirstForEach(cb, fifo);
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
