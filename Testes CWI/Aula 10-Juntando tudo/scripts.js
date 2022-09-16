//------------------VARIAVEIS
let colaboradores    = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison']
let idades           = [      69,          66,           58,      61,         60,          64,         59,         55]
let temposDeTrabalho = [      31,          29,           30,      26,         25,          24,         26,         29]
var nome             = ""

//------------------

//------------------FUNÇÕES
function verificarAposentadoria(nome) {

    colaborador = false
    idade = 0
    tempoTrabalho = 0

    // buscando um colaborador pelo nome
    for (posicao = 0; posicao < colaboradores.length; posicao++) {

        if (nome == colaboradores[posicao]) {
            colaborador = true
            idade = idades[posicao]
            tempoTrabalho = temposDeTrabalho[posicao]
        }
    }

    if (colaborador) {
        
        porIdade = (idade >= 65)
        porTempoDeTrabalho = (tempoTrabalho >= 30)
        porIdadeComTempoDeTrabalho = (idade >= 60 && tempoTrabalho >= 25)

        // não importa qual regra seja atendida
        // se qualquer uma for, o colaborador pode se aposentar
        if (porIdade || porTempoDeTrabalho || porIdadeComTempoDeTrabalho) {
            console.log("Parabéns, já pode sair de férias eternas :)")
        } else {
            console.log("Infelizmente, ainda falta um tempo :(")
        }
    
    } else {
        console.log("Colaborador inválido :|")
    }
}
//------------------

//------------------EXECUÇÃO
console.log(verificarAposentadoria('Rosiméri'))    // true (regra 3)
console.log(verificarAposentadoria('Agripino'))    // false (falta 1 ano de idade para regra 3)
console.log(verificarAposentadoria('Rhoger'))      // true (todas)
console.log(verificarAposentadoria('Hudnélson'))   // false (colaborador inexistente)
console.log(verificarAposentadoria('Gleysberto'))  // true (regra 2)
console.log(verificarAposentadoria('Regislane'))   // false (falta 1 ano de idade para regra 1 e 1 de trabalho para regra 3)
console.log(verificarAposentadoria('Cléverson'))   // true (regras 1 e 3)
console.log(verificarAposentadoria('Nádio'))       // true (regra 3)
console.log(verificarAposentadoria('Wellison'))    // false (falta 1 ano de trabalho para regra 2)
console.log(verificarAposentadoria('Florisberto')) // false (colaborador inexistente)
//------------------