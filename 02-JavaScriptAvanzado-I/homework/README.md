# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function (a, b, c) {
    b = a;
    console.log(b); // 8
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b);
  9;
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); //undefined
console.log(baz); //no esta definida la variable
foo(); // 'Hola!'
function foo() {
  console.log("Hola!");
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor); //"Franco"
```

```javascript
var instructor = "Tony";
console.log(instructor); //"Tony"
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor); //"Franco"
  }
})();
console.log(instructor); //"Tony"
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); //"The Flash"
  console.log(pm); //"Reverse Flash"
}
console.log(instructor); //"The Flash"
console.log(pm); //"Franco"
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3"   // 6
4 + 5 + "px" // 45px //9px
"$" + 4 + 5 // $45 //$9
"4" - 2 //  2
"4px" - 2   // NaN
7 / 0 // 1
{}[0] // no esta definido ****
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] 23
3>2>1 // false   3>2 = true     true>1 = false   
[] == ![] //false ****
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
  console.log(a); //undefined "a" no esta declarada todavia
  console.log(foo()); //2  la funcion retorna este valor

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
```

Y el de este código? :

```javascript
var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack;
}

getFood(false); //undefined    no ingresa en el if por lo que no se declara la variable
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname()); //'Aurelio De Rosa'   el this hace referencia a prop

var test = obj.prop.getFullname;

console.log(test()); // "Juan Perez"   test toma la funcion de getFullname pero ejecuta el this en global
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

printing();   // 1 4 3 2  el 2 se retrasa porque tiene un timeout, por lo visto el 3 tambien devido a que ingresa en una funcion
```
