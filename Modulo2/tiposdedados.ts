// let informacoes:[string,number,boolean,'ativo' | 'inativo'] //O nome disso é TUPLA

// informacoes = ['Yago',29,true,'ativo'] //TUPLA, o tamanho definido da TUPLA, será o tamanho definido daquele array.


// //UNIÃO DE DOIS TIPO, SEGUE ABAIXO

// type Tusuario = {
//     nome: string
//     email:string
//     idade:number
// }

// type Tendereco = {
//     rua:string
//     numero: number
//     cidade: string
// }

// type TusuarioTendereco = Tusuario & Tendereco

// const usuario: TusuarioTendereco = { 
//     nome: 'yago',
//     email: 'yagpferm',
//     idade: 29,
//     rua: 'rua três',
//     numero: 25,
//     cidade: 'brasilia'
// }

// console.log (usuario.nome)


// //Type Narrowing -> estreitamento, tecnica utilizada pra deixar o mais acertivo possível um tipo utilizado

// function soma (num1:string | number, num2:string | number){
//     if(typeof num1 === 'number' && typeof num2 === 'number'){
//         return num1 * num2
//     }else if (typeof num1 === 'number' && typeof num2 === 'string'){
//         return num1 * Number(num2)
//     }else if (typeof num1 === 'string' && typeof num2 === 'number'){
//         return Number(num1) * num2
//     }else {
//         return Number(num1) * Number(num2)
//     }
// }

// console.log(soma('25','56'))


//Type Assertion

type Tpessoa ={ 
    nome: string
    idade:number
}

function saudacao (nome:string,idade:number){
console.log(`meu nome é ${nome}, tenho a idade de ${idade}`)
}

const yago:Tpessoa = {
    nome: 'Yago Fernando',
    idade: 29
}

// saudacao(yago.nome, yago.idade)



// //VERIFICANDO SE DENTRO DO OBJETO EXISTE UMA PROPRIEDADE

// console.log('endereço' in yago)


//UNKNOW -> reassistir esta aula do módulo 2.