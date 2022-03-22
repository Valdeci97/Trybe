import readline from 'readline-sync';
import utils from './utils';

const lengthUnits: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const exec = () => {
  const value = readline.questionFloat('Digite o valor ser convertido: \n');
  const base = readline
    .keyInSelect(lengthUnits, 'Escolha um número para a base:', { cancel: 'SAIR' });

  if (base === -1) return console.log('Saindo...');

  const target = readline
    .keyInSelect(lengthUnits, 'Escolha um número para a conversão:', { cancel: 'SAIR' });
  
  if (target === -1) return console.log('Saindo...');

  const unitOne = lengthUnits[base];
  const unitTwo = lengthUnits[target];
  const result = utils.convert(lengthUnits, value, unitOne, unitTwo);

  const message = `${value}${lengthUnits[base]} é igual a ${result}${lengthUnits[target]}`;
  console.log(message);
};

exec();
