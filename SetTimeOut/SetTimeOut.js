const start=()=>{
   let timeID= setInterval(() => {console.log('hello')
    
}, 1000);

setTimeout(() => {
    clearInterval(timeID)
    console.log('stop')
    
    
}, 5000);
}
start()

setInterval(() => {
    console.log('start')
    start()
}, 6000);

