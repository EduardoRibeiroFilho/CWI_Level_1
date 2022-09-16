//// Exemplo
//alunos = ["Eduardo", "Otávio", "Felipe", "Roberto"]
//notas = [ [8.5,7.8], [7.7,6.0], [8.0,8.0], [5.8,9.5] ]
//
//for(num=0; num < alunos.length; num++) {
//    alunoSelecionado = num
//
//nomeAluno = alunos[alunoSelecionado]
//notaAluno = notas[alunoSelecionado]
//
//nota1 = notaAluno[0]
//nota2 = notaAluno[1]
//media = (nota1 + nota2)/2
//
//console.log("O aluno " + nomeAluno + " tirou as notas " + nota1 + " e " + nota2 + ", ficando com a média " + media )
//console.log("---------------------------------------------------")
//};
//
// Exercício 1
// A
//console.log("Imprimindo uma lista de times com o FOR")
//times = ["Grêmio", "Inter", "Juventude", "15 de Novembro", "Nóia"]
//
//for(num=0; num < times.length; num++){
//console.log(times[num])
//console.log("")
//}
//;
//// B
//console.log("Imprimindo uma lista de times com o WHILE")
//times = ["Grêmio", "Inter", "Juventude", "15 de Novembro", "Nóia"]
//num = 0
//while(num < times.length){
//console.log(times[num])
//num++
//console.log("")
//}
//;
// C
//console.log("Imprimindo uma lista de times com o DO...WHILE")
//times = ["Grêmio", "Inter", "Juventude", "15 de Novembro", "Nóia"]
//num = 0
//do{
//console.log(times[num])
//num++
//}
//while(num <= times.length)
//console.log("-----------------------------------------")
//;
//// Exercicio 2
let valores = [1,7,12,15,18,25,42,12]
soma = 0
media = 0
for(contador=0; contador < valores.length; contador++){
console.log("Os números " + valores[contador])
soma = soma + valores[contador]}
media = (soma / valores.length)
console.log("Tem média " + media)
;
//// Exercício 3
nome = "Virgem Maria"
resultado = "Diferentão ein :D"
nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]

for(cont=0; cont < nomesComuns.length; cont++)
if (nome == nomesComuns[cont]) {
    resultado = "É nome comum :P"}

console.log(resultado)
;

