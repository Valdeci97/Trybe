"use strict";
const lengthUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function raiseLengthError(unit) {
    throw new Error(`A unidade ${unit} não é válida.`);
}
function convert(value, fromUnit, toUnit) {
    if (!lengthUnits.includes(fromUnit))
        raiseLengthError(fromUnit);
    if (!lengthUnits.includes(toUnit))
        raiseLengthError(toUnit);
    const fromIndex = lengthUnits.indexOf(fromUnit);
    const toIndex = lengthUnits.indexOf(toUnit);
    const exp = (toIndex - fromIndex);
    return value * 10 ** exp;
}
console.log(convert(15, 'km', 'm'));
