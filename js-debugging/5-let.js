const getSmallestWord = (str) => {
  //if seguranca caso nao passe nada.
  if (!str || typeof str !== "string") return null;
  //split separa a string str por espaco
  //str remove espacos no inicio e no fim
  const strArr = str.trim().split(" ");
  //let pq quero uma variavel que pode ter o valor alterado
  //assumindo que smallestWord é a primeira palavra do array com = strArr[0]
  let smallestWord = strArr[0];
  //sempre comeca com indice 0 mas o nosso e 1 pq a palavra ja esta guardada la.
  //array comeca no idice zero, mas nossa palavra esta em 1 que e a segunda palavra
  //strArr[i] pega a primeira palavra
  //strArr.length olha a qtd de letras da palavra
  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i].length < smallestWord.length) {
      smallestWord = strArr[i];
    }
  }
  return smallestWord;
};

console.log(getSmallestWord("teste"));
