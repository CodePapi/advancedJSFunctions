//let func= new Function([arg1, arg2,...argN], functionBody)


let sum = new Function('a', 'b','c', 'return a + b+c')

console.log(sum(1,1,4))