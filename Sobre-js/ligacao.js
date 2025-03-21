//criar um algoritmo para ligar para alguem em js tem que ter um telefone de celualr
//usar um celular para discar o numero do meu amigo
//caso meu amigo nao atenda devo deixar uma mensagem dizendo : "me ligue de volta"
//Consegui falar com meu amigo
function ligarParaAmigo(numeroDoAmigo) {
  if (!numeroDoAmigo) {
    console.log("Número inválido. Informe um número de telefone.");
    return;
  }

  console.log(`Discando para ${numeroDoAmigo}...`);

  // Simulando se o amigo atendeu ou não (50% de chance)
  const atendeu = Math.random() > 0.5;

  if (atendeu) {
    console.log(`Consegui falar com meu amigo no número ${numeroDoAmigo}!`);
  } else {
    console.log(
      `Meu amigo não atendeu. Deixando mensagem para ${numeroDoAmigo}: 'Me ligue de volta'.`
    );
  }
}

// Exemplo de uso com o número do amigo
const numeroDoAmigo = "(11) 98765-4321";
ligarParaAmigo(numeroDoAmigo);
