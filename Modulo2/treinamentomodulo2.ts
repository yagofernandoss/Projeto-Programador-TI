//Saudação personalizada Crie uma função saudar(nome) que retorne "Olá, <nome>!".

function saudar(nome:string,idade:number){
  return `olá ${nome} você tem ${idade} anos certo?`
}

console.log(saudar('Yago Fernando', 29))

//Maiúsculo e minúsculo Escreva uma função que receba uma string e retorne ela em maiúscula e minúscula.

function transformarTexto (texto : string){
    return{
        minusculo: texto.toLowerCase(),
        maiúsculo: texto.toUpperCase()
    }
}

console.log(transformarTexto('Yago Fernando é Sinistro'))

//Crie uma função que receba um array e retorne o primeiro e o último elemento.
function primeiroEultimo<T>(lista:T[]):string{
    const primeiro = lista[0];
    const ultimo = lista[lista.length -1]
    return `Primeiro é ${primeiro} e o Último é ${ultimo}`
}

console.log(primeiroEultimo([12,25,33,65,48]))