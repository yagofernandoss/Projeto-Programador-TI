//Crie um objeto representando um produto (nome, preço, quantidade) e calcule o valor total em estoque.

type produto  ={
    nome: string
    preço: number
    quantidade: number
}


const produto =  [{
    nome: 'Pão de Sal',
    preço: 100,
    quantidade: 8,
},
{ 
    nome:'cuscuz',
    preço: 50,
    quantidade: 7

},{
    nome:'coca-cola',
    preço: 900,
    quantidade: 3,

}
]


for(let valortotal of produto){
    const soma = valortotal.preço * valortotal.quantidade
    console.log (`${valortotal.nome} : R$ ${soma / 100}`)
    
}

