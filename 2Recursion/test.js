let countDown=function(number){
    let nextNum = number-1
number>0&&[countDown(nextNum),console.log(nextNum)]
}

//countDown(9)


function sumOfDigits(num) {
    if (num == 0) {
        return 0;
    }
    return num % 10 + sumOfDigits(Math.floor(num / 10));
    console.log(num)
}

sumOfDigits(0)