// vamos usar funcao, parametro, lops tradicionais. toda linguagem tem. pra aprender em outra linguagem vc teria que estudar outra sintaxe.

const getCountWords = (str) => {
  //se eu receber um espaco vazio ou uma string vazia ent str sera avaliada como falsa
  // seguir a sequencia do if e a logica da programacao pois se ja encontrar o erro no inicio nao é checado os demais if.
  if (!str || typeof str !== "string" || !str.trim()) return null;
  //strArr vai armazena um array de palavras
  const strArr = str.trim().split(" ");

  //falar o 1 valor que e atribuido na interacao
  //obj tem que comecar com obj vazio
  //strArr é nossa array
  //fazendo funcao de callback
  //word e o primeiro valor da nossa array
  return strArr.reduce((obj, word) => {
    const firstLetter = word[0];
    //soma 1 e reatribui na mesma variavel.
    if (obj[firstLetter]) {
      obj[firstLetter]++;
    } else {
      obj[firstLetter] = 1;
    }
    return obj;
  }, {});

  //p cada elemento dentro da array temos uma variavel chamada word
};

console.log(getCountWords("voce gostou. entao curte. se inscreva no canal"));
