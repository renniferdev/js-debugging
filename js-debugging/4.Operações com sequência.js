var calc = function (a) {
  return a.reduce((a, b, i) => {
    b = b > 0 ? b ** 2 : b;
    b = (i + 1) % 3 == 0 ? b * 3 : b;
    b = (i + 1) % 5 == 0 ? -b : b;
    return a + b;
  }, 0);
};

// Teste
console.log(calc([-2, -1, 0, 1, 2])); // Deve imprimir: -6

/*Passos

Eleve ao quadrado os números maiores que zero.
Multiplique por 3 cada terceiro número.
Multiplique por -1 cada quinto número.
Retorna a soma da sequência.
Exemplo
{ -2, -1, 0, 1, 2 } de retornos-6

1. { -2, -1, 0, 1 * 1, 2 * 2 }
2. { -2, -1, 0 * 3, 1, 4 }
3. { -2, -1, 0, 1, -1 * 4 }
4. -6
PS: A sequência consiste apenas de inteiros. E tente não usar instruções "for", "while" ou "loop".*/
