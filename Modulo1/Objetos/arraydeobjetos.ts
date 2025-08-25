
//Criar um array de objetos representando alunos (nome e nota). Mostra que alunos com a nota <7 ficam em recuperação
//alunos com nota < 4 são reprovados
//alunos com nota > 7 são aprovados
//Imprima o resultado

type alunos = {
    nome:string
    nota:number
}

const alunos = [
    {
        nome: 'Ricardo',
        nota: 7
    },
    {   nome: 'Lucas',
        nota:5,

    },
    {
        nome: 'Thiago',
        nota: 4,
    },
    {
        nome: 'Paulo Cesar',
        nota: 10
    }
]

    for (let aluno of alunos){
        if (aluno.nota >= 7){
console.log (`${aluno.nome} aprovado`)
        }else if (aluno.nota <=7 && aluno.nota >=5){
            console.log (`${aluno.nome} em recuperação`)
        }else{
            console.log (`${aluno.nome} reprovado`)
        }
    }
