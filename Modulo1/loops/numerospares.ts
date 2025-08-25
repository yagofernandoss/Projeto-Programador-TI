//Mostre os números impares de 0 a 100 usando while.

let iu = 0

while(iu<=25){
    if(iu % 2 === 0){
        console.log(iu)
    }
    iu++
}


let i = 0

while(i<=100){
    if( i % 3 === 0 && i % 5 === 0){
        console.log ('FizzBuzz')
    }else if (i % 3 === 0){
        console.log ('Fizz')
    }else if (i % 5 === 0){
        console.log ('Buzz')
    }else{
        console.log(i)
    }
    i++
}