"use strict";

// Substituir por valores diretamente no código para testar no terminal
const inputString =
  "5\n1000000001 1000000002 1000000003 1000000004 1000000005\n";

let currentLine = 0;

function readLine() {
  return inputString.split("\n")[currentLine++];
}

function aVeryBigSum(ar) {
  let sum = 0;

  // Somar todos os elementos do array
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }

  return sum; // Retornar a soma final
}

function main() {
  // Lê o número de elementos do array (não é realmente necessário para a soma)
  const arCount = parseInt(readLine().trim(), 10);

  // Lê os elementos do array
  const ar = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  // Calcula a soma usando a função aVeryBigSum
  const result = aVeryBigSum(ar);

  // Imprime o resultado no console
  console.log(result);
}

// Chama a função main diretamente para rodar a execução
main();
