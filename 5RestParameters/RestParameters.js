function rest (...input){
    sum=0;
    for(let i of input){
        sum+=i
    }
    return sum.length
}
//let a = ["man", "boy", "woman"],
//b=['word']
console.log(rest(3, 6, 8))
//console.log(rest(a, b))