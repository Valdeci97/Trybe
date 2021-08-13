const a = 'torre';

function piecesOfChess(a) {
  switch (a) {
    case 'rei':
      return 'Move-se uma casa em qualquer direção. (vertical, horizontal, inclinada)';
    case 'REI':
      return 'Move-se uma casa em qualquer direção. (vertical, horizontal, inclinada)';
    case 'dama':
      return 'Move-se quantas casas quiser em qualquer direção. (vertical, horizontal, inclinada)';
    case 'DAMA':
      return 'Move-se quantas casas quiser em qualquer direção. (vertical, horizontal, inclinada)';
    case 'cavalo':
      return 'Move-se em formato de L ou duas casa para frente e uma para o lado; tendo o "super poder" de pular peças à sua frente.';
    case 'CAVALO':
      return 'Move-se em formato de L ou duas casa para frente e uma para o lado; tendo o "super poder" de pular peças à sua frente.';
    case 'bispo':
      return 'Move-se quantas casa quiser na direção inclinada/diagonal.';
    case 'BISPO':
      return 'Move-se quantas casa quiser na direção inclinada/diagonal.';
    case 'torre':
      return 'Move-se quantas casa quiser na direção vertical ou horizontal.';
    case 'TORRE':
      return 'Move-se quantas casa quiser na direção vertical ou horizontal.';
    case 'peão':
      return 'Move-se uma casa na vertical, exceto quando em sua casa inicial que tem a opção de andar duas casas em seu primeiro movimento.';
    case 'PEÃO':
      return 'Move-se uma casa na vertical, exceto quando em sua casa inicial que tem a opção de andar duas casas em seu primeiro movimento.';
    case 'peao':
      return 'Move-se uma casa na vertical, exceto quando em sua casa inicial que tem a opção de andar duas casas em seu primeiro movimento.';
    case 'PEAO':
      return 'Move-se uma casa na vertical, exceto quando em sua casa inicial que tem a opção de andar duas casas em seu primeiro movimento.';
  }
}

console.log(piecesOfChess(a));