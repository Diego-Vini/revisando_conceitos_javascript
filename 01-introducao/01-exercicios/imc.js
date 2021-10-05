const readline = require('readline-sync')



const peso = readline.questionFloat('Digite seu peso: ');
const altura = readline.questionFloat('Digite sua altura: ');

const imc = (peso / (altura * altura)).toFixed(2) ;

console.log(imc)
imc <= 18.5 ? console.log('Abaixo do peso') :
imc <= 24.9 ? console.log('Peso Normal') :
imc <=29.9 ? console.log('Acima do peso') :
imc <= 34.9 ? console.log('Obesidade grau I') :
imc <= 39.9 ? console.log('Obesidade grau II') :
console.log('Obesidade grau III e IV');