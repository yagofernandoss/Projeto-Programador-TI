//construir  um objeto que represente uma pessoa com nome, idade e profissão, e exiba uma frase com as informações;

const usuario = {
    nome:'Yago Fernando',
    idade: 29,
    profissão: 'Full Stack Developer',
    habilidades:['liderança','proatividade','resistência a frustração','desejo de aprender','gestão de tráfego','JavaScript','TypeScript','Node.JS','GitBash','React'],
    desejo: 'Tornar-se um excepcional programador e gerenciar uma ideia própria, uma edhealth, fazendo com que ela seja uma das maiores empresas da União Europeia.'
}

console.log(`Meu nome é ${usuario.nome},tenho ${usuario.idade} anos de idade, serei o melhor ${usuario.profissão}, entre minhas habilidades estão: ${usuario.habilidades} e atualmente, o meu maior desejo é ${usuario.desejo}`)

