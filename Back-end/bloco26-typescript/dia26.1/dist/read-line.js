"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const utils_1 = __importDefault(require("./utils"));
const lengthUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const exec = () => {
    const value = readline_sync_1.default.questionFloat('Digite o valor ser convertido: \n');
    const base = readline_sync_1.default
        .keyInSelect(lengthUnits, 'Escolha um número para a base:', { cancel: 'SAIR' });
    if (base === -1)
        return console.log('Saindo...');
    const target = readline_sync_1.default
        .keyInSelect(lengthUnits, 'Escolha um número para a conversão:', { cancel: 'SAIR' });
    if (target === -1)
        return console.log('Saindo...');
    const unitOne = lengthUnits[base];
    const unitTwo = lengthUnits[target];
    const result = utils_1.default.convert(lengthUnits, value, unitOne, unitTwo);
    const message = `${value}${lengthUnits[base]} é igual a ${result}${lengthUnits[target]}`;
    console.log(message);
};
exec();
