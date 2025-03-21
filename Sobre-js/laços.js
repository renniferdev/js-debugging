let users = [
  { name: "Victor", year: 2022 },
  { name: "Paulo", year: 2008 },
  { name: "Pereira", year: 2012 },
  { name: "Rui", year: 2013 },
];
//Para CADAA user no ARRAY users, execute esta função"
users.forEach((user) => {
  user.year = 2025;
});

console.log(users);

//nos temos tambem o FILTER, FOREACH, MAP, REDUCE, FIND
//dica pare de usar for ou use outros laços de repetição ou use os metodos de array do JS
