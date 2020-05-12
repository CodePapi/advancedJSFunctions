var add =(function(){
    var counter = 0
    return function(){counter+=2;
    return counter}
})()

add()
add()
add()
add()
console.log(add())
