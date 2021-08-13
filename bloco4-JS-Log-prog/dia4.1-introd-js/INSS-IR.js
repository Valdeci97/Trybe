const a = 6000;

function deducaoSalario(a) {
  let inss = 0;
  let impostoRenda = 0;
  let parcela = 0;
  let salarioLiquido = 0;
  if (a < 1100) {
    return 'erro! \nSalário informado é menor que o mínimo previsto em lei.';
  }
  else if (a <= 1556.94) {
    inss = a * 0.08;
    salarioLiquido = a - inss;
    return 'Seu salário líquido é de R$' + salarioLiquido.toFixed(2) + '\nDesconto do INSS de R$' + inss.toFixed(2);
  } else if (a > 1556.94 && a <= 1903.98) {
    inss = a * 0.09;
    salarioLiquido = a - inss;
    return 'Seu salário líquido é de R$' + salarioLiquido.toFixed(2) + '\nDesconto do INSS de R$' + inss.toFixed(2);
  } else if (a > 1903.98 && a <= 2594.92) {
    inss = a * 0.09;
    impostoRenda = a * 0.075;
    parcela = 142.80;
    salarioLiquido = a - (inss + parcela + impostoRenda);
    return 'Seu salário líquido é de R$' + salarioLiquido.toFixed(2) + '\nDesconto do INSS de R$' + inss.toFixed(2) + '\nImposto retido na fonte R$' + impostoRenda.toFixed(2) + '\nParcela IR a deduzir R$' + parcela;
  } else if (a > 2594.92 && a <= 2826.65) {
    inss = a * 0.11;
    impostoRenda = a * 0.075;
    parcela = 142.80;
    salarioLiquido = a - (inss + parcela + impostoRenda);
    return 'Seu salário líquido é de R$' + salarioLiquido.toFixed(2) + '\nDesconto do INSS de R$' + inss.toFixed(2) + '\nImposto retido na fonte R$' + impostoRenda.toFixed(2) + '\nParcela IR a deduzir R$' + parcela;
  } else if (a > 2826.65 && a <= 3751.05) {
    inss = a * 0.11;
    impostoRenda = a * 0.15;
    parcela = 354.80;
    salarioLiquido = a - (inss + parcela + impostoRenda);
    return 'Seu salário líquido é de R$' + salarioLiquido.toFixed(2) + '\nDesconto do INSS de R$' + inss.toFixed(2) + '\nImposto retido na fonte R$' + impostoRenda.toFixed(2) + '\nParcela IR a deduzir R$' + parcela;
  } else if (a > 3751.05 && a <= 4664.68) {
    inss = a * 0.11;
    impostoRenda = a * 0.225;
    parcela = 636.13;
    salarioLiquido = a - (inss + parcela + impostoRenda);
    return 'Seu salário líquido é de R$' + salarioLiquido.toFixed(2) + '\nDesconto do INSS de R$' + inss.toFixed(2) + '\nImposto retido na fonte R$' + impostoRenda.toFixed(2) + '\nParcela IR a deduzir R$' + parcela;
  } else if (a > 4664.68 && a <= 5182.82) {
    inss = a * 0.11;
    impostoRenda = a * 0.275;
    parcela = 869.36;
    salarioLiquido = a - (inss + parcela + impostoRenda);
    return 'Seu salário líquido é de R$' + salarioLiquido.toFixed(2) + '\nDesconto do INSS de R$' + inss.toFixed(2) + '\nImposto retido na fonte R$' + impostoRenda.toFixed(2) + '\nParcela IR a deduzir R$' + parcela;
  } else {
    inss = 570.88;
    impostoRenda = a * 0.275;
    parcela = 869.36;
    salarioLiquido = a - (inss + parcela + impostoRenda);
    return 'Seu salário líquido é de R$' + salarioLiquido.toFixed(2) + '\nDesconto do INSS de R$' + inss.toFixed(2) + '\nImposto retido na fonte R$' + impostoRenda.toFixed(2) + '\nParcela IR a deduzir R$' + parcela;
  }
}

console.log(deducaoSalario(a));