let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald.'
};

console.log('Bem vinda, ' + info.personagem + '!');

  info['recorrente'] = 'sim';
//Ou info.recorrente = 'sim';

console.log(info);

for(item in info){
  console.log(item);
};

for(item in info){
  console.log(info[item]);
};