//crie um array com 6 nomes e exiba todos em for...of

// const nomes = ['Yago','Marcos','Beatriz','Maria','Sandra','Thiago']

// for(let nome of nomes){
//     console.log(nome)
// }

const nomes = ['Yago','Marcos','Beatriz','Maria','Sandra','Thiago']

for(let [indice, nome] of nomes.entries()){
    console.log(`${indice} : ${nome}`)
}