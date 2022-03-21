const lengthUnits: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function raiseLengthError(unit: string) {
  throw new Error(`A unidade ${unit} não é válida.`);
}

function convert(value: number, fromUnit: string, toUnit: string): number {
  if (!lengthUnits.includes(fromUnit)) raiseLengthError(fromUnit);
  if (!lengthUnits.includes(toUnit)) raiseLengthError(toUnit);

  const fromIndex = lengthUnits.indexOf(fromUnit);
  const toIndex = lengthUnits.indexOf(toUnit);
  const exp = (toIndex - fromIndex);
  return value * 10 ** exp;
}

console.log(convert(15, 'km', 'm'));
