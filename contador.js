// guardar três notas do aluno

var nota1 = 4;
var nota2 = 3;
var nota3 = 1;

// calcular a média

media = (nota1 + nota2 + nota3) / 3;

// se média maior que 7, aprovado
if (media >= 7) {
    console.log("Nota 1: " + nota1);
    console.log("Nota 2: " + nota2);
    console.log("Nota 3: " + nota3);
    console.log("🎓 Média: " + media);
    console.log("✅ APROVADO!")
} else { // se média menos que 7, reprovado                            
    console.log("Nota 1: " + nota1);
    console.log("Nota 2: " + nota2);
    console.log("Nota 3: " + nota3);
    console.log("🎓 Média: " + media);
    console.log("❌ REPROVADO!")
}