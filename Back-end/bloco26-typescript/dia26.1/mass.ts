const massUnits: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

const raiseMassError = (unit: string) => {
  throw new Error(`A unidade ${unit} não é válida`);
};

const massConvert = (value: number, base: string, target: string): number => {
  if (!massUnits.includes(base)) raiseMassError(base);
  if (!massUnits.includes(target)) raiseMassError(target);

  const baseIndex = massUnits.indexOf(base);
  const targetIndex = massUnits.indexOf(target);
  const exp = targetIndex - baseIndex;

  return value * 10 ** exp;
}

console.log(massConvert(2000, 'mg', 'g'));
