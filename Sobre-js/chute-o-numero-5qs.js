const readline = require("readline");

// Criando a interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para gerar número aleatório
function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 10) + 1;
}

// Gera um número aleatório uma única vez
const numeroGerado = gerarNumeroAleatorio();
console.log("O número foi gerado! Agora é sua vez de tentar.");

function pedirChute() {
  rl.question("Escolha um número de 1 a 10: ", (usuario) => {
    usuario = parseInt(usuario);

    // Verifica se a entrada é válida
    if (isNaN(usuario) || usuario < 1 || usuario > 10) {
      console.log("Por favor, insira um número válido de 1 a 10.");
      pedirChute(); // Chama a função novamente para tentar de novo
    } else {
      compararChute(usuario);
    }
  });
}

// Função para comparar o chute do usuário com o valor gerado
function compararChute(usuario) {
  if (usuario > numeroGerado) {
    console.log("Chutou alto! Tente novamente.");
    pedirChute(); // Volta ao passo 3
  } else if (usuario < numeroGerado) {
    console.log("Chutou baixo! Tente novamente.");
    pedirChute(); // Volta ao passo 3
  } else {
    console.log("🎉 Acertou! Você acertou o número!");
    rl.close(); // Fecha a interface quando acertar
  }
}

// Inicia o jogo pedindo o chute
pedirChute();
