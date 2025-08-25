//Crie um programa que receba a idade de uma pessoa e diga se ela é: criança (<12), 
// adolescente (12–17), adulto (18–59) ou idoso (≥60).

const idade = 60

if(idade<12){
    console.log('criança')
}else if (idade<=17){
    console.log('adolescente')
}else if (idade<=59){
    console.log('adulto')
}else{
    console.log('idoso')
}
