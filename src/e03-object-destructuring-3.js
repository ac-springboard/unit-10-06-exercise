'use strict';

function getUserData({firstName, favoriteColor="green"}){
  console.log( `Your name is ${firstName} and you like ${favoriteColor}`);
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
getUserData({firstName: "Melissa"}) // ?
getUserData({}) // ?

// ....My answer: Your name is Alejandro and you like purple
//                Your name is Melissa and you like green
//                Your name is undefined and you like green
// Actual answer: Your name is Alejandro and you like purple
//                Your name is Melissa and you like green
//                Your name is undefined and you like green
// ........Score: 100%
