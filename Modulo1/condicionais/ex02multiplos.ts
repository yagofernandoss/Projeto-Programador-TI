

// Peça um número e verifique se ele é multiplo de 3 e/ou múltiplo de 5.

const numero = 15

if(numero % 3 === 0 && numero % 5 === 0){
console.log(`${numero} é multiplo de 3 e de 5`)
}else if (numero % 3 === 0){
    console.log(`${numero} é multiplo de 3`)
}else if (numero % 5 === 0){
    console.log(`${numero} é multiplo de 5`)
}else{
    console.log('Não é multiplo nem de 3 e nem de 5')
}

