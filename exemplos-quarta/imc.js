//Escreva um programa que recebe uma 
//altura em metros 
//e o peso em kg e calcule o IMC.

//IMC = peso / (altura x altura).

// const pesoKg = 80
// const alturaM = 1.7
// const valorImc = (pesoKg / (alturaM * alturaM)).toFixed(2)
// console.log(`O resultado é ${valorImc}`)

//ou

const pesoKg = 80
const alturaM = 1.7
const alturaAoQuadrado = Math.pow(alturaM, 2)
const valorImc = (pesoKg / alturaAoQuadrado)
console.log(`O resultado é ${valorImc.toFixed(2)}`)

