let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald.'
};

//console.log('Bem vinda, ' + info.personagem + '!');
//
info['recorrente'] = 'sim';
//Ou info.recorrente = 'sim';
//
//console.log(info);
//
//for(item in info){
//  console.log(item);
//};
//
//for(item in info){
//  console.log(info[item]);
//};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'sim'
};

for (let properties in info) {
  if (
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}