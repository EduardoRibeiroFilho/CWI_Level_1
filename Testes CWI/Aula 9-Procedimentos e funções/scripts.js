//Exercício 1    Uma função que imprima qualquer coisa.
//function imprimir(){
//    console.log("Eduardo");
//}
//imprimir();

//Exercicio 1 aula 5
// Verificar se um nome é igual a outro
function imprimir(i){
    console.log(i)
}
function compararnomes(a,b) {
    return a==b
}
var resultado = compararnomes('Eduardo','Eduardo')
imprimir(resultado);

//Exercicio 2 aula 5
//Verificar se é maior de idade
function imprimir2(i){
    console.log(i)
}
function maiordeidade(idade) {
    return idade>=18
}
var resultado2 = maiordeidade(18)
imprimir2(resultado2);

//Exercicio 3 aula 5
//Calcular juros de boleto
function imprimir3(i){
    console.log(i)
}
function valorComjuros(valor) {
    return valor*1.1
}
var resultado3 = valorComjuros(600)
imprimir3(resultado3);

//Exercicio 4 aula 5
//Calcular juros de boleto
function imprimir4(i){
    console.log(i)
}
itens = [100,7,8,12,7]
function media(itens) {
soma=0
for(cont=0; cont < itens.length; cont++){
    soma = soma + itens[cont] }
    return soma / itens.length 
}
var resultado4 = media(itens)
imprimir4(resultado4);

//Exercicio 5 aula 5
//Calcular juros de boleto

function lucro(recLiquida, custo) {
    lucroBruto = (recLiquida - custo)
    return (lucroBruto / recLiquida) * 100 
}

resultado5 = lucro(100000,33000)
console.log(resultado5);