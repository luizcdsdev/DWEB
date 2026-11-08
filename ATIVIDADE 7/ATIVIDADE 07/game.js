        function jogar(escolhaUsuario) {
            // Mostra a escolha do usuário na tela
            document.getElementById('escolha-usuario').innerText = escolhaUsuario.toUpperCase();

            // FASE B: O computador faz uma escolha
            let numeroAleatorio = Math.floor(Math.random() * 3);
            let escolhaComputador;

            if (numeroAleatorio === 0) {
                escolhaComputador = "pedra";
            } else if (numeroAleatorio === 1) {
                escolhaComputador = "papel";
            } else {
                escolhaComputador = "tesoura";
            }

            // Mostra a escolha do computador na tela
            document.getElementById('escolha-computador').innerText = escolhaComputador.toUpperCase();

            // Elemento de texto onde o resultado será exibido
            let campoResultado = document.getElementById('resultado-final');
            
            // FASE C: Determinar o vencedor e aplicar as classes CSS de cores
            if (escolhaUsuario === escolhaComputador) {
                campoResultado.innerText = "Empate! 🤝";
                campoResultado.className = "resultado empate";
            } 
            else if (
                (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
                (escolhaUsuario === "tesoura" && escolhaComputador === "papel") ||
                (escolhaUsuario === "papel" && escolhaComputador === "pedra")
            ) {
                campoResultado.innerText = "Você Ganhou! 🎉";
                campoResultado.className = "resultado ganhou";
            } 
            else {
                campoResultado.innerText = "O Computador Ganhou! 🤖";
                campoResultado.className = "resultado perdeu";
            }
        }