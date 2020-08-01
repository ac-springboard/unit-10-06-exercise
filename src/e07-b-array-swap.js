'use strict';

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

// OUTPUT

console.log( 'ES5 --------');
console.log( 'arr ->', arr );

console.log( 'ES6 --------');
console.log( 'Restoring the original order...');
let [ a, b ] = arr;
arr  = [ b, a ];
console.log( 'arr ->', arr );
