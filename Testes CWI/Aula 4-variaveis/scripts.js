let nomeCompleto = "Eduardo Ribeiro Filho"
let idade = 35
let apelido = "Dom"
let dataNascimento = "14/10/1986"
let localNascimento = "Campo Bom"
let altura = "1.80"
let trab = false

let apresentacao = "Meu nome é " + nomeCompleto + " tenho " + idade + " anos de idade, e meu apelido é " + apelido + ". Nasci na data de " + dataNascimento + " em " + localNascimento + ", tenho " + altura + " e atualmente estou " + (trab ? " empregado " : " desempregado ") + "! Muito Obrigado, até mais!";
console.log(apresentacao)