//Crie um programa que me diga 
//quanto cobrar para vender um notebook 
//usado: o seu custo foi R$3000, 
//por quanto devo vendê-lo descontando 25%?

//25/100 = 0.25
//quem é 25% de 3000? 
//valor total e diminuir o desconto que é 750
//resultado 2250

let valorDoProduto
let percentualDoDesconto 

valorDoProduto = 3000
percentualDoDesconto = (25/100)

let descontoSobreProduto = valorDoProduto * percentualDoDesconto

const valorDeVenda = valorDoProduto - descontoSobreProduto

console.log('Este será o valor ' + 'R$'+valorDeVenda)//concatenar

//console.log(`Meu valor ${valorDeVenda}`)//interpolar

//ou 

const custo = 3000
const valorDesconto = custo * (25/100)
const valorVenda = custo - valorDesconto
//console.log(valorVenda) //2250