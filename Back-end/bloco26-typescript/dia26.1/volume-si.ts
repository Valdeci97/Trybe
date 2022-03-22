const volumeSiUnits: string[] = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

const raiseSiError = (unit: string) => `A unidade ${unit} não é válida`;

const siConvert = (value: number, base: string, target: string) => {
  if (!volumeSiUnits.includes(base)) raiseSiError(base);
  if (!volumeSiUnits.includes(target)) raiseSiError(target);

  const baseIndex = volumeSiUnits.indexOf(base);
  const targetIndex = volumeSiUnits.indexOf(target);
  const exp = targetIndex - baseIndex;

  return value * 10 ** (exp * 3);
};

console.log(siConvert(1000, 'm³', 'dam³'));
