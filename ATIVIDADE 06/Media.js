// 1. Lê o nome do aluno
let nome = prompt("Digite o nome do aluno:");

// 2. Lê as quatro notas (convertendo a string digitada para número decimal)
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));
let nota4 = parseFloat(prompt("Digite a quarta nota:"));

// 3. Calcula a média aritmética
let media = (nota1 + nota2 + nota3 + nota4) / 4;

// 4. Mostra o resultado fixando 2 casas decimais usando .toFixed(2)
alert("Aluno: " + nome + "\nMédia Final: " + media.toFixed(2));
