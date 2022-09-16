//Exercicio 1
let nomeDoFulano = "Eduardo"
let nomeDoBeltrano = "Eduardo"
if (nomeDoFulano == nomeDoBeltrano) mesmoNome = true
else if(nomeDoFulano != nomeDoBeltrano) mesmoNome = false
let resp1 = "1) O nome do personagem 1 e do personagem 2 são iguais? " + mesmoNome
console.log(resp1);
// Exercicio 2
let idade = 16
let maiorDeIdade = (idade >= 18)
let resp2 = "2) É maior de idade? " + maiorDeIdade
console.log(resp2);
// Exercício 3
let valor = 600
let valorComJuros = (valor * 1.1)
let resp3 = "3) O valor do boleto é de R$"+ valor + ",00 ao pagar em atraso o valor ficará em R$" + valorComJuros + ",00"
console.log(resp3);
// Exercício 4
let item1 = 3
let item2 = 6
let item3 = 9
let item4 = 12
let item5 = 15
let media = (item1 + item2 + item3 + item4 + item5)/5
let resp4 = "4) A média entre os números 3, 6, 9, 12 e 15 é " + media
console.log(resp4);
// Exercício 5
let recLiquida = 50000
let custo = 31000
let lucroBruto = (recLiquida - custo)
let margemBruta = (lucroBruto / recLiquida)
let percentual = (margemBruta * 100)
let resp5 = "5) A receita líquida da empresa foi de R$" + recLiquida + ",00 e o custo de produção foi de R$" + custo + ",00, portanto o lucro bruto foi de R$" + lucroBruto + ",00 e a margem bruta de " + margemBruta + " fechando o balanço em " + percentual + " % de lucro." 
console.log(resp5);
// Exercício 6
let saldo = 1000
saldo = saldo - 99.9
saldo = saldo + 2500
saldo = saldo - 0.10
saldo = saldo * 0.75
saldo = saldo / 2
let resp6 = "O seu saldo atual é de R$" + saldo
console.log(resp6);