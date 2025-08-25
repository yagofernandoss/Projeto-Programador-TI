// criar um sistema onde o aluno recebe a nota, onde...
//7 -> aprovado
// 5 - 6.9 -> recuperação
//> 5 reprovado

const media = 4  

if(media >= 7){
    console.log ('aprovado')
}else if (media >=5 && media < 7){
    console.log('recuperação')
}else{
    console.log('reprovado')
}