//matrizes

alunos = ["Eduardo", "Otávio", "Felipe", "Roberto"]
notas = [ [8.5,7.8], [7.7,6.0], [8.0,8.0], [5.8,9.5] ]

alunoSelecionado = 0

nomeAluno = alunos[alunoSelecionado]
notaAluno = notas[alunoSelecionado]

nota1 = notaAluno[0]
nota2 = notaAluno[1]
media = (nota1 + nota2)/2

console.log("O aluno " + nomeAluno + " tirou as notas " + nota1 + " e " + nota2 + ", ficando com a média " + media );