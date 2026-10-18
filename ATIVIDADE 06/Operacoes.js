// 1. Recebe os dois números como decimais
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

// 2. Realiza os cálculos
let soma = num1 + num2;
let subtracao = num1 - num2;
let produto = num1 * num2;
let divisao = num1 / num2;
let resto = num1 % num2; // Operador % pega o resto da divisão

// 3. Monta a mensagem final com todas as operações
let resultado = "Resultados:\n\n" +
                "Soma: " + soma + "\n" +
                "Subtração (1º pelo 2º): " + subtracao + "\n" +
                "Produto: " + produto + "\n" +
                "Divisão (1º pelo 2º): " + divisao + "\n" +
                "Resto da divisão: " + resto;

// 4. Exibe os resultados na tela
alert(resultado);
