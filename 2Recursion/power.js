//the exampe below takes in two parameters
//x=the number
//n=the value
//in mathematics x^n

let pow= function(x, n){
    let a=  n==1?x:(x*pow(x,n-1));
    return  a
  }
  
  console.log(pow(3, 3))
  
  