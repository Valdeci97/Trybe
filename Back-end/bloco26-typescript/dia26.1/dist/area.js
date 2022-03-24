"use strict";
const areaUnits = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
const raiseAreaError = (unit) => {
    throw new Error(`A unidade ${unit} não é válida`);
};
const AreaConvert = (value, base, target) => {
    if (!areaUnits.includes(base))
        raiseAreaError(base);
    if (!areaUnits.includes(target))
        raiseAreaError(target);
    const baseIndex = areaUnits.indexOf(base);
    const targetIndex = areaUnits.indexOf(target);
    const exp = (targetIndex - baseIndex);
    return value * 10 ** (exp * 2);
};
console.log(AreaConvert(1, 'm²', 'km²'));
