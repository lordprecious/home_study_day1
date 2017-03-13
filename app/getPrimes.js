'use strict'

var file = {}

//function to get prime numbers from 0 to the given number;
file.getPrimes = function(num) {
  var primeNumbers = [];
  if(isNaN(num)) {                  //condition to check for invalid inputs such as strings;
     return "input is not a number";
   }
   if(num < 2){                      //condition to check if number is greater or equals 2; beacause prime numbers only start from 2, negetative numbers, zero and 1 are not included;
     return primeNumbers;
   } 
   for(var i = 2; i <= num; i++) {
     var isPrime = true;
     for(var j = 2; j < i; j++) {
       if(i % j === 0) {
         isPrime = false;
         break;
       }
     }
 
     if(isPrime === true) {
       primeNumbers.push(i);
     }
 
   }
   return primeNumbers;
 }
 
  module.exports = file;
