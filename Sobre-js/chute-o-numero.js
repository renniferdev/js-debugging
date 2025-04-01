const readline = require("readline");

//Criando a interface:
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para gerar número aleatório
function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 10) + 1;
}

// Pede para o usuário escolher um número de 1 a 10
rl.question("Escolha um número de 1 a 10: ", (usuario) => {
  const numeroGerado = gerarNumeroAleatorio();

  console.log(`Você escolheu: ${usuario}`);
  console.log(`Número gerado: ${numeroGerado}`);

  if (parseInt(usuario) === numeroGerado) {
    console.log("Parabéns! Você acertou o número!");
  } else {
    console.log("Não foi dessa vez! Tente novamente.");
  }

  rl.close(); // Fechar a interface readline
});
