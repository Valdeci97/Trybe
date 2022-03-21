const volumeUnits: string[] = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

const raiseVolumeError = (unit: string) => {
  throw new Error(`A unidade ${unit} não é válida`);
};

const volumeConvert = (value: number, base: string, target: string): number => {
if (!volumeUnits.includes(base)) raiseVolumeError(base);
  if (!volumeUnits.includes(target)) raiseVolumeError(target);

  const baseIndex = volumeUnits.indexOf(base);
  const targetIndex = volumeUnits.indexOf(target);
  const exp = targetIndex - baseIndex;

  return value * 10 ** exp;
}

console.log(volumeConvert(2000, 'ml', 'l'));