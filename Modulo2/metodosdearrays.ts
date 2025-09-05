// push -> adiciona um ou mais elementos no array e retorna o tamanho do array atual

// const arraynumeros : number [] = [12,34,56,84]

// arraynumeros.push(55,64,128)

// console.log(arraynumeros)



//pop -> remove o último elemento do array e retorna o elemento que foi removido.

// const arraynumeros : number [] = [12,34,56,84]

// arraynumeros.pop()

// console.log(arraynumeros.pop())


//shift -> remove o primeiro elemento de um array e retorna o elemento removido
//unshift -> adiciona um ou mais elementos no inicio do array e retorna o novo tamanho do array
// push -> adiciona um ou mais elementos no array e retorna o tamanho do array atual
//pop -> remove o último elemento do array e retorna o elemento que foi removido.
//indexOf -> retorna o índice do elemento no array
//includes -> retorna um boolean se o elemento do array existir na lista
//reverse -> Inverter e ordem de um array
//join -> junta todos os elementos de um arraye retorna uma string 
//slice -> retorna uma cópia contendo a parte de um array de acordo com os índices informados
//splice ->  altear um array removendo e/ou adicionando outros elementos


//Crie um array com o nome de cinco países
//Adicione um país ao fim da lista
//imprima a lista na tela
//Remova um país do fim da lista
//imprima a lista na tela
//adicione um país no inicio da lista
//imprima na tela
//remova um pais no inicio da lista
//imprima a lista na tela
//imprima o último país da lista na tela
//imprima o país de indice 2 na tela

// const paises = ['Grécia','Portugal','Finlandia','Noruega','Amsterdã']

// paises.push('Reino Unido')
// console.log(paises)
// paises.pop()
// console.log(paises)
// paises.unshift('Japão')
// console.log (paises)
// paises.shift()
// console.log (paises)
// console.log(paises[paises.length -1])


//indexOf -> retorna o índice do elemento no array
// const paises = ['Grécia','Portugal','Finlandia','Noruega','Amsterdã']

// console.log(paises.reverse())


//Faça uma função que recebe parâmetros do tipo string e imprime na tela
//essa string invertida, ou seja, de trás para frente
//dica: o método reverse só pode ser chamado por arrays.


// function StringInvertida (palavra:string){
//     const arrayPalavra = palavra.split('')
//     const resultado = arrayPalavra.reverse().join('')

//     console.log (resultado)
// }

// StringInvertida ('Cubos Academy')


//////////////////////////////////////////// Métodos de Arrays 2

//setTimeout -> executa algo em um tempo predefinido.

// const imprimirTitulo = () => {
//     console.log ('aula de arrays')
// }

// setTimeout(imprimirTitulo,5000)

// setTimeout(function (){
// console.log('imprimiu normal')
// }, 5000)

// setTimeout(() => {
//     console.log('usando a função do VScode')
// }, 6000);

//setInterval -> Ele fica executando de tempo em tempo 

// setInterval(() => {
//     console.log('testando de 3 em 3 segundos')
// }, 3 * 1000);

//clearInterval -> limpa o intervalo

//every -> testa se todos os elementos do array passam pelo teste implementado, and return true or false, precisa que todos os resultados sejam "iguais"

// const numeros = [23,5,27,25,12,2]

// const resultado = numeros.every((elemento) => {
// return elemento < 100
// })

// console.log (resultado)


//some -> testa se pelo menos um dos elementos atende a condição implementada e retorna verdadeiro ou falso, precisa de pelo menos um resultado verdadeiro.
// const numeros = [1,2,3]

// const resultadoNumeros = numeros.some((item) =>{
// return item % 2 === 0
// })

// console.log(resultadoNumeros)


//Crie uma função que percorra um array com nomes de arquivos.
// A função deve verificar se possui ao menos um aquivo com a extensão ".bat"
//caso exista, deverá exisbir a mensagem "virus detectado", caso contrario,
//deverá exibir a mensagem "nenhum vírus encontrado"

// const VeririficaVirus = (arquivos:string[]):void =>{
// const TemVirus = arquivos.some((arquivo) => arquivo.endsWith('.bat'))
// if(TemVirus){
//     console.log ('Vírus Detectado')
// } else {
//     console.log ('Nenhum Vírus Encontrado')
// }

// }

// VeririficaVirus(['documento.txt', 'foto.png'])
// VeririficaVirus(['Arquivo1.bat','Arquivo3.bat'])


//find -> Busca um elemento em um array e retorna o elemento, caso exista

// const pessoas = [
//     {nome: 'Yago', idade:29},
//     {nome: 'Sandra', idade: 49},
//     {nome: 'Marcos', idade:59}
// ]

// const pessoaEncontrada = pessoas.find((pessoa) => {
//     return pessoa.nome === 'Yago'
// })

// console.log(pessoaEncontrada)

//findIndex -> Busca um elemento de um array e retorna o indice do elemento, caso exista, ou -1 caso não encontre.

// const pessoas = [
//     {nome: 'Yago', idade:29},
//     {nome: 'Sandra', idade: 49},
//     {nome: 'Marcos', idade:59}
// ]

// const pessoaEncontrada = pessoas.findIndex((pessoa) => {
//     return pessoa.nome === 'Marcos'
// })

// console.log(pessoaEncontrada)


//filter -> filtra e retorno um novo array, com todos os elementos encontrados.

// const nomes = ['Yago', 'Kelvin', 'Lucas', 'Paulo Cesar','Marcos Fernando']

// const novoArrayNomes = nomes.filter((nome) =>{
//     return nome.length < 7
// })

// console.log(novoArrayNomes)

//De acordo com o array de professores abaixo, com suas respectivas stacks, faça o seguinte:
//a) filtrar todos os professores FullStack
//b) filtrar todos os professores FrontEnd

// type Tprofessores = {
//     nome: string, stack: string
// }

// const professores : Tprofessores[] = [
//     {nome:'Yago', stack: 'FullStack'},
//     {nome:'Marcos', stack: 'FrontEnd'},
//     {nome:'Sandra', stack: 'FrontEnd'},
//     {nome:'Thiago', stack: 'FullStack'},
//     {nome:'Beatriz', stack: 'FrontEnd'}
   
// ]

// const novoArrayProfessores = professores.filter((professores) => {
//     return professores.stack === 'FullStack'
// })
// console.log (novoArrayProfessores)

// const FrontEnd = professores.filter((professores) => {
//     return professores.stack === 'FrontEnd'
// })
// console.log (FrontEnd)

//map -> vai percorrer todos os elementos de um array e retornar um novo array com o formato implementado.


// const nome = [
//     {firstname: 'Yago', lastname:'Fernando', age:29}
// ]

// const novoNome = nome.map (function(elemento){
//     return {
//         nomeCompleto : `${elemento.firstname} ${elemento.lastname}`,
//         idade: elemento.age
//     }
// } )

// console.log(novoNome)


//sort -> ordena os elementos de um array, de acordo com o código unicode
// se a comparação retornar um valor menor que zero (negativo), o item 1 vem antes do item 2
// se a comparação retornar um valor maior que zero (positivo), o item 2 vem antes do item 1
// se a comparação retornar zero, nenhum item sofre alteração

// const numeros = [1,5,25,36,45]

// numeros.sort(function (item1:number, item2:number) {
// if (item1 < item2){
//     return -1
// } 
// if (item1>item2){
//     return +1
// }
// return 0
// })

// console.log(numeros)

// const numeros = [1,5,25,36,45] //ordenação de forma crescente

// numeros.sort((a,b)=>{
// return a-b
// })

// console.log(numeros)

// const numeros = [1,5,25,36,45] //ordenação de forma decrescente

// numeros.sort((a,b)=>{
// return b-a
// })

// console.log(numeros)

//dado o array de usuarios abaixo, faça a ordenação dos resultados de forma crescente
// segundo a idade de cada usuário. Após a ordenação crescente, faça a ordenação decrescente

// 



//localeCompare -> métdo de comparação de Strings

// const letra1 = 'a'
// const letra2 = 'b'

// console.log(letra1.localeCompare(letra2))


// const nomes = ['Yago','Marcos','Beatriz','Thiago','Sandra']

// nomes.sort((item1,item2)=> {
//     return item1.localeCompare(item2)
// })

// console.log(nomes)


//reduce -> executa uma função de callback, passada como argumento, para cada elemento do array
//que resulta em apenas um valor de retorno.
//A função passada como argumento para o método reduce tem 4 parâmetros.
//- acumulador
//- valorAtual
//- index
// - array

const numeros = [25,73,52,524,35,69]

const resultado = numeros.reduce((acumulador,valorAtual,index,array) => {
    return acumulador + valorAtual
})

