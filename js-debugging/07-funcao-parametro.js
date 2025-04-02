// vamos usar funcao, parametro, lops tradicionais. toda linguagem tem. pra aprender em outra linguagem vc teria que estudar outra sintaxe.

const getCountWords = (str) => {
  //se eu receber um espaco vazio ou uma string vazia ent str sera avaliada como falsa
  // seguir a sequencia do if e a logica da programacao pois se ja encontrar o erro no inicio nao é checado os demais if.
  if (!str || typeof str !== "string" || !str.trim()) return null;
  //if (!str.trim()) return null;
  //strArr vai armazena um array de palavras
  const strArr = str.trim().split(" ");
  //objeto vazio
  const obj = {};

  //p cada elemento dentro da array temos uma variavel chamada word
  for (let word of strArr) {
    const firstLetter = word[0];
    //soma 1 e reatribui na mesma variavel.
    if (obj[firstLetter]) {
      obj[firstLetter]++;
    } else {
      obj[firstLetter] = 1;
    }
  }

  return obj;
};

console.log(getCountWords("rennifer amilton teixeira"));

//📌 Qual método foi usado?
// Função com parâmetro

// A função getCountWords(str) recebe uma string e retorna um objeto com a contagem de palavras por inicial.
