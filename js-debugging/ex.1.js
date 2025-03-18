function squareDigits(num) {
  return Number(
    String(num)
      .split("")
      .map((digit) => digit ** 2)
      .join("")
  );
}
console.log(squareDigits(9119)); // 811181
console.log(squareDigits(765)); // 493625

/*Convertemos o número em uma string para podermos manipular cada dígito individualmente.
Usamos .split('') para transformar a string em um array de caracteres.
Utilizamos .map(digit => digit ** 2) para elevar cada dígito ao quadrado.
.join('') para unir os valores em uma string novamente.
Number(...) para converter de volta para um número inteiro.*/
