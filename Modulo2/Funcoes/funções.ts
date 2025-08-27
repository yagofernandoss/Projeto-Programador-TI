//esse arquivo foi utilizando para treinamento de funções. 


// const usuarios = [] //Criando uma função

// function cadastrarUsuario (nome, idade, email){
//     usuarios[usuarios.length] = {
//         nome,idade,email
//     }
//     return `Usuario ${nome} adicionado!`
// }

// cadastrarUsuario('Yago',29,'yagofernandoss19@gmail.com')
// cadastrarUsuario('Marcos',59,'marco.sfs.2006@hotmail.com')

// console.log(usuarios)

// const usuario = []

// function cadastrarUsuario (nome,email,idade){
//     usuario[usuario.length] = {
//     nome,email,idade
// }
// }
// cadastrarUsuario('Marcos', 'marco.sfs.2006@hotmail.com', 59)

// console.log (usuario)

// declare uma variavel que armazena um objeto contendo dados de 
//uma pessoa: nome,idade,profissão e altura.
// Faça uma função que tem um parâmetro. Essa função deve imprimir na tela 
// a apresenção de uma pessoa, seguindo o modelo abaixo:
// 'Olá, meu nome é João, sou um jovem de 12 anos, 1,4m de altura e sou estudante'

// const pessoa =[]
// function dados (nome,idade,profissão,altura){
// pessoa[pessoa.length] = {
//     nome, idade,profissão,altura
// }

// }

// dados ('João',12,'estudante',1.4)
// dados ('YagoFernando', 29, 'Software Developer', 1.84)

// for (let p of pessoa)

// console.log(`Meu nome é ${p.nome}, eu tenho ${p.idade} anos de idade, tenho ${p.altura} de altura e sou ${p.profissão}`)

//função com retorno

// function nomeCompleto (nome,sobrenome){
//     const nomeUsuario = `${nome} ${sobrenome}`
//     return nomeUsuario
// // quando chama a função return, nada abaixo dela é lido.
// }

// console.log (nomeCompleto('Yago', 'Fernando'))

// function verificaIdade (idade){
//     if(idade <=17){
//         return 'é menor de idade'
//     }else{
//         return 'é maior de idade'
//     }
// }

// //arrow function

// console.log(verificaIdade(19))


//Exercício para resolver, faça uma função que tem um parâmetro chamado idade e que determina a faixa etaria de uma pessoa a partir dessa idade.
//21 anos ou menos --> jovem
//22 a 65 anos --> adulto(a)
//66 ou mais anos --> idoso(a)
//a função deverá retornar um string que informa se a pessoa é jovem, adulto ou idoso.

// type pessoa = {
//     nome: string
//     idade: number
//     email:string
// }

// const listadepessoas : pessoa [] = []

// function adicionarpessoas(nome:string, idade:number,email:string){
// listadepessoas.push({nome,idade,email})

// }


// adicionarpessoas('Yago Fernando',29,'yagofernandoss19@gmail.com')
// adicionarpessoas('Marcos Fernando',59,'marco.sfs.2006@hotmail.com')
// adicionarpessoas('Sandra dos Santos',49,'sandrele@gmail.com')


// function faixaEtaria (idade:number){
//     if(idade <= 21){
//         return 'Você é muito jovem'
//     }else if ( idade <=65){
//         return 'Você é um adulto'
//     }
//     return 'Você é um idoso'

// }

// for (let p of listadepessoas){
//     console.log(`${p.nome} ${faixaEtaria(p.idade)}`)
// }


// type pessoas = { 
// nome:string
// idade:number
// }

// const listadepessoas : pessoas [] = []

// function adicionarPessoa(nome:string,idade:number){
//     listadepessoas[listadepessoas.length] = {nome,idade}
// }

// adicionarPessoa('Yago Fernando',29)
// adicionarPessoa('Marcos Fernando',59)

// function conferirIdade(idade:number){
//     if(idade <=17){
//         return 'é jovem'
//     }else if(idade <=65){
//         return 'é adulto'
//     }else{
//         return 'é idoso'
//     }

// }

// for(let p of listadepessoas){
//     console.log(`${p.nome} ${conferirIdade(p.idade)}`)
// }


// const soma = (numero1:number,numero2:number):number=>{
// return numero1 + numero2
// }

// soma(275 , 245)

// console.log (soma)

//tipagem de funções com objetos

// type Tpessoa = { 
//     nome:string
//     idade:number
//     profissão:string
// }

// const pessoas : Tpessoa [] = []

// function cadastrarPessoa(usuario:Tpessoa){
// pessoas [pessoas.length] = usuario  
// return usuario

// }

// const resultado = cadastrarPessoa({
//     nome:'Yago',
//     idade:29,
//     profissão:'Policial Militar'})

// console.log(resultado)

// Função em variaveis 
// function soma (numero1:number,numero2:number):number{
//     return numero1 + numero2
// }

// const variavel = soma

// console.log(variavel)

//função em propriedades de objetos 

const pessoa = {
    nome:'Yago',
    idade: 29,
    nomeidade:function(){
        console.log (`meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos de idade`)
    }
}

pessoa.nomeidade()