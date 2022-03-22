const areaUnits: string[] = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

const raiseAreaError = (unit: string) => {
  throw new Error(`A unidade ${unit} não é válida`);
};

const massConvert = (value: number, base: string, target: string): number => {
  if (!areaUnits.includes(base)) raiseAreaError(base);
  if (!areaUnits.includes(target)) raiseAreaError(target);

  const baseIndex = areaUnits.indexOf(base);
  const targetIndex = areaUnits.indexOf(target);
  const exp = (targetIndex - baseIndex);

  return value * 10 ** (exp * 2);
}

console.log(massConvert(1, 'm²', 'km²'));