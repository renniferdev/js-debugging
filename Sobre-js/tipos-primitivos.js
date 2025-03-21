// Primitivos
let nome = "Victor";
let sobrenome = "Lima";
let numero = 12;

let nome2 = nome;
let sobrenome2 = sobrenome;
let numero2 = numero;

nome2 = "Paulo";
console.log(nome);
console.log(nome2);

// Não Primitivos
let pessoa = { nome: "Victor", sobrenome: "Lima" };
let pessoa2 = pessoa;
let pessoa3 = pessoa2;

pessoa2.nome = "Paulo";
pessoa2.sobrenome = "Costa";

console.log(pessoa);
console.log(pessoa2);
console.log(pessoa3);
