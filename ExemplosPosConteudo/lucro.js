//Crie um programa que me diga como 
//lucrar nesta situação: quero vender uma 
//bicicleta que 60% do seu valor é R$300, 
//por quanto devo vendê-la para lucrar 25%?

//60% -> 300
//100% ->  x

//60x = 100*300
//x = (100*300)/60

let descobreCemPorCento = (100*300)/60 //500
let descobreVinteECincoPorCento = descobreCemPorCento * (25/100) //125

let vendaComLucro = descobreCemPorCento + descobreVinteECincoPorCento
console.log(vendaComLucro) //625



