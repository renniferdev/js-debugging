function calcularValorHora(valorMensal, horasMensais) {
  return (valorMensal / horasMensais).toFixed(2);
}

const valorHora = calcularValorHora(1900, 176);
console.log(`O valor por hora é R$ ${valorHora}`);
