"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function (arg) {
  //creo un nodo nuevo
  let newNode = new Node(arg);
  //cargo el head del nodo primario
  let currentNode = this.head;
  //si el head es null no hay nodo primario entonces le cargo el nuevo nodo
  if (currentNode === null) {
    this.head = newNode;
    return true;
  }
  //recorro la lista hasta su ultima posisicion
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;
};

LinkedList.prototype.remove = function () {
  // asigno el puntero
  let currentNode = this.head;
  //si la lista esta vacia retorno null
  if (currentNode === null) {
    return null;
  }
  //si contiene un solo elemento borro el head y retorno el valor del elemento current
  if (currentNode.next === null) {
    this.head = null;
    return currentNode.value;
  }
  //como tienen mas de un elemento
  //recorro la lista hasta su ANTE ultima posisicion
  while (currentNode.next.next) {
    currentNode = currentNode.next;
  }
  //guardo el ultimo nodo antes de borrar el puntero hacia el
  let nodoReturn = currentNode.next;
  //borro el nodo
  currentNode.next = null;
  //retorno el nodo eliminado
  return nodoReturn.value;
};

LinkedList.prototype.search = function (aBuscar) {
  // asigno el puntero
  let currentNode = this.head;
  //si la lista esta vacia retorno null
  if (currentNode === null) {
    return null;
  }
  //recorro la lista
  while (currentNode) {
    //detectar si arg es CB o valor
    if (typeof aBuscar === "function") {
      if (aBuscar(currentNode.value)) {
        return currentNode.value;
      }
    } else {
      if (currentNode.value === aBuscar) {
        return currentNode.value;
      }
    }
    //si no encontro nada paso al siguiente
    currentNode = currentNode.next;
  }
  //si no encuentra nada retorno null
  return null;
};

function Node(data) {
  this.value = data;
  this.next = null;
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.bucket = {};
  this.numBuckets = 35;
}

HashTable.prototype.hash = function (valor) {
  if (typeof valor !== "string") {
    throw new TypeError('Keys must be strings');
  }
  let sumChar = 0;
  for (let i = 0; i < valor.length; i++) {
    sumChar += valor.charCodeAt(i);
  }
  let hash = sumChar % this.numBuckets;
  return hash;
};

HashTable.prototype.set = function (clave, valor) {
  let key = this.hash2(clave);
  //if (this.bucket.hasOwnProperty(key)){return null;}
  this.bucket[key] = valor;
};

HashTable.prototype.get = function (clave) {
  return this.bucket[this.hash2(clave)];
};

HashTable.prototype.hasKey = function (clave) {
  return this.bucket.hasOwnProperty(this.hash2(clave)); 
};

HashTable.prototype.hash2 = function (valor) {
  if (typeof valor !== "string") {
    throw new TypeError('Keys must be strings');
  }
  let sumChar = 0;
  for (let i = 1; i < valor.length; i++) {
    sumChar += valor.charCodeAt(i);
  }
  sumChar =
    valor.charCodeAt(0) +
    "" +
    sumChar +
    "" +
    valor.charCodeAt(valor.length - 1);
  let hash = sumChar % this.numBuckets;
  return hash;
};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
