
    const listaPesquisas = [];
    const LIMITE_PESSOAS = 45;

    const form = document.getElementById('formPesquisa');
    const contadorText = document.getElementById('contador');
    const painelResultados = document.getElementById('painelResultados');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      if (listaPesquisas.length >= LIMITE_PESSOAS) {
        alert('A pesquisa já atingiu o limite máximo de 45 pessoas!');
        return;
      }

      const idade = parseInt(document.getElementById('idade').value, 10);
      const sexo = document.getElementById('sexo').value;
      const opiniao = parseInt(document.getElementById('opiniao').value, 10);

      listaPesquisas.push({ idade, sexo, opiniao });

      contadorText.textContent = `Respostas Coletadas: ${listaPesquisas.length} / ${LIMITE_PESSOAS}`;
      form.reset();

      calcularResultados();

      if (listaPesquisas.length === LIMITE_PESSOAS) {
        const btn = document.getElementById('btnEnviar');
        btn.disabled = true;
        btn.textContent = 'Pesquisa Encerrada';
      }
    });

    function calcularResultados() {
      const total = listaPesquisas.length;
      if (total === 0) return;

      let somaIdades = 0;
      let idadeMaisVelha = listaPesquisas[0].idade;
      let idadeMaisNova = listaPesquisas[0].idade;
      let qtdPessimo = 0;
      let qtdOtimoBom = 0;
      let mulheres = 0;
      let homens = 0;
      let outros = 0;

      listaPesquisas.forEach((pessoa) => {
        somaIdades += pessoa.idade;

        if (pessoa.idade > idadeMaisVelha) {
          idadeMaisVelha = pessoa.idade;
        }
        if (pessoa.idade < idadeMaisNova) {
          idadeMaisNova = pessoa.idade;
        }

        if (pessoa.opiniao === 1) {
          qtdPessimo++;
        }
        if (pessoa.opiniao === 4 || pessoa.opiniao === 3) {
          qtdOtimoBom++;
        }

        if (pessoa.sexo === 'feminino') {
          mulheres++;
        } else if (pessoa.sexo === 'masculino') {
          homens++;
        } else {
          outros++;
        }
      });

      const mediaIdade = (somaIdades / total).toFixed(1);
      const porcentagemOtimoBom = ((qtdOtimoBom / total) * 100).toFixed(1);

      document.getElementById('resMedia').textContent = `${mediaIdade} anos`;
      document.getElementById('resMaisVelha').textContent = `${idadeMaisVelha} anos`;
      document.getElementById('resMaisNova').textContent = `${idadeMaisNova} anos`;
      document.getElementById('resPessimo').textContent = qtdPessimo;
      document.getElementById('resPorcentagem').textContent = `${porcentagemOtimoBom}%`;
      document.getElementById('resMulheres').textContent = mulheres;
      document.getElementById('resHomens').textContent = homens;
      document.getElementById('resOutros').textContent = outros;

      painelResultados.classList.remove('hidden');
    }