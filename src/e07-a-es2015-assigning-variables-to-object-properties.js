'use strict';

var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;

let { numbers: {a: x, b: y } }= obj;

// OUTPUT

console.log( 'ES5 ---------')
console.log( 'a ->', a );
console.log( 'b ->', b );

console.log( 'ES6 ---------')
console.log( 'x ->', x );
console.log( 'y ->', y );
