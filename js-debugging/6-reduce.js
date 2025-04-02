//getSmallestWord retorna o valor do reduce
const getSmallestWord = (str) => {
  if (!str || typeof str !== "string") return null;

  const strArr = str.trim().split(" ");
  //2 parametros obrigatorios o acumulador e o valor atual. na arron function
  // ["qual", "é", "a", "menor", "palavra" ]
  //se passar o menor sera o return atual, se nao sera return menor;
  return strArr.reduce((menor, atual) => {
    if (atual.length < menor.length) {
      return atual;
    }
    return menor;
  });
};

console.log(getSmallestWord("teste"));
console.log(getSmallestWord("qual é a menor palavra?"));
console.log(getSmallestWord("123 12 1234"));
console.log(getSmallestWord("12 123 1234"));
console.log(getSmallestWord("12 123 1234 1"));

//reduce retorna um unico valor pode ser numero ou string.

//let smallestWord = strArr[0];
// //sempre comeca com indice 0 mas o nosso e 1 pq a palavra ja esta guardada la.
// //array comeca no idice zero, mas nossa palavra esta em 1 que e a segunda palavra
// //strArr[i] pega a primeira palavra
// //strArr.length olha a qtd de letras da palavra
// for (let i = 1; i < strArr.length; i++) {
//   if (strArr[i].length < smallestWord.length) {
//     smallestWord = strArr[i];
//   }
// }
// return smallestWord;
