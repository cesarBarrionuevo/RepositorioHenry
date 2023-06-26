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
   console.log(x);
   console.log(a);
   var f = function (a, b, c) {
      b = a;
      console.log(b);
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);
};
c(8, 9, 10);  
/* 
Muestra:
10 por x
8 por a
8 por b en la funcion f
9 por la imprimir valor b
*/
console.log(b);  // 9
console.log(x);  // 1
```

```javascript
console.log(bar); //undefined
console.log(baz); //no existe variable "is not defined"
foo(); // hola
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);  //Franco
```

```javascript
var instructor = 'Tony';
console.log(instructor); // tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);
   }
})();
console.log(instructor); //Tony
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); //the Flash 
   console.log(pm); //Reserve Flash
}
console.log(instructor); //The Flash
console.log(pm); //Reserve The Flash
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"   // 2
"2" * "3" // 6
4 + 5 + "px"  //9px
"$" + 4 + 5 //$45
"4" - 2  // 2
"4px" - 2 //nan
7 / 0 //0
{}[0]  //[0]
parseInt("09") // 9
5 && 2   // 2
2 && 5   // 5
5 || 0   //5
0 || 5  // 0
[3]+[3]-[10]  // 
3>2>1 // False
[] == ![] // False
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test(); // undefined , 2
/* 
   undefined porque la variable "a" esta creada con "var" y ya se sabe de su existencia, no todavia el valor
   2 porque se llama a la funcion foo() dentro del conolo.log y esta retorna el valor 2
*/
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);

// undefined no se le dio un valor a snack cuando sea falso
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());  //Natalia Nerea

var test = obj.prop.getFullname;

console.log(test()); //Natalia Nerea
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

printing(); // 1,4,3,2
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
