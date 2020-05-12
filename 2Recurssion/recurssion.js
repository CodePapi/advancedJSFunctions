let pow= function(x, n){
  let a=  n==1?x:(x*pow(x,n-1));
  return  a
}

console.log(pow(3, 3))



//factorial

let factorial = function factor(value){
   let a= value<=0? 1: (value*factorial(value-1));
   return a  
}
console.log(factorial(3))

//complex recurssion

let company = { // the same object, compressed for brevity
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };
  
  // The function to do the job
  function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
      return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
      }
      return sum;
    }
  }
  
  console.log(sumSalaries(company)); // 7700