// Exercicio aula 6 - IMC
peso = 100
altura = 1.71
imc = peso / (altura * altura)
classi = ""
grau = ""

if (imc <= 18.50){
classi = "DESNUTRIDO" 
grau = 0 }
    else if (imc  <= 24.99){
    classi = "NORMAL"
    grau = 0 }
        else if (imc <= 29.99){
            classi = "SOBREPESO"
            grau = 1 }
                else if (imc <= 39.99) {
                classi = "OBESIDADE"
                grau = 2 }
                    else if (imc > 39.99) {
                        classi = "OBESIDADE GRAVE"
                        grau = 3 }

console.log("Seu IMC é " + imc + "e seu diagnóstico é " + classi + " Grau " + grau);

switch (classi){
  case "SOBREPESO":
  console.log( "Cuidado, você está acima do peso." )
break
    case "OBESIDADE":
    console.log( "Cuidado, você está MUITO acima do peso." )
break
    case "OBESIDADE GRAVE":
    console.log( "Cuidado, você está Correndo riscos. Vá a um médico." )
break}
;