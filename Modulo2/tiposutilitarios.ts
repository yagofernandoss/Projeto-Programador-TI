//Tipo Utilitário <Type> -> resulta em um novo tipo manipulado
//Partial<Type> -> constroi outro tipo e transforma todas as informações do outro tipo em opcionais

// type pessoa = {
// nome:string
// email:string
// idade:number
// }
// type pessoaOpcional = Partial <pessoa>

// const usuario:pessoa[] = []

// function atualizarUsuario (pessoa:pessoaOpcional){

// }

// usuario[usuario.length] = {
//     nome: 'Yago Fernando',
//     email: 'yagofernandoss@gmail.com',
//     idade: 29
// }

//Required <Type> --> ao contrario do Partial que torna tudo opcional, o Required torna tudo obrigatório.

// type pessoa = {
// nome:string
// email:string
// idade:number
// }
// type pessoaOpcional = Required <pessoa>

// const usuario:pessoa[] = []

// function atualizarUsuario (pessoa:pessoaOpcional){

// }

// usuario[usuario.length] = {
//     nome: 'Yago Fernando',
//     email: 'yagofernandoss@gmail.com',
//     idade: 29
// }


//Readonly <tipo> -> serve para que uma função não possa ser manipulada, apenas lida.
// type pessoa = {
// nome:string
// email:string
// idade:number
// }

// type pessoafixa = Readonly<pessoa>


// const usuario : pessoafixa = { 
//     nome: 'Yago Fernando',
//     email: 'yagofernandoss@gmail.com',
//     idade: 29
// }

// usuario.nome = "Ricardo"


// Pick<tipo>, propriedades>
// type casa = {
//     local: string
//     valor: number
//     quantidadeQuartos: number
// }

// type novacasa = Pick<casa,'local'| 'quantidadeQuartos'| 'valor'>


//Omit<Tipo, propriedade> -> remove as propriedades em um novo tipo


//Record <chave(s),tipo> -> Ele vai criar um novo tipo, como se fosse objeto
// type TUsuario = {
//     nome: string
//     email: string
//     senha: number
// }

// type Tdupla = Record<'Jogador1' | 'Jogador2', TUsuario>

// const usuarios :Tdupla ={
//     Jogador1: {
//         nome: 'Yago Fernando',
//         email:'yagofernandoss19@gmail.com',
//         senha: 123456
//     },
//     Jogador2: {
//         nome: 'Thiago',
//         email: 'thiagofernandoss19@gmail.com',
//         senha: 12345
//     }
// }


// //Exclude<uniãodetipos, itens excluídos> --> Vai excluir um item

// type transacao = 'Credito' | 'Debito' | 'Pix' | 'Boleto'

// type banco1 = Exclude<transacao, 'Debito'>
// type banco2 = Exclude<transacao, 'Pix'>

type TransacaoCredito = 'Crédito' //Tipos literais
type TransacaoDebito = 'Débito' // Tipos literais 


type Transacao = TransacaoCredito | TransacaoDebito // junção de tipos


//Uppercase<TipoString> -> Transforma todas as strings em letras maiúsculas
//Lowercase<TipoString> -> Transforma todas as strings em letras minusculas 
//Capitalize<TipoString> -> Transforma somente a primeira letra do tipo literal em maiúsculo.
//Exclude<uniãodetipos, itens excluídos> --> Vai excluir um item
//Record <chave(s),tipo> -> Ele vai criar um novo tipo, como se fosse objeto
//Omit<Tipo, propriedade> -> remove as propriedades em um novo tipo
// Pick<tipo>, propriedades> -> serve para criar um novo tipo pegando apenas algumas propriedades de um tipo já existente.
//Readonly <tipo> -> serve para que uma função não possa ser manipulada, apenas lida.
//Required <Type> --> ao contrario do Partial que torna tudo opcional, o Required torna tudo obrigatório.
//Tipo Utilitário <Type> -> resulta em um novo tipo manipulado
//Partial<Type> -> constroi outro tipo e transforma todas as informações do outro tipo em opcionais