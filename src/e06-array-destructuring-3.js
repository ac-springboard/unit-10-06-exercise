'use strict';

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ?

// ....My answer: [ 20, 10, 30 ]
// Actual answer: [ 10, 30, 20 ]
// ........Score: 0%
// Note: I should pay more attention... :(
