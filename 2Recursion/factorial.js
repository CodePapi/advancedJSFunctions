
//factorial
//factoria in maths eg 3!=3x2x1

let factorial = function factor(value){
    let a= value<=0? 1: (value*factorial(value-1));
    return a  
 }
 console.log(factorial(3))