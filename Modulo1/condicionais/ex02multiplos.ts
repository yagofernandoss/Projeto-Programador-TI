// criar um sistema onde o aluno recebe a nota, onde...
//7 -> aprovado
// 5 - 6.9 -> recuperação
//> 5 reprovado

// const media = 4  

// if(media >= 7){
//     console.log ('aprovado')
// }else if (media >=5 && media < 7){
//     console.log('recuperação')
// }else{
//     console.log('reprovado')
// }

// Peça um número e verifique se ele é multiplo de 3 e/ou múltiplo de 5.

// const numero = 15

// if(numero % 3 === 0 && numero % 5 === 0){
// console.log(`${numero} é multiplo de 3 e de 5`)
// }else if (numero % 3 === 0){
//     console.log(`${numero} é multiplo de 3`)
// }else if (numero % 5 === 0){
//     console.log(`${numero} é multiplo de 5`)
// }else{
//     console.log('Não é multiplo nem de 3 e nem de 5')
// }


//Crie um programa que receba a idade de uma pessoa e diga se ela é: criança (<12), 
// adolescente (12–17), adulto (18–59) ou idoso (≥60).

const idade = 60

if(idade<12){
    console.log('criança')
}else if (idade<=17){
    console.log('adolescente')
}else if (idade<=59){
    console.log('adulto')
}else{
    console.log('idoso')
}
